alert('Hey World');

function zomg(num_IN){
  return 1975 + num_IN;
}

zomg(75);

$(".band.head").css("padding", "56px 0 14px 0");
$("figure").css({
  "padding":"6px",
  "border":"1px solid #ededed",
  "background":"#f5f5f5",
});
//$("figure").css("background", "url(./images/bg_direction_nav.png)");

$(".flexslider").css({
  "margin":"0px",
  "padding":"0 21px 0 21px", //expand sides for arrow
})

$(".flexslider .slides img").css({
  "width":"100%",
})

$(".flex-direction-nav a").css({
  "background":"url(./images/bg_direction_nav_00.png) no-repeat 0 0",
  "width":"29px",
  "height":"27px",
  "margin":"-35px -21px 0",
  "display":"block",
  "position":"absolute",
  "top":"50%",
  "cursor":"pointer",
  //"text-indent":"-9999px",
  "-webkit-transition":"all .3s ease",
  //"opacity":"0",
});

/*
$(".flex-control-nav li a:hover").css({
  "background":"#f5f5f5",
})
*/

$(".flex-control-nav li a").hover(
    function(){
      $(this).toggleClass('hover-highlight'); //toggle on and off highlight class
    }
    /*  //Not as good; requires you to know previous color
    function () {
      $(this).css({"background":"#f5f5f5"});
    },
    function () {
      $(this).css({"background":"#a5a5a5"});
    }
    */
);

$(".flex-control-nav li a.flex-active, .flex-control-nav li a:hover").css({
//$(".flex-control-nav li a.flex-active").css({
  "background":"#f5f5f5",
})
//$("footer.container header").css("background", "url(../images/diagonal_dark.png) repeat");

$(".flex-control-nav li a").css({
  "display":"inline-block",
  "width":"14px",
  "height":"14px",
  "background":"#a5a5a5",
  "border":"1px solid #b5b5b5",

  "cursor":"pointer",

  "font":"0/0 a",
  "text-shadow":"none",
  "color":"transparent",

  "-webkit-border-radius":"10px",
  "-moz-border-radius":"10px",
  "border-radius":"9px",
});
