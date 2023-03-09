// Класс: состоит из конструктора и методов


class Catcard { // данный класс Catcard отвечает за создание и рендеринг карточки кота.

    CatConteiner  // Переменная (поле) класса, видят все методы внутри этого класса

    constructor(catdata) {  // Конструктор - выполняется всегда при создании экземпляра класса. 

        this.CatConteiner = cardtemplate.content.cloneNode(true) // Клонируем содержимое шаблона (который лежит в html) для того, чтобы переиспользовать его
        this.CatConteiner.querySelector(".card__image").src = catdata.image

        const catName = this.CatConteiner.querySelector(".card__name")
        catName.innerText = catdata.name.length > 0 ? catdata.name : "Noname"
        catName.dataset.id = catdata.id

        const catLike  = this.CatConteiner.querySelector(".card__like")
        catLike.dataset.id = catdata.id
        if (catdata.favorite) {
            catLike.classList.add("liked")
        }

    }
    // Методы класса
    appendCard(node) {// Нода, в которую рендерятся коты в конец
        node.append(this.CatConteiner)
    }
    prependCard(node) {// Нода, в которую рендерятся коты в начало
        node.prepend(this.CatConteiner)
    }
    showCatInfo(id) {
        const this2 = this
        api.getCatById(id)
            .then(response => response.json())
            .then(function (data) {
                const popupInfoContent = document.querySelector(".popup__content");
                const CatInfoCard = catsinfotemplate.content.cloneNode(true);

                CatInfoCard.querySelector(".cat-info__image").src = data.image;
                CatInfoCard.querySelector(".cat-info__id").innerHTML = `ID: ${data.id}`;
                CatInfoCard.querySelector(".cat-info__name").innerText = data.name;
                CatInfoCard.querySelector(".cat-info__age").innerText = `Возраст: ${data.age}`;
                CatInfoCard.querySelector(".cat-info__rate").innerText = `Уровень няшности: ${data.rate}`;
                CatInfoCard.querySelector(".cat-info__desc").innerText = data.description;
                

                if (data.favorite) {
                    CatInfoCard.querySelector(".cat-info__favorite").classList.add("liked")
                    
                }

                if (isCookieExist('Login')) {
                    CatInfoCard.querySelector(".cat-info__deleted").addEventListener("click", (event) => this2.deleteCard(data.id));
                } else {
                    CatInfoCard.querySelector(".cat-info__deleted").classList.add("hidden")
                    CatInfoCard.querySelector(".buttons").innerHTML = "<span>Нужно войти чтобы удалить кота</span>"
                }

                popupInfoContent.innerHTML = "";
                popupInfoContent.append(CatInfoCard);

            })


    }


    deleteCard(id) {
        api.deleteCatById(id)
        let currentCard = document.querySelector(`[data-id="${id}"]`).closest('.card')
        currentCard.remove()
        popupCatInfo.classList.add("hidden")

    }


    setEventsListener() {

        this.CatConteiner.querySelector(".card__name").addEventListener("click", (event) => this.showCatInfo(event.target.dataset.id));
        this.CatConteiner.querySelector(".card__name").addEventListener("click", () => popupCatInfo.classList.remove("hidden"));
        this.CatConteiner.querySelector(".card__like").addEventListener("click", (event) => this.changeFavorite(event.target.closest(".card__like")));

    
    }


    changeFavorite(btn_like) {
        const id = btn_like.dataset.id
        // console.log(btn_like)
        let data = {favorite: !btn_like.classList.contains("liked")} 
        // оно же
        // let data = null
        // if (btn_like.classList.contains("liked")){
        //     data = {favorite: false}
        // } else {
        //     data = {favorite: true}
        // }
        api.updateCatById(id, data) 
        btn_like.classList.toggle('liked')
   
    }
   
    
    
}

const popupCatInfo = document.querySelector(".popup-cat-info");
const closeButtonCatsInfo = document.querySelector(".btn__popup__close_external");
closeButtonCatsInfo.addEventListener("click", () => popupCatInfo.classList.add("hidden"))


// event.target.parentNode.classList.toggle('liked')









