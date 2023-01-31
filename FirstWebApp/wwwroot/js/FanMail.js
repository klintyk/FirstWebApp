//document.getElementById("btn_send").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txt_from").value + ", Subject: " + document.getElementById("txt_subject").value + ", Message: " + document.getElementById("txt_msg"));
//})

$("#btn_send").click(function () {
    alert("From: " + $("#txt_from").val() + ", Subject " + $("#txt_subject").val() + ", Message: " + $("#txt_msg").val());

    $("#picgand").fadeToggle("slow");
})
