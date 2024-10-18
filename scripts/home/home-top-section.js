import { mobilePromotions } from "../../data/mobile-promotions/mobile-promotions.js";
import { findGameById } from "../../data/games-details.js";
import { specialEvents } from "../../data/event-details.js";
import { renderSlideGames } from "../utils/generate-game-slide.js";
import Splide from 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm';


const featured = ['game-red-dead-redemption', 'game-sonic-x-shadow-generations', 'game-fall-guys', 'game-zeniess-zone-zero', 'game-warhammer-40,000-space-marine-2', 'game-black-myth-wukong'];

const discoverNew = ['game-black-myth-wukong', 'game-warhammer-40,000-space-marine-2', 'game-fc-25'];

const newReleases = ['game-need-for-speed-heat', 'game-battlefield-1', 'game-crosshair-x', 'game-madden-nfl-25', 'game-manor-lords'];

const featuredDiscounts = ['game-the-crew-2', 'game-god-of-war', 'game-days-gone', 'game-horizon-zero-dawn', 'game-the-last-of-us-part-i'];

let selectedGameItemIndex = 0;

export function renderTopSectionHTML() {
    generateMobilePromotions();
    generateFeaturedGamesSlider();
    generateFeaturedGame(featured[0]);
    generateFeaturedList();

    generateGamesSliders('discover-new', 'Discover New', discoverNew);
    generateGamesSliders('featured-discounts', 'Featured Discounts', featuredDiscounts);
    generateGamesSliders('top-new', 'Top New', newReleases);
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

function generateFeaturedGamesSlider() {
    let gameSliderHTML = document.querySelector('.js-splide__list');

    featured.forEach(gameId => {
        const itemDetails = findGameById(gameId);

        gameSliderHTML.innerHTML +=
            `
            <div class="splide__slide">
                <img src="${itemDetails.image}" alt="">
            </div>
        `;
    });

    var splide = new Splide('.splide', {
        // type: 'loop',
        padding: '3rem',
        arrows: false,
        gap: '15px'
    });
    splide.mount();

    const btn = document.querySelector('.download-button');
    btn.addEventListener('click', () => {
        splide.go('+1');
    });
}

function generateFeaturedGame(gameId) {
    const featuredGame = findGameById(gameId);
    const featuredGameHTML = document.querySelector('.game-pic-c');

    featuredGameHTML.innerHTML =
    `
        <img src="${featuredGame.featuredImage}" alt="">
    `;
}

function generateGamesSliders(id, title, games){
    const gamesSliderHTML = document.querySelector(`#${id}`);

    gamesSliderHTML.innerHTML = 
    `
        <div class="game-slide-header">
            <div class="game-slide-title">${title}></div>
            <div class="browsing-btns"></div>
        </div>
        <div class="slide-items">
            ${renderSlideGames(games)}
        </div>
    `;
}

function generateFeaturedList() {
    const featuredGamesListHTML = document.querySelector('.games-list');

    featured.forEach(gameId => {
        let itemDetails = findGameById(gameId);

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

    progressSlideShow(8000);

    // setInterval(() => {
    //     progressSlideShow(1000);
    // }, 61000);
}

async function progressSlideShow(timeInterval) {
    const items = document.querySelectorAll('.game-item');
    items[0].classList.add('game-item-select');

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (selectedGameItemIndex !== index) {
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
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('game-item-select');
            items[i].click();
            await new Promise(resolve => setTimeout(resolve, timeInterval));
            items[i].classList.remove('game-item-select');
        }
    }
}