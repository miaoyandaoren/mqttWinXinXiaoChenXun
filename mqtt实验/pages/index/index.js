// index.js
// 获取应用实例
const app = getApp()
var mqtt = require('../../utils/mqtt.min.js')
var client = null
Page({
  data: {
  },

  onLoad() {
    // this.connectMqtt()
  },

  taphere(){
    console.log('hello world')
  },

  connectMqtt:function(){
    const options = {
      connectTimeout:4000,
      clientId:'mp',
      port:8084,
      username:'61be3a75545545d05fc58eedee9276fd',
      password:'61be3a75545545d05fc58eedee9276fd',
    }
    client = mqtt.connect('wxs://t.yoyolife.fun/mqtt',options)
    client.on('connect',(e)=>{
      console.log('服务器连接成功')
      client.subscribe('/iot/256',{
        qos:0
      },function(err){
        if(!err){
          console.log('订阅成功')
        }
      })
    })
    client.on('message',function(topic,message){
      console.log('收到'+message.toString())
    })

    client.on('reconnect',(error)=>{
      console.log('正在重连：',error)
    })

    client.on('error',(error)=>{
      console.log('连接失败：',error)
    })
  },

})
