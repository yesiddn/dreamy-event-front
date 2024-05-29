import Alert from "../templates/Alert";
import fetchData from "./fetch-data";

const ENDPOINT = '/comments/save';

export default async function(API,data){
    const response = await fetchData({
        API: API + ENDPOINT,
        method: 'POST',
        data
    });

    if (response.status === 200) {
        Alert('comment-add');
        return response.json();
    }else{
        Alert('comment-error');
        return null;
    }
}