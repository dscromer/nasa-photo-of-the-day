import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import './potd.scss'
import ModalPOTD from './Modal'
import styled from "styled-components";
import DateSelector from './DateSelector';
import headImg from '../photos/galaxy.jpg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #DCEDFF;
`
const Header = styled.div`
    background-image: url(${headImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`

const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Girassol', cursive;
    letter-spacing: 3.5px;
    text-shadow: 3px 3px #25283D;
`

const Date = styled.h3`
    font-size: 2.6rem;
    color: #94B0DA;
`

const Photo = styled.img`
    width: auto;
    height: 60vh;
    border-radius: 20px;
    border: 3px solid #94B0DA;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8F91A2;
    margin-top: 2%;
    width: 100%;
    height: 20vh;
`

function Potd() {
    const [data, setData] = useState({})
    const [startDate, setStartDate] = useState('');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=M05JlF0Bi1C55mhAmKNlfb3v7HcJq6IrksKirc1E&date=${startDate}`)
        .then(res => setData(res.data))
        .catch(err => `You hit an error: ${err}`)
    }, [startDate]);
    return (
        <Wrapper>
            <Header>
                <Title>{data.title}</Title>
            </Header>
            <Date>{data.date}</Date>
           <DateSelector startDate={startDate} setStartDate={setStartDate}/>
            <Photo alt={data.title} src={data.hdurl}/>
            <Info>
                <ModalPOTD />
            </Info>    
        </Wrapper>
    )
}

export default Potd;