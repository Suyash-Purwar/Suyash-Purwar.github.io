document.querySelector("#sidemenu_trigger").addEventListener('click', () => {
    document.querySelector(".sidebar-content-box").style.transform = "translateX(0%)";
    document.querySelector(".sidebar-back-box").style.transform = "translateY(0%)";
    document.querySelector("#sidebar").style.display = "block";
});

document.querySelector("#sidebar-close").addEventListener('click', () => {
    document.querySelector(".sidebar-content-box").style.transform = "translateX(-100%)";
    document.querySelector(".sidebar-back-box").style.transform = "translateY(-100%)";
    
    setTimeout(() => {
        document.querySelector("#sidebar").style.display = "none";
    }, 500);
});

let blogs_carousel = new Siema({
    selector: '.blogs-carousel',
    onChange: function() {
        const blogs_indicators = document.getElementsByClassName("blogs-indicator");

        blogs_indicators[this.currentSlide].style.backgroundColor = "#000";

        for (let x = 0; x < blogs_indicators.length; x++) {
            if (x == this.currentSlide) continue;

            blogs_indicators[x].style.backgroundColor = "#fff";
        }
    }
});

let prev_blog = document.querySelector("#prev_blog");
let next_blog = document.querySelector("#next_blog");

prev_blog.addEventListener('click', () => blogs_carousel.prev(1));
next_blog.addEventListener('click', () => blogs_carousel.next(1));