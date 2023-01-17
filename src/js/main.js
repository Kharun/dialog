let callBtn = document.querySelector('.call')
let overlay = document.querySelector('.overlay')
let closeBtn = document.querySelector('.overlay__close')

callBtn.onclick = function() {
    overlay.style.display = 'flex'
}

closeBtn.onclick = function() {
    overlay.style.display = 'none'
}

overlay.onclick = function(event) {
    if (event.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
}

let im = new Inputmask("\\9\\96 (999) 99-99-99");

let formTel = document.querySelector('#tel')

im.mask(formTel);


$('.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 500) {
        $('.goTop').fadeIn('slow')
    } else {
        $('.goTop').fadeOut('slow')
    }
})