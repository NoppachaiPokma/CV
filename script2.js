document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('div').style.animation= "move 5s forwards";
    document.querySelector('.back').onclick= function(){
        document.querySelector('body').style.animation= "movee 250ms forwards";
      }
})