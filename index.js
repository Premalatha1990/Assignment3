const fs = require('fs');
const express = require('express');
const app = express();
//const util = require('util');
//const read = util.promisify(fs.readFile);

const port= 6500;

//default router
app.get('/', (req,resp)=>{
    resp.send("<h1> Welcome to our Home Page </h1>");
})

//First API - Check employee ID and fetch employee data
app.get('/employee/:id', (req, resp) =>{
    fs.readFile('./firstdata.json', (err,result)=>{
        if(err){
        throw err;
        }else{
            resp.send(JSON.parse(result));
        }
    })
})


//Second API fetch project ID as input and fetch project information
app.get('/project/:id', (req, resp) =>{
    fs.readFile('./seconddata.json', (err,result)=>{
        if(err){
        throw err;
        }else{
            resp.send(JSON.parse(result));
        }
    })
})

//Display both details and data 
//app.get('/getemployeedetails', (req, resp) =>{
    // fs.readFile('./firstdata.json', (err,result)=>{
    //     if(err){
    //     throw err;
    //     }else{
    //         resp.send(JSON.parse(result));
    //     }
    // })

    // var promises= ['./firstdata.json', './seconddata.json'].map(function(_path){
    //     return new Promise(function(_path, resolve, reject){
    //         fs.readFile(_path, 'utf8', function(err, data){
    //             if(err){
    //                console.log(err);
    //                resolve("");    //following the same code flow
    //             }else{
    //                resolve(data);
    //             }
    //         });
    //     }.bind(this, _path));
    // });
    
    // Promise.all(promises).then(function(results){
    //     //Put your callback logic here
    //     response.writeHead(200, {"Content-Type": "text/css"});
    //     results.forEach(function(content){response.write(content)});
    //     response.end();
    // });
    


//})


app.listen(port,(err) => {
    if(err) throw err;
    console.log('server is running on :' + port);
});