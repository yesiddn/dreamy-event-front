function ProfileOverview(API, USER) {
    const overviewContainer = document.createElement('div');
    overviewContainer.classList.add('user-profile-overview');

    const userPicLabel = document.createElement('label');
    userPicLabel.classList.add('user-profile-overview-pic')

    const userImg = document.createElement('img');
    userImg.src = API+'/'+USER.customer.image;

    const userFirstName = document.createElement('h1');
    userFirstName.textContent = USER.customer.name;
    userFirstName.classList.add('user-first-name');

    const userEmailAddress = document.createElement('h1');
    userEmailAddress.textContent = USER.email;
    userEmailAddress.classList.add('user-email');

    userPicLabel.appendChild(userImg);
    overviewContainer.appendChild(userPicLabel);
    overviewContainer.appendChild(userFirstName);
    overviewContainer.appendChild(userEmailAddress);
    return overviewContainer;
  }
  
  export default ProfileOverview;