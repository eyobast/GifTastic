/// <reference path="jquery-3.1.1.intellisense.js" />
var buttonNames = ["cat", "horse", "lion"];

function onLoad() {

    var buttonDiv = $("#buttonDiv");

    for (var i = 0; i < buttonNames.length; i++) {
        var button = $("<button></button>")
        button.text(buttonNames[i]);

        buttonDiv.prepend(button);
        button.click(function () {
            var imageDiv = $("#imageContainer");
            imageDiv.empty();
            var url = "https://api.giphy.com/v1/gifs/search?q=" +
                $(this).text() + "&api_key=5c281ffd50774151bbfaf5dc85b25558&limit=10";

            $.getJSON(url, function (json) {

                //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information
                
                if (json != "Nothing found.") {

                    //Display the poster and a message announcing the result
                    for (var i = 0; i < json.data.length; i++){
                        var img = $("<iframe />");
                        img.attr("src", json.data[i].embed_url);
                        imageDiv.append(img);
                    }
                }

            });

        });


    }
}



$(document).ready(function () {
    $("#pushButton").click(function () {
        alert($("#newButtonName").val());
        var buttonName = $("#newButtonName").val();
        buttonNames.push(buttonName);
        $("#buttonDiv").empty();
        onLoad();
    });
});


//$("#").on("click",function () {
//    alert("hello0");
//    
//});

