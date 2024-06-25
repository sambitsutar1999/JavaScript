$(function(){
    // $("#myol").append("<li>MANGENTA</li><li>PURPLE</li>")

    // $("#myol").prepend("<li>Cyan</li><li>Golden</li>")

    // $("#myol").appendTo("<li>Cyan</li><li>Golden</li>") ---->INVALID SYNTAX

    // $(selector).append/prepend(content)

    // $(content).appendTo(selector)

    // $("<li>Cyan</li><li>Golden</li>").appendTo("#myol")

    // $("<li>Ocean</li><li>Dark Red</li>").prependTo("#myol")

    // $("#myol").after("<h1>I am from after Method</h1>")

    // $("#myol").before("<h1>I am from before Method</h1>")

    // $("<h1>I am from insertAfter Method</h1>").insertAfter("#myol")

    // $("<h1>I am from insertBefore Method</h1>").insertBefore("#myol")





//------------------------------Update Elements and Content---------------------------

// Replacing Element from the DOM


    // $("#myp").replaceWith("<a href='https://www.facebook.com' target='_blank'>Click Here</a>")

    // $("#myol").replaceWith("<ul><li>ORANGE</li></ul>")

    // $("li").replaceWith("<h1>Hello world</h1>")


    $("<a href='https://www.facebook.com' target='_blank'>Click Here</a>").replaceAll("#myp")


    //The Difference between replaceWith() and replaceAll is, replaceWith() will take content as the argument.
    // whereas replaceAll() will take selector as the arguent.
})