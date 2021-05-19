function myFunction() {
    document.getElementById("zdj1").classList.toggle('slide');
}

function scrol2() {
    const id = 'portfol';
    const yOffset = -80;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}

function scrol1() {
    const id = 'home';
    const yOffset = 0;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}