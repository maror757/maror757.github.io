// Get the modal
createModal("myModal1", "myImg1", "img1", "caption1", "description1", "montecarlo");
createModal("myModal2", "myImg2", "img2", "caption2", "description2", "neuralnetwork");
createModal("myModal3", "myImg3", "img3", "caption3", "description3", "mern");
createModal("myModal4", "myImg4", "myVid4", "caption4", "description4", "tui");
createModal("myModal5", "myImg5", "img5", "caption5", "description5", "infovis");
createModal("myModal6", "myImg6", "img6", "caption6", "description6", "kbynapp");
createModal("myModal7", "myImg7", "myVid7", "caption7", "description7", "helicopter");
createModal("myModal8", "myImg8", "img8", "caption8", "description8", "terragen");
createModal("myModal9", "myImg9", "img9", "caption9", "description9", "dota2");
createModal("myModal10", "myImg10", "myVid10", "caption10", "description10", "drstrange");

function createModal(modalName, imgName, modalImg, capt, descr, projectName)
{
  var modal = document.getElementById(modalName);
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(imgName);
  var modalImg = document.getElementById(modalImg);
  var captionText = document.getElementById(capt);
  var descriptionText = document.getElementById(descr);
  if(projectName === "tui" || projectName === "helicopter" || projectName == "drstrange")//If its a video project
  {
    img.onclick = function() {
      modal.style.display = "block";
      //modalImg.source = modalImg.getElementsByTagName("source").src;
      captionText.innerHTML = this.alt;
      descriptionText.innerHTML = getDescription(projectName);
    }
  }
  else
  {
    img.onclick = function()
    {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      descriptionText.innerHTML = getDescription(projectName);
    }
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

modal.addEventListener('click',function(){
  this.style.display="none";
  var iframes = document.getElementsByTagName("iframe");
  if (iframes != null) {
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
    }
  }
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
    return "This project was mostly focused on learning and understanding the backend and server related functionality in"
    + " the creation of a website.  The logo is therefore just for fun and almost no css has been prioritised."
    + " The functionality implemented is a third party log-in system using either Facebook or google+, then each"
    + " user can choose a computer to book. The second it is booked the state of all other computers on any other"
    + " usersession will be automatically updated and disabled for booking." ;

    else if(projectName === "tui")
      return "During my B.Sc project me and six other students worked on a project called TUI. We worked"
      + " according to the agile developement method Scrum. TUI stands for Tangible user interface and is defined as"
      + " an interactive interface that digitally visualize information based on a physical environment. What we did was"
      + " visualize the microcosmos on a large touch screen, using 3D-printed disks for physical interaction and a camera"
      + " for tracking. It uses Aruco and OpenCV for tracking and calculating physical objects on the screen and Cinder as the API for the graphics.";

    else if(projectName === "infovis")
      return "This is a web application that visualizes a very large multivariate"
      + " dataset using two different visualization techniques. It is both interactive and adaptive. The code is written in Javascript, CSS and"
      + " HTML and uses some of the jQuery and D3.js library. The bubblegraph visualizes the ammount of words a character from the show"
      + " Southpark has said in total. The Sankey diagram is used to visalize the frequency of the selected characters top 5 most used words."
      + " The manuscript is taken from Kaggle.com";

    else if(projectName === "kbynapp")
      return "This project was a collaboration with Kneippbyn Resort Visby - a 5 star amusement park / camping located on the island Gotland, Sweden."
      + " The aim was to create a prototype of a possible application focused primarily on the guests visiting the park."
      + " Several instances of field research and analysis were conducted to obtain the relevant and most sought of functionality in the mobile app."
      + " The app was designed in InVision and the different states designed in photoshop.";
    else if(projectName === "helicopter")
      return "The helicopter model was created in 3dsMax and"
      +" the calculations and physics were calculated in Matlab. These were then later translated and implemented into an"
      +" Unreal Engine 4 environment in order to visually present and test the simulation. The video above shows the simulation "
      + " which is solely based on different power levels of the engine, no manipulation of the x and y coordinates are involved,"
      + " only real physical mathematical calculations changes the altitude of the helicopter (with some physical forces ignored).";
    else if(projectName === "terragen")
      return "This project was made in Terragen 4, which is a procedural planet renderer created by Planetside Software."
      + " The aim was to replicate a real life scenery (Högklint, Gotland - Sweden) by using the tools provided in the software";
    else if(projectName === "dota2")
      return "I created and implemented a courier in the online video game Dota 2. A Courier is a unit"
      + " inside the game that delivers items to a player. The courier was created in 3D using 3dsMax. Every courier in the game"
      + " needs 5 animations, one for ground walking, ground idle, flying, flying idle and dying. These animations were created"
      + " using Maya and the textures for the model was designed in photoshop.";
    else if(projectName === "drstrange")
      return "Marvels popular character Dr.Strange can perform various forms of magic, one of his spells is creating a portal"
      + " which instantly teleports anyone that travels through it to a designated location."
      + " The portal was created using a Python script in Autodesk-Maya, utilizing their built in particle system."
      + " The compositing and some special effects where added post production using Premiere Pro.";
}
