/**
 * Created by iaroslav on 10.07.17.
 */
import mongoose from 'mongoose'
import '../models/harModel.js'

const Har = mongoose.model('Har');

export function setUpConnect() {
    mongoose.connect('mongodb://localhost:27017/hars');
}

export function listHars() {
    return Har.find({});
}

export function findHar(uid) {
    return Har.findOne({_id: uid});
}

export function addHar(data) {
    data = JSON.stringify(data);
    const har = Har({
        data: data,
        date: new Date()
    });
    return har.save();
}

export function deleteHar(uid) {
    return Har.findByUid(uid).remove()
}