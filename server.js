const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.use('/users', routes.users);

app.listen(3000, (req,res) => {
    console.log("Listening via port 3000")
})
