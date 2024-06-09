import Header from '../templates/Header.js';
import ResumeEvent from '../templates/ResumeEvent.js';
const ResumeEvents = (API,User) => {
    Header(User);
    ResumeEvent(API,User);
}
export default ResumeEvents;
