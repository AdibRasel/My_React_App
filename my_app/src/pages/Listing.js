// import React, { useState } from "react";

const DaTa = require("./json_Data.json")

require("https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css")

const LisTing =()=>{


    const MyData = DaTa.map((list, i)=>{
        return(
           
           <tr className="tr">
                <td className="td">{list["id"]}</td>
                <td className="td">{list["title"]}</td>
                <td><button>Submit</button></td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
        )
        })


    return <section>

        <table className="table">
        <thead>
            <tr>
                <th>User ID</th>
                <th>User Title</th>
                <th>Status</th>
            </tr>
        </thead>

        {MyData}

        </table>

    </section>


}

export default LisTing