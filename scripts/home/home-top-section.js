import { mobilePromotions } from "../../data/mobile-promotions/mobile-promotions.js";
import { findGameById } from "../../data/games-details.js";
import { specialEvents } from "../../data/event-details.js";
import { renderSlideGames } from "../utils/generate-game-slide.js";
import Splide from 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/+esm';
import { generateHeader, generateBottomHeader } from "../utils/generate-header.js";

let isSignedin = true;

// These arrays contain the game IDs we want to show in their coresponding sliders

const featured = ['game-red-dead-redemption', 'game-sonic-x-shadow-generations', 'game-fall-guys', 'game-zeniess-zone-zero', 'game-warhammer-40,000-space-marine-2', 'game-black-myth-wukong'];

const discoverNew = ['game-off-the-grid', 'game-fc-25', 'game-priest-simulator-vampire-show', 'game-rogue-waters', 'game-wrc-24', 'game-the-forever-winter', 'game-breachway', 'game-until-dawn', 'game-final-fantasy-xvi', 'game-frostpunk-2', 'game-god-of-war-ragnarok', 'game-iron-meat', 'game-train-sim-world-5', 'game-dynasty-legends-2', 'game-drive-rally', 'game-potion-tycoon', 'game-63-days', 'game-chains-of-fury', "game-sid-meier's-civilization-vii", 'game-kingdom-come-deliverance-ii', 'game-s.t.a.l.k.e.r.-2-heart-of-chornobyl', 'game-red-dead-redemption', 'game-lego-horizon-adventures'];

const newReleases = ['game-need-for-speed-heat', 'game-battlefield-1', 'game-crosshair-x', 'game-madden-nfl-25', 'game-manor-lords'];

const featuredDiscounts = ['game-the-crew-2', 'game-god-of-war', 'game-days-gone', 'game-horizon-zero-dawn', 'game-the-last-of-us-part-i'];

let selectedGameItemIndex = 0;

export function renderTopSectionHTML() {
    generateHeader();
    generateBottomHeader();

    generateMobilePromotions();
    generateFeaturedList();
    generateFeaturedGamesSlider();
    generateFeaturedGame();

    generateGamesSliders('discover-new', 'Discover Something New', discoverNew);
    generateGamesSliders('featured-discounts', 'Featured Discounts', featuredDiscounts);
    generateGamesSliders('top-new', 'Top New Releases', newReleases);
}

function checkForSignIn() {

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

    let splide = new Splide('#slider1', {
        // type: 'loop',
        padding: '3rem',
        arrows: false,
        gap: '15px'
    });
    splide.mount();
}

async function generateFeaturedGame() {
    const featuredGameHTML = document.querySelector('.js-splide__featured__list');

    featured.forEach(gameId => {
        const featuredGame = findGameById(gameId);

        featuredGameHTML.innerHTML +=
            `
            <div class="splide__slide">
                <a href="./game-page/?productId=${gameId}">
                    <img src="${featuredGame.featuredImage}" alt="">
                </a>
            </div>
        `;
    });

    let splide = new Splide('#slider2', {
        type: 'loop',
        arrows: false,
        drag: false,
        pagination: false,
        gap: '5px'
    });
    splide.mount();

    const items = document.querySelectorAll('.game-item');
    items[0].classList.add('game-item-select');

    while (true) {
        for (let i = 0; i < items.length; i++) {
            splide.go(i);
            items[i].classList.add('game-item-select');
            items[i].click();
            await new Promise(resolve => setTimeout(resolve, 5000));
            items[i].classList.remove('game-item-select');
        }
    }
}

// This method takes the HTML's slider id and populates it with given items

function generateGamesSliders(id, title, games) {
    const gamesSliderHTML = document.querySelector(`#${id}`);

    gamesSliderHTML.innerHTML =
        `
        <div class="game-slide-header">
            <div class="game-slide-title-arrow">
                <div class="game-slide-title">
                    ${title}
                </div>
                <div class="game-slide-arrow">
                    <img class="arrow-icon" src="./icons/arrow.svg">
                </div>
            </div>
            <div class="browsing-btns">
                <button id="prev-slide-${id}" class="js-prev-slide">
                    <img class="arrow-icon" src="./icons/arrow-back.svg">
                </button>
                <button id="next-slide-${id}" class="js-next-slide">
                    <img class="arrow-icon" src="./icons/arrow.svg">
                </button>
            </div>
        </div>
        <div id="slider-${id}" class="splide">
            <div class="splide__track slide-items">
                <ul class="splide__list">
                    ${renderSlideGames(games)}
                </ul>
            </div>
        </div>
    `;


    let splide = new Splide(`#slider-${id}`, {
        arrows: false,
        gap: '17px',
        perPage: 2,
        mediaQuery: 'min',
        breakpoints: {
            768: {
                perPage: 4,
                drag: false
            },
            1024: {
                perPage: 5,
                drag: false
            },
            1600: {
                perPage: 6,
                drag: false
            }
        },
        lazyLoad: true,
        drag: true,
        pagination: false
    });
    splide.mount();

    document.querySelector(`#prev-slide-${id}`).addEventListener('click', () => {
        splide.go('<');
    });

    document.querySelector(`#next-slide-${id}`).addEventListener('click', () => {
        splide.go('>');
    });

    // window.addEventListener('load', () => {
    //     splide.options = {
    //         perPage: getPerPageValue()
    //     }
    // })
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

    // items.forEach((item, index) => {
    //     item.addEventListener('click', () => {
    //         if (selectedGameItemIndex !== index) {
    //             item.classList.add('game-item-select');
    //             items[selectedGameItemIndex].classList.remove('game-item-select');
    //             selectedGameItemIndex = index;
    //             generateFeaturedGame(item.dataset.gameId);
    //         }
    //     });
    // });

    // for (let i = 0; i < items.length; i++){
    //     items[i].classList.add('start-progress');
    //     await new Promise(resolve => setTimeout(resolve, 10000));
    //     items[i].classList.remove('start-progress');
    // }
}