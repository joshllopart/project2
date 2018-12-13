$(document).ready()
var reqId
//on answer submit
$(document).on("click", "#ans-submitBtn", function (e) {
    e.preventDefault()

    //data validation
    if ($("#ans-msgInput").val().trim() === "" || $("#ans-linkInput").val().trim() === "") {
        alert("Please fill out all required fields")
        return
    }
    if ($("#ans-msgInput").val().trim().length > 1000) {
        alert("Message can only be up to 1000 characters long")
        return
    }
    if ($("#ans-linkInput").val().trim().length > 500) {
        alert("Links can not exceed 500 characters")
        return
    }

    var dataObj = {
        "res_msg": $("#ans-msgInput").val().trim(),
        "shop_link": $("#ans-linkInput").val().trim(),
        "req_id": reqId
    }
    console.log(dataObj)
    $.post("/api/post/answer", dataObj)
    $("#ansSub").modal("toggle")
})

//on page load

    params = window.location.href.split("/")
    console.log(params)
    if (params.length === 6) {
        link = params[5]
        link = link.split("----")
        link = link.join("/")
        console.log(link)
        $("#ans-linkInput").val(link)
    }

    category = params[4]
    $.ajax({
        method: "GET",
        url: "/api/get/random/" + category
    }).then(function (response) {
        if (response === "no results") {
            $("#noResults").modal("toggle")
            return
        }

        $("#req-body").text(response.req_msg)
        $("#req-budget").text(response.budget)
        $("#req-gender").text(response.gender)
        $("#req-cat").text(response.category)
        reqId = response.id
        $("#matchCon").addClass("fadeInUp")
    })

$(document).on("click", "#helpModBtn", function () {

    window.location.href = $("#help-catInput").val().trim()
});

$(document).on("click", "#modBtn", function () {
    window.location.href = "/"
});

$(document).on("click", "#ans-refresh", function () {
    location.reload()
});
