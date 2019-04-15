import axios from 'axios';
import baseUrl from '../config/devUrl';

const HEADERS = {
    "Content-type": "application/json"
};

export default params => {
    return new Promise((resolve, reject) => {
        let url = params.useOwnUrl ? params.url : baseUrl + params.url;
        let headers = HEADERS;
        // if (params.notNeedToken) {
        //     headers = HEADERS;
        // } else {
        //     headers = {token: params.token, ...HEADERS};
        // }
        axios({
            method: params.method || "GET",
            url,
            data: {...params.data},
            timeout: params.timeout || 120000,
            headers
        })
        .then(res => {
            // if (res.data.code === "0") {
            //     resolve(res.data.data);
            // } else {
            //     reject(res.data);
            // }
            resolve(res.data);
        })
        .catch(err => {
            reject(err);
        });
    });
}