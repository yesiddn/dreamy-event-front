import '../styles/header.css';
import getUserData from '../utils/get-user-data';
import logOut from '../utils/log-out';

const links = [
  { href: 'profile', text: 'Mi perfil', typeUser: 'customer' },
  { href: 'my-events', text: 'Mis eventos', typeUser: 'customer' },
  { href: 'my-favorites', text: 'Mis favoritos', typeUser: 'customer' },
  {
    href: 'sign-up-supplier',
    text: 'Registrar mi comercio',
    typeUser: '!supplier',
  },
  {
    href: 'my-services',
    text: 'Mis servicios',
    typeUser: 'supplier',
  },
  { href: 'log-in', text: 'Iniciar sesión', typeUser: 'public' },
  { href: 'sign-up', text: 'Registrarse', typeUser: 'public' },
  { href: 'log-out', text: 'Cerrar sesión', typeUser: 'customer' },
];

export default function Header(USER) {
  const header = document.createElement('header');
  document.body.insertBefore(header, document.body.firstChild);

  const headerDiv = document.createElement('div');
  const logo = Logo();
  const searchBar = SearchBar();
  const navBar = NavBar(USER);

  headerDiv.append(logo, searchBar, navBar);
  header.appendChild(headerDiv);
}

function Logo() {
  const logo = document.createElement('a');
  logo.href = '/';
  logo.classList.add('logo');
  logo.innerHTML =
    '<img src="../../public/svg/logo.svg" class="logo" alt="Dreamy Event logo" />';

  return logo;
}

function SearchBar() {
  const form = document.createElement('form');
  form.action = 'search';
  form.id = 'searchForm';
  form.classList.add('search-bar');

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'search';
  input.id = 'search';
  input.placeholder = 'Buscar';
  const searchQuery = window.location.search || null;
  input.value = searchQuery ? searchQuery.split('=')[1].split('+').join(' ') : '';
  form.appendChild(input);

  const button = document.createElement('button');
  button.type = 'submit';
  button.id = 'searchButton';
  form.appendChild(button);
  
  return form;
}

function NavBar(USER) {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');

  const navLinks = NavLinks(USER);
  const hamburgerBtn = HamburguerBtn(navLinks);
  navBar.appendChild(hamburgerBtn);
  navBar.appendChild(navLinks);

  return navBar;
}

function HamburguerBtn(navLinks) {
  const hamburguerBtn = document.createElement('button');
  hamburguerBtn.type = 'button';
  hamburguerBtn.classList.add('hamburguer-menu');

  const userImg = getUserData()?.customer.image;

  const hamburguerIcon = document.createElement('span');
  hamburguerBtn.appendChild(hamburguerIcon);

  const userProfileImg = document.createElement('span');
  userProfileImg.id = 'user-profile-img';
  if (userImg)
    userProfileImg.style.backgroundImage = `url(http://localhost:3000/api/v1/${userImg})`;
  hamburguerBtn.appendChild(userProfileImg);

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

function NavLinks(USER) {
  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-bar');
  navLinks.classList.add('inactive');

  links.forEach((link) => {
    if (USER && link.href === 'log-out') {
      const li = Button(link);
      navLinks.appendChild(li);
    } else if (!USER && link.typeUser === 'public') {
      const li = Link(link);
      navLinks.appendChild(li);
    } else if (USER && link.typeUser === 'customer') {
      const li = Link(link);
      navLinks.appendChild(li);
    } else if (USER && !USER.supplier && link.typeUser === '!supplier') {
      const li = Link(link);
      navLinks.appendChild(li);
    } else if (USER && USER.supplier && link.typeUser === 'supplier') {
      const li = Link(link);
      navLinks.appendChild(li);
    }
  });

  return navLinks;
}

function Link(link) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;

  li.appendChild(a);

  return li;
}

function Button(link) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = link.text;

  button.addEventListener('click', logOut);

  li.appendChild(button);

  return li;
}
