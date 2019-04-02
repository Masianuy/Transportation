//menu gumburger
var gumburger = document.querySelector('.nav-gumburger');
var menu = document.querySelector('.nav-menu__list');
gumburger.addEventListener('click', function(e) {
    menu.classList.toggle('menu--activ');
    e.stopPropagation();
});
var body = document.body;
    body.addEventListener('click', function() {
        menu.classList.remove('menu--activ');
    });

var menuLi = document.querySelectorAll('.nav-menu__list li');
menuLi.forEach(function(item, i) {
    menuLi[i].addEventListener('click', function() {

        if(this.classList.contains('item--activ')) {
            this.classList.remove('item--activ');
        } else {
            menuLi.forEach(function(item, a) {
                menuLi[a].classList.remove('item--activ');
            });
            this.classList.add('item--activ');
        }
    })
});

// add commit
var addBtn = document.querySelector('.reviews__aside');
addBtn.addEventListener('click', function(e) {
    var form = document.querySelector('.reviews-form__popup');
    form.classList.remove('hidden');
    var close = document.querySelector('.close');
    e.stopPropagation();
    close.addEventListener('click', function() {
    form.classList.add('hidden');
    })
    var body = document.body;
    body.addEventListener('click', function() {
    var form = document.querySelector('.reviews-form__popup');
    form.classList.add('hidden');
});
})

//gallery
var smallImg = document.querySelectorAll('.services-gallery__item img');
smallImg.forEach(function(img, i) {
    smallImg[i].addEventListener('click', function() {
        var src = this.getAttribute('src');
        var alt = this.getAttribute('alt');

        var bigImg = document.querySelector('.services-gallery__img--big img');
        bigImg.setAttribute('src', src);
        bigImg.setAttribute('alt', alt);
    })
})

//scroll
var links = document.querySelectorAll('.nav-menu__list a');
links.forEach(function(item, i) {
    links[i].addEventListener('click', function() {
        var href = this.getAttribute('href');
        var heightSection = href.offsetTop;
        heightSection.scrollTop;
        
        console.log(href)
    })
})

