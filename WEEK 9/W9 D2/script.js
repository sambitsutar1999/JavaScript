// $(function(){
//     //Fading --> removed slowly,added slowly



//     // $(".myh1").fadeOut(3000) --> class name
//     // $("#myh1").fadeIn(2000) --> Id

//     // $("h1").fadeOut(5000) --> tag Name

//     // $(".box3").fadeOut(3000) //GREEN BOX 3(REMOVED)
//     // $(".box3").fadeIn(4000) //GREEN BOX 3 and DUPULICATE GREEN BOX 3(Comeback)
//     // $(".box3").fadeToggle(3000)

//     //Opacity : 0 (completely removed) & 1 (visible)

//     // $(".box1").fadeTo(4000, 0.2)


// // Hode and Show Method

//     // $(".box1").hide(4000)
//     // $(".box2").hide(5000)
//     // $(".box3").hide(6000)

//     // $(".box1").show(1000)
//     // $(".box2").show(2000)
//     // $(".box3").show(3000)



//     $(".box3").toggle(3000)



// })


// $(function(){
//     // $(".box1").slideUp(5000)
//     // $(".box2").slideUp(5000)
//     // $(".box3").slideUp(5000)

//     // $(".box1").slideDown(5000)
//     // $(".box2").slideDown(5000)
//     // $(".box3").slideDown(5000)

//     $(".box3").slideToggle(5000)



// })

// $(function(){
//     $(".box3").animate({
//         "margin-left": "300px"
//     },5000)

//     $(".box2").animate({
//         "margin-left": "400px"
//     },5000)

//     $(".box1").animate({
//         "margin-left": "500px"
//     },5000)
// })

//   ----------------Animate Using Parameters---------------

$(function(){
    $(".box3").animate({
        marginLeft: "300px",
        width: "400px",
        height: "500px",
        opacity: 0.3
    },5000,"swing")


    $(".box2").animate({
        marginLeft: "300px",
        width: "400px",
        height: "500px",
        opacity: 0.3
    },5000,"linear")
})