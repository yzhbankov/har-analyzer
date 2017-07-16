/**
 * Created by iaroslav on 10.07.17.
 */
import express from 'express';
import uuid from 'uuid';
import * as db from '../utils/dbutils'

const router = express.Router();
const uid = uuid.v4;

router.get('/', (req, res)=> {
    res.send(uid());
});

router
    .get('/hars', (req, res)=> {
        db.getAllHars()
            .then(data=> {
                res.send(data)
            })
    })
    .get('/hars/:uid', (req, res)=> {
        db.getAllHars(req.params.uid)
            .then(data=> {
                res.send(data)
            })
    })
    .post('/hars', (req, res)=> {
        db.addHar(req.body)
            .then(data=> {
                res.send(data)
            })
    })
    .delete('/hars/:uid', (req, res)=> {
        db.deleteHar(req.params.uid)
            .then(data=> {
                res.send(data)
            })
    });

export default router;