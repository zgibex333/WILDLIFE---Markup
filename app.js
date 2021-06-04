const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelectorAll(".slider-window")


// right.addEventListner('click', (e) => {
//     console.log(e);
// })


right.addEventListener('click', (e) => {
    e.preventDefault();
    slider.forEach(el => {
        el.classList.add('active');
    })
    slider.forEach(el => {
        if (el.classList.contains('non-active')) {
            el.classList.remove('non-active')
        };
    })
    left.classList.remove("empty-btn")
    right.classList.add("empty-btn")
})

left.addEventListener('click', (e) => {
    e.preventDefault();
    slider.forEach(el => {
        el.classList.add('non-active');
    })
    slider.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        };
    })
    right.classList.remove("empty-btn")
    left.classList.add("empty-btn")
})


