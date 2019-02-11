var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");
app.get("/",function(req,res){
res.render("search");
});

app.get("/results",function(req,res){
var query=req.body.search;
var url="http://www.omdbapi.com/?s="+ query + "&apikey=thewdb";
request(url,function(error,response,body){
	if(!error && response.statusCode==200){
		var data=JSON.parse(body)
		res.render("results",{data:data})	}
});
});

app.listen(1338, '192.168.43.228',function(){
console.log("Movie app has started");
});