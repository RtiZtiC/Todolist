const express = require("express");
const app= express();
const date=require(__dirname+"/date.js")
var items=["buy food","cook food","eat food"];
var workitems=[];
const bodyParser = require("body-parser");


app.set('view engine','ejs');

app.use(express.static(__dirname+"/Public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,resp)
{

  let day=date();
  resp.render("list",{listvalue:day , newlist : items});
});


app.get("/work",function(req,resp)
{
  resp.render("list",{listvalue:"Work List" , newlist : workitems});
});


app.get("/about",function(req,resp)
{
  resp.render("about");
});



app.post("/",function(req,resp)
{
  console.log(req.body);
  let item= req.body.newItem
  if (req.body.list !== "Work")
  {
    items.push(item);
    resp.redirect("/");
  }
  else
  {
    workitems.push(item)
    resp.redirect("/work");
  }


});



app.listen(process.env.PORT || 3000 ,function()
{
  console.log("server running at given port");
});
