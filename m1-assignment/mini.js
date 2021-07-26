var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo' onclick='myFunction()'>";
var closeList = "</li>";
var openCaptionTag ="<figcaption>";
var closeCaptionTag ="</figcaption>";
var openDescTag ="<p class='discription'>";
var closeDescTag ="</p>";
var captionTexts =[];
var descTexts =[];
for (var i=0; i<10; i++) {
        fileNames.push("photo"+(i+1));
        photos.push("<img src ='images/"+fileNames[i]+".jfif' class='image'alt='"+fileNames[i]+"' >");
        captionTexts.push("Boudhanath Stupa","Kathmandu City","Thamel","Pashupatinath Temple","Local Store","White Gumba","Durbar Square","Dal Bhat","Lord Buddha Statue","Baba Ji");
        descTexts.push("This is Boudhanath Stupa: an arial view.","This is Kathmandu City: an arial view.","This is Thamel: a street view.","Pashupatinath temple: World heritage site","This is local store: an local view.","This is White Gumba: a corner view."
        ,"This is Durbar Square: a front view.","This is Dal Bhat: a local food.","This is statue of lord Buddha: a side view.","They are baba ji: a view.");
        image = openList + photos[i]+ openCaptionTag +captionTexts[i]+ closeCaptionTag+openDescTag+descTexts[i]+closeDescTag+ closeList;
        imageList.push(image);
}
//<li id="photo" ><img src="images/photo1.jfif" class="image" alt="image1">
//<figcaption>Boudhanath Stupa</figcaption><p class="discription">This is Boudhanath Stupa: an arial view.</p></li>
document.getElementById("album").innerHTML = imageList;

// Info Box

       
function myFunction() {
        var OpenHeadingTag ="<h3 id='heading'>";
        var closeHeadingTag ="</h3>";
        var heading = [];
        var openTextInfoTag ="<p id='textInfo'>";
        var textInfo = [];
        var closeTextInfoTag ="</p>";
        var opentextLinkTag ="<p id='textLink' onclick='myFunction1()'>";
        var textLink = [];
        var closeTextLinkTag ="</p>";
        var inforBox;
        textLink.push("Click this to close");
        for (var i=0; i<=10; i++){

        heading.push("Boudhanath Stupa","Kathmandu City","Thamel","Pashupatinath Temple","Local Store","White Gumba","Durbar Square","Dal Bhat","Lord Buddha Statue","Baba Ji");
        textInfo.push("This is Boudhanath Stupa: an arial view.","This is Kathmandu City: an arial view.","This is Thamel: a street view.","Pashupatinath temple: World heritage site","This is local store: an local view.","This is White Gumba: a corner view."
                ,"This is Durbar Square: a front view.","This is Dal Bhat: a local food.","This is statue of lord Buddha: a side view.","They are baba ji: a view.");
        
        var head = heading[i+1];
        var body = textInfo[i+1];
        /*
        if photo1=
        */    
                inforBox = OpenHeadingTag + head +closeHeadingTag +openTextInfoTag +body +
                closeTextInfoTag + opentextLinkTag + textLink + closeTextLinkTag; 

        } 
        document.getElementById("infoBox").style.visibility ="visible";
        document.getElementById("infoBox").innerHTML = inforBox;
        

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
