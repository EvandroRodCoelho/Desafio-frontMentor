function openMenu(){
    let button = document.querySelector("#menu-mobile") 
    let headerMenuMobile = document.querySelector(".logo")
    button.classList.toggle("ativo")
    button.classList.toggle("links")
    headerMenuMobile.classList.toggle("header-menu-mobile")
}


