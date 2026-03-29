/* ============================
   Scenario Data
   ============================ */

const SCENARIO = [

  // ===== 1. スタート =====
  { label: 'start', type: 'bg', file: 'bg_base.png', transition: 'none' },

  // ===== 2. チュートリアル =====
  { label: 'tutorial', type: 'bg', file: 'bg_base.png' },
  { type: 'bgm_stop' },
  { type: 'overlay', color: 'rgba(0,0,0,0.85)' },
  { type: 'chara', file: 'F.png', pos: 'center' },
  { type: 'text', name: '語り部', text: 'ようこそ。おおはしメモリアルの世界へ。わしはこの物語の語り部を務めるFじゃ。' },
  { type: 'text', name: '語り部', text: 'お主には、この世界のマスターになってもらい、各キャラクターの操作をしてもらうぞ。' },
  { type: 'text', name: '語り部', text: 'まずは、手始めにあのコンビで練習じゃ。' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'overlay_hide' },

  // チュートリアル：お花畑
  { type: 'bg', file: 'bg_base.png' },
  { type: 'bgm', file: 'hanabatake.ogg' },
  { type: 'chara', file: 'yanki.png', pos: 'center' },
  { type: 'text', name: 'ヤンキー', text: '今日はいい天気だな～スポーツ日和だぜ' },

  { label: 'tutorial_choice', type: 'choice', choices: [
    { text: '①一緒にバスケしよう', jump: 'tutorial_basket' },
    { text: '②一緒にサッカーしよう', jump: 'tutorial_soccer' },
    { text: '③一緒に野球賭博しよう', jump: 'tutorial_yakyu' },
  ]},

  { label: 'tutorial_basket', type: 'chara', file: 'sugisan.png', pos: 'center' },
  { type: 'text', name: '杉さん', text: 'バスケ嫌い' },
  { type: 'jump', target: 'tutorial_choice' },

  { label: 'tutorial_soccer', type: 'chara', file: 'sugisan.png', pos: 'center' },
  { type: 'text', name: '杉さん', text: 'サッカー嫌い' },
  { type: 'jump', target: 'tutorial_choice' },

  { label: 'tutorial_yakyu', type: 'chara', file: 'sugisan.png', pos: 'center' },
  { type: 'text', name: '杉さん', text: 'いいよ' },
  { type: 'chara_hide_all' },
  { type: 'item', file: 'memory1.png' },
  { type: 'wait', duration: 2000 },
  { type: 'item_hide' },

  { type: 'overlay', color: 'rgba(0,0,0,0.85)' },
  { type: 'chara', file: 'F.png', pos: 'center' },
  { type: 'text', name: '語り部', text: '二人は無事仲良くなったようで良かったの。操作方法は分かったな。' },
  { type: 'text', name: '語り部', text: 'では早速、本編に入っていこうかの。' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'overlay_hide' },
  { type: 'bgm_stop', fadeOut: 1000 },

  // ===== 3. オープニング =====
  { label: 'opening', type: 'bg', file: 'title.jpg' },
  { type: 'msg_hide' },
  { type: 'overlay', color: 'rgba(0,0,0,0.6)' },
  { type: 'text', name: '', text: '旭丘高校3年生のおおはしは、鯱光祭での演劇本番に向け、青春の日々に燃えていた。\n何もかもが順調に思えたあのころ、彼女の手元には1通の手紙。\nシリーズ累計300万DL突破の「おおはしメモリアル」ここに完結ーー' },
  { type: 'overlay_hide' },

  // ===== 4. プロローグ：本番前日 =====
  { label: 'prologue', type: 'bg', file: 'title.jpg' },
  { type: 'item', file: 'prologue_ohashi.png', style: { position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', maxHeight: '50%', maxWidth: '100%', pointerEvents: 'none' } },
  { type: 'wait', duration: 1500 },
  { type: 'item_hide' },
  { type: 'bgm', file: 'yugata.ogg' },
  { type: 'chara', file: '01_hutu.png', pos: 'left' },
  { type: 'chara', file: 'kodama-shadow.png', pos: 'right' },
  { type: 'text', name: 'おおはし', text: 'いよいよ明日はアテルイ本番だね。これまで長かったなー。夕日がキレイ。' },
  { type: 'text', name: '謎のイケメン', text: 'そうだね。ここまであっという間だった。' },
  { type: 'text', name: 'おおはし', text: 'ね。ところで・・・' },

  { label: 'prologue_choice', type: 'choice', choices: [
    { text: '①手つないでもいい？', jump: 'prologue_c1' },
    { text: '②私のこと、どう思ってる？', jump: 'prologue_c2' },
    { text: '③恥ずかしくて何もできない', jump: 'prologue_c3' },
  ]},

  { label: 'prologue_c1', type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：恥ずかしくてそんなこと言える訳ないじゃない！バカ！' },
  { type: 'jump', target: 'prologue_choice' },

  { label: 'prologue_c2', type: 'chara', file: '06_ayasimu.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：本当は知りたい。でも・・・' },
  { type: 'jump', target: 'prologue_choice' },

  { label: 'prologue_c3', type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：彼の方から手を繋ごうと言ってくれないかなあ・・・？\nでも、こうして二人きりで並んで歩けるだけで幸せ。\nそれにしても、色々あったなあ。あっという間の半年だった' },
  { type: 'chara_hide_all' },
  { type: 'bgm_stop', fadeOut: 1500 },
  { type: 'overlay', color: 'rgba(0,0,0,1)' },
  { type: 'wait', duration: 1500 },
  { type: 'overlay_hide' },

  // ===== 5. 第1幕：305始動 =====
  { label: 'act1', type: 'bg', file: 'kyoshitsu_yu.jpg' },
  { type: 'item', file: 'chapter1_kuriki.png' },
  { type: 'wait', duration: 2500 },
  { type: 'item_hide' },
  { type: 'bgm', file: 'kyoshitsu.ogg' },

  // 自己紹介イベント
  { type: 'chara', file: '02_yorokobu.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '今日から新3年生スタート！\n部活に恋に学祭に、高校ラストイヤー充実させる！\nそれにしても、ざっと見た感じ、地味な男子しかおらんけど、ハズレ引いたくさいな・・・' },
  { type: 'text', name: 'おおはし', text: '女子の中では三本の指には入れる感じか。初動大事やな。まずは無難に探ってくか' },
  { type: 'chara_hide', pos: 'left' },

  { type: 'chara', file: 'makoto.png', pos: 'center' },
  { type: 'text', name: '誠先生', text: 'はい、今日から君たちの担任になった、服部誠です。\nこれから1年間、みんなよろしくねー' },
  { type: 'text', name: '誠先生', text: '早速だけど、初対面の人も多いと思うので、自己紹介タイムしましょうか。' },
  { type: 'chara_hide', pos: 'center' },

  { type: 'chara', file: 'kuriki.png', pos: 'center' },
  { type: 'text', name: '栗木', text: 'はじめまして、野球部の栗木です。\n小栗旬に似てると言われますが、芸能界とかは今のところ考えていません。\n一年間よろしくですー' },
  { type: 'chara_hide', pos: 'center' },

  { type: 'chara', file: 'makoto.png', pos: 'center' },
  { type: 'text', name: '誠先生', text: 'えー、くりきくんには後ほど、手鏡をプレゼントしておきますね。\nでは、次。くりきくんの右の席のユニークなTシャツを着ている子、お願いします。' },
  { type: 'chara_hide', pos: 'center' },

  { label: 'act1_intro_choice', type: 'choice', choices: [
    { text: '①初めまして。女テニのおおはしです。これからみんな宜しくね！', jump: 'act1_intro_c1' },
    { text: '②半分くらいの人は初めましてですね。早速うるさくしてしまってすみません（苦笑）\nキャストとか頑張りたいと思ってるので、これから宜しくね！', jump: 'act1_intro_c2' },
    { text: '③みなさん初めまして！\n長久手のビタミンガールこと、おおはし☆ありさデス！\n柑橘パワーで、みんなのことを元気150%にしちゃうゾーーーー☆彡', recommended: true, jump: 'act1_intro_c3' },
  ]},

  { label: 'act1_intro_c1', type: 'chara', file: '06_ayasimu.png', pos: 'center' },
  { type: 'text', name: 'おおはし', text: '心の声：いや、普通やな・・・パンチに欠ける' },
  { type: 'jump', target: 'act1_intro_choice' },

  { label: 'act1_intro_c2', type: 'chara', file: '06_ayasimu.png', pos: 'center' },
  { type: 'text', name: 'おおはし', text: '心の声：いや、普通やな・・・パンチに欠ける' },
  { type: 'jump', target: 'act1_intro_choice' },

  { label: 'act1_intro_c3', type: 'chara', file: 'kuriki.png', pos: 'center' },
  { type: 'text', name: '栗木', text: 'こいつ、、、出来る・・・！' },
  { type: 'chara_hide', pos: 'center' },

  // キャストオーディション
  { label: 'act1_audition', type: 'chara', file: 'makoto.png', pos: 'center' },
  { type: 'text', name: '誠先生', text: '前から告知してきた通り、今日はオーディションを実施します。\n対象の皆さんは後悔ないように、精一杯がんばってくださいね' },
  { type: 'chara_hide', pos: 'center' },

  { type: 'chara', file: '03_okoru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: 'オーディションのために準備を重ねてきた私に死角はないわ。\nそれにしても、主役の座は誰が射止めるのかしら。\nまあ結局は私の魅力を引き立てるための「刺し身のつま」のような存在、誰でも構わないわ。' },
  { type: 'chara_hide', pos: 'left' },

  { type: 'chara', file: 'makoto.png', pos: 'center' },
  { type: 'text', name: '誠先生', text: 'えーでは、次。アテルイ役候補の児玉くん。お願いします。' },
  { type: 'chara_hide', pos: 'center' },

  { type: 'chara', file: 'kodama.png', pos: 'center' },
  { type: 'text', name: '児玉', text: 'えぇえい、黙れ！\n蝦夷は逃げず、怯えず、屈服せず。だが鬼は怒り、狂い、猛る！\n燃やし尽くしてみせよう' },

  { type: 'text', name: '一同', text: 'おおお（歓声）' },
  { type: 'chara_hide', pos: 'center' },

  { type: 'chara', file: '05_odoroku.png', pos: 'center' },
  { type: 'text', name: 'おおはし', text: '心の声：何、この心のざわめき・・・。こんなの私らしくないわ・・・。だめよありさ、ダメダメ。' },
  { type: 'chara_hide', pos: 'center' },

  { label: 'act1_heart_choice', type: 'choice', choices: [
    { text: '①認めたくない乙女の矛盾を受け止め、自分の心に素直になる', jump: 'act1_heart_c1' },
    { text: '②俗世での自らの罪深さを受け止め、高野山で尼さんになる ★おすすめ', recommended: true, jump: 'act1_heart_c2' },
  ]},

  { label: 'act1_heart_c1', type: 'chara', file: '07_tereru.png', pos: 'center' },
  { type: 'text', name: 'おおはし', text: '私の中の「リトルおおはし」が私に語りかけたわ。\n乙女が大人の女性へと成長するために必要な3つの痛み。\n私は今「認めたくない恋心を自覚する痛み」を経験したのね。\n明日からの学校生活が楽しみだわ。' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'jump', target: 'act1_result' },

  { label: 'act1_heart_c2', type: 'chara_hide_all' },
  { type: 'gameover', image: 'shuzo.jpg' },
  // Game Overでタイトルに戻る

  { label: 'act1_result', type: 'chara', file: 'makoto.png', pos: 'center' },
  { type: 'text', name: '誠先生', text: 'アテルイ役は、児玉くん。鈴鹿役は、おおはしさんに決まりました。\n本番まで残り約4ヶ月。全員で力を合わせて頑張っていきましょうね。' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'bgm_stop', fadeOut: 1500 },

  // ===== 6. 第2幕：夏休み =====
  { label: 'act2', type: 'bg', file: 'nakaniwa.png' },
  { type: 'item', file: 'chapter2_shotaro.png' },
  { type: 'wait', duration: 2500 },
  { type: 'item_hide' },
  { type: 'bgm', file: 'nakaniwa.ogg' },

  { type: 'chara', file: 'shotaro.png', pos: 'center' },
  { type: 'text', name: '正太郎', text: '今週は殺陣を中心に練習するよ。各自ペアに分かれて、早速練習はじめてねー' },
  { type: 'chara_hide', pos: 'center' },

  { type: 'chara', file: '02_yorokobu.png', pos: 'center' },
  { type: 'text', name: 'おおはし', text: '今日は田村麻呂とのシーンしかねえな。テンション下げしょんぼり丸やわ。\nあ、でもあれやな。戸田の野郎、今日風邪で休みやな。流れきてるよーありさふぁい！' },
  { type: 'chara_hide', pos: 'center' },

  { label: 'act2_talk_choice', type: 'choice', choices: [
    { text: '①児玉に話しかける', jump: 'act2_talk_yes' },
    { text: '②私の魅力にかかれば、世の中の男なんてちょろいもんよ。待てば釣れる。それが恋愛方程式の第2法則 ★おすすめ', recommended: true, jump: 'act2_talk_no' },
  ]},

  { label: 'act2_talk_yes', type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '児玉くん。今日、戸田くんが休みみたいだから、私とシーン練しない？' },
  { type: 'jump', target: 'act2_practice' },

  { label: 'act2_talk_no', type: 'chara_hide_all' },
  { type: 'bg', file: 'jizo-bg.jpg' },
  { type: 'chara', file: 'jizou.png', pos: 'center' },
  { type: 'gameover' },

  { label: 'act2_practice', type: 'chara_hide', pos: 'left' },
  { type: 'chara', file: 'kodama.png', pos: 'right' },
  { type: 'text', name: '児玉', text: 'いいよ。じゃあ5景のシーン12から。おおはしさんの台詞からお願い' },

  { type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：あぁ、イケメンに呼ばれる「おおはしさん」沁みるわぁ' },
  { type: 'text', name: 'おおはし', text: 'きゃあ！！！' },

  { type: 'text', name: '児玉', text: 'どうした！？大丈夫？' },

  { type: 'chara', file: '04_naku.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '殺陣のターンの練習してたら、足挫いてしまったみたいなの・・・（ウソ）' },

  { type: 'text', name: '児玉', text: 'それは大変。歩ける？保健室まで肩貸そうか？' },

  { label: 'act2_nurse_choice', type: 'choice', choices: [
    { text: '①うん、ありがとう', jump: 'act2_nurse_c1' },
    { text: '②保健室のベッドって二人で寝られるかしら？ ★おすすめ', recommended: true, jump: 'act2_nurse_c2' },
  ]},

  { label: 'act2_nurse_c1', type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：あぁ、イケメンと並んで歩く中庭、至福だわ・・・' },
  { type: 'chara_hide_all' },
  { type: 'jump', target: 'act2_nurse_room' },

  { label: 'act2_nurse_c2', type: 'chara_hide_all' },
  { type: 'bg', file: 'rouya.png' },
  { type: 'gameover' },

  // 保健室 → ミニゲームへ
  { label: 'act2_nurse_room', type: 'bg', file: 'hokenshitsu.png' },
  { type: 'bgm_stop', fadeOut: 1000 },

  // 語り部：ミニゲーム導入
  { type: 'overlay', color: 'rgba(0,0,0,0.7)' },
  { type: 'chara', file: 'F.png', pos: 'center' },
  { type: 'text', name: '語り部', text: 'ゲームの方はどうかの？楽しんでおるか？\n真面目なコンテンツが多かったから、ちょっと疲れたかの？\nここで少し息抜きのミニゲームでもやっておこうかの' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'overlay_hide' },

  // ミニゲーム開始
  { type: 'minigame_start', onComplete: 'act2_after_minigame' },

  // ミニゲーム後
  { label: 'act2_after_minigame', type: 'bg', file: 'hokenshitsu.png' },
  { type: 'bgm', file: 'nakaniwa.ogg' },
  { type: 'chara', file: 'kodama.png', pos: 'right' },
  { type: 'chara', file: 'meguchan.png', pos: 'center' },
  { type: 'text', name: '児玉', text: 'めぐみ先生いますか？おおはしさんが足を挫いてしまったみたいで、手当てをお願いします' },
  { type: 'text', name: 'めぐみ先生', text: '分かったわ。ちょっと見せてもらえる？' },
  { type: 'chara', file: '01_hutu.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: 'めぐみ先生ありがとうございます。\n児玉くんもわざわざ、ありがとう。何かお礼をさせて欲しいな' },

  { type: 'choice', choices: [
    { text: '①花火大会のチケットがあるんだけど、一緒にどうかな？', jump: 'act2_date_invite' },
    { text: '②長久手の祭りっさ、こんどぉあんだけどぉ、一緒にいこっさ', jump: 'act2_date_invite' },
  ]},

  { label: 'act2_date_invite', type: 'chara_hide', pos: 'center' },
  { type: 'text', name: '児玉', text: 'いいよ、じゃあ18時に待ち合わせで' },
  { type: 'chara', file: '02_yorokobu.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：あぁ、イケメンと出かける夏祭り、そそるわあ' },
  { type: 'chara_hide_all' },
  { type: 'bgm_stop', fadeOut: 1000 },

  // 好感度シナリオ導入
  { label: 'date_intro', type: 'bg', file: 'yatai.jpg' },
  { type: 'overlay', color: 'rgba(0,0,0,0.7)' },
  { type: 'chara', file: 'F.png', pos: 'center' },
  { type: 'text', name: '語り部', text: 'いよいよ初デートまでこぎ着けたおおはし。\nここでのイベントは選択肢によって、好感度メーターが上下するぞ。\n無事デートを成功させて次のデートに誘ってもらえるか、お主の女子力が試されるぞ。' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'overlay_hide' },

  // 好感度シナリオ開始
  { type: 'call', fn: (engine) => { window.startAffinity(engine); }, async: true },

  // ===== 7. 第3幕：鯱光祭 =====
  { label: 'act3', type: 'bg', file: 'title.jpg' },
  { type: 'item', file: 'chapter3_choda.png' },
  { type: 'wait', duration: 2500 },
  { type: 'item_hide' },

  { type: 'overlay', color: 'rgba(0,0,0,0.6)' },
  { type: 'text', name: '', text: '長かった夏休みも終わり、いよいよ鯱光祭がスタート。\n前夜祭、体育祭、分科会ときて、いよいよ明日はアテルイの本番。\n前日最後の全体ミーティングを終え、校庭を歩く2つの人影・・・' },
  { type: 'overlay_hide' },

  { type: 'bgm', file: 'yugata.ogg' },
  { type: 'chara', file: '01_hutu.png', pos: 'left' },
  { type: 'chara', file: 'kodama.png', pos: 'right' },
  { type: 'text', name: 'おおはし', text: 'いよいよ明日はアテルイ本番だね。これまで長かったなー。夕日がキレイ。' },
  { type: 'text', name: '児玉', text: 'そうだね。ここまであっという間だった。' },
  { type: 'text', name: 'おおはし', text: 'ね。ところで・・・' },

  { type: 'choice', choices: [
    { text: '私のこと、どう思ってる？', jump: 'act3_confession_hesitate' },
  ]},

  { label: 'act3_confession_hesitate', type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '心の声：ううん、明日本番を大成功させて、そしたら児玉くんの素直な気持ちを聞かせて貰うんだ！' },
  { type: 'text', name: '児玉', text: 'どうしたの？いくよー' },
  { type: 'chara', file: '02_yorokobu.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: 'ううん、何でもないの！明日がんばろうねー！' },
  { type: 'chara_hide_all' },
  { type: 'bgm_stop', fadeOut: 1500 },

  // アテルイ本番
  { label: 'act3_aterui', type: 'bg', file: 'taiikukanura.jpg' },
  { type: 'text', name: '305の全員', text: '本番！気合入れていくぞーーーー！！！おおーーー！！' },
  { type: 'msg_hide' },

  // アテルイムービー
  { type: 'movie', file: 'aterui.mp4' },

  // 本番後
  { type: 'se', file: 'hakusyu.ogg' },
  { type: 'bg', file: 'taiikukanura.jpg' },
  { type: 'chara', file: '02_yorokobu.png', pos: 'left' },
  { type: 'chara', file: 'kodama.png', pos: 'right' },
  { type: 'text', name: 'おおはし', text: '終わったねー！ほんと感動！泣きすぎてメイク取れちゃったｗ' },
  { type: 'text', name: '児玉', text: 'これまで頑張ってきてよかったね' },

  { type: 'bgm', file: 'yocho.ogg', fadeIn: 2000 },
  { type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: 'うん！ところで、ちょっと2人で時間いい？' },
  { type: 'chara_hide_all' },

  // 体育館裏
  { label: 'act3_confession', type: 'bg', file: 'taiikukanura.jpg' },
  { type: 'chara', file: 'kodama.png', pos: 'right' },
  { type: 'text', name: '児玉', text: 'どうしたの？改まった顔して' },

  { type: 'chara', file: '07_tereru.png', pos: 'left' },
  { type: 'text', name: 'おおはし', text: '急にごめんね。実はね・・・' },

  { type: 'choice', choices: [
    { text: '私のこと・・・どう思ってる？', jump: 'act3_confession_moment' },
  ]},

  { label: 'act3_confession_moment', type: 'text', name: 'おおはし', text: '私のこと・・・' },

  // くりき乱入
  { type: 'chara', file: 'kuriki.png', pos: 'center' },
  { type: 'text', name: 'くりき', text: 'おーい、ちょだー。なんか他校の子が呼んでるぞー。あ、ごめん、今取り込み中？' },
  { type: 'text', name: '児玉', text: 'あ、ううん、大丈夫。ごめん、おおはしさんまた後で！' },
  { type: 'chara_hide_all' },
  { type: 'bgm_stop', fadeOut: 1500 },

  // 告白失敗→手紙
  { type: 'overlay', color: 'rgba(0,0,0,0.6)' },
  { type: 'chara', file: '04_naku.png', pos: 'center' },
  { type: 'text', name: '', text: '告白してフラレちゃった・・・いままでいい感じだったのに、他校の女子とすでに付き合っていたなんて。' },
  { type: 'text', name: '', text: '告白した鯱光館ウラで泣いてるおおはしの足元には、1通の手紙。ちょだが落として行ってしまったようだ・・・' },
  { type: 'chara_hide', pos: 'center' },
  { type: 'overlay_hide' },

  // 手紙を見るか
  { type: 'choice', choices: [
    { text: '中を見る', jump: 'act3_letter_yes' },
    { text: '中を見ない', jump: 'act3_letter_yes' },
  ]},

  { label: 'act3_letter_yes', type: 'item', file: 'letter.png' },
  { type: 'wait', duration: 2000 },
  { type: 'item_hide' },

  // ===== エピローグ =====
  { label: 'epilogue', type: 'bg', file: 'title.jpg' },
  { type: 'chara', file: '04_naku.png', pos: 'center' },
  { type: 'text', name: '', text: 'グラウンドを歩く、おおはし。その手にはちょだの忘れ物の手紙。' },
  { type: 'text', name: '', text: '彼女のちょだへの熱い気持ちが綴られていた。これまでの自分は何だったのだろう・・・悲しくも悔しくもあった' },
  { type: 'chara_hide', pos: 'center' },

  // 付箋イベント
  { type: 'item', file: 'tenohira_husen.png' },
  { type: 'overlay', color: 'rgba(0,0,0,0.5)' },
  { type: 'text', name: '', text: 'ポケットの中に付箋が入っていた。保健室の棚に貼ってあったものだ。\n「和泉式部」と書いてある。' },
  { type: 'text', name: '', text: 'つれづれと　空ぞ見らるる　思ふ人　天降り来む　ものならなくに\n\n【作者】和泉式部\n【意味】なんとなく空を眺めている。愛しい人が天から降りてくるわけもないのに。' },
  { type: 'item_hide' },
  { type: 'overlay_hide' },

  // 手紙を燃やすか
  { type: 'choice', choices: [
    { text: '手紙を燃やす', jump: 'epilogue_burn' },
    { text: '手紙を燃やさない', jump: 'epilogue_burn' },
  ]},

  { label: 'epilogue_burn', type: 'item', file: 'tegami.png' },
  { type: 'wait', duration: 1500 },
  { type: 'item_hide' },
  { type: 'bgm_stop', fadeOut: 2000 },

  // 旦那さん登場
  { type: 'bg', file: 'title.jpg' },
  { type: 'chara', file: 'danna.png', pos: 'right' },
  { type: 'text', name: '未来の旦那さん', text: '未来で待ってる' },
  { type: 'chara_hide_all' },

  { type: 'chara', file: '02_yorokobu.png', pos: 'center' },
  { type: 'text', name: 'おおはし', text: 'うん、すぐ行く' },
  { type: 'text', name: 'おおはし', text: '走っていく。' },
  { type: 'chara_hide_all' },
  { type: 'msg_hide' },

  // エンドロール
  { type: 'movie', file: 'endroll.mp4' },

  // 暗転→タイトル変更
  { label: 'ending', type: 'bg', file: 'bg_base.png' },
  { type: 'overlay', color: 'rgba(0,0,0,1)' },
  { type: 'item', file: 'fin.png' },
  { type: 'wait', duration: 3000 },
  { type: 'item_hide' },
  { type: 'overlay_hide' },

  { type: 'overlay', color: 'rgba(0,0,0,0.8)' },
  { type: 'text', name: '', text: 'おおはしメモリアル2　～燃やした、夏～\n\nend' },
  { type: 'overlay_hide' },
  { type: 'msg_hide' },
  { type: 'title_screen' },
];
