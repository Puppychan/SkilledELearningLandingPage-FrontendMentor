
let cardContainer = document.querySelector(".main-cards");
createCards();

async function fetchCardInfo() {
    let response = await fetch("./js/card.json");
    let jsonBody = await response.json();
    return jsonBody;
}
async function createCards() {
    let cardsInfo = await fetchCardInfo();
    let cardHtml = ``;
    cardsInfo.forEach(card => {
        cardHtml += `
        <div class="main-card">
        <!-- <div class="main-card-icon"></div> -->
        <img src="${card["img"]}" alt="${card["alt"]}" class="main-card-icon">
        <div class="main-card-title">${card["title"]}</div>
        <div class="main-card-desc">${card["desc"]}</div>
        <div class="main-card-started">Get Started</div>
        </div>`;
    });
    cardContainer.insertAdjacentHTML("beforeend", cardHtml);
}
