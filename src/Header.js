import React from "react";
import data from './data-1.json';
const obj1 = data.payload.chartMetaData.chartTitle
const obj2 = data.payload.chartMetaData.chartDescription
const Header = () => {
    return(
        <div className="ui container center">
            <div className="header" style={
                {margin:'5px',padding:'10px',
                backgroundColor:'lightgrey',
                fontFamily:'sans-serif',
                fontWeight:'bold'}
                
                }>{obj1}</div>
            <div className="header" style={
                {margin:'5px',marginTop:'15px',
                paddingBottom:'10px',
                borderBottom:'1px solid lightgrey',
                fontFamily:'sans-serif',
                }
                
                }>{obj2}</div>
        </div>
       
    );
};


export default Header;