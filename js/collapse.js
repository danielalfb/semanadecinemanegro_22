function sessionCollapsible() {
    $(".hidden").hide();
    $(".sessionTitle").click(function () {
        $(this).nextAll(".postBox").slice(0, 10).toggle();
    });
    $(".sessionTitleAfetos").click(function () {
        $(this).nextAll(".postBoxAfetos").slice(0, 12).toggle();
    });
    $(".sessionTitle1").click(function () {
        $(this).nextAll(".postBox1").slice(0, 1).toggle();
    });
    $(".sessionTitle2").click(function () {
        $(this).nextAll(".postBox2").slice(0, 6).toggle();
    });
    $(".sessionTitle3").click(function () {
        $(this).nextAll(".postBox3").slice(0, 5).toggle();
    });
    $(".sessionTitle6").click(function () {
        $(this).nextAll(".postBox6").slice(0, 5).toggle();
    });
    $(".pulsaoDeVida1").click(function () {
        $(this).nextAll(".postBoxPulsaoVida1").slice(0, 5).toggle();
    });
    $(".sessionTitleIbejis1").click(function () {
        $(this).nextAll(".postBoxIbejis1").slice(0, 10).toggle();
    });
    $(".sessionTitleIbejis2").click(function () {
        $(this).nextAll(".postBoxIbejis2").slice(0, 10).toggle();
    });
    $(".sessionTitleDistopia").click(function () {
        $(this).nextAll(".postBoxDistopia").slice(0, 10).toggle();
    });
}

function collapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

$(document).ready(function () {
    $("#button").on("click", function () {
        $("#lightbox").fadeIn(1000);
        $(this).hide();
        var videoURL = $("#iframeVideo").prop("src");
        videoURL += "?autoplay=1";
        $("#iframeVideo").prop("src", videoURL);
    });
    $("#close-btn").on("click", function () {
        var videoURL = $("#iframeVideo").prop("src");
        videoURL += "?stop=1";
        $("#iframeVideo").prop("src", videoURL);
        $("#lightbox").fadeOut(500);
        $("#button").show(250);
    });
});
