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

let projects_carousel = new Siema({
    selector: ".siema",
    onChange: function() {
        const proj_indicators = document.getElementsByClassName("projects-indicator");

        proj_indicators[this.currentSlide].style.backgroundColor = "#000";

        for (let x = 0; x < proj_indicators.length; x++) {
            if (x == this.currentSlide) continue;

            proj_indicators[x].style.backgroundColor = "#fff";
        }
    }

})

let prev_proj = document.querySelector("#prev_proj");
let next_proj = document.querySelector("#next_proj");

prev_proj.addEventListener('click', () => projects_carousel.prev(1))
next_proj.addEventListener('click', () => projects_carousel.next(1))