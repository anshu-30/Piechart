import React from "react";
import data from './data-1.json';

const obj1 = data.payload.costData.serviceCosts
const obj2= data.payload.costData.taxValue
const obj3= data.payload.costData.totalCost

var currency="$";
if(obj1[0].amount.currencyCode==="INR") currency = "INR";

const Values = (props) => {
    const c=props.colors;
    const c2=props.colors2;
    
    return(
        <div className="ui container center">
            <div>
                <div style={{margin:'5px',
                paddingBottom:'10px',
                borderBottom:'1px solid lightgrey',
                }}></div>
            </div>
            <div className="header" >
                {obj1.map((data,index) => 
                    <div style={
                        {margin:'5px',marginTop:'10px',
                        paddingBottom:'10px',
                        borderBottom:'1px solid lightgrey',
                        fontFamily:'sans-serif',
                        }
                        
                        }>
                        <span style={{marginRight:'10px',display:'inline-block',height:'20px',width:'20px',backgroundColor:c2[index]}}></span>
                        {data.fullName}  <span style={{float:'right'}}>{currency}  {data.amount.amount}</span></div>
                    
                    )
                }
            </div>
            <div className="header" >
                {obj2.map((data) => 
                    <div style={
                        {margin:'5px',marginTop:'10px',
                        paddingBottom:'10px',
                        borderBottom:'1px solid lightgrey',
                        fontFamily:'sans-serif',
                        }
                        
                        }>{data.fullName} <span style={{float:'right'}}>{currency}  {data.amount.amount}</span></div>
                    
                    )
                }
            </div>
            <div className="header" >
                <div style={
                    {margin:'5px',marginTop:'10px',
                    paddingBottom:'10px',
                    fontFamily:'sans-serif',
                    fontWeight:'bold'
                    }
                    
                    }>Total <span style={{float:'right'}}>{currency}  {obj3.amount.amount}</span>
                </div>
            </div>
            
        </div>
       
    );
};


export default Values;