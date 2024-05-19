import ProfileOverview from "./ProfileOverview.js";
import UserOptions from "./UserOptions";

export default function UserSideBar(API, USER) {
    const container = document.createElement('div');
    container.classList.add('user-sidebar');

    const profileOverview = ProfileOverview(API, USER);
    const userOptions = UserOptions(container);

    // appends
    container.appendChild(profileOverview);
    container.appendChild(userOptions);
    return container;
}