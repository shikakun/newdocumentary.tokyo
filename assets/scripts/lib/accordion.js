export const accordion = () => {
  $('.js-accordion-opener').on('click', function(event) {
    $(this).removeClass('is-accordion-opener')
           .next('.js-accordion-target')
           .addClass('is-show');
  });
};
