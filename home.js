function home(){
  document.getElementById('blank').classList='opaque';
  var d = new Date();
  d = d.getTime();
  var i = setInterval(
    function(){
      var v = new Date();
      v.getTime();
      if((v-d)>500){
        clearInterval(i);
        window.location='/';
      }
    },10);
}