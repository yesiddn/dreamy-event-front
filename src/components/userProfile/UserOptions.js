
function UserOptions() {

    const linkList = {
        informacion: ['../public/svg/info.svg', 'href'],
        contraseña: ['../public/svg/password.svg', 'href'],
        'cerrar sesion': ['../public/svg/log-out.svg', 'href'],
    };

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('profile-sidebar');

    const ul = document.createElement('ul');
    optionsContainer.appendChild(ul);

    for (let key in linkList) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const separator = document.createElement('div');
        const iconImg = document.createElement('img');
        const arrowImg = document.createElement('img');

        iconImg.src = linkList[key][0];
        arrowImg.src = '../public/svg/right-arrow.svg';

        separator.classList.add('separator');
        span.textContent = key;

        li.appendChild(iconImg);
        li.appendChild(span);
        li.appendChild(arrowImg);
        ul.appendChild(li);


        if (key !== Object.keys(linkList)[Object.keys(linkList).length - 1]) {
            ul.appendChild(separator);
        }
    }

    return optionsContainer;

};

export default UserOptions;