/**
 * Created by iaroslav on 10.07.17.
 */
import express from 'express'
import bodyParser from 'body-parser'
import router from './router/api'
import * as db from './utils/dbutils'

const app = express();
db.setUpConnect();

app.use(bodyParser.json({limit:1024102420, type:'application/json'}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return next();
});

app.use('/', router);
app.use('/', express.static('public'));

const server = app.listen(8080, ()=>{
    console.log('Server listening on port 8080');
});

