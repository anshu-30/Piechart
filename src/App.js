import React from 'react'
import data from './data-1.json';
import {useEffect,useState} from 'react';

import Header from "./Header";
import Pie from './Pie.js';
import Values from './Values.js';

const obj1 = data.payload.costData.serviceCosts

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return {r,g,b};
}
function App() {
  let arr = new Array(obj1.length);
  let arr2=new Array(obj1.length);
  for(var i=0;i<obj1.length;i++)
    {
      const color=getRandomRgb();
      arr2[i]='rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
      arr[i]='rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + 0.8 + ')';
    }
  useEffect(() => {
    for(var i=0;i<obj1.length;i++)
    {
      const color=getRandomRgb();
      arr2[i]='rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
      arr[i]='rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + 0.7 + ')';
    }
    
  });
  return (
    <div className="ui container center" style={{margin:'30px'}}>
      <Header />
      
      <Pie  colors={arr} colors2={arr2}/>
      <Values colors={arr} colors2={arr2}/>
    </div>
  );
};

export default App;
