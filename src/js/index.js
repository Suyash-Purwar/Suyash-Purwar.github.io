document.querySelector("#sidemenu_trigger").addEventListener('click', () => {
    document.querySelector(".sidebar-content-box").style.transform = "translateX(0%)";

    document.querySelector(".sidebar-back-box").style.transform = "translateY(0%)";

    document.querySelector("#sidebar").style.display="block"
});

document.querySelector("#sidebar-close").addEventListener('click', () => {
    document.querySelector(".sidebar-content-box").style.transform = "translateX(-100%)";

    document.querySelector(".sidebar-back-box").style.transform = "translateY(-100%)";
    
    setTimeout(() => {
        document.querySelector("#sidebar").style.display="none"
    }, 500);
})