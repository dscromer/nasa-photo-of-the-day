import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
//import Moment from 'react-moment'

const MyDatePicker = styled(DatePicker)`
    margin-bottom: 10px;
`

function DateSelector(props) {
    console.log(props);
    return (
      <MyDatePicker selected={props.startDate} onChange={date => {props.setStartDate(date)}} />
    );
  };

export default DateSelector;