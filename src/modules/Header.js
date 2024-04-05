import '../css/header.css';

export default function Header() {
  const header = document.createElement('header');
  const headerDiv = document.createElement('div');
  const logo = Logo();
  const searchBar = SearchBar();
  const navBar = NavBar();

  headerDiv.appendChild(logo);
  headerDiv.innerHTML += searchBar;
  headerDiv.appendChild(navBar);

  header.appendChild(headerDiv);
  document.body.insertBefore(header, document.body.firstChild);
}

function Logo() {
  const logo = document.createElement('a');
  logo.href = 'home';
  logo.target = '_blank';
  logo.classList.add('logo');
  logo.innerHTML = '<img src="../../public/svg/logo.svg" class="logo" alt="Dreamy Event logo" />';

  return logo;
}

function SearchBar() {
  const form = `
    <form action="search" id="searchForm" class="search-bar">
      <input type="text" name="search" id="search" placeholder="Buscar">
      <button type="submit" id="searchButton"></button>
    </form>
  `;

  return form;
}

function NavBar() {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');

  const navLinks = NavLinks();
  const hamburgerBtn = HamburguerBtn(navLinks);
  navBar.appendChild(hamburgerBtn);
  navBar.appendChild(navLinks);

  return navBar;
}

function HamburguerBtn(navLinks) {
  const hamburguerBtn = document.createElement('button');
  hamburguerBtn.type = 'button';
  hamburguerBtn.classList.add('hamburguer-menu');
  hamburguerBtn.innerHTML = `
    <span></span>
    <span id="user-profile-img"></span>
  `;

  hamburguerBtn.addEventListener('click', (e) => {
    const isClickInsideButton =
      hamburguerBtn.contains(e.target) || e.target === hamburguerBtn;

    if (isClickInsideButton) {
      navLinks.classList.toggle('active');
      navLinks.classList.toggle('inactive');
    }
  });

  return hamburguerBtn;
}

function NavLinks() {
  const links = [
    { href: 'profile', text: 'Mi perfil', typeUser: 'user-veryfied' },
    { href: 'my-events', text: 'Mis eventos', typeUser: 'user-veryfied' },
    { href: 'my-favorites', text: 'Mis favoritos', typeUser: 'user-verified' },
    {
      href: 'sign-up-supplier',
      text: 'Registrar mi comercio',
      typeUser: 'user-verfied',
    },
    {
      href: 'my-services',
      text: 'Mis servicios',
      typeUser: 'supplier-veryfied',
    },
    { href: 'log-in', text: 'Iniciar sesión', typeUser: 'anonymous' },
    { href: 'sign-up', text: 'Registrarse', typeUser: 'anonymous' },
    { href: 'log-out', text: 'Cerrar sesión', typeUser: 'user-veryfied' },
  ];

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-bar');
  navLinks.classList.add('inactive');

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    li.appendChild(a);
    navLinks.appendChild(li);
  });

  return navLinks;
}
