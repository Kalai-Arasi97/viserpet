const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors()); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'viserpet'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/sendmessage', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO sendmessage (name, email, message) VALUES (?, ?, ?)';
  connection.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error storing message:', err);
      res.status(500).send('Error storing message');
      return;
    }
    console.log('Message stored successfully');
    res.status(200).send('Message stored successfully');
  });
});

app.post('/register', (req,res)=>{

    if (!req.body.uname || !req.body.uemail || !req.body.upassword) {
        return res.status(400).json({error: 'Missing required fields'});
    }
    const {uname, uemail, upassword} = req.body;

    const query = 'INSERT INTO users (uname, uemail, upassword) VALUES (?,?,?)';
    connection.query(query, [uname, uemail, upassword], (err, result) => {
        if(err) {
            console.error("Error registering user", err);
            res.status(500).send('Error registering user');
            return;
        }
        console.log('User Registered Successfully');
        res.status(200).send('User Registered Successfully');
    });
});

app.post('/login', (req,res) => {
  const { uemail, upassword } = req.body;
  const query = 'SELECT * FROM users WHERE uemail = ? AND upassword = ?';
  connection.query(query, [uemail, upassword], (err, results) => {
    if(err) {
      console.error('Error executing Query:', err);
      res.status(500).json({error: 'Internal Server Error'});
      return;
    }

    if(results.length === 0){
      return res.status(401).json({error:'Invalid Email or Password'});
    }
    res.json({message:'Login Successful'});
  });
});


// app.post('/newarrivals', (req,res) => {
//   const {proimg, proname, price, strike} = req.body;
//   const query = 'INSERT INTO newarrivals (proimg, proname, price, strike) VALUES (?,?,?,?)';
//   connection.query(query, [proimg, proname, price, strike], (err,result) => {
//     if (err) {
//       console.error('Error inserting new arrival:', err);
//       res.status(500).send('Error inserting new arrival');
//       return;
//     }
//     console.log('New Arrival inserted successfully');
//     res.status(200).send('New arrival inserted successfully');
//   });
// });



app.post('/newarrivals', upload.single('proimg'), (req,res) => {
  const {proname, price, strike} = req.body;
  const proimg = req.file.buffer.toString('base64');

  const query = 'INSERT INTO newarrivals (proimg, proname, price, strike) VALUES (?,?,?,?)';
  connection.query(query, [proimg, proname, price, strike], (err, result) => {
    if(err){
      console.error('Error inserting new arrival:', err);
      res.status(500).send('Error inserting new arrival');
      return;
    }
    console.log('New arrival inserted successfully');
    res.status(200).send('New arrival inserted successfully');
  });
});



app.post('/trending', upload.single('proimg'), (req,res) => {
  const {proname, price, strike} = req.body;
  const proimg = req.file.buffer.toString('base64');

  const query = 'INSERT INTO trending (proimg, proname, price, strike) VALUES (?,?,?,?)';
  connection.query(query, [proimg, proname, price, strike], (err, result) => {
    if(err){
      console.error('Error inserting new arrival:', err);
      res.status(500).send('Error inserting Trending details');
      return;
    }
    console.log('Trending Details inserted successfully');
    res.status(200).send('Trending Details inserted successfully');
  });
});

app.post('/productdetails', upload.single('productImg'), (req,res) => {
  const {productName, rating, originalPrice, offerPrice} = req.body;
  const productImg = req.file.buffer.toString('base64');

  const query = 'INSERT INTO productdetails (productImg, productName, rating, originalPrice, offerPrice) VALUES (?,?,?,?,?)';
  connection.query(query, [productImg, productName, rating, originalPrice, offerPrice], (err, result) => {
    if(err){
      console.error('Error inserting Product Details:', err);
      res.status(500).send('Error inserting Product Details');
      return;
    }
    console.log('Product Details inserted successfully');
    res.status(200).send('Product Details inserted successfully');
  });
});


app.post('/aboutimage', upload.single('aboutImg'), (req,res) => {
  // const {productName, rating, originalPrice, offerPrice} = req.body;
  const aboutImg = req.file.buffer.toString('base64');

  const query = 'INSERT INTO aboutimages (aboutImg) VALUES (?)';
  connection.query(query, [aboutImg], (err, result) => {
    if(err){
      console.error('Error inserting About Image:', err);
      res.status(500).send('Error inserting About Image');
      return;
    }
    console.log('About Image inserted successfully');
    res.status(200).send('About Image inserted successfully');
  });
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
