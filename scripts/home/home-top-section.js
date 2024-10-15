import { mobilePromotions } from "../../data/mobile-promotions/mobile-promotions.js";
import { games, findGameById } from "../../data/games-details.js";
import { specialEvents } from "../../data/event-details.js";
import { renderSlideGames } from "../utils/generate-game-slide.js";


const featured = ['game-red-dead-redemption', 'game-fortnite', 'game-fall-guys', 'game-zeniess-zone-zero', 'game-madden-nfl-25', 'game-black-myth-wukong' ];

const discoverNew = ['game-black-myth-wukong', 'game-warhammer-40,000-space-marine-2'];

const newReleases = ['game-need-for-speed-heat', 'game-battlefield-1', 'game-crosshair-x', 'game-madden-nfl-25', 'game-manor-lords'];

const featuredDiscounts = ['game-the-crew-2', 'game-god-of-war', 'game-days-gone', 'game-horizon-zero-dawn', 'game-the-last-of-us-part-i'];

let selectedGameItemIndex = 0;

export function renderTopSectionHTML(){
    generateMobilePromotions();
    generateFeaturedGame(featured[0]);
    generateFeaturedList();
    generateDiscoverNew();
    generateFeaturedDiscounts();
    generateTopNewReleases();
}

function generateMobilePromotions() {
    const mobilePromotionsHTML = document.querySelector('.mobile-promotions');

    mobilePromotions.forEach(promoItem => {
        mobilePromotionsHTML.innerHTML +=
        `
            <div class="mobile-promotion" data-mobile-promo-id="${promoItem.id}">
                <img src="${promoItem.image}" alt="">
            </div>
        `
    });
}

function generateFeaturedGame(gameId){
    const featuredGame = findGameById(gameId);
    const featuredGameHTML = document.querySelector('.game-pic-c');

    featuredGameHTML.innerHTML = 
    `
        <img src="${featuredGame.featuredImage}" alt="">
    `;
}

function generateFeaturedList(){
    const featuredGamesListHTML =  document.querySelector('.games-list');

    featured.forEach(gameId => {
        let itemDetails = null;

        if (gameId[0] === 'g'){
            for (let i = 0; i < games.length; i++){
                if (games[i].id === gameId){
                    itemDetails = games[i];
                    break;
                }
            }
        }
        else{
            for (let i = 0; i < specialEvents.length; i++){
                if (specialEvents[i].id === gameId){
                    itemDetails = specialEvents[i];
                    break;
                }
            }
        }

        featuredGamesListHTML.innerHTML += 
        `
                <div class="game-item" data-game-id="${itemDetails.id}">
                    <span class="progress-bar">
                    </span>
                    <div class="item-pic">
                        <img src="${itemDetails.image}" alt="">
                    </div>
                    <div class="item-name">
                        ${itemDetails.name}
                    </div>
                </div>
        `;
    });

    progressSlideShow(2000);

    // setInterval(() => {
    //     progressSlideShow(1000);
    // }, 61000);
}

function generateDiscoverNew(){
    const discoverNewHTML = document.querySelector('.js-discover-new-title');

    discoverNewHTML.innerHTML = 'Discover Something New &gt;';

    const discoverNewItemsHTML = document.querySelector('.js-discover-new-items');

    discoverNewItemsHTML.innerHTML = renderSlideGames(discoverNew);
}

function generateFeaturedDiscounts() {
    const featuredDiscountsHTML = document.querySelector('.js-featured-discounts-title');

    featuredDiscountsHTML.innerHTML = 'Featured Discounts &gt';

    const discoverNewItemsHTML = document.querySelector('.js-featured-discounts-items');

    discoverNewItemsHTML.innerHTML = renderSlideGames(featuredDiscounts);
}

function generateTopNewReleases(){
    let topNewTitleHTML = document.querySelector('.js-top-new-title');

    topNewTitleHTML.innerHTML = `Top New Releases &gt;`

    let topNewItemsHTML = document.querySelector('.js-top-new-items');

    topNewItemsHTML.innerHTML += renderSlideGames(newReleases);
}

async function progressSlideShow(timeInterval) {
    const items = document.querySelectorAll('.game-item');
    items[0].classList.add('game-item-select');

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (selectedGameItemIndex !== index){
                item.classList.add('game-item-select');
                items[selectedGameItemIndex].classList.remove('game-item-select');
                selectedGameItemIndex = index;
                generateFeaturedGame(item.dataset.gameId);
            }
        });
    });

    // for (let i = 0; i < items.length; i++){
    //     items[i].classList.add('start-progress');
    //     await new Promise(resolve => setTimeout(resolve, 10000));
    //     items[i].classList.remove('start-progress');
    // }

    while (true) {
        for (let i = 0; i < items.length; i++){
            items[i].classList.add('game-item-select');
            items[i].click();
            await new Promise(resolve => setTimeout(resolve, timeInterval));
            items[i].classList.remove('game-item-select');
        }   
    }
}

function addEventListenerToGameItems(gameItems){
    gameItems.forEach(item => {
        item.addEventListener('click', () => {
            
        });
    })
}