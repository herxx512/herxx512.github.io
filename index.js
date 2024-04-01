function changeNav(){
    let scrollValue = window.scrollY;

    if(scrollValue > 740 && scrollValue < 1515|| scrollValue > 2535 && scrollValue < 3475){
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