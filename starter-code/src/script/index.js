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
function insertAboutSection() {
  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    aboutContainer.innerHTML = aboutHTML;
  }
}
document.addEventListener("DOMContentLoaded", insertAboutSection);
