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

export function addHar(data) {
    const har = Har({
        uid: data.uid,
        title: data.title,
        text: data.text,
        date: new Date()
    });
    return har.save();
}

export function deleteHar(uid) {
    return Har.findByUid(uid).remove()
}