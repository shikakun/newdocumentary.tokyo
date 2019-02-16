export const lazyload = () => {
  window.lazySizesConfig = window.lazySizesConfig || {};

  // .js-lazyload を指定した要素で画像を遅延して読み込むように設定しています
  // see: https://github.com/aFarkas/lazysizes
  window.lazySizesConfig.lazyClass = 'js-lazyload';

  document.addEventListener('lazybeforeunveil', function(e) {
    let bg = e.target.getAttribute('data-bg');
    if (bg) {
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });
};
