// Рендеринг карточек котов из массива с котами методом класса Catcard в нужную ноду
const cards = document.querySelector(".cards")
    cats.forEach(cat => {
        let catcard = new Catcard(cat)
        catcard.setEventsListener()
        catcard.appendCard(cards)   
        
    })



    
