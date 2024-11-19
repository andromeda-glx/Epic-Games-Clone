import { generateBottomHeader, generateHeader } from "../../scripts/utils/generate-header.js";
import { findGameById } from "../../data/games-details.js";

const url = new URL(window.location.href);
const gameId = url.searchParams.get('productId');

const game = findGameById(gameId);

generateHeader();
generateBottomHeader();
generateGameHeader();

function generateGameHeader() {
    const gameHeaderElement = document.querySelector('.game-title');

    gameHeaderElement.innerHTML = 
    `
        <div class="game-title">${game.name}</div>
    `;
}

document.title = `${game.name} | Epic Games Store Clone`;

document.querySelector('meta[property="og:title"]').setAttribute('content', `${game.name} | Epic Games Store Clone`);
document.querySelector('meta[property="og:url"]').setAttribute('content', `${url}`);