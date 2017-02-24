
$(function(){
    $('#edit-msg').on({

        'show.uk.modal': function(event){

            console.log("Modal is visible.", event);
        },

        'hide.uk.modal': function(){
            console.log("Element is not visible.");
        }
    });
})