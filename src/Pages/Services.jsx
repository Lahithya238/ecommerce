import React, { useState } from 'react'
import Header from '../Components/Header'
import Subheader from '../Components/Subheader'
import ActionBar from '../Components/ActionBar'
import Popups from '../Components/Popups'
import Carsouel from '../Components/Carsouel'
import Pictures from '../Components/Pictures'


const Services = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modeltitle, setmodeltitle] = useState("");

    const handleServices = () => {
        console.log('handleServices');
        handleShow();
        setmodeltitle("Add new services");
    }
    const handleDeleteServices = () => {
        console.log('handleDeleteServices');
        handleShow();
        setmodeltitle("Add delete services");
    }
    const Actiondata = [
        { title: "Add new services", action: handleServices },
        { title: "Add delete services", action: handleDeleteServices }
    ]
    return (
        <div>
            <Header />
            <Subheader pagetitle={'Services'} subline={true} />
            <ActionBar actionList={Actiondata} />
            <Popups show={show} handleClose={handleClose} modeltitle={modeltitle} />
            <Carsouel />
            <h1>Services</h1>
            <Pictures />
        </div>
    )
}

export default Services