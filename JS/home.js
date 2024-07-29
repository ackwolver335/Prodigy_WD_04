let icon1 = document.querySelector('#menuIcon');
let menulist1 = document.querySelector('.menuList');

menulist1.style.left = "-700px";

icon1.onclick = () => {
    if(menulist1.style.left == "-700px"){
        menulist1.style.left = "0px";
    }
    else{
        menulist1.style.left = "-700px";
    }
};