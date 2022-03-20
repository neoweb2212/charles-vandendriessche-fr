

// modèle d'obfuscation des liens
var job = false;
function update_dom(){
  if(job == false)
  {
    $(".obf").each(function(){
      var url = atob($(this).attr("rel"));
      var anchor = $(this).html();
      $(this).replaceWith('<a href="'+url+'" target="_blank">'+anchor+'</a>');
    });
    job = true;
  }
}
$(function(){
  $("body").mousemove(update_dom);
  $("body").scroll(update_dom);
});