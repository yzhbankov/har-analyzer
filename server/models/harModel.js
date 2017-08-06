/**
 * Created by Iaroslav Zhbankov on 15.07.2017.
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const harSchema = new Schema({
    data: {type: String},
    date: {type: Date}
});

const Har = mongoose.model('Har', harSchema);