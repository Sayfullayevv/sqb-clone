import React from 'react'
import { useContext } from "react";
import { ShopContext } from "../Context/Context";

function Feedbacks() {
    const { feedback } = useContext(ShopContext);
    // console.log(feedback);
    
    return (
        <>
            <h1>Mijozlarning taklif va savollari:</h1>
            {
                feedback.map((e)=>{
                    return(
                        <h1>{e}</h1>
                    )
                })
            }
        </>
    )
}

export default Feedbacks;