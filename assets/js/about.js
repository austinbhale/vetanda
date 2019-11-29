$(function () {
    $(".column-media").click(function (event) {
        if (event.target.id == "") {
            return;
        }
        var img = document.getElementById("" + event.target.id);
        $("#myModal").css("display", "block");

        if (event.target.id[0] == "v") {
            $("#vid01").css("display", "block");
            document.getElementById("vid01").src = img.src;
            document.getElementById("caption").innerHTML = "video"
        } else {
            ($("#img01").css("display", "block"));
            document.getElementById("img01").src = img.src;
            document.getElementById("caption").innerHTML = img.alt;
        }

        $("#footer").css("z-index", "-1");
        $("#nav").css("display", "none");
    });
});

document.getElementsByClassName("close")[0].onclick = function () {
    $("#myModal").css("display", "none");
    $("#nav").css("display", "block");
    $("#vid01").css("display", "none");
    $("#img01").css("display", "none");
};