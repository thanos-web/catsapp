// Класс: состоит из конструктора и методов


class Catcard { // данный класс Catcard отвечает за создание и рендеринг карточки кота.

    CatConteiner  // Переменная (поле) класса, видят все методы внутри этого класса

    constructor(catdata) {  // Конструктор - выполняется всегда при создании экземпляра класса. 

        this.CatConteiner = cardtemplate.content.cloneNode(true) // Клонируем содержимое шаблона (который лежит в html) для того, чтобы переиспользовать его
        this.CatConteiner.querySelector(".card__image").src = catdata.image
        this.CatConteiner.querySelector(".card__name").innerText = catdata.name

        if (catdata.favorite) {
            this.CatConteiner.querySelector(".card__like").classList.add("liked")
        }

    }
    // Методы класса
    appendCard(node) {// Нода, в которую рендерятся коты в конец
        node.append(this.CatConteiner)
    }

    prependCard(node) {// Нода, в которую рендерятся коты в начало
        node.prepend(this.CatConteiner)
    }

    setEventsListener() {
        this.CatConteiner.querySelector(".card__name").addEventListener("click", () => popupCatInfo.classList.remove("hidden"));
        this.CatConteiner.querySelector(".card__like").addEventListener("click", (event) => event.target.parentNode.classList.toggle('liked'));
    }


}


const popupCatInfo = document.querySelector(".popup-cat-info");
const closeButtonCatsInfo = document.querySelector(".btn__popup__close_external");
closeButtonCatsInfo.addEventListener("click", () => popupCatInfo.classList.add("hidden"))


const popupInfoContent = document.querySelector(".popup__content");
popupInfoContent.append(catsinfotemplate.content.cloneNode(true));

