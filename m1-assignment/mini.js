var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>";
var openCaptionTag ="<figcaption>";
var closeCaptionTag ="</figcaption>";
var openDescTag ="<p class='discription'>";
var closeDescTag ="</p>";
var captionTexts =[];
var descTexts =[];
for (var i=0; i<10; i++) {
        fileNames.push("photo"+(i+1));
        photos.push("<img src ='images/"+fileNames[i]+".jfif' class='image'alt='"+fileNames[i]+"' onclick='myFunction1()'>");
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

       
document.getElementsByClassName("discription").addEventListener("click",myFunction1)
function myFunction1() {
        document.getElementById("infoBox").style.visibility ="visible";
        /*
        var OpenHeadingTag ="<h3 id='heading'>";
        var closeHeadingTag ="</h3>";
        var heading = [];
        var openTextInfoTag ="<p id='textInfo'>";
        var textInfo = [];
        var closeTextInfoTag ="</p>";
        var opentextLinkTag ="<p id='textLink'><a href=''>";
        var textLink = [];
        var closeTextLinkTag ="</a></p>";
        var image = document.getElementClassName("image");
        
                heading.push("Boudhanath Stupa","Kathmandu City","Thamel","Pashupatinath Temple","Local Store","White Gumba","Durbar Square","Dal Bhat","Lord Buddha Statue","Baba Ji")
                textInfo.push("This is Boudhanath Stupa: an arial view.","This is Kathmandu City: an arial view.","This is Thamel: a street view.","Pashupatinath temple: World heritage site","This is local store: an local view.","This is White Gumba: a corner view."
                ,"This is Durbar Square: a front view.","This is Dal Bhat: a local food.","This is statue of lord Buddha: a side view.","They are baba ji: a view.");
                textLink.push("Click this to close");
                inforBox = OpenHeadingTag + heading +closeHeadingTag +openTextInfoTag +textInfo +
                closeTextInfoTag + opentextLinkTag + textLink + closeTextLinkTag;
                inforBox1.push(inforBox);*/
        
}
document.getElementById("infoBox").innerHTML = inforBox1;

