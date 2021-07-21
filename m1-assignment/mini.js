//Variable decleration
var openList;
var closeList;
var fileNames = [];
var photos = [];
var imageList = [];
var openCaptionTag ;
var closeCaptionTag ;
var openDescTag;
var closeDescTag;
//<li id="photo"><img src="images/photo2.jfif" class="image" alt="image2">
//<figcaption>Kathmandu City</figcaption><p class="discription">This is Kathmandu City: an arial view.</p></li>
openList= "<li id='photo'>";
closeList= "</li>";
openCaptionTag= "<figcaption>";
closeCaptionTag= "</figcaption";
openDescTag= "<p class='discription'>";
closeDescTag= "</p>";
for (let i=0; i<11; i++) {
        fileNames += "photo"+i;
        photos.push("<img src='images/"+fileNames+".jfif' class='image' >")

        image = openList + photos + openCaptionTag + closeCaptionTag+ openDescTag + closeDescTag+ closeList;
        imageList.push(image);
}
//Display all ten image codes stored in the array
document.getElementById("album").innerHTML = imageList;
