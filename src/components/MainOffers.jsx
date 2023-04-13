import React from 'react';
import Card from './Card'
import Img01 from "../assets/images/TOP GUN.jpg"
import Img2 from "../assets/images/Le Monde d'après.jpg"
import Img3 from "../assets/images/As bestas.jpg"
import Img4 from "../assets/images/Elviss.jpg"
import Img5 from "../assets/images/Presque.webp"
import Img6 from "../assets/images/Black Panther.webp"
import Img7 from "../assets/images/Aquaman et le Royaume perdu.jpg"


function Main() {
  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card img={Img01} text="Top Gun: Maverick 2h 11min " />
        <Card img={Img2} text="Le Monde d'après 1h 01min" />
        <Card img={Img3} text="As bestas 2h 17min" />
        <Card img={Img4} text="Elvis 2h 39min" />
        <Card img={Img5} text=" Presque 1h 32min" />
        <Card img={Img6} text="Black Panther: Wakanda Forever 1h 52min" />
        <Card img={Img7} text="Aquaman et le Royaume perdu 2h 52min " />
      </div>
    </div>
  );
}

export default Main;
