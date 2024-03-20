import '../css/hero.css';

export default function Hero() {
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-container');

  const heroImage = HeroImage();
  const heroText = HeroText();

  heroContainer.appendChild(heroImage);
  heroContainer.appendChild(heroText);

  document.querySelector('#app').appendChild(heroContainer);
}

function HeroImage() {
  const heroImage = document.createElement('img');
  heroImage.src = '../../public/img/birthday-hero.jpeg';
  heroImage.alt = 'Dreamy Event hero';
  heroImage.classList.add('hero-image');

  return heroImage;
}

function HeroText() {
  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const heroTitle = HeroTitle();
  const heroButton = HeroButton();

  heroText.appendChild(heroTitle);
  heroText.appendChild(heroButton);

  return heroText;
}

function HeroTitle() {
  const heroTitle = document.createElement('h2');
  heroTitle.innerHTML =
    'Administra tus eventos con mayor facilidad y sin olvidar detalles';

  return heroTitle;
}

function HeroButton() {
  const heroButton = document.createElement('a');
  heroButton.href = 'my-events';
  heroButton.target = '_blank';
  heroButton.classList.add('hero-button');
  heroButton.innerHTML = 'Crea un evento';

  return heroButton;
}
