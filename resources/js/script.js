$(document).ready(function(){

  /* This is for sicky navbar */
    // $('.js--section-features').waypoint(function(direction){
    //     if(direction=="down"){
    //         $('nav').addClass('sticky');
    //     }else{
    //         $('nav').removeClass('sticky');
    //     }

    // }, {
    //     offset: '70px'
    //   });

      /*  Scrol on buttons  */
      // $('.js-scroll-to-plans').Click(function(){
      //   $('html,body').animate({scrollTop: $('.js-section-plans').offset().top});
      // });

      $('.js-scroll-to-plans').on('click', function(){
        $('html, body').animate(
          {
            scrollTop: $('.js-section-plans').offset().top
        },1500);
      })
});


/*           
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
}
*/