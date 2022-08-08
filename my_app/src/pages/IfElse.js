import React, { useState } from "react";
const IfElse =()=>{
    const [color, seTcolor]=useState("green")

    const ColorChange =()=>{
        seTcolor ("blur")
    }

    if(color==="blue"){
        
        return <section>
            <h1 style={{color:"blue"}}>This Is {color} {ColorChange()} color</h1>
        </section>
    }else if(color==="red"){
        return <section>
            <h1 style={{color:"red"}}>This Is {color} color</h1>
        </section>
    }else if(color==="green"){
        return <section>
            <h1 style={{color:"green"}}>This Is {color} color</h1>
        </section>
    }else{  
        return <section>
            <h1 style={{color:"black"}}>This Is {color} default color</h1>
            {color}
        </section>
    }

    var home = "/home"

    if(home === "/home"){
    
        return <>
            
            <h1>কন্ডিশন টি সঠিক হলে এই হোম ফেজ রির্টান করবে।</h1>
            
        </>

    }else{

        return <>
            
            <h1>কন্ডিশন টি মিথ্যা হলে এই ফেজ টি রির্টান করবে। </h1>

        </>

    }


}
export default IfElse;