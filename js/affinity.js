/* ============================
   好感度シナリオ：夏祭りデート
   ============================ */

window.startAffinity = function(engine) {
  engine.affinityScore = 0;
  engine.showAffinity();
  engine.updateAffinity();

  const dateScenario = [
    // 場面①：駅で待ち合わせ
    { label: 'date_start', type: 'bg', file: 'ekimae_hiru.jpg' },
    { type: 'bgm', file: 'nakaniwa.ogg' },
    { type: 'chara', file: '02_yorokobu.png', pos: 'left' },
    { type: 'chara', file: 'kodama.png', pos: 'right' },
    { type: 'text', name: 'おおはし', text: '今日は楽しみにしていたデート！張り切って早めに着いちゃった。' },
    { type: 'text', name: 'おおはし', text: '（デートの勝負は待ち合わせから始まってる。最高のデートの滑り出しに大切なことは・・・）' },
    { type: 'choice', choices: [
      { text: '①見つけた瞬間の笑顔', affinity: 25, jump: 'date1_r1' },
      { text: '②唇を結んではにかむ', affinity: 20, jump: 'date1_r2' },
      { text: '③近くに来てから名前を呼ぶ', affinity: 10, jump: 'date1_r3' },
      { text: '④ん・・・。（と言って手を差し出す）', affinity: 15, jump: 'date1_r4' },
    ]},

    { label: 'date1_r1', type: 'text', name: '児玉', text: '素敵な笑顔だね' },
    { type: 'jump', target: 'date_scene2' },
    { label: 'date1_r2', type: 'text', name: '児玉', text: '女の子っぽくて可愛いよ' },
    { type: 'jump', target: 'date_scene2' },
    { label: 'date1_r3', type: 'text', name: '児玉', text: '距離が近くてドキっとするね' },
    { type: 'jump', target: 'date_scene2' },
    { label: 'date1_r4', type: 'text', name: '児玉', text: '意外と積極的なところあるんだね' },
    { type: 'jump', target: 'date_scene2' },

    // 場面②：屋台で食べ歩き
    { label: 'date_scene2', type: 'bg', file: 'yatai.jpg' },
    { type: 'text', name: '児玉', text: 'お腹すいた？もう少し時間あるし、屋台みようか？' },
    { type: 'text', name: 'おおはし', text: 'うん！みよみよー♪' },
    { type: 'text', name: 'おおはし', text: '（屋台デートで好感度を上げるために大切なことは・・・）' },
    { type: 'choice', choices: [
      { text: '①りんご飴で唇をかわいくする', affinity: 10, jump: 'date2_r1' },
      { text: '②ラムネを飲むときに、さり気なくうなじアピール', affinity: 15, jump: 'date2_r2' },
      { text: '③携帯ウェットティッシュを持参する', affinity: 25, jump: 'date2_r3' },
      { text: '④とにかく楽しむ！！！', affinity: 20, jump: 'date2_r4' },
    ]},

    { label: 'date2_r1', type: 'text', name: '児玉', text: 'お茶目で可愛いね' },
    { type: 'jump', target: 'date_scene3' },
    { label: 'date2_r2', type: 'text', name: '児玉', text: '（あざとカワイイ・・・）' },
    { type: 'jump', target: 'date_scene3' },
    { label: 'date2_r3', type: 'text', name: '児玉', text: '気が利くね、ありがと' },
    { type: 'jump', target: 'date_scene3' },
    { label: 'date2_r4', type: 'text', name: '児玉', text: '楽しむのが一番だよね！' },
    { type: 'jump', target: 'date_scene3' },

    // 場面③：花火が始まるまでフリートーク
    { label: 'date_scene3', type: 'bg', file: 'yozora.jpg' },
    { type: 'text', name: 'おおはし', text: 'もう少しで花火はじまりそうだねー' },
    { type: 'text', name: '児玉', text: 'そうだね、楽しみ。ちなみに、おおはしさんって普段休みの日とか何してるの？' },
    { type: 'text', name: 'おおはし', text: '（好感度の高いステキ女子の休日は・・・）' },
    { type: 'choice', choices: [
      { text: '①喝下午茶（訳：アフタヌーンティーを飲む）', affinity: 20, jump: 'date3_r1' },
      { text: '②去健身房（訳：ジムに行く）', affinity: 25, jump: 'date3_r2' },
      { text: '③在沙龙擦亮自己（訳：サロンで自分磨き）', affinity: 15, jump: 'date3_r3' },
      { text: '④打美针灸（訳：美容鍼を打つ）', affinity: 10, jump: 'date3_r4' },
    ]},

    { label: 'date3_r1', type: 'text', name: '児玉', text: '優雅な時間が過ごせていいよね' },
    { type: 'jump', target: 'date_scene4' },
    { label: 'date3_r2', type: 'text', name: '児玉', text: 'スポーティーな女の子好きだな' },
    { type: 'jump', target: 'date_scene4' },
    { label: 'date3_r3', type: 'text', name: '児玉', text: '美意識が高い子って素敵よね' },
    { type: 'jump', target: 'date_scene4' },
    { label: 'date3_r4', type: 'text', name: '児玉', text: '今度おれもやってみようかな' },
    { type: 'jump', target: 'date_scene4' },

    // 場面④：花火スタート（全て減点）
    { label: 'date_scene4', type: 'bg', file: 'hanabi.jpg' },
    { type: 'text', name: '児玉', text: '花火きれいだねー' },
    { type: 'text', name: 'おおはし', text: 'うん、ほんと最高。' },
    { type: 'text', name: 'おおはし', text: '（こんなときに、隣のイケメンにかけられて嬉しい言葉は・・・）' },
    { type: 'choice', choices: [
      { text: '①君が好きだ', affinity: -20, jump: 'date4_voice1' },
      { text: '②君の笑顔が好きだ', affinity: -25, jump: 'date4_voice2' },
      { text: '③今日は帰さない', affinity: -25, jump: 'date4_voice3' },
      { text: '④Je t\'aime plus que quiconque sur terre\n（訳：地球上の誰よりも愛してる）', affinity: -30, jump: 'date4_voice4' },
    ]},

    { label: 'date4_voice1', type: 'voice', file: '01_君が好きだa.ogg', wait: true },
    { type: 'jump', target: 'date_scene5' },
    { label: 'date4_voice2', type: 'voice', file: '02_君の笑顔が好きだ.ogg', wait: true },
    { type: 'jump', target: 'date_scene5' },
    { label: 'date4_voice3', type: 'voice', file: '03_今日は帰さない.ogg', wait: true },
    { type: 'jump', target: 'date_scene5' },
    { label: 'date4_voice4', type: 'voice', file: '04_フランス語.ogg', wait: true },
    { type: 'jump', target: 'date_scene5' },

    // 場面⑤：駅までの帰り道
    { label: 'date_scene5', type: 'bg', file: 'ekimae_yoru.jpg' },
    { type: 'text', name: 'おおはし', text: '花火大会、ほんと楽しかったねー！一緒に行ってくれてありがとう！' },
    { type: 'text', name: '児玉', text: '俺の方こそ、誘ってくれてありがとうね。楽しかったよ' },
    { type: 'text', name: 'おおはし', text: '楽しい時間って、ほんとあっという間だよね。もうすぐ駅だもん' },
    { type: 'text', name: 'おおはし', text: '（デート終盤の印象的な一言は・・・）' },
    { type: 'choice', choices: [
      { text: '①少し冷えてきたね', affinity: 5, jump: 'date5_r1' },
      { text: '②回り道して帰ろ？', affinity: 5, jump: 'date5_r2' },
      { text: '③無言で小指同士を軽く触れる', affinity: 5, jump: 'date5_r3' },
      { text: '④月が綺麗ですね', affinity: 80, jump: 'date5_r4' },
    ]},

    { label: 'date5_r1', type: 'text', name: '児玉', text: '良かったら俺のジャケット羽織る？' },
    { type: 'jump', target: 'date_result' },
    { label: 'date5_r2', type: 'text', name: '児玉', text: '少しでも長く一緒にいたいな' },
    { type: 'jump', target: 'date_result' },
    { label: 'date5_r3', type: 'text', name: '児玉', text: '奥ゆかしい積極性が嬉しい' },
    { type: 'jump', target: 'date_result' },
    { label: 'date5_r4', type: 'text', name: '児玉', text: '月はずっときれいでした' },
    { type: 'jump', target: 'date_result' },

    // 結果判定
    { label: 'date_result', type: 'if',
      condition: (vars, affinity) => affinity >= 80,
      jump: 'date_good',
      elseJump: 'date_bad'
    },

    // Good End
    { label: 'date_good', type: 'text', name: '児玉', text: '今日は本当に楽しかった。ありがとう。よかったらまた、俺と出かけてくれるかな？' },
    { type: 'item', file: 'memory2.png' },
    { type: 'wait', duration: 2500 },
    { type: 'item_hide' },
    { type: 'jump', target: 'date_end' },

    // Bad End
    { label: 'date_bad', type: 'text', name: '児玉', text: '・・・' },
    { type: 'text', name: '児玉', text: '今日はありがとう。また学校で。気をつけて帰ってね。' },
    { type: 'item', file: 'shuzo.jpg', style: { maxWidth: '50%', maxHeight: '50%' } },
    { type: 'wait', duration: 1500 },
    { type: 'item_hide' },
    { type: 'jump', target: 'date_rating' },

    // 女子力診断
    { label: 'date_rating', type: 'call', fn: (eng) => {
      const score = eng.affinityScore;
      let title = '';
      if (score <= 20) title = '男子並み';
      else if (score <= 40) title = '見習い女子';
      else if (score <= 60) title = '初級女子';
      else title = 'あと一歩女子';

      // 語り部の台詞を差し込む
      eng.overlay.classList.remove('hidden');
      eng.overlay.style.background = 'rgba(0,0,0,0.7)';
      eng.charaCenter.src = 'assets/chara/F.png';
      eng.charaCenter.classList.remove('hidden');
      eng.messageWindow.classList.remove('hidden');
      eng.nameBox.textContent = '語り部';
      eng.messageText.textContent = `女子力診断の結果を発表するぞ。\nお主の女子力は「${score}点、${title}」じゃ。`;
      eng.nextIndicator.style.visibility = 'visible';
      eng.waitingForClick = true;

      const origClick = eng._onClick.bind(eng);
      const handler = () => {
        eng.overlay.classList.add('hidden');
        eng.charaCenter.classList.add('hidden');
        // コンティニュー選択肢
        eng.choiceLayer.classList.remove('hidden');
        eng.choiceLayer.innerHTML = '';

        const btn1 = document.createElement('button');
        btn1.className = 'choice-btn';
        btn1.textContent = 'デートをやり直す';
        btn1.addEventListener('click', (e) => {
          e.stopPropagation();
          eng.choiceLayer.classList.add('hidden');
          eng.affinityScore = 0;
          eng.updateAffinity();
          eng.loadScenario(dateScenario);
          eng.start();
        });

        const btn2 = document.createElement('button');
        btn2.className = 'choice-btn';
        btn2.textContent = '次に進む';
        btn2.addEventListener('click', (e) => {
          e.stopPropagation();
          eng.choiceLayer.classList.add('hidden');
          eng.hideAffinity();
          eng.bgmAudio.pause();
          // メインシナリオに戻る
          eng.loadScenario(SCENARIO);
          eng.jumpTo('act3');
        });

        eng.choiceLayer.appendChild(btn1);
        eng.choiceLayer.appendChild(btn2);
      };

      // 一度だけクリック待ち
      const waitHandler = (e) => {
        if (e.target.closest('.choice-btn')) return;
        document.getElementById('game-container').removeEventListener('click', waitHandler);
        eng.waitingForClick = false;
        handler();
      };
      document.getElementById('game-container').addEventListener('click', waitHandler);
    }, async: true },

    // Good End → 次へ
    { label: 'date_end', type: 'call', fn: (eng) => {
      eng.hideAffinity();
      eng.bgmAudio.pause();
      eng.charaLeft.classList.add('hidden');
      eng.charaRight.classList.add('hidden');
      eng.charaCenter.classList.add('hidden');
      eng.loadScenario(SCENARIO);
      eng.jumpTo('act3');
    }, async: true },
  ];

  engine.loadScenario(dateScenario);
  engine.start();
};
