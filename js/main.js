/* ============================
   Main - Game Initialization
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  const engine = new VNEngine();

  // グローバル参照
  window.gameEngine = engine;

  // スタート画面
  const startScreen = document.getElementById('start-screen');
  const titleScreen = document.getElementById('title-screen');
  const btnNewGame = document.getElementById('btn-newgame');
  const btnContinue = document.getElementById('btn-continue');

  // Continue ボタンの表示制御
  if (!engine.hasSaveData()) {
    btnContinue.style.opacity = '0.4';
    btnContinue.style.pointerEvents = 'none';
  }

  // クリックしてスタート
  startScreen.addEventListener('click', () => {
    startScreen.classList.add('hidden');
  });

  // New Game
  btnNewGame.addEventListener('click', () => {
    titleScreen.classList.add('hidden');
    engine.loadScenario(SCENARIO);

    // ロゴムービー再生
    engine.movieLayer.classList.remove('hidden');
    engine.moviePlayer.src = 'assets/movie/logo.mp4';
    engine.moviePlayer.play().then(() => {
      engine.moviePlayer.onended = () => {
        engine.movieLayer.classList.add('hidden');
        engine.moviePlayer.onended = null;
        engine.start();
      };
      // Skip on click
      const skipLogo = () => {
        engine.moviePlayer.pause();
        engine.movieLayer.classList.add('hidden');
        engine.moviePlayer.onended = null;
        engine.movieLayer.removeEventListener('click', skipLogo);
        engine.start();
      };
      engine.movieLayer.addEventListener('click', skipLogo);
    }).catch(() => {
      // 動画再生失敗時はスキップ
      engine.movieLayer.classList.add('hidden');
      engine.start();
    });
  });

  // Continue
  btnContinue.addEventListener('click', () => {
    if (!engine.hasSaveData()) return;
    titleScreen.classList.add('hidden');
    engine.loadScenario(SCENARIO);
    engine.showSaveLoad('load');
  });
});
