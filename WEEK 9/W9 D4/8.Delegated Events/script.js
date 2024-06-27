// Until now we were performing click on li(child) for ol parent.

// If we perform the click on the child,that child element if added in the future dynamically,will never get

// Event Delegation
// Instead of listening to the click event on the child(li),listen to the click event directly on to the parent(ol)

// Delegated Events
// The events that we apply directly on to the parent,where we would listen to the event for a newly added child.

$(function(){

    $("ol").on("click", function(){
        $(this).css("color", "blue")
    })

    $("ol").append("<li><a href='#'>Mangenta</a></li>")
})