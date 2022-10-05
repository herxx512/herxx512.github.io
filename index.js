function changeNav(){
    let scrollValue = window.scrollY;

    if(scrollValue > 660 && scrollValue < 1380|| scrollValue > 2080 && scrollValue < 2810){
        nav1.classList.add('navColor');
        nav2.classList.add('navColor');
        nav3.classList.add('navColor');
        nav4.classList.add('navColor');
    } else {
        nav1.classList.remove('navColor');
        nav2.classList.remove('navColor');
        nav3.classList.remove('navColor');
        nav4.classList.remove('navColor');
    }
}

window.addEventListener('scroll',changeNav);