window.onload = function active(){
    document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
};

function removeSpaces(string) {
    return string.trimEnd();
}

textarea = document.querySelector(".data");
textarea.addEventListener('input', autoResize, false);
 
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function clearInput(){
    var element = document.getElementById("form")
     element.reset();
}

// document.querySelectorAll(".nav-link").forEach(( link) => {
//     if (link.href === window.location.href) {
//         link.classList.add("active");
//         link.setAttribute("aria-current", "page");
//     }
// });

// function active(){
//     const current = window.location.href;
//     document.querySelectorAll(`#nav-tab a[href*="${current}"]`).forEach(elem => { 
//     elem.classList.add("active");
//     });             
// }
