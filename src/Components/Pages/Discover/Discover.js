import React from 'react';
import FakeData from "../../../FakeData/FakeData.json"
import SingleBook from './SingleBook';
import {  Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
const Discover = () => {
   const discover = useSelector((state)=> state?.FakeData);
  console.log(discover)
    return (
        <div>
           <Row xs={1} md={2} className="g-4">
{
            FakeData.map(getData=> <SingleBook
            key={getData._id}
            myData={getData}
            ></SingleBook> )
           }
</Row>
        </div>
    );
};

export default Discover;
