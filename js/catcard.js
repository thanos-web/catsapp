// Класс: состоит из конструктора и методов


class Catcard { // данный класс Catcard отвечает за создание и рендеринг карточки кота.

    divCatCard  // Переменная (поле) класса, видят все методы внутри этого класса

    constructor(catdata) {  // Конструктор - выполняется всегда при создании экземпляра класса. 

        this.divCatCard = cardtemplate.content.cloneNode(true) // Клонируем содержимое шаблона (который лежит в html) для того, чтобы переиспользовать его
        this.divCatCard.querySelector(".card__image").src = catdata.image
        this.divCatCard.querySelector(".card__name").innerText = catdata.name

        if (catdata.favorite) {
            this.divCatCard.querySelector(".card__like").classList.add("liked")
        }

    }
    // Методы класса
    appendCard(node) {// Нода, в которую рендерятся коты в конец
        node.append(this.divCatCard)
    }

    prependCard(node) {// Нода, в которую рендерятся коты в начало
        node.prepend(this.divCatCard)
    }

    setEventsListener() {
        this.divCatCard.querySelector(".card__name").addEventListener("click", () => popupcatinfo.classList.remove("hidden"));
        this.divCatCard.querySelector(".card__like").addEventListener("click", (event) => console.log(event.target.parentNode.classList.toggle('liked')));
    }


}


const popupcatinfo = document.querySelector(".popup-cat-info");
const closebuttoncatsinfo = document.querySelector(".btn__popup__close_external");
closebuttoncatsinfo.addEventListener("click", () => popupcatinfo.classList.add("hidden"))


const popupcontainer = document.querySelector(".popup__content");
popupcontainer.append(catsinfotemplate.content.cloneNode(true));

