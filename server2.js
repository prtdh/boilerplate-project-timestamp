const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("preet")
})
const port=3500
app.listen(process.env.PORT||port,()=>{
    console.log("app is listening");

    const datetext=2015-12-25;
    const date=new Date(datetext);
    console.log(date.getFullYear());
    console.log(date.getDate());

    console.log(date.getDay());
    console.log(date.getMonth());

})
