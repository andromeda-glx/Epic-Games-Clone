const thumbnailFileLocation = './images/games-thumbnail';
const featuredFileLocation = './images/games-featured';

class Game{
    id;
    image;
    name;
    type;
    #priceCents;
    #newPriceCents;
    discountRate;
    featuredImage;

    constructor(gameDetails){
        this.id = gameDetails.id;
        this.image = gameDetails.image;
        this.name = gameDetails.name;
        this.type = gameDetails.type;
        this.#priceCents = Math.round(gameDetails.priceCents);
        this.discountRate = gameDetails.discountRate;

        if (this.discountRate){
            this.#newPriceCents = this.#priceCents - (Math.ceil(this.#priceCents * this.discountRate));
        }

        this.featuredImage = gameDetails.featuredImage;
    }

    generatePriceHTML(){
        if (this.discountRate){
            return `
                <div class="percentage-bubble">
                    -${this.discountRate * 100}%
                </div>
                <div class="price-c off-price">
                    <p class="original-price">
                        $${(this.#priceCents / 100).toFixed(2)}
                    </p>
                    <p class="new-price">$${(this.#newPriceCents / 100).toFixed(2)}</p>
                </div>
            `
        }
        else{
            return `
                <div class="price-c">
                    <p class="original-price">
                        $${(this.#priceCents / 100).toFixed(2)}
                    </p>
                </div>
            `
        }
    }
}

export const games = 
[
    {
        id: 'game-battlefield-1',
        image: `${thumbnailFileLocation}/battlefield-1.avif`,
        name: 'Battlefield 1 Revolution',
        type: 'Base Game',
        priceCents: 3999,
        discountRate: 0
    },
    {
        id: 'game-black-myth-wukong',
        image: `${thumbnailFileLocation}/black-myth-wukong.avif`,
        name: 'Black Myth: Wukong',
        type: 'Base Game',
        priceCents: 5999,
        discountRate: 0,
        featuredImage: `${featuredFileLocation}/black-myth-wukong-featured.avif`
    },
    {
        id: 'game-crosshair-x',
        image: `${thumbnailFileLocation}/crosshair-x.avif`,
        name: 'Crosshair X',
        type: 'Base Game',
        priceCents: 799,
        discountRate: 0
    },
    {
        id: 'game-days-gone',
        image: `${thumbnailFileLocation}/days-gone.avif`,
        name: 'Days Gone',
        type: 'Base Game',
        priceCents: 4999,
        discountRate: 0.75
    },
    {
        id: 'game-fall-guys',
        image: `${thumbnailFileLocation}/fall-guys.webp`,
        name: 'Fall Guys',
        type: 'Base Game',
        priceCents: 0,
        discountRate: 0.9,
        featuredImage: `${featuredFileLocation}/fall-guys-featured.jpg`
    },
    {
        id: 'game-fc-25',
        image: `${thumbnailFileLocation}/fc-25.avif`,
        name: 'EA SPORTS FC 25',
        type: 'Base Game',
        priceCents: 6999,
        discountRate: 0
    },
    {
        id: 'game-fortnite',
        image: `${thumbnailFileLocation}/fortnite.webp`,
        name: 'Fortnite',
        type: 'Base Game',
        priceCents: 0,
        discountRate: 0.9,
        featuredImage: `${featuredFileLocation}/fortnite-featured.avif`
    },
    {
        id: 'game-god-of-war',
        image: `${thumbnailFileLocation}/god-of-war.avif`,
        name: 'God of War',
        type: 'Base Game',
        priceCents: 4999,
        discountRate: 0.6
    },
    {
        id: 'game-horizon-zero-dawn',
        image: `${thumbnailFileLocation}/horizon-zero-dawn-complete-edition.avif`,
        name: 'Horizon Zero Dawn Complete Edition',
        type: 'Base Game',
        priceCents: 4999,
        discountRate: 0.75
    },
    {
        id: 'game-madden-nfl-25',
        image: `${thumbnailFileLocation}/madden-nfl-25.avif`,
        name: 'EA SPORTS Madden NFL 25',
        type: 'Base Game',
        priceCents: 6999,
        discountRate: 0
    },
    {
        id: 'game-manor-lords',
        image: `${thumbnailFileLocation}/manor-lords.avif`,
        name: 'Manor Lords',
        type: 'Base Game',
        priceCents: 3999,
        discountRate: 0
    },
    {
        id: 'game-need-for-speed-heat',
        image: `${thumbnailFileLocation}/need-for-speed-heat.webp`,
        name: 'Need for Speed Heat Delux Edition',
        type: 'Base Game',
        priceCents: 6999,
        discountRate: 0
    },
    {
        id: 'game-red-dead-redemption',
        image: `${thumbnailFileLocation}/red-dead-redemption.webp`,
        name: `Red Dead Redemption`,
        type: 'Base Game',
        priceCents: 4999,
        discountRate: 0,
        featuredImage: `${featuredFileLocation}/red-dead-redemption-featured.webp`
    },
    {
        id: 'game-the-crew-2',
        image: `${thumbnailFileLocation}/the-crew-2.avif`,
        name: 'The Crew 2 Standard Edition',
        type: 'Base Game',
        priceCents: 4999,
        discountRate: 0.98
    },
    {
        id: 'game-the-last-of-us-part-i',
        image: `${thumbnailFileLocation}/the-last-of-us-part-i.avif`,
        name: 'The Last of Us Part I',
        type: 'Base Game',
        priceCents: 5999,
        discountRate: 0.4
    },
    {
        id: 'game-warhammer-40,000-space-marine-2',
        image: `${thumbnailFileLocation}/warhammer-40,000-space-marine-2.avif`,
        name: 'Warhammer 40,000: Space Marine 2',
        type: 'Base Game',
        priceCents: 5999,
        discountRate: 0
    },
    {
        id: 'game-zeniess-zone-zero',
        image: `${thumbnailFileLocation}/zenless-zone-zero.avif`,
        name: 'Zeniess Zone Zero',
        type: 'Base Game',
        priceCents: 0,
        discountRate: 0.9
    }
].map(item => {
    return new Game(item);
});

export function findGameById(gameId){
    for (let game of games){
        if (game.id === gameId){
            return game;
        }
    }
}