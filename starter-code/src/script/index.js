// HTML para o "Header"
const headerHTML = `
<header class="header__container">
      <div class="header__content">
        <p class="header__title">
          <img
            src="../assets/shared/desktop/logo.svg"
            alt="Logo audiophile"
          />
        </p>
        
        <nav>
          <ul class="header__list">
            <li class="list__item">
              <a class="list__item--link" href="../../../index.html">Home</a>
            </li>
            <li class="list__item">
              <a class="list__item--link" href="../../../starter-code/pages/headphones.html">Headphones</a>
            </li>
            <li class="list__item">
              <a class="list__item--link" href="../../../starter-code/pages/speakers.html">Speakers</a>
            </li>
            <li class="list__item">
              <a class="list__item--link" href="#earphones">Earphones</a>
            </li>
          </ul>
        </nav>
        
        <p class="header__icon--cart">
          <img
            src="../assets/shared/desktop/icon-cart.svg"
            alt="Icone de carrinho"
          />
        </p>
      </div>
    </header>
    `;

// HTML da Seção "About"
const aboutHTML = `
  <section id="about" class="about__container">
    <div class="about__content">
      <div class="about__information">
        <h2 class="about__title">Bringing you the <span>best</span> audio gear</h2>
        <p class="about__text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src="../assets/shared/desktop/image-best-gear.jpg" alt="">
    </div>        
  </section>
`;

// HTML do "Footer"
const footerHTML = `
<footer class="footer">
  <div class="footer__content">
    <div class="footer__line"></div>
    <div class="footer__Social">
      <div class="footer__brand">
        <img
          src="../assets/shared/desktop/logo.svg"
          alt="Logo audiophile"
        />
      </div>
      <div class="footer__social-media">
        <nav class="footer__navigation">
          <ul class="footer__nav-list">
            <li><a href="../../../index.html">Home</a></li>
            <li><a href="/headphones">Headphones</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/earphones">Earphones</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footer__description">
      <p class="footer__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're
        a small team of music lovers and sound specialists who are devoted
        to helping you get the most out of personal audio. Come and visit
        our demo facility - were open 7 days a week.
      </p>
      <ul class="footer__social-icons">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
            class="footer__icon"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
            class="footer__icon"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            class="footer__icon"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__copyright">
      <p>Copyright 2021. All Rights Reserved</p>
    </div>
  </div>
</footer>
`;

const productsHtml = `
<section id="products" class="products__container">
        <div class="products__content">
          <ul class="products__list">
            <li class="list__item--product">
              <img
                src="../assets/shared/desktop/image-category-thumbnail-headphones.png"
                alt=""
                class="product__image"
              />
              <p class="product__text">Headphones</p>
              <div class="product__link">
                <a href"../../../starter-code/pages/headphones.html" class="product__link--item"> shop </a>
                <img
                  src="../assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                />
              </div>
            </li>
            <li class="list__item--product">
              <img
                src="../assets/shared/desktop/image-category-thumbnail-speakers.png"
                alt=""
                class="product__image"
                \
              />
              <p class="product__text">Speakers</p>
              <div class="product__link">
                <a href="../../pages/speakers.html" class="product__link--item">shop</a>
                <img
                  src="../assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                />
              </div>
            </li>
            <li class="list__item--product">
              <img
                src="../assets/shared/desktop/image-category-thumbnail-earphones.png"
                alt=""
                class="product__image"
              />
              <p class="product__text">Earphones</p>
              <div class="product__link">
                <a href="../../pages/earphones.html" class="product__link--item">shop</a>
                <img
                  src="../assets/shared/desktop/icon-arrow-right.svg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
`;

//Função para o "Header"
function insertHeader() {
  const headerContainer = document.getElementById("header__container");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
}

function insertProducts() {
  const productsContainer = document.getElementById("products__container");
  if(productsContainer){
    productsContainer.innerHTML = productsHtml;
  }
}

//Funão para a seção "About"
function insertAboutSection() {
  const aboutContainer = document.getElementById("about__container");
  if (aboutContainer) {
    aboutContainer.innerHTML = aboutHTML;
  }
}

//Função para o "Footer"
function insertFooter() {
  const footerContainer = document.getElementById("footer__container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  insertHeader();
  insertAboutSection();
  insertFooter();
  insertProducts();
});
