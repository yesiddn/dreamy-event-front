import CardService from "./Card";

export default function ListOfServices(services) {
  const list = document.createElement('div');
  list.classList.add('list-of-services');

  if (!services) {
    return null;
  }

  services.forEach((service) => {
    const card = CardService(service);
    list.appendChild(card);
  });

  return list;
}