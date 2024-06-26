$(function(){

    $(".login_form").hide()
    // $("#change_button").click(function(){
    //     $(".login_form, .register_form").toggle()

    // })

    $("#change_button").bind("click", function(){
        $(".login_form, .register_form").toggle()
    })
})