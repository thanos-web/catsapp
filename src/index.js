// Рендеринг карточек котов из массива с котами методом класса Catcard в нужную ноду
const cards = document.querySelector(".cards")
    cats.forEach(cat => {
        let catCard = new Catcard(cat)
        catCard.setEventsListener()
        catCard.appendCard(cards)   
        
    })



    
