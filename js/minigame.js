/* ============================
   ミニゲーム：めぐちゃんの保健室
   ～消えた白衣の天使と大人の秘め事～
   ============================ */

window.startMinigame = function(engine, onCompleteLabel) {
  const layer = document.getElementById('minigame-layer');
  layer.classList.remove('hidden');

  // ミニゲーム状態
  const state = {
    phase: 0,         // 0:導入, 1:保健室, 2:図書館, 3:屋上, 4:地下室
    letterRead: false,
    yankyTalked: false,
    libraryVisited: false,
    rooftopVisited: false,
    bookFound: false,
    wakaFound: false,
    passwordCorrect: false,
    fusenSeen: false,
  };

  const bgm = new Audio('assets/bgm/nazotoki.ogg');
  bgm.loop = true;
  bgm.volume = 0.4;

  // 導入ナレーション
  showNarration([
    'ここは、めぐみ先生の保健室。',
    '普段は多くの生徒が相談に訪れ、活気に満ちているが、今日はどうやら様子が違うようだ。',
    '消えためぐみ先生を探し出し、保健室に平和を取り戻して欲しい。',
  ], () => {
    bgm.play().catch(() => {});
    showRoom('hokenshitsu');
  });

  function showNarration(lines, callback) {
    layer.innerHTML = '';
    const div = document.createElement('div');
    div.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:20px;';
    const textDiv = document.createElement('div');
    textDiv.style.cssText = 'color:#fff;font-size:18px;line-height:2;text-align:center;max-width:600px;';
    textDiv.textContent = lines.join('\n');
    div.appendChild(textDiv);

    const clickHint = document.createElement('p');
    clickHint.style.cssText = 'color:rgba(255,255,255,0.5);font-size:14px;margin-top:24px;';
    clickHint.textContent = '（クリックで続く）';
    textDiv.appendChild(clickHint);

    div.addEventListener('click', () => { callback(); });
    layer.appendChild(div);
  }

  function showRoom(room) {
    layer.innerHTML = '';

    const bgMap = {
      hokenshitsu: 'assets/bg/hokenshitsu.png',
      tosyokan: 'assets/bg/tosyokan.png',
      okujo: 'assets/bg/okujo.png',
      chika: 'assets/bg/chika.png',
    };

    // 背景
    const bgImg = document.createElement('img');
    bgImg.src = bgMap[room];
    bgImg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;';
    layer.appendChild(bgImg);

    // クリッカブルアイテム配置
    if (room === 'hokenshitsu') setupHokenshitsu();
    else if (room === 'tosyokan') setupTosyokan();
    else if (room === 'okujo') setupOkujo();
    else if (room === 'chika') setupChika();
  }

  function addClickArea(x, y, w, h, label, onClick) {
    const area = document.createElement('div');
    area.className = 'mg-clickable';
    area.style.cssText = `left:${x}%;top:${y}%;width:${w}%;height:${h}%;position:absolute;`;

    const labelEl = document.createElement('span');
    labelEl.style.cssText = 'position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);color:#fff;font-size:12px;background:rgba(0,0,0,0.6);padding:2px 8px;border-radius:3px;white-space:nowrap;opacity:0;transition:opacity 0.2s;';
    labelEl.textContent = label;
    area.appendChild(labelEl);

    area.addEventListener('mouseenter', () => { labelEl.style.opacity = '1'; });
    area.addEventListener('mouseleave', () => { labelEl.style.opacity = '0'; });
    area.addEventListener('click', onClick);
    layer.appendChild(area);
  }

  function showDialog(text, callback) {
    const dialog = document.createElement('div');
    dialog.style.cssText = 'position:absolute;bottom:5%;left:3%;right:3%;background:linear-gradient(135deg,rgba(50,60,80,0.92),rgba(70,85,110,0.92));border:1px solid rgba(140,170,220,0.4);border-radius:4px;padding:16px 20px;color:#fff;font-size:16px;line-height:1.7;cursor:pointer;z-index:10;white-space:pre-wrap;';
    dialog.textContent = text;
    dialog.addEventListener('click', (e) => {
      e.stopPropagation();
      dialog.remove();
      if (callback) callback();
    });
    layer.appendChild(dialog);
  }

  function setupHokenshitsu() {
    // 手紙
    addClickArea(15, 35, 12, 15, '手紙', () => {
      state.letterRead = true;
      showDialog('手紙だ。\nめぐみ先生のキレイな字で「探さないで下さい」と書いてある。');
    });

    // 花瓶
    addClickArea(35, 30, 10, 15, '花', () => {
      showDialog('花だ。\n「松本より愛を込めて」と書いてある。\n大人の事情には深入りしないほうが良さそうだ・・・');
    });

    // ヤンキー（ベッドにいる生徒）
    addClickArea(60, 25, 15, 35, 'ベッドの生徒', () => {
      if (!state.yankyTalked) {
        state.yankyTalked = true;
        showDialog('ヤンキーだ。\nめぐみ先生は「図書館に調べものにいく」と言ってたよ。');
      } else {
        showDialog('ヤンキーだ。\nめぐみ先生は「図書館に調べものにいく」と言ってたよ。');
      }
    });

    // 棚（パスワード入力）
    addClickArea(80, 20, 15, 30, '棚', () => {
      if (state.passwordCorrect) {
        showDialog('もう開錠済みだ。');
        return;
      }
      let msg = '棚だ。\nあ、ロックらしきものがある。';
      if (state.fusenSeen) {
        msg += '\n側に付箋が貼ってあるのを見つけた。\nだが、滲んでいてよく読めない。';
      }
      showDialog(msg, () => {
        showPasswordInput();
      });
    });

    // 地下階段（パスワード正解後のみ）
    if (state.passwordCorrect) {
      addClickArea(45, 60, 15, 25, '地下への階段', () => {
        showRoom('chika');
      });
    }

    // ドア（移動）
    addClickArea(2, 20, 10, 50, 'ドア', () => {
      if (!state.yankyTalked) {
        showDialog('ドアだ。\n保健室の外に出られる。\nだが、もう少し保健室を調べよう。');
        return;
      }
      showMoveMenu('hokenshitsu');
    });

    // 付箋表示（屋上訪問後＋パスワード未入力時のみ棚付近に表示）
    if (state.wakaFound && !state.passwordCorrect) {
      state.fusenSeen = true;
      const fusen = document.createElement('img');
      fusen.src = 'assets/items/fusen.png';
      fusen.style.cssText = 'position:absolute;left:82%;top:15%;width:8%;pointer-events:none;z-index:5;';
      layer.appendChild(fusen);
    }
  }

  function setupTosyokan() {
    state.libraryVisited = true;

    // 机
    addClickArea(20, 50, 15, 20, '机', () => {
      showDialog('机だ。\n相合い傘の落書きでR.K♡A.Oと書いてある。\n誰だろう？');
    });

    // 椅子
    addClickArea(40, 50, 12, 20, '椅子', () => {
      showDialog('椅子だ。\n座り心地の良さそうな椅子だ。');
    });

    // 本棚1（青鬼トラップ）
    addClickArea(65, 10, 15, 40, '本棚', () => {
      // 青鬼出現
      const aooni = document.createElement('div');
      aooni.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:20;';
      const img = document.createElement('img');
      img.src = 'assets/chara/aooni.png';
      img.style.cssText = 'max-width:60%;max-height:70%;';
      aooni.appendChild(img);

      const seBang = new Audio('assets/bgm/aooni.ogg');
      seBang.volume = 0.8;
      seBang.play().catch(() => {});

      layer.appendChild(aooni);
      setTimeout(() => {
        aooni.remove();
        // Game Over
        bgm.pause();
        layer.classList.add('hidden');
        engine.bgImage.src = 'assets/bg/tosyokan.png';
        engine.gameover_minigame = true;
        engine._cmdGameOver({});
      }, 2000);
    });

    // 古典の本棚
    addClickArea(82, 10, 15, 40, '古典の本棚', () => {
      state.bookFound = true;
      showDialog('古典の本棚だ。\nあれ？玉葉和歌集だけ抜けている。\n誰かが借りていったのだろうか。');
    });

    // 移動
    addClickArea(2, 20, 10, 50, '出口', () => {
      showMoveMenu('tosyokan');
    });
  }

  function setupOkujo() {
    state.rooftopVisited = true;

    // 和歌集
    addClickArea(30, 30, 20, 30, '玉葉和歌集', () => {
      state.wakaFound = true;
      showDialog('図書館の本棚に無かった玉葉和歌集だ。\nしおりのところを開くと、1467番の歌が書かれている。\n\nつれづれと　空ぞ見らるる　思ふ人\n天降り来む　ものならなくに\n\nロマンチックな歌だ。\nめぐみ先生もロマンチックな歌が好きなのだろうか。');
    });

    // 移動
    addClickArea(2, 20, 10, 50, '出口', () => {
      showMoveMenu('okujo');
    });
  }

  function setupChika() {
    // めぐちゃん
    addClickArea(50, 20, 25, 50, 'めぐみ先生', () => {
      showNarration([
        'めぐみ先生：心配かけてごめんね、仕事中にお菓子がどうしても食べたくて、でもみんなの前では食べられないから、だから秘密の地下室を作ったの。このことは校長先生には秘密よ。',
        '',
        'あなた：わかった！めぐみ先生が見つかって安心したよ',
      ], () => {
        // めぐみ先生と和歌の会話
        showNarration([
          'めぐみ先生：あら、そういえばあなた、屋上で和歌集を見つけたの？',
          'めぐみ先生：実はあの歌、私が一番好きな歌なの。こんな恋愛に憧れてるの。',
          'めぐみ先生：あ、この部屋のことは秘密よ？',
        ], () => {
          showNarration([
            'こうして、めぐみ先生は無事見つかり、保健室には再び平和が戻りました。めでたしめでたし',
          ], () => {
            // ミニゲーム終了
            bgm.pause();
            layer.classList.add('hidden');
            layer.innerHTML = '';
            if (onCompleteLabel) {
              engine.jumpTo(onCompleteLabel);
            } else {
              engine.next();
            }
          });
        });
      });
    });

    // 出口
    addClickArea(2, 20, 10, 50, '出口', () => {
      const choices = document.createElement('div');
      choices.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:10;';

      const btn1 = document.createElement('button');
      btn1.className = 'choice-btn';
      btn1.textContent = '保健室に戻る';
      btn1.addEventListener('click', (e) => { e.stopPropagation(); showRoom('hokenshitsu'); });

      const btn2 = document.createElement('button');
      btn2.className = 'choice-btn';
      btn2.textContent = '地下室に戻る';
      btn2.addEventListener('click', (e) => { e.stopPropagation(); choices.remove(); });

      choices.appendChild(btn1);
      choices.appendChild(btn2);
      layer.appendChild(choices);
    });
  }

  function showMoveMenu(currentRoom) {
    const choices = document.createElement('div');
    choices.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:10;';

    const destinations = [];
    if (currentRoom !== 'hokenshitsu') destinations.push({ text: '保健室', room: 'hokenshitsu' });
    if (currentRoom !== 'tosyokan') destinations.push({ text: '図書館', room: 'tosyokan' });
    if (state.libraryVisited && state.bookFound && currentRoom !== 'okujo') destinations.push({ text: '屋上', room: 'okujo' });

    destinations.push({ text: '戻る', room: null });

    destinations.forEach(d => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = d.text;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (d.room) {
          if (d.room === 'hokenshitsu' && (state.rooftopVisited || state.libraryVisited)) {
            if (!state._firstReturn) {
              state._firstReturn = true;
              showDialog('行けるところが増えたようだ。', () => { showRoom(d.room); });
              choices.remove();
              return;
            }
          }
          showRoom(d.room);
        } else {
          choices.remove();
        }
      });
      choices.appendChild(btn);
    });

    layer.appendChild(choices);
  }

  function showPasswordInput() {
    const div = document.createElement('div');
    div.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:10;';

    const box = document.createElement('div');
    box.style.cssText = 'background:linear-gradient(135deg,rgba(40,55,80,0.95),rgba(60,80,120,0.95));border:1px solid rgba(100,150,220,0.5);border-radius:8px;padding:24px;text-align:center;';

    const prompt = document.createElement('p');
    prompt.style.cssText = 'color:#fff;font-size:16px;margin-bottom:16px;';
    prompt.textContent = 'パスワードを入力してください';

    const input = document.createElement('input');
    input.type = 'text';
    input.style.cssText = 'width:200px;padding:8px;font-size:16px;border:1px solid rgba(100,150,220,0.5);border-radius:4px;background:rgba(255,255,255,0.9);outline:none;';
    input.autocomplete = 'off';

    const okBtn = document.createElement('button');
    okBtn.style.cssText = 'margin-left:8px;padding:8px 20px;background:linear-gradient(135deg,#4a6fa5,#6a9fd8);border:none;border-radius:4px;color:#fff;font-size:15px;cursor:pointer;';
    okBtn.textContent = 'OK';

    const cancelBtn = document.createElement('button');
    cancelBtn.style.cssText = 'display:block;margin:12px auto 0;padding:6px 16px;background:rgba(100,100,100,0.5);border:1px solid rgba(150,150,150,0.3);border-radius:4px;color:#ccc;font-size:13px;cursor:pointer;';
    cancelBtn.textContent = 'キャンセル';

    const check = () => {
      const val = input.value.trim();
      if (val === '和泉' || val === '和泉式部') {
        state.passwordCorrect = true;
        div.remove();
        const se = new Audio('assets/voice/key.ogg');
        se.play().catch(() => {});
        showDialog('足元で鍵が開く音がした。', () => {
          showRoom('hokenshitsu');
        });
      } else {
        showDialog('パスワードが違うようだ・・・', () => {
          div.remove();
        });
      }
    };

    okBtn.addEventListener('click', (e) => { e.stopPropagation(); check(); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
    cancelBtn.addEventListener('click', (e) => { e.stopPropagation(); div.remove(); });

    box.appendChild(prompt);
    const inputRow = document.createElement('div');
    inputRow.appendChild(input);
    inputRow.appendChild(okBtn);
    box.appendChild(inputRow);
    box.appendChild(cancelBtn);
    div.appendChild(box);
    layer.appendChild(div);

    setTimeout(() => input.focus(), 100);
  }
};
