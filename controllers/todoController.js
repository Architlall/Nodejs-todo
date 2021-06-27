var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
const { Mongoose } = require('mongoose');

module.exports = function(app){
  app.use(express.urlencoded({extended: true}));
 
  var i1=[];
mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemSchema={
  name:String
}
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({
  name: "Study",

});
const item2 = new Item({
  name: "cook",

});
const d = [item1,item2];
Item.insertMany(d,function(err)
{
  if(err){
    console.log(err);
  }
  else{
    console.log("success")
  }
});
app.get('/', function(req, res){
  res.render("list", {newListItem:i1});
});

app.post('/', function(req, res){
 i = req.body.n;
 i1.push(i);
console.log(i);
res.redirect("/");
});


app.delete('/todo/:item', function(req, res){
 data = data.filter(function(todo) {
   return todo.item.replace(/ /g, '-') !== req.params.item;
 });
 res.json(data);
});

};