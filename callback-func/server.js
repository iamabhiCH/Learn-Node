const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.send("Welcome to the my web store.");
})

app.get('/about', function(req,res){
    res.send("This is about page of our website. We are leading web dev  company in India. THANKS for visiting..")
})

app.get('/contact', function(req,res){
    var contact_details = {
        phone: 741852952,
        email: 'ab.company@gmail.com',
        address : 'NH-58, opposite to subharti university, meerut.'
    }
    // res.send("Here are our contact details, please contact us for any kind of business related query.","\n",contact_details);
    res.send(contact_details);
})

app.listen(3003, () =>{
    console.log('Server is running on port 3003');
})