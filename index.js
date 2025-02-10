let http= require("http");
let url= require("url");

let server = http.createServer(async(req,res)=>{
    
let q=url.parse(req.url,true);
var data = await fetch("https://fakestoreapi.com/products")
var data_json =  await data.json();
if((q.query.cat == "m")){
let filter_data = data_json.filter((data)=>{
    return data.category === "men's clothing";
})
res.write(JSON.stringify(filter_data));
res.end();
}else if(q.query.cat == "w"){
    let filter_data = data_json.filter((data)=>{
        return data.category === "women's clothing";
    })
    res.write(JSON.stringify(filter_data));
    res.end()
}else{
    res.write(JSON.stringify(data_json));
    res.end()
}
})

var port = 3000;
server.listen(port,()=>{
    console.log("server is running on port");
})