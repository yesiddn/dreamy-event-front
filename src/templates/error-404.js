import '../styles/error-404.css';
export default async function Error404()  {
    var errorContainer = document.createElement("section");
    errorContainer.className = "error-404-container";

    var title = document.createElement("h2");
    title.textContent = "Error 404";
    errorContainer.appendChild(title);


    var image = document.createElement("img");
    image.src = "../public/img/404.png";
    image.alt = "Error 404";
    errorContainer.appendChild(image);

    var subtitle = document.createElement("h3");
    subtitle.textContent = "Vaya, tenemos un problema";
    errorContainer.appendChild(subtitle);

    var paragraph = document.createElement("p");
    paragraph.textContent = "Parece que no encontramos lo que buscas. ¿Te importa si volvemos a la página de inicio?";
    errorContainer.appendChild(paragraph);

  
    var link = document.createElement("a");
    link.href = "/";
    link.className = "button";
    link.textContent = "Quiero volver";
    errorContainer.appendChild(link);


    document.body.appendChild(errorContainer);
};
