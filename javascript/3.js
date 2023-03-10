const infoButtons = document.querySelectorAll("button");

infoButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const info = this.parentElement.getAttribute("data-info");

        const modal = document.createElement("div");
        modal.classList.add("modal");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
        modalContent.innerHTML = info;
        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        modal.style.display = "block";
    });
});
