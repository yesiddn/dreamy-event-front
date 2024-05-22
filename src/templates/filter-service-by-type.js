import '../styles/filter-bar.css';
import getTypeService from '../utils/get-type-service';
export default async function FilterServiceByType(API) {
  const section = document.createElement('section');
  const ul = document.createElement('ul');
  ul.id = 'serviceList';
  ul.classList.add('filter-bar');

  document.querySelector('#app').appendChild(section);

  const services = await getTypeService(API);

  services.forEach((service) => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = service.imageType;
    img.alt = service.type;
    img.classList.add('filter-bar-img');

    const span1 = document.createElement('span');
    span1.classList.add('line');

    const span2 = document.createElement('span');
    span2.textContent = service.type;

    li.appendChild(img);
    li.appendChild(span1);
    li.appendChild(span2);

    ul.appendChild(li);
  });

  section.appendChild(ul);
}
