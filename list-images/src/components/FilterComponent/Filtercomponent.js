import React, { useState } from "react";
import ImageComponent from "../ImageComponent/Imagecomponent";
import data from '../../data/imageList.json';

export default function FilterComponent(props) {

  const [miId, setMyId] = useState(1);
  const [miText, setMyText] = useState('');
  let myImage = {};

  const handleChangeId = event => {
    console.log('valor id', event.target.value);
    setMyId(event.target.value);
    console.log(data);
    let myImage = data.filter(item => item.id === event.target.value);
    console.log(myImage);
  }

  const handleChangeText = event => {
    console.log('valor txt', event.target.value);
    setMyText(event.target.value);
    console.log(data);
    let myImage = data.filter(item => item.text === event.target.value);
    console.log(myImage);
  }

  return (
    <><form>
      <div>Filtro de imagenes</div>
      <input type="text" value={miId} onChange={handleChangeId} />
      <input type="text" value={miText} onChange={handleChangeText} />
    </form>
      <ImageComponent id={myImage.id} src={myImage.photo} randNumber={myImage.randNumber} alt={myImage.text} />
    </>);
}