const productTitle = document.querySelector("input[name='title']");
const productPrice = document.querySelector("input[name='price']");
const productImgLink = document.querySelector("input[name='image_link']");
const productType = document.querySelector("input[name='p_type']");

const previewTitle = document.querySelector("#product_title");
const previewPrice = document.querySelector("#product_price");
const previewImage = document.querySelector("#product_image");


productTitle.addEventListener("input", () => {
    previewTitle.innerText = productTitle.value;
});

productPrice.addEventListener("input", () => {
    previewPrice.innerText = productPrice.value;
});

productImgLink.addEventListener("blur", setImage);
productImgLink.addEventListener("input", (e) => {
    if (e.inputType === "insertFromPaste") {
        setImage(e);
    }
});

productType.addEventListener("click", () => {
    const popupFilter = createPopup(filterList, (e, fName) => productType.value = fName,
        (pp) => pp.parentElement.removeChild(pp));
    document.body.appendChild(popupFilter);
    productType.blur();
});


function setImage() {
    previewImage.src = productImgLink.value;
}

function createPopup(list, eClick, dismiss) {
    const popup = document.createElement("div");
    popup.className = "popup-filter";

    list.forEach(fName => {
        const el = document.createElement("span");
        el.innerText = fName;
        popup.appendChild(el);

        el.addEventListener("click", () => {
            eClick(el, fName);
            dismiss(popup);
        });
    });

    return popup;
}
