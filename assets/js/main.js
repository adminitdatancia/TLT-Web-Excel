var $document = $(document.body)

/*$(function(){

  clickedButtons()

})


function clickedButtons() {
  $(".nav-link").click(function(){
    $(".nav-link").removeClass('active')
     $(".nav-link").css({"font-weight":"normal","color":"black"});
    $(this).addClass('active')
    $(this).css({"font-weight":"bold","color":"#902E3E"});
  })
}*/

 $(window).ready(function () {
            //Smooth scrolling when click to nav
             $(".nav-link").click(function(){
                 $(".nav-link").removeClass('active')
                 $(".nav-link").css({"font-weight":"normal","color":"black"});
                 $(this).addClass('active')
                 $(this).css({"font-weight":"bold","color":"#902E3E"});
            })
           $(window).scroll(function () {
                onScrollHandle();
                
            });
            function onScrollHandle() {
                
                //Navbar shrink when scroll down
               // $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
                
                //Get current scroll position
                var currentScrollPos = $(document).scrollTop();
                //Iterate through all node
                $('#navbarText > ul > li > a').each(function () {
                    var curLink = $(this);
            
                    var refElem = $(curLink.attr('href'));
                    //Compare the value of current position and the every section position in each scroll
                    if ((refElem.position().top <= currentScrollPos) && (refElem.position().top + refElem.height() > currentScrollPos)) {
                        //Remove class active in all nav
                        $('#navbarText > ul > li').removeClass("active");
                        //Add class active
                        curLink.addClass("active");
                         $(this).css({"font-weight":"bold","color":"#902E3E"});
                
                        
        
                    }
                    else {
                        curLink.parent().removeClass("active");
                       $(this).css({"font-weight":"normal","color":"black"});
                
                    }
                    
                    
                });
                
            }
        });