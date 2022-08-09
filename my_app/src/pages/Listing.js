// import React, { useState } from "react";

const DaTa = require("./json_Data.json")

require("https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css")

const LisTing =()=>{


    const DatilseFuntion =()=>{
            
    }
    const EditFuntion =()=>{
        
    }
    const DeleteFuntion =(id)=>{
        alert(id)
    }

    const MyData = DaTa.map((list, i)=>{
        return(
           
           <tr className="tr">
                <td className="td">{list["id"]}</td>
                <td className="td">{list["title"]}</td>
                <td><button onClick={DatilseFuntion()}>Datilse</button></td>
                <td><button>Edit</button></td>
                <td><button onClick={DeleteFuntion.bind(this,list["id"])}>Delete</button></td>
            </tr>
        )
        })




    return <section>

        <table className="table table color-red">
        <thead>
            <tr>
                <th className="">User ID</th>
                <th>User Title</th>
                <th>Status</th>
            </tr>
        </thead>

        {MyData}

        </table>

    </section>


}

export default LisTing