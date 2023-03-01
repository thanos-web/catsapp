const popup = document.querySelector(".popup");
const btnAdd = document.querySelector(".btn__add");
const btnPopupClose = document.querySelector(".btn__popup__close");

btnAdd.addEventListener("click", () => popup.classList.remove("hidden"));
btnPopupClose.addEventListener("click", () => popup.classList.add("hidden"))

const formPopupAddCat = document.querySelector("#popup-form-add")

function serializeForm(elements) {
    const catData = {};

    elements.forEach((input) => {
        if (input.type === "submit" || input.type === "button") return;
        if (input.type === "checkbox") {
            catData[input.name] = input.checked;
        }
        if (input.type !== "checkbox") {
            if (input.type === "number") {
                catData[input.name] = parseInt(input.value);
            } else {
                catData[input.name] = input.value;
            }
        }
    });
    return catData;
}

function FormSubmit(event) {
    event.preventDefault();
    const formData = serializeForm((Array.from(formPopupAddCat.elements)));
    const newCard = new Catcard(formData);
    newCard.prependCard(document.querySelector(".cards"));

    popup.classList.add("hidden"); // спрятать форму
    event.target.reset(); //очистить данные формы
}
formPopupAddCat.addEventListener("submit", FormSubmit)







