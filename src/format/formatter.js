import Vue from 'vue'

Vue.filter('dataFormatter', function(value){
    if(value == '活体信息已填写'){
        return '填你妹啊'
    }
})