import filterServicesByType from "../utils/filter-services-by-type";
import getTypeService from "../utils/get-type-service";

export default async function FilterBar({
  API,
  services,
  section,
  callback,
}) {
  const filterBar = document.createElement('ul');
  filterBar.classList.add('filter-bar');

  const typeServices = await getTypeService(API);

  typeServices.forEach((typeService) => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = typeService.imageType;
    img.alt = typeService.type;
    img.classList.add('filter-bar-img');

    const span1 = document.createElement('span');
    span1.classList.add('line');

    const span2 = document.createElement('span');
    span2.textContent = typeService.type;

    li.appendChild(img);
    li.appendChild(span1);
    li.appendChild(span2);

    li.addEventListener('click', () => {
      const servicesFiltered = filterServicesByType(
        typeService.id,
        services
      );
      callback(servicesFiltered, section);
    });

    filterBar.appendChild(li);
  });

  return filterBar;
}