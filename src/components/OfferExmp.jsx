import React from 'react';
import Card from './Card'
import Img01 from "../assets/images/fast.jpg"
import Img2 from "../assets/images/batman.jpg"
import Img3 from "../assets/images/avatar.jpg"


function Main() {
  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card img={Img01} text="FAST AND FURIOS"/>
        <Card img={Img2} text="BATMAN"/>
        <Card img={Img3} text="AVATAR"/>
      </div>
    </div>
  );
}

export default Main;
