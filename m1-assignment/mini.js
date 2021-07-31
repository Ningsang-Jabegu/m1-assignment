


var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo' class='lightbox-toggle'>";
var closeList = "</li>";
var openCaptionTag ="<figcaption>";
var closeCaptionTag ="</figcaption>";
var openDescTag ="<p class='discription'onclick='myFunction()'>";
var closeDescTag ="</p>";
var captionTexts =[];
var descTexts =[];
for (var i=0; i<10; i++) {
        fileNames.push("photo"+(i+1));
        photos.push("<img src ='images/"+fileNames[i]+".jfif' class='image lightbox-toggle'alt='"+fileNames[i]+"' >");
        captionTexts.push("Boudhanath Stupa","Kathmandu City","Thamel","Pashupatinath Temple","Local Store","White Gumba","Durbar Square","Dal Bhat","Lord Buddha Statue","Baba Ji");
        descTexts.push("This is Boudhanath Stupa: an arial view.","This is Kathmandu City: an arial view.","This is Thamel: a street view.","Pashupatinath temple: World heritage site","This is local store: an local view.","This is White Gumba: a corner view."
        ,"This is Durbar Square: a front view.","This is Dal Bhat: a local food.","This is statue of lord Buddha: a side view.","They are baba ji: a view.");
        image = openList + photos[i]+ openCaptionTag +captionTexts[i]+ closeCaptionTag+openDescTag+descTexts[i]+closeDescTag+ closeList;
        imageList.push(image);
}

document.getElementById("album").innerHTML = imageList;

// Info Box   
function myFunction() {
        var OpenHeadingTag ="<h3 id='heading'>";
        var closeHeadingTag ="</h3>";
        var heading = [
                "Boudhanath Stupa",
                "Kathmandu City",
                "Thamel",
                "Pashupatinath Temple",
                "Local Store",
                "White Gumba",
                "Durbar Square",
                "Dal Bhat",
                "Lord Buddha Statue",
                "Baba Ji"
        ];
        var openTextInfoTag ="<p id='textInfo'>";
       var textInfo = ["This is Boudhanath Stupa: an arial view.",
        "This is Kathmandu City: an arial view.",
        "This is Thamel: a street view.",
        "Pashupatinath temple: World heritage site",
        "This is local store: an local view.",
        "This is White Gumba: a corner view.",
        "This is Durbar Square: a front view.",
        "This is Dal Bhat: a local food.",
        "This is statue of lord Buddha: a side view.",
        "They are baba ji: a view."];
        var closeTextInfoTag ="</p>";
        var opentextLinkTag ="<p id='textLink' onclick='myFunction1()'>";
        var textLink = [];
        var closeTextLinkTag ="</p>";
        var inforBox;
        var head;var text;
        textLink.push("Click this to close");
        for (var i=0; i<10; i++) { 
                heading[i] = head;
                textInfo[i] = text;
                if(i>=0) {
                inforBox = OpenHeadingTag + head +closeHeadingTag +openTextInfoTag +text +
                closeTextInfoTag + opentextLinkTag + textLink + closeTextLinkTag; 
                document.getElementById("infoBox").style.visibility ="visible";
                document.getElementById("infoBox").innerHTML = inforBox;
                }
        } 
      }
function myFunction1() {
        document.getElementById("infoBox").style.visibility ="hidden";
}

// dropdown menu
function contact() {
     var select_content = document.getElementById ("select_contact");
     var hideUnhide = document.getElementById("hide-unhide");
     hideUnhide.value = select_content.options[select_content.selectedIndex].value;   
var getEmailLabel = "<label>Enter your Email</label>";
var getEmailBox = "<input type='email' value='email_address'>";
var getPhoneLabel = "<label>Enter your phone</label>";
var getPhoneBox = "<input type='number' value='phone_number'>";
var getFaxLabel = "<label>Enter your fax</label>";
var getFaxBox = "<input type='text' value='fax_number'>";
if (hideUnhide.value == Email) {
        document.getElementById("hide-unhide") = getEmailLabel + getEmailBox;
} else if (hideUnhide.value == Phone) {
        document.getElementById("hide-unhide") = getPhoneLabel + getPhoneBox;
}
else {
        document.getElementById("hide-unhide") = getFaxLabel + getFaxBox;
}
}


        