/*    fadeMeIn.js 
 *    version v1.0 (11/2013)
 *    Copyright 2013 Kole Reece.
 *    Released under the MIT license.
 *    Dependencies: jQuery v1.4+ 
 */

(function($){

  var maxSpeed=2000;
  var minSpeed=100;
  var random=0;

  
  $.fn.fadeMeIn=function(option){
   
    var obj=this;  // the jquery objeact;
  
   if(typeof option === undefined)
   {
   
    option={};
   
   }
   
   if(option.speed==="random")
   {
	  option.speed= Math.floor(Math.random()*10000);
   }   
   
   
   
    console.log(option.speed);
   return obj.each(function() {

     $(this).fadeIn(option.speed);

  });
  
  
  }

})(jQuery);