import Qs from 'qs';
import Vue from 'vue'
let $Common = {
    qs:(data)=>{
        return Qs.stringify(data);
    },
    stringify:(data)=>{
        return JSON.stringify(data)
    }
}
Vue.prototype.$Common = $Common;
export default function (app) {
    console.log("app")
    console.dir(app)
    app.$Common = $Common;
}