import { mobilePromotions } from "../../data/mobile-promotions/mobile-promotions.js";
import { games } from "../../data/games-details.js";
import { specialEvents } from "../../data/event-details.js";
import { renderSlideGames } from "../utils/generate-game-slide.js";


const featured = ['game-fortnite', 'game-fall-guys', 'event-epic-savings', 'game-zeniess-zone-zero', 'game-madden-nfl-25', 'game-black-myth-wukong' ];

const discoverNew = ['game-black-myth-wukong', 'game-warhammer-40,000-space-marine-2'];

const newReleases = ['game-need-for-speed-heat', 'game-battlefield-1', 'game-crosshair-x', 'game-madden-nfl-25', 'game-manor-lords'];

const featuredDiscounts = ['game-the-crew-2', 'game-god-of-war', 'game-days-gone', 'game-horizon-zero-dawn', 'game-the-last-of-us-part-i'];

export function renderTopSectionHTML(){
    generateMobilePromotions();
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
                    <div class="item-pic">
                        <img src="${itemDetails.image}" alt="">
                    </div>
                    <div class="item-name">
                        ${itemDetails.name}
                    </div>
                </div>
        `;
    });
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