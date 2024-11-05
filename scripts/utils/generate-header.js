export function generateHeader() {
    const headerElement = document.querySelector('header');
    headerElement.innerHTML = 
    `
        <div class="top-header">
            <nav class="left-section">
                <ul class="left-section-items">
                    <li>
                        <div class="epic-games-logo-c">
                            <img src="./icons/epic games logo.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="store-c">
                            <a href="./">
                                <img src="./icons/Store.svg" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="support-link">Support</div>
                    </li>
                    <li>
                        <div class="distribute-link">Distribute</div>
                    </li>
                </ul>
            </nav>
            <div class="right-section">
                <div class="language-logo-c">
                    <img src="./icons/language-logo.svg" alt="">
                </div>
                <div class="sign-in-btn-c">
                    <a href="./validation/">Sign in</a>
                </div>
                <div class="profile-box-c hide">
                    <div class="profile-pic-c">
                        <img src="./images/user-profile-images/defaul-profile-pic.webp" alt="">
                    </div>
                    <div class="profile-name-c">
                        Radix799
                    </div>
                </div>
                <div class="download-button-c">
                    <button>Download</button>
                </div>
            </div>
            <div class="right-section-mini">
                <div class="download-button-c">
                    <button class="download-button">Download</button>
                </div>
                <div class="hamburger-btn">
                    <img src="./icons/Hamburger_icon.svg" alt="">
                </div>
            </div>
        </div>
    `;
}

export function generateBottomHeader() {
    const bottomHeaderElement = document.querySelector('.bottom-header');

    bottomHeaderElement.innerHTML = 
    `
                <div class="search-bar-c">
                    <input type="text" placeholder="Search store">
                    <div class="search-logo-c">
                        <img src="./icons/search-logo.svg">
                    </div>
                </div>
                <div class="discover-browse-news-c">
                    <div class="discover-c">
                        Discover
                    </div>
                    <div class="browse-c">
                        Browse
                    </div>
                    <div class="news-c">
                        News
                    </div>
                </div>
                <div class="wishlist-cart-c">
                    <div class="wishlist-c">
                        Wishlist
                    </div>
                    <div class="cart-c">
                        Cart
                    </div>
                    <div class="wishlist-logo-c">
                        <img src="./icons/wishlist-icon.svg">
                    </div>
                    <div class="cart-logo-c">
                        <img src="./icons/shopping-cart-logo.svg">
                    </div>
                </div>
    `;
}