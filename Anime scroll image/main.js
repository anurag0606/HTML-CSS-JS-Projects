let scroll = document.querySelector(".gallery");
let back = document.getElementById("backward");
let forwed = document.getElementById("forward");

scroll.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroll.scrollLeft += e.deltaY;
    scroll.style.scrollBehavior = "auto";

});
back.addEventListener("click" ,()=> {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft -= 900;
});
forwed.addEventListener("click", () => {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft += 900;
}); 

