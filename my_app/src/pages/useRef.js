
import React, { useEffect, useRef } from "react";

const UseRef =()=>{

    

    let UserName = useRef();
    let Password = useRef();

    function Submit(){
        var a = UserName.current.value;
        var b = Password.current.value;
        document.write("User Name if " + a + " Password is " + b)
    }


return <section>

        <input ref={UserName} placeholder="User Name" type="text"/>
        <input ref={Password} placeholder="Password" type="password"/>
        <button onClick={Submit}>Submit</button>

    </section>
}

export default UseRef;