

document.querySelector('.menu__image--menu').addEventListener("click", function() {
    console.log(this);
    document.querySelector('.collapse').style.display = 'block';
    document.querySelector('.menu__toggle').style.backgroundColor = '#f1f1f1';
    document.querySelector('.menu__image--close').style.display = 'block';
    this.style.display = 'none';
});

document.querySelector('.menu__image--close').addEventListener("click", function() {
    console.log(this);
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
    document.querySelector('.info__bar').style.display = "none";
});

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    
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
