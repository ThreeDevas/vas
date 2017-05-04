var d5 = new Vue({
  el:".d5",
  data:{
    message:"I love you!"
  },
  methods:{
    reverseMessage:function(){
      this.message = this.message.split("").reverse().join("")
    }
  }
})
