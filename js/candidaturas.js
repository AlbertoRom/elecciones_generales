const cardsData = [
    {
        title: "Partido A",
        image: "img/partido_a.png",
    },
    {
        title: "Partido B",
        image: "img/partido_b.png",
    },
    {
        title: "Partido C",
        image: "img/partido_c.png",
    },
    {
        title: "Partido D",
        image: "img/partido_d.png",
    },
    {
        title: "Partido E",
        image: "img/partido_e.png",
    }
];

const cardsContainer = document.getElementById('cards-container');

cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.src = card.image;
    imageElement.alt = card.title;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const titleElement = document.createElement("h3");
    titleElement.textContent = card.title;

    cardContent.appendChild(titleElement);

    cardElement.appendChild(imageElement);
    cardElement.appendChild(cardContent);

    cardsContainer.appendChild(cardElement);
});