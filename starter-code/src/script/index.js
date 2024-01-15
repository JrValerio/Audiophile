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
      <img src="./starter-code/assets/shared/desktop/image-best-gear.jpg" alt="">
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
          src="./starter-code/assets/shared/desktop/logo.svg"
          alt="Logo audiophile"
        />
      </div>
      <div class="footer__social-media">
        <nav class="footer__navigation">
          <ul class="footer__nav-list">
            <li><a href="/home">Home</a></li>
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
        our demo facility - we’re open 7 days a week.
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

//Funão para a seção "About"
function insertAboutSection() {
  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    aboutContainer.innerHTML = aboutHTML;
  }
}

//Função para o "Footer"
function insertFooter() {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
      footerContainer.innerHTML = footerHTML;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  insertAboutSection();
  insertFooter();
});
