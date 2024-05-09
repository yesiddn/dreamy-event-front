import '../../styles/profile-overview.css'

function profileOverview(USER,API) {
    const container = document.createElement('div');
    container.classList.add('user-profile');


    const userPicLabel = document.createElement('label');
    userPicLabel.classList.add('user-profile-label')

    const userImg = document.createElement('img');
    userImg.src = API+'/'+USER.customer.image;

    const userFirstName = document.createElement('h1');
    userFirstName.textContent = USER.customer.name;
    userFirstName.classList.add('user-first-name');

    const userEmailAddress = document.createElement('h1');
    userEmailAddress.textContent = USER.email;
    userEmailAddress.classList.add('user-email');

    userPicLabel.appendChild(userImg);
    container.appendChild(userPicLabel);
    container.appendChild(userFirstName);
    container.appendChild(userEmailAddress);
    document.body.appendChild(container);

    console.log(API+'/'+USER.customer.image)
  }
  
  export default profileOverview;