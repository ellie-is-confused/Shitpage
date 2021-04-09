const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', async function(req, res){
    res.render(__dirname + '/veiws/index.ejs')
})

app.listen(80)