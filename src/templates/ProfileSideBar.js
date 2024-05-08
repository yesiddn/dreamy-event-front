import '../styles/profile-side-bar.css'

function ProfileSideBar() {

    const linkList = {
        perfil: ['../public/svg/info.svg', 'test'],
        contraseña: ['../public/svg/password.svg', 'test'],
    };

    const container = document.createElement('div');
    container.classList.add('profile-sidebar');

    const ul = document.createElement('ul');
    container.appendChild(ul);

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


    document.body.appendChild(container);


};

export default ProfileSideBar;