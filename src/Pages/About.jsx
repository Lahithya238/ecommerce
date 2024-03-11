import React, { useState } from 'react'
import Header from '../Components/Header'
import Subheader from '../Components/Subheader'
import ActionBar from '../Components/ActionBar'
import Popups from '../Components/Popups'
import Carsouel from '../Components/Carsouel'
import Pictures from '../Components/Pictures'


const About = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modeltitle, setmodeltitle] = useState("");

    const handleNewData = () => {
        console.log('handleNewData');
        handleShow();
        setmodeltitle("Add new data");
    }

    const handleDeleteData = () => {
        console.log('handleDeleteData');
        handleShow();
        setmodeltitle("Add delete data");
    }
    const Actiondata = [
        { title: "Add new data", action: handleNewData },
        { title: "Add delete data", action: handleDeleteData }
    ]
    return (
        <div>
            <Header />
            <Subheader pagetitle={'About'} subline={true} />
            <ActionBar actionList={Actiondata} />
            <Popups show={show} handleClose={handleClose} modeltitle={modeltitle} />
            <Carsouel />
            <h1>About</h1>
            <Pictures />
        </div>
    )
}

export default About