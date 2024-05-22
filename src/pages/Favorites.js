import Header from '../templates/Header.js';
import '../styles/user-profile.css';

export default function Favorites() { 
    Header();
    alert('favorites page loaded!')

    const favoritesSection = document.createElement('section');
    favoritesSection.classList.add('favorites__header');  
    
    const favoritesTitle = document.createElement('h2');
    favoritesTitle.classList.add('my-favorites__title');
    favoritesTitle.textContent = 'My Favorites';

    favoritesSection.appendChild(favoritesTitle);
    document.body.appendChild(favoritesSection);

};