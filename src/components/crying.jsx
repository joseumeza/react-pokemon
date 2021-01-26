import React, {useEffect, useState} from 'react';
import axios from '../axiosCry'


function Crying() {

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get();
            console.log(request.status)
            console.log(request.data)
            return request.data;
        }
        fetchData();
    }, [])
    

    return (
        <div>
            <h1>Hello world</h1>
        </div>

    )
};


export default Crying;