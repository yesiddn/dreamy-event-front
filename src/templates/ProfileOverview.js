import '../styles/profile-overview.css'

function profileOverview(USER) {
    const container = document.createElement('div');
    container.classList.add('user-profile');


    const userPicLabel = document.createElement('label');
    userPicLabel.classList.add('user-profile-label')

    const userImg = document.createElement('img');
    userImg.src = 'http://localhost:5173/'+ USER.customer.image;

    const userFirstName = document.createElement('h1');
    userFirstName.textContent = USER.customer.name;
    userFirstName.classList.add('user-first-name');

    const userEmailAddress = document.createElement('h1');
    userEmailAddress.textContent = USER.email;
    userEmailAddress.classList.add('user-email');



    console.log(USER);
    userPicLabel.appendChild(userImg);
    container.appendChild(userPicLabel);
    container.appendChild(userFirstName);
    container.appendChild(userEmailAddress);
    document.body.appendChild(container);
  }
  
  export default profileOverview;