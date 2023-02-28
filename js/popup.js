const popup = document.querySelector(".popup");
const btnadd = document.querySelector(".btn__add");
const btnpopupclose = document.querySelector(".btn__popup__close");

btnadd.addEventListener("click", () => popup.classList.remove("hidden"));
btnpopupclose.addEventListener("click", () => popup.classList.add("hidden"))

const formpopupadd = document.querySelector("#popup-form-add")

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
    console.log(catData)
    return catData;
}

function FormSubmit(event) {
    event.preventDefault();
    console.log(formpopupadd.elements)
    const formData = serializeForm((Array.from(formpopupadd.elements)));
    const newCard = new Catcard(formData);
    newCard.prependCard(document.querySelector(".cards"));

    popup.classList.add("hidden"); // спрятать форму
    event.target.reset(); //очистить данные формы
}
formpopupadd.addEventListener("submit", FormSubmit)







