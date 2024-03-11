import React from 'react'
import Header from '../Components/Header'
import Subheader from '../Components/Subheader'
import Carsouel from '../Components/Carsouel'
import Pictures from '../Components/Pictures'


const Home = () => {
    return (
        <div>
            <Header />
            <Subheader pagetitle={'Home'} subline={false} />
            <Carsouel />
            <h1 style={{ textAlign: 'center' }}>Home</h1>
            <Pictures />
        </div>
    )
}

export default Home