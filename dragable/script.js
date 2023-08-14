document.addEventListener("DOMContentLoaded", function () {
    const draggableElements = document.querySelectorAll(".draggable");
    let activeElement = null;
    let startPosX = 0;
    let startPosY = 0;
    let offsetX = 0;
    let offsetY = 0;

    draggableElements.forEach(function (element) {
        element.addEventListener("mousedown", function (event) {
            activeElement = element;
            startPosX = event.clientX;
            startPosY = event.clientY;
            offsetX = activeElement.getBoundingClientRect().left;
            offsetY = activeElement.getBoundingClientRect().top;
            activeElement.classList.add("dragging"); // Apply the dragging style
        });
    });

    document.addEventListener("mousemove", function (event) {
        if (activeElement) {
            const deltaX = event.clientX - startPosX;
            const deltaY = event.clientY - startPosY;
            const newPosX = offsetX + deltaX;
            const newPosY = offsetY + deltaY;

            activeElement.style.left = newPosX + "px";
            activeElement.style.top = newPosY + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        if (activeElement) {
            activeElement.classList.remove("dragging"); // Remove the dragging style
            activeElement = null;
        }
    });
});
