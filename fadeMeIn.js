/*    fadeMeIn.js 
 *    version v1.0 (11/2013)
 *    Copyright 2013 Kole Reece.
 *    Released under the MIT license.
 *    Dependencies: jQuery v1.4+ 
 */

(function($){

  var maxSpeed;
  var minSpeed;
  

  
  $.fn.fadeMeIn=function(option){
   
    var obj=this;  // the jquery objeact;
  
   if(typeof option === undefined)
   {
   
    option={};
   
   }
  
   

   return obj.each(function() {

     $(this).fadeIn();

  });
  
  
  }

})(jQuery);