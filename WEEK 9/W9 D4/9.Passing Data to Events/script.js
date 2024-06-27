$(function(){
    $("button").click({valid: "User is valid", invalid: "Please Enter Correct user & Password"}, function(e){
        const user = $("#user").val()
        const pass = $("#pass").val()

        if(user == 'Sambit' && pass == 'doodle'){
            alert(e.data.valid)
        } else {
            alert(e.data.invalid)
        }
    })
})