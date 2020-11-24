// const dots = document.querySelectorAll('.dots');
// const state = 50;
// dots.forEach(cur => {
//     document.addEventListener("click", (el, index) => {
//         let translate = index;
//         const dotItems = document.querySelectorAll('.dots__items');
//         dotItems.style.transform = `translateX(200)`;
//     });
// });

// const dotItems = document.querySelectorAll('.dots__items');

// console.log(dotItems);

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
    e.preventDefault();
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


