var menu = function(){
    $('#menubtn').click(function(){
        $('body').animate({
            left: "200px"
        }, 300);
    });
};
$(document).ready(menu);