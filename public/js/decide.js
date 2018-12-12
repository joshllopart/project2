$(document).on("click", "#helpBtn", function () {
    $(".modal").modal("toggle")
});

$(document).on("click", "#helpModBtn", function(){
    window.location.href = "help/" + $("#help-catInput").val().trim()
})