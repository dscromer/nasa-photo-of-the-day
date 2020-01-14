import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './potd.scss'
import ModalPOTD from './Modal'

function Potd() {
    const [data, setData] = useState({})
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=WuAfUApgp4rxAF0QTZRAIQ0WeyXq8uTPjBi27NjP')
        .then(res => setData(res.data))
        .catch(err => `You hit an error: ${err}`)
    }, [])

    console.log(data);
    return (
        <div className='wrapper'>
            <div className='head'>
                <h1 className='title'>{data.title}</h1>
            </div>
            <h3 id='date'>{data.date}</h3>
            <img className='image' alt={data.title} src={data.hdurl}/>
            <div className='info'>
                <ModalPOTD />
            </div>    
        </div>
    )
}

export default Potd;