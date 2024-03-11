import React, { useState } from 'react'
import Header from '../Components/Header'
import Subheader from '../Components/Subheader'
import ActionBar from '../Components/ActionBar'
import Popups from '../Components/Popups'
import Carsouel from '../Components/Carsouel'
import Pictures from '../Components/Pictures'


const Users = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modeltitle, setmodeltitle] = useState("");


    const handleNewUser = () => {
        console.log('handleNewUser');
        handleShow();
        setmodeltitle("Add new user");
    }

    const handleDeleteUser = () => {
        console.log('handleDeleteUser');
        handleShow();
        setmodeltitle("Add delete user");
    }
    const Actiondata = [
        { title: "Add new user", action: handleNewUser },
        { title: "Add delete user", action: handleDeleteUser }
    ]
    return (
        <div>
            <Header />
            <Subheader pagetitle={'Users'} subline={true} />
            <ActionBar actionList={Actiondata} />
            <Popups show={show} handleClose={handleClose} modeltitle={modeltitle} />
            <Carsouel />
            <h1>Users</h1>
            <Pictures />
        </div>
    )
}

export default Users