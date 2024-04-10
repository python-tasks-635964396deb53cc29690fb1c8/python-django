const filterBtn = document.querySelector("#filter");
const filterInp = document.querySelector("input[name='filter']");

const filterList = [
    "Всюду", "Электроника", "Одежда", "Обувь", "Автотовары", "Мебель",
    "Книги", "Музыка", "Видео", "Продукты"
];

filterBtn.addEventListener("click", e => {
    e.stopPropagation();
    showPopup();
});

let popup = null;

function showPopup() {
    if (popup) return;

    popup = document.createElement("div");
    popup.className = "popup-filter";

    filterList.forEach(fName => {
        const el = document.createElement("span");
        el.innerText = fName;
        popup.appendChild(el);

        el.addEventListener("click", () => {
            filterInp.value = fName;
            filterBtn.innerText = fName;
            dismissPopup();
        });
    });

    document.body.append(popup);
}

function dismissPopup() {
    popup && popup.parentElement.removeChild(popup);
    popup = null;
}
