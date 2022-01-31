const express = require('express')
const app = express()
const port = 3306
const mysql = require('mysql');
var cors = require('cors')

const con = mysql.createConnection({
    host: "myggstoredb.chbtfqbwnyt9.us-east-1.rds.amazonaws.com",
    user: "ggstore_user",
    password: "ggstore_user"
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/products', (req, res) => {

    console.log('Request received');

    con.connect(function(err) {
        con.query(`SELECT * FROM CHECKOUT ORDER BY id`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
            if (fields) console.log(fields);
        })
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
