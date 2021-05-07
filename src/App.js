import './App.scss';
import React from 'react';
import Carousel from "./components/carousel/Carousel";
import carouselData from './mock/carouselData';

function App() {
    return (
        <div className="App">
            <div className="parent">
                <Carousel data={carouselData}/>
            </div>
        </div>
    );
}

export default App;
