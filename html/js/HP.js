var menu = function(){
    $('#menubtn').toggle(
        function(){
        $('body').animate({
        left: "200px"
        }, 300);
    });
};
$(document).ready(menu);