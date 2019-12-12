$(document).ready(function () {
    
    $(window).scroll(function () { 
        var card = $('.card');
        var size = $(window).scrollTop();

        if (size < 300) {
            
           card.hide();
        }else if(size < 600){
            setInterval(card.slideDown("slow"), 100000);
        
            }
        

        $("#close").click(function () { 
            var card = $(".card")
            card.slideUp()
            if (card.slideUp()) {
                setInterval(card.hide(), 60000);
            }
         
        });
    });

    
  
});

