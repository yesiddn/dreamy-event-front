import CardService from "./Card";

export default function ListOfServices(services, typecard = 'card-user', API) {
  const list = document.createElement('div');
  list.classList.add('list-of-services');

  if (!services) {
    return null;
  }

  services.forEach((service) => {
    const card = CardService(service, typecard, API);
    list.appendChild(card);
  });

  return list;
}