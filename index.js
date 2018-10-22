

// Get the modal



createModal("myModal1", "myImg1", "img1", "caption1", "description1", "montecarlo");
createModal("myModal2", "myImg2", "img2", "caption2", "description2", "neuralnetwork");
//insertImage("myImg2", "img02", "caption2", "description2", "neuralnetwork");

function createModal(modalName, imgName, modalImg, capt, descr, projectName)
{
  var modal = document.getElementById(modalName);
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(imgName);
  var modalImg = document.getElementById(modalImg);
  var captionText = document.getElementById(capt);
  var descriptionText = document.getElementById(descr);
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      descriptionText.innerHTML = getDescription(projectName);
  }



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

modal.addEventListener('click',function(){
  this.style.display="none";
})

}


function getDescription(projectName)
{
  if (projectName === "montecarlo")
    return "This project is in progress";

  else if(projectName === "neuralnetwork")
    return "In this project me and one other student designed a neural network using tensorflow and Javascript"
    + " together with p5 to create an interactive AI that first trains on 70000 handwritten digits"
    + " from the MNIST database and then guesses what the user inputs" ;
}
