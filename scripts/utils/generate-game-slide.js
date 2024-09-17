import { games } from "../../data/games-details.js";

export function renderSlideGames(selectedItemsIds) {
    let gameString = '';

    selectedItemsIds.forEach(item => {
        let gameDetails = null;

        for (let i = 0; i < games.length; i++) {
            if (item === games[i].id) {
                gameDetails = games[i];
                break;
            }
        }

        gameString += generateHTML(gameDetails);
    });

    return gameString;
}

function generateHTML(gameDetails) {
    return `
                <div class="slide-item">
                    <div class="slide-item-pic">
                        <img src="${gameDetails.image}" alt="">
                    </div>
                    <div class="slide-item-text">
                        <p class="item-type">${gameDetails.type}</p>
                        <p class="item-name limit-line">${gameDetails.name}</p>
                    </div>
                    <div class="slide-item-price-c">
                        ${gameDetails.generatePriceHTML()}
                    </div>
                </div>
            `;
}