$(function(){
    $("#hover").hover(function(){
        $(".container").css({"backgroundColor": "orange"})
    }, function(){
        $(".container").css({"backgroundColor": "green"})
    })
})