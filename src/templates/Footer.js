import '../styles/footer.css';

export default async function Footer() {
    var footer = document.createElement("footer");
    footer.id = "footer";
    
    var container = document.createElement("div");
    container.className = "container";
    
    var leftDiv = document.createElement("div");
    leftDiv.className = "footer-left";
    
    var logoImg = document.createElement("img");
    logoImg.src = "../public/svg/logo-white.svg";
    logoImg.alt = "Logo Dreamy Event";
    leftDiv.appendChild(logoImg);
    
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Somos una empresa dedicada a la organización de eventos,<br> con más de 10 años de experiencia en el mercado. ";
    leftDiv.appendChild(paragraph);
    
    container.appendChild(leftDiv);
    
    var middleDiv = document.createElement("div");
    middleDiv.className = "footer-middle";
    
    var enlacesHeader = document.createElement("h2");
    enlacesHeader.textContent = "Enlaces";
    middleDiv.appendChild(enlacesHeader);
    
    var ul = document.createElement("ul");
    ul.className = "footer-links";
    
    ["Inicio", "Servicios", "Mis eventos"].forEach(function(text) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.textContent = text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    middleDiv.appendChild(ul);
    container.appendChild(middleDiv);
    
    var rightDiv = document.createElement("div");
    rightDiv.className = "footer-right";
    
    var redesHeader = document.createElement("h2");
    redesHeader.textContent = "Redes Sociales";
    rightDiv.appendChild(redesHeader);
    
    var socialLinks = document.createElement("div");
    socialLinks.className = "social-links";
    
    ["facebook", "instagram", "whatsapp", "tiktok", "twitter"].forEach(function(network) {
        var a = document.createElement("a");
        a.href = "#";
        a.className = network;
        var img = document.createElement("img");
        img.src = "../public/svg/" + network + ".svg";
        img.alt = "";
        a.appendChild(img);
        socialLinks.appendChild(a);
    });
    
    rightDiv.appendChild(socialLinks);
    container.appendChild(rightDiv);
    
    footer.appendChild(container);
    
    var copyright = document.createElement("div");
    copyright.className = "copyright";
    copyright.innerHTML = "&copy; Copyright <strong><span>Dreamy event</span></strong>. Casi todos los derechos reservados.";
    
    footer.appendChild(copyright);
  document.querySelector('#app').appendChild(footer);
 
}