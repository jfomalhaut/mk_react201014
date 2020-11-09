import React from 'react';
import Axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

const Juso = () => {
    
    
    console.log(JUSO_API);
    console.log(JUSO_URL);
    
    const params = arr => {
        const data =[];
        for(let key in arr) {
            data.push(`${key}=${arr[key]}`);
        }
        return data.join('&')
    }

    const getJuso = () => {
        const _payload = {
            confmKey: JUSO_API,
            currentPage: 1,
            countPerPage: 10,
            keyword: '역삼동',
            resultType: 'json'
        };

        const payload = params(_payload);
        console.log(payload)
        Axios.get(`${JUSO_URL}?${payload}`).than(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <h1 onClick={getJuso}>Juso Component</h1>
    )
}

export default Juso;