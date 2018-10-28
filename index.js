

// Get the modal



createModal("myModal1", "myImg1", "img1", "caption1", "description1", "montecarlo");
createModal("myModal2", "myImg2", "img2", "caption2", "description2", "neuralnetwork");
createModal("myModal3", "myImg3", "img3", "caption3", "description3", "mern");
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
    return "This project was started on a blank file and then developed into an actual raytracer using only C++ code and the GLM library."
    + " One of the walls as well as one of the spheres uses specular reflections. The floor, "
    + "ceiling and the remaining walls and objects uses a Lambertian based BRDF. Total amount of triangles in the scene is 28."
    + " Triangle intersections are calculated using the Möller Trumbore algorithm. The scene is lit up by one lightsource";

  else if(projectName === "neuralnetwork")
    return "This application is designed using a neural network with Tensorflow.js and Javascript"
    + " together with p5 to create an interactive AI. It is trained on 70000 handwritten digits"
    + " from the MNIST database. The user can write a digit on the canvas with the help of the mouse and the application will guess"
    + " what number is on the screen. The predictions are instantanious,"
    + " the only thing that takes time is the first time it needs to train. This takes 1-3 minutes based your computer";

  else if(projectName === "mern")
    return "In this project" ;
}
