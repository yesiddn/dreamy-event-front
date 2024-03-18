import '../css/header.css'

export default function Header() {
  const header = document.createElement('header')
  const headerDiv = document.createElement('div')
  const logo = Logo()
  const searchBar = SearchBar()
  const navBar = NavBar()

  headerDiv.appendChild(logo)
  headerDiv.innerHTML += searchBar
  headerDiv.appendChild(navBar)

  header.appendChild(headerDiv)
  document.body.insertBefore(header, document.body.firstChild)
}

function Logo() {
  const logo = document.createElement('a')
  logo.href = 'home'
  logo.target = '_blank'
  logo.classList.add('logo')
  logo.innerHTML = '<img src="/vite.svg" class="logo" alt="Vite logo" />'

  return logo
}

function SearchBar() {
  const form = `
    <form action="search" id="searchForm" class="search-bar">
      <input type="text" name="search" id="search" placeholder="Buscar">
      <button type="submit" id="searchButton"></button>
    </form>
  `

  return form
}

function NavBar() {
  const navBar = document.createElement('nav')
  navBar.classList.add('nav-bar')
  const hamburger = `
    <button type="button" class="hamburguer-menu">
      <span></span>
      <span id="user-profile-img"></span>
    </button>
  `

  const navLinks = NavLinks()
  navBar.innerHTML = hamburger
  navBar.appendChild(navLinks)

  return navBar
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
  ]

  const navLinks = document.createElement('ul')
  navLinks.classList.add('nav-bar')

  links.forEach((link) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = link.href
    a.textContent = link.text

    li.appendChild(a)
    navLinks.appendChild(li)
  })

  return navLinks
}
