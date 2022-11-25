let images = null;
function data(){
    const request = new Request('https://api.tvmaze.com/search/shows?q='+search);
    fetch(request)
    .then((response) => {
      if (response.status === 200) {
        images = response;
        return response.json();
        
      } else {
        throw new Error('Something went wrong on API server!');
      }
    })
    .then((response) => {
      //console.debug(response);
        

        for(let i=0; i<response.length; i++){
            let url = (response[i].show.image.medium);

            let cont = document.getElementById("gif");
            let im = document.createElement("img");
            im.setAttribute("src",url);
            cont.appendChild(im);
        }
        
      // …
    }).catch((error) => {
      console.error(error);
    });
}

let btn = document.getElementById("search");
let search = "";
btn.addEventListener("click", function(){
    search = document.getElementById("txt").value;
    console.log("button clicked")
    console.log(search);
    data();
});



const lightgreen = document.getElementById("lightgreen");
const lightblue = document.getElementById("lightblue");
const pink = document.getElementById("pink");
const yellow = document.getElementById("yellow");
const body = document.getElementById("body");


lightgreen.addEventListener("click", function(){
  body.style.backgroundColor = "lightgreen";
  lightgreen.style.backgroundColor = "black";
  lightblue.style.backgroundColor = "white";
 yellow.style.backgroundColor = "white";
  pink.style.backgroundColor = "white";
});

lightblue.addEventListener("click", function(){
  body.style.backgroundColor = "lightblue";
   lightgreen.style.backgroundColor = "white";
  lightblue.style.backgroundColor = "black";
 yellow.style.backgroundColor = "white";
  pink.style.backgroundColor = "white";
});

pink.addEventListener("click", function(){
  body.style.backgroundColor = "pink";
  lightgreen.style.backgroundColor = "white";
  lightblue.style.backgroundColor = "white";
 yellow.style.backgroundColor = "white";
  pink.style.backgroundColor = "black";
});

yellow.addEventListener("click", function(){
  body.style.backgroundColor = "yellow";
  lightgreen.style.backgroundColor = "white";
  lightblue.style.backgroundColor = "white";
 yellow.style.backgroundColor = "black";
  pink.style.backgroundColor = "white";
});