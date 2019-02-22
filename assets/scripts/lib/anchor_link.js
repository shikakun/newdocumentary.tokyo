export const anchorLink = () => {
  $('.js-anchor-link').on('click', function(event) {
    const href = $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top;

    $('body, html').animate({scrollTop: position}, 300, 'swing');
    event.preventDefault();
  });
};
