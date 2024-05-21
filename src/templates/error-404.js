import '../styles/error-page.css';
import Header from './Header';
export default async function Error404()  {
    Header();
    var errorContainer = document.createElement("section");
    errorContainer.className = "error-page-container";


    const header = document.createElement('div');
    header.classList.add('error-header');

    var title = document.createElement("h2");
    title.textContent = "Error 404";
    header.appendChild(title);
    var image = document.createElement("img");
    image.src = "../public/svg/404.svg";
    image.alt = "Error 404";
    header.appendChild(image);
    errorContainer.appendChild(header);

    const content = document.createElement('div');
    content.classList.add('error-content');

    var subtitle = document.createElement("h3");
    subtitle.textContent = "Vaya, tenemos un problema";
    content.appendChild(subtitle);
    var paragraph = document.createElement("p");
    paragraph.textContent = "Parece que no encontramos lo que buscas. ¿Te importa si volvemos a la página de inicio?";
    content.appendChild(paragraph);
    var link = document.createElement("a");
    link.href = "/";
    link.className = "button";
    link.textContent = "Quiero volver";
    content.appendChild(link);
    errorContainer.appendChild(content);

    document.querySelector('#app').appendChild(errorContainer);
};
