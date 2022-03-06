import React, { useState } from 'react';
import './Furniture.css';
import furniterImg from '../../img/catalog/661 1.png'

function Furniture() {
    // let [furniterImg, setFurnitureImg] = useState("")

  return (
    <div className="furniture">
        <img src={furniterImg} alt="" className='furniture__img' />
        <div className="furniture__name"><span className='furniture__name--category'>кровать</span><span className="furniture__name--model"> kassi </span></div>
        <div className="furniture__cost"><span>100 000</span> <span className='currency'>$</span> </div>
    </div>
  )
}

export default Furniture