$(document).ready(function () {

   setTimeout(function () {
      $('.degree-element-wrapper').each(function () {
         var $this = $(this).find('.degree-element');
         var realValue = $this.attr("data-level-ani");
         $this.attr("data-level", realValue);
      });
   },500);

});