import React, { Suspense } from 'react';
import data from '../../data/imageList.json';

const ImageComponent = React.lazy(() => import('../ImageComponent/Imagecomponent'));

export default function ListComponent(props) {

  //console.log(data);

  const listItems = data.map((item) =>
    <Suspense fallback={<div></div>}>
      <ImageComponent id={item.id} src={item.photo} randNumber={item.randNumber} alt={item.text} />
    </Suspense>
  );

  return (
    <><div key="1">Lista de imagenes</div>
      <div key="2">{listItems}</div></>
  );
}
