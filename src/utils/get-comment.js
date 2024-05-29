import Alert from "../templates/Alert";
import fetchData from "./fetch-data";

const ENDPOINT = '/comments/byService'
export default async function getComment(API,serviceId){
    const response = await fetchData({
        API: `${API}${ENDPOINT}/${serviceId}`,
        method: 'GET'
    })

    if (response.status === 200) {
        return response.json();
    }else{
        Alert('error-getComment')
        return null;
    }
}