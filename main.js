document.querySelector('.menu__image--menu').addEventListener("click", function() {
    document.querySelector('.collapse').style.display = 'block';
    document.querySelector('.menu__toggle').style.backgroundColor = '#f1f1f1';
    document.querySelector('.menu__image--close').style.display = 'block';
    this.style.display = 'none';
});

document.querySelector('.menu__image--close').addEventListener("click", function() {
    document.querySelector('.collapse').style.display = 'none';
    document.querySelector('.menu__toggle').style.backgroundColor = '#fff';
    document.querySelector('.menu__image--menu').style.display = 'block';
    this.style.display = 'none';
});


document.querySelector('.navbar__drop').addEventListener("click", function(e) {
    if(document.querySelector('.dropdown').classList.contains('block')) {
        document.querySelector('.dropdown').classList.remove( 'block');
        document.querySelector('.dropdown').classList.add( 'none');
    }
    else{
        document.querySelector('.dropdown').classList.remove( 'none');
        if(document.querySelector('.dropdown').classList.add('block'));
    }

    
});

document.querySelector('.info__bar--icon').addEventListener("click", function(e) {
    document.querySelector('.info__bar').style.transform = "translateX(-100%)";
    setTimeout(()=>{
        document.querySelector('.info__bar').style.visibility = "hidden";
    }, 3000);
});

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var st = window.scrollY || document.documentElement.scrollTop;
    // let offsetBottom = document.querySelector('.info__bar').offsetTop + document.querySelector('.info__bar').offsetHeight
    if (window.scrollY > document.querySelector('.info__bar').offsetTop) {

        document.querySelector('.info__bar').classList.add( 'sticky');
        header.style.transform = "translateY(-10rem)";
    } 
    else {
        document.querySelector('.info__bar').classList.remove('sticky');
    }

    if (st < lastScrollTop){
        header.style.transform = "translateY(0)";
    }
    
     lastScrollTop = st <= 0 ? 0 : st;
});

window.addEventListener("touchmove", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // let offsetBottom = document.querySelector('.info__bar').offsetTop + document.querySelector('.info__bar').offsetHeight
    if (window.pageYOffset > document.querySelector('.info__bar').offsetTop) {

        document.querySelector('.info__bar').classList.add( 'sticky');
        header.style.transform = "translateY(-10rem)";
    } 
    else {
        document.querySelector('.info__bar').classList.remove('sticky');
    }

    if (st < lastScrollTop){
        header.style.transform = "translateY(0)";
    }
    
     lastScrollTop = st <= 0 ? 0 : st;
});


function showSlide(slide) {
    let margin = 0;
    const transformConstant = (slide ) * 100;
    margin += transformConstant;
    if(margin > 300){
        margin = 300;
    }
    else if(margin < 0){
        margin = 0
    }

    document.querySelectorAll('.img__slider--item').forEach(el => {
        el.style.transform = `translateX(-${margin}%)`;
    });

    showCurrentDot(slide);
}

function showCurrentDot(slide) {
    document.querySelectorAll('.dots').forEach((element, index) => {
        if(index === slide){
            element.classList.add('dots__active');
        }else{
            element.classList.remove('dots__active');
        }

    });
}

document.querySelectorAll('.dots').forEach((el, index) => {
    el.addEventListener('click', e => {
        e.preventDefault();
        showSlide(index);
    });
});


