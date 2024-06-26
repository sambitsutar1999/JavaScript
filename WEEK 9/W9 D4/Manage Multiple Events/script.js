// $(function(){
//     $("div").on("click mouseenter", function(){
//         $(this).css({"backgroundColor": "purple"})
//     })
// })

$(function () {
    $("div").on({
        click: function () {
            $(this).css("backgroundColor", "red")
        },
        mouseleave: function () {
            $(this).css( "backgroundColor", "green" )
        }
    })
})

// this keyword refers to the HTML element on which the event is performed.