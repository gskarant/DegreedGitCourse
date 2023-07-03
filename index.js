const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.get('/',(req, res)=>{
    res.send('Hello world changed again');
});

app.listen(PORT, (req, res)=> {
 console.log(`app is running on port ${PORT}`);
})