// //局部禁用当前这个类型的错误
// /* eslint-disable no-unused-vars */
// import vue from 'vue' 默认引用的就是runtime-only版本的，不带解析器
import Vue from 'vue/dist/vue.esm'//是我们自己找到的带解析器的版本
import app from "@/app";

const vm = new Vue({
    el:'#app',
    components:{
        app,
    },
    template:'<app />'
})
// const vm = new Vue({
//     el:'#app',
//     render: h => h(app)
// })