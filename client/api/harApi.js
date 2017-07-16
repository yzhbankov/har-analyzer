/**
 * Created by Iaroslav Zhbankov on 16.07.2017.
 */
import axios from 'axios';

export default {
    generateLink(){
        return axios.get('http://localhost:8080/link');
    }
}