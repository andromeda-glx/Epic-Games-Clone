import { generateBottomHeader, generateHeader } from "../../scripts/utils/generate-header.js";
import { findGameById } from "../../data/games-details.js";

const url = new URL(window.location.href);
const gameId = url.searchParams.get('productId');

const game = findGameById(gameId);

generateHeader();
generateBottomHeader();
document.querySelector('main').innerHTML = 
`
    <img src="../${game.image}">
`;