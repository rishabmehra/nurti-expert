import { SECRET_KEY, API_BASE_URL } from '../../config/config';

// seperate serivces files into different folder
export const loginAction = (userId, password) => {
    // call the token API
    fetch(`${API_BASE_URL}/get/token`, {
            method: 'GET',
            headers: new Headers({ clientId: `${userId}`, clientSecret: SECRET_KEY, password: `${password}`})
        }
    )
    .then(res => res.json())
    .then(response => {
        console.log('++++++++', response);
        if(response.response.responseCode === 10) {
            // set error msg responseMessage to the store and pass it to the UI
        }
        // if responseCode is not equal to 10
        // redirect to dashboard page
    })
    .catch(error => {
        // set the error msg to the store and pass it to the UI
        console.log(error);
    })    
}