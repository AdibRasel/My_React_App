function submit(){
    // s.preventDefault()
    // input value 
    var Student_name = document.getElementById("name").value;
    var father_name = document.getElementById("father").value;
    var mother_name = document.getElementById("mother").value;
    var subject_name = document.getElementById("subject").value;
    var mobile_no = document.getElementById("mobile").value;

    if(Student_name === "", father_name === "", mother_name === "", subject_name === "", mobile_no === "" ){
        window.alert("Please Submit Your All information")
    }else{
        // window.alert("Your are welcome")
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var tbody = document.getElementById("tbody")
        tbody.appendChild(tr)
        tr.appendChild(td)


        var td = document.createElement("td");
        td.innerHTML = Student_name;
        tr.appendChild(td)

        var td = document.createElement("td");
        td.innerHTML = father_name;
        tr.appendChild(td)
        
        var td = document.createElement("td");
        td.innerHTML = mother_name;
        tr.appendChild(td)

        var td = document.createElement("td");
        td.innerHTML = subject_name;
        tr.appendChild(td)
        var td = document.createElement("td");
        td.innerHTML = mobile_no;
        tr.appendChild(td)


        console.log(tr)

    }
}








var http = require("http")
var server = http.createServer(function(req, res){

    if(req.url=="/home"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>Home</h1>")
        res.end()
    }else if(req.url == "/about"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>about</h1>")
        res.end()
    }else if(req.url=="/contact"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>contant</h1>")
        res.end()
    }else{
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>not found</h1>")
        res.end()
    }
    res.end("Hello Bangladesh")
});
server.listen(3000);
console.log("Server run Success")
