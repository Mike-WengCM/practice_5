// document.write('<script src="jquery-3.5.1.min.js"></script>'); 

$(document).ready(function(){
    $('.box-a').click(function(){
        $('.box-b').toggle();
    })

    $('.product-title').click(function(){
        $('.content').toggle();
    })


})