import React from "react";
import data from './data-1.json';

const obj1 = data.payload.costData.serviceCosts
const obj2= data.payload.costData.totalCost

let percent = new Array(obj1.length);
let str=new Array(obj1.length);
for(var i=0;i<obj1.length;i++)
{
    var amt = parseFloat(obj1[i].amount.amount);
    var total = parseFloat(obj2.amount.amount);
    
    percent[i]=(((amt/total)*100));
}
for(var i=obj1.length-2;i>=0;i--)
{
    percent[i]+=percent[i+1];
}
for(var i=0;i<obj1.length;i++)
{
    percent[i]=percent[i].toString();
    str[i]="calc( " + percent[i] + " * 31.42 / 100) 31.42";
}
const obj3 = obj1.filter((data,index) => index!=0)

var currency="$";
if(obj1[0].amount.currencyCode==="INR") currency = "INR";

const Pie = (props) => {
    const c=props.colors;
    const c2=props.colors2;
    
    return(
        
        <div className='center' style={{display:'flex' ,alignContent:'center',justifyContent:'center',margin:'50px'}}>

            <div className="header" >
                
                <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 20 20">
                
                <circle r="5" cx="10" cy="10" stroke={c2[0]} stroke-width="5" />
                {obj3.map((data,index) => 
                    <circle r="5" cx="10" cy="10" stroke={c2[index+1]} stroke-width="5" stroke-dasharray={str[index+1]} transform="rotate(-90) translate(-20)" />
                    
                    )
                }
                <circle r="5" cx="10" cy="10" stroke-width="10" fill="white"></circle> 
                <text x="50%" y="50%" text-anchor="middle"  stroke-width="0.5px" dy=".4em" fontFamily="sans-serif" fontSize="1.5px">{currency} {obj2.amount.amount}</text>
                </svg>
            </div>
        
        </div>
       
    );
};


export default Pie;