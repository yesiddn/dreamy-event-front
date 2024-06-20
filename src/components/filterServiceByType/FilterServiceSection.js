import '../../styles/filter-bar.css';
import FilterBar from '../../templates/FilterBar.js';
import ListOfServices from '../../templates/list-of-services.js';
import filterServicesByType from '../../utils/filter-services-by-type.js';

export default async function FilterServiceSection(API, services) {
  const servicesFiltered = filterServicesByType(
    services[0].typeService.id,
    services
  );

  const section = document.createElement('section');
  section.classList.add('filter-service-container');
  document.querySelector('#app').appendChild(section);

  const listOfServices = ListOfServices(servicesFiltered, 'card-user', API);
  const filterBar = await FilterBar({API, services, section, callback: insertServicesFiltered});
  
  section.appendChild(filterBar);
  section.appendChild(listOfServices);
}

function insertServicesFiltered(servicesFiltered, section) {
  document.querySelector('.list-of-services').remove();

  const newListOfServices = ListOfServices(servicesFiltered);
  section.appendChild(newListOfServices);
}