import express from 'express';

const app =express();


app.get('/',(req,res)=>{
    res.send('hello worrld');
})

app.post('/data',(req,res)=>{
    const data = req.body;
    console.log(data);
    res.send('Data received');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})