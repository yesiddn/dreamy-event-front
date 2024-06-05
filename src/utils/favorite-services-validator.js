
export default function favoriteServiceValidator(favorites, serviceId){
    for (let item of favorites) {
        if (item.serviceId === serviceId) {
            return true;
        }
    }
    return false;
}