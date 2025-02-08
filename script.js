// Select all color divs inside .color-plate
const colors = document.querySelectorAll('.color-plate div');

colors.forEach(element => {
    element.addEventListener('click', function () {
        // Get the background color of the clicked div
        const bgColor = window.getComputedStyle(this).backgroundColor;

        // Change the body's background color
        document.body.style.backgroundColor = bgColor;
    });
});
