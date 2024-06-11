
function UserOptions() {

    const linkList = {
        'Mi perfil': ['../public/svg/profile.svg', 'summary-option'],
        Actualizar: ['../public/svg/info.svg', 'info-option'],
        Contraseña: ['../public/svg/password.svg', 'pass-option'],
        'Cerrar sesion': ['../public/svg/log-out.svg', 'logout-option'],
    };

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('user-options');
    
    const ul = document.createElement('ul');
    optionsContainer.appendChild(ul);

    for (let key in linkList) {
        const li = document.createElement('li');
        li.id = linkList[key][1];
        const span = document.createElement('span');
        const iconImg = document.createElement('img');
        const arrowImg = document.createElement('img');
        arrowImg.classList.add('right-arrow-icon');

        iconImg.src = linkList[key][0];
        arrowImg.src = '../public/svg/right-arrow.svg';

        span.textContent = key;

        li.appendChild(iconImg);
        li.appendChild(span);
        li.appendChild(arrowImg);
        ul.appendChild(li);
    }


    return optionsContainer;

};

export default UserOptions;