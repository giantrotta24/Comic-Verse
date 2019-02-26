let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 11000);
};

let slideIndex2 = 0;
carousel2();

function carousel2() {
    let j;
    let x = document.getElementsByClassName("mySlides2");
    for (j = 0; j < x.length; j++) {
        x[j].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > x.length) { slideIndex2 = 1 }
    x[slideIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 3500);
};