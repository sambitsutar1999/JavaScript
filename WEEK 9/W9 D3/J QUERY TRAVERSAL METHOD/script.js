//--------------------jQuery Traversal Methods - 2--------------------

$(function(){
    // $("#myh1").next().css({backgroundColor: "blue"})

    // $("#myh1").nextAll().css({"backgroundColor": "silver","color": "orange"})

    // $("#myul").nextAll().css({"backgroundColor": "silver","color": "pink"})

    // $("#myp").prev().css({"backgroundColor": "silver","color": "green"})

    // $("#myul").prevAll().css({"backgroundColor": "silver","color": "cyan"})

    // $("#myul").before("<h2>Waaaaaaoooooooo</h2>")

    // $("#myh1").after("<h2>Hmmmmmmmmmmmmmmm</h2>")

    // $("li").parent().css({"color": "green", "fontSize": "40px"})

    // $("li").parents().css({"color": "green", "fontSize": "40px"})

    // $("#myul").children().css({"color": "green", "fontSize": "40px"})
})


// ----------------jQuery Filtering Methods----------------------

$(function(){
    $("h1").first().css("color", "green")

    $("h1").last().css("color", "red")

    $("h1").eq(1).css("color", "blue")

    $("div").filter("#seconddiv").css("color", "cyan")
})