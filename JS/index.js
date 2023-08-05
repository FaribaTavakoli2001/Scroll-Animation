const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', boxshow)

function boxshow() {
    const triggerBottom = window.innerHeight / 1.2;
    // console.log(triggerBottom);

    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;

        if (boxtop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}