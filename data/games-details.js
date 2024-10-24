const thumbnailFileLocation = './images/games-thumbnail';
const featuredFileLocation = './images/games-featured';

class Game {
    id;
    image;
    name;
    type;
    #priceCents;
    #newPriceCents;
    discountRate;
    featuredImage;

    constructor(gameDetails) {
        this.id = gameDetails.id;
        this.image = gameDetails.image;
        this.name = gameDetails.name;
        this.type = gameDetails.type;
        this.#priceCents = Math.round(gameDetails.priceCents);
        this.discountRate = gameDetails.discountRate;

        if (this.discountRate) {
            this.#newPriceCents = this.#priceCents - (Math.ceil(this.#priceCents * this.discountRate));
        }

        this.featuredImage = gameDetails.featuredImage;
    }

    generatePriceHTML() {
        if (this.discountRate) {
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
        else {
            return `
                <div class="price-c">
                    <p class="original-price">
                        ${this.#priceCents === 0 ? 'Free' : '$' + (this.#priceCents / 100).toFixed(2)}
                    </p>
                </div>
            `
        }
    }
}

export const games =
    [
        {
            id: 'game-63-days',
            image: `${thumbnailFileLocation}/63-days.avif`,
            name: '63 Days',
            type: 'Base Game',
            priceCents: 2999,
            discountRate: 0
        },
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
            id: 'game-breachway',
            image: `${thumbnailFileLocation}/breachway.avif`,
            name: 'Breachway',
            type: 'Base Game',
            priceCents: 1999,
            discountRate: 0
        },
        {
            id: 'game-chains-of-fury',
            image: `${thumbnailFileLocation}/chains-of-fury.webp`,
            name: 'Chains of Fury',
            type: 'Base Game',
            priceCents: 999,
            discountRate: 0
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
            id: 'game-drive-rally',
            image: `${thumbnailFileLocation}/drive-rally.avif`,
            name: '#DRIVE Rally',
            type: 'Base Game',
            priceCents: 1999,
            discountRate: 0
        },
        {
            id: 'game-dynasty-legends-2',
            image: `${thumbnailFileLocation}/dynasty-legends-2.avif`,
            name: 'Dynasty Legends 2',
            type: 'Base Game',
            priceCents: 0,
            discountRate: 0
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
            id: 'game-final-fantasy-xvi',
            image: `${thumbnailFileLocation}/final-fantasy-xvi.avif`,
            name: 'FINAL FANTASY XVI',
            type: 'Base Game',
            priceCents: 4999,
            discountRate: 0
        },
        {
            id: 'game-fortnite',
            image: `${thumbnailFileLocation}/fortnite.webp`,
            name: 'Fortnite',
            type: 'Base Game',
            priceCents: 0,
            discountRate: 0,
            featuredImage: `${featuredFileLocation}/fortnite-featured.avif`
        },
        {
            id: 'game-frostpunk-2',
            image: `${thumbnailFileLocation}/frostpunk-2.avif`,
            name: 'Frostpunk 2',
            type: 'Base Game',
            priceCents: 4499,
            discountRate: 0
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
            id: 'game-god-of-war-ragnarok',
            image: `${thumbnailFileLocation}/god-of-war-ragnarok.avif`,
            name: 'God of War Ragnarök',
            type: 'Base Game',
            priceCents: 5999,
            discountRate: 0
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
            id: 'game-iron-meat',
            image: `${thumbnailFileLocation}/iron-meat.avif`,
            name: 'Iron Meat',
            type: 'Base Game',
            priceCents: 1999,
            discountRate: 0
        },
        {
            id: 'game-kingdom-come-deliverance-ii',
            image: `${thumbnailFileLocation}/kingdom-come-deliverance-ii.avif`,
            name: 'Kingdom Come: Deliverance II',
            type: 'Base Game',
            priceCents: 5999,
            discountRate: 0
        },
        {
            id: 'game-lego-horizon-adventures',
            image: `${thumbnailFileLocation}/horizon-zero-dawn-complete-edition.avif`,
            name: 'LEGO Horizon Adventures',
            type: 'Base Game',
            priceCents: 5999,
            discountRate: 0
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
            id: 'game-mechwarrior-5-clans',
            image: `${thumbnailFileLocation}/mechwarrior-5-clans.avif`,
            name: 'MechWarrior 5: Clans',
            type: 'Base Game',
            priceCents: 4999,
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
            id: `game-off-the-grid`,
            image: `${thumbnailFileLocation}/off-the-grid.avif`,
            name: 'Off The Grid',
            type: 'Base Game',
            priceCents: 0,
            discountRate: 0
        },
        {
            id: 'game-potion-tycoon',
            image: `${thumbnailFileLocation}/potion-tycoon.avif`,
            name: 'Potion Tycoon',
            type: 'Base Game',
            priceCents: 1999,
            discountRate: 0
        },
        {
            id: `game-priest-simulator-vampire-show`,
            image: `${thumbnailFileLocation}/priest-simulator-vampire-show.avif`,
            name: 'Priest Simulator: Vampire Show',
            type: 'Base Game',
            priceCents: 1999,
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
            id: 'game-rogue-waters',
            image: `${thumbnailFileLocation}/rogue-waters.avif`,
            name: 'Rogue Waters',
            type: 'Base Game',
            priceCents: 2999,
            discountRate: 0
        },
        {
            id: 'game-s.t.a.l.k.e.r.-2-heart-of-chornobyl',
            image: `${thumbnailFileLocation}/s.t.a.l.k.e.r.-2-heart-of-chornobyl.avif`,
            name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
            type: 'Base Game',
            priceCents: 5999,
            discountRate: 0
        },
        {
            id: "game-sid-meier's-civilization-vii",
            image: `${thumbnailFileLocation}/sid-meier's-civilization-vii.avif`,
            name: "Sid Meier's Civilization VII",
            type: 'Base Game',
            priceCents: 6999,
            discountRate: 0
        },
        {
            id: 'game-sonic-x-shadow-generations',
            image: `${thumbnailFileLocation}/sonic-x-shadow-generations.webp`,
            name: `SONIC X SHADOW GENERATIONS`,
            type: 'Base Game',
            priceCents: 4999,
            discountRate: 0,
            featuredImage: `${featuredFileLocation}/sonic-x-shadow-generations-featured.webp`
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
            id: 'game-the-forever-winter',
            image: `${thumbnailFileLocation}/the-forever-winter.avif`,
            name: 'The Forever Winter',
            type: 'Base Game',
            priceCents: 2999,
            discountRate: 0
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
            id: 'game-train-sim-world-5',
            image: `${thumbnailFileLocation}/train-sim-world-5.avif`,
            name: 'Train Sim World 5',
            type: 'Base Game',
            priceCents: 4999,
            discountRate: 0
        },
        {
            id: 'game-until-dawn',
            image: `${thumbnailFileLocation}/until-dawn.avif`,
            name: 'Until Dawn',
            type: 'Base Game',
            priceCents: 5999,
            discountRate: 0
        },
        {
            id: 'game-warhammer-40,000-space-marine-2',
            image: `${thumbnailFileLocation}/warhammer-40,000-space-marine-2.avif`,
            name: 'Warhammer 40,000: Space Marine 2',
            type: 'Base Game',
            priceCents: 5999,
            discountRate: 0,
            featuredImage: `${featuredFileLocation}/warhammer-40,000-space-marine-2-featured.avif`
        },
        {
            id: 'game-wrc-24',
            image: `${thumbnailFileLocation}/wrc-24.avif`,
            name: 'EA SPORTS WRC 24',
            type: 'Base Game',
            priceCents: 4999,
            discountRate: 0
        },
        {
            id: 'game-zeniess-zone-zero',
            image: `${thumbnailFileLocation}/zenless-zone-zero.avif`,
            name: 'Zeniess Zone Zero',
            type: 'Base Game',
            priceCents: 0,
            discountRate: 0.9,
            featuredImage: `${featuredFileLocation}/zenless-zone-zero-featured.jpg`
        }
    ].map(item => {
        return new Game(item);
    });

export function findGameById(gameId) {
    for (let i = 0; i < games.length; i++) {
        if (games[i].id === gameId) {
            return games[i];
        }
    }
}