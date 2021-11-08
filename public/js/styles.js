const bar = document.querySelector("#bar");
const btnMenu = document.querySelector("#btnMenu");

btnMenu.addEventListener("click", e => {
    bar.classList.toggle("active");
});

window.addEventListener("scroll", e => {
    const scroll = document.scrollingElement.scrollTop;
    const header = document.querySelector("#header");
    if (scroll >= 100) {
        header.classList.add("solid")
        bar.classList.add("solid");
    } else {
        header.classList.remove("solid");
        bar.classList.remove("solid");
    }
})

const radios = document.querySelectorAll(".radio")
const likes = document.querySelectorAll(".fa-thumbs-up");
const thiLike = document.querySelectorAll(".fa-thumbs-down");

radios.forEach((radio) => {
    radio.addEventListener("click", e => {
    const target = e.target;
    let parent = target.parentElement;
    let icon = parent.querySelector("i");
    let inputs = parent.parentElement.querySelectorAll('i');
    inputs.forEach((input) => {
        input.classList.remove("far")
        input.classList.remove("fas")
        input.classList.add("far")
    })
        icon.classList.remove("far");
        icon.classList.add("fas");
    })
});

const inputPassword = Array.from(document.querySelectorAll(".password"));
const btnEye = Array.from(document.querySelectorAll(".btn-eye"));

btnEye.forEach((btn, index) => btn.addEventListener("click", e => {
    e.preventDefault();
    inputPassword[index].getAttribute("type") == "password" ? inputPassword[index].setAttribute("type", "text") : inputPassword[index].setAttribute("type", "password")
}))