import axios from 'axios';

export class RequestService {
    constructor() { }

    get = (url) => {



        return new Promise((resolve, reject) => {



            axios.get(url)
                .then(response => {
                    if (response.data) {
                        resolve(response.data)
                    }
                })
                .catch(error => {
                    reject("Error: " + error)
                });
        });
    }
}