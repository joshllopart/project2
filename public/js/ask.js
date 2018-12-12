$(document).on("click", "#reqSubmit", function(e){

    e.preventDefault()
    
    //data validation
    if($("#req-emailInput").val().trim() == "" || $("#req-msgInput").val().trim() == "" ||$("#req-budgetInput").val().trim() == "" ||  $("#req-genderInput").val().trim() == "" ||  $("#req-catInput").val().trim() == ""){
        alert("You must fill out all required fields")
        return
    }

    if($("#req-msgInput").val().trim().length > 1000){
        alert("Messege Limited to 1000 characters")
        return
    }
    if($("#req-emailInput").val().trim().length > 45){
        alert("Email must be under 45 characters")
        return
    }
    if(!$.isNumeric($("#req-budgetInput").val().trim())){
        alert("Budget must be numeric")
        return
    }

    var dataObj = {
        "req_email": $("#req-emailInput").val().trim(),
        "req_msg": $("#req-msgInput").val().trim(),
        "budget": $("#req-budgetInput").val().trim(),
        "gender": $("#req-genderInput").val().trim(),
        "category": $("#req-catInput").val().trim()
    }
    console.log(dataObj)
    $.post("/api/post/new", dataObj)

    $(".modal").modal("toggle")

    $("#modBtn").on("click", function(){
        window.location.href = "/"
    })
});

