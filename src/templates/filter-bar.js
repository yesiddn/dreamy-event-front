import '../styles/filter-bar.css';
export default async function FilterBar() {
    const body = document.querySelector("body");
    const section = document.createElement("section");
    const ul = document.createElement("ul");
    ul.id = "serviceList";
    ul.classList.add("filter-bar");

    const services = [
        { name: "Lugares", icon: "../public/svg/places.svg" },
        { name: "Pasteleria", icon: "../public/svg/cake.svg" },
        { name: "Transporte", icon: "../public/svg/bus.svg" },
        { name: "Comida", icon: "../public/svg/cutlery.svg" },
        { name: "Ambientación", icon: "../public/svg/speaker.svg" },
        { name: "Decoración", icon: "../public/svg/decor.svg" },
        { name: "Fotografía y video", icon: "../public/svg/camera.svg" }
    ];

    services.forEach(service => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = service.icon;
        img.alt = service.name;
        img.classList.add("filter-bar-img");

        const span1 = document.createElement("span");
        span1.classList.add("line");

        const span2 = document.createElement("span");
        span2.textContent = service.name;

        li.appendChild(img);
        li.appendChild(span1);
        li.appendChild(span2);

        ul.appendChild(li);
    });

    section.appendChild(ul);
    body.appendChild(section);
};
