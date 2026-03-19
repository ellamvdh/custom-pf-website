let  language = "Dutch"
//let language = localStorage.getItem("lang") || "Dutch";
let languageIMG= document.getElementById("englishButtonPNG");
const languageButton = document.getElementById("language-button");

languageButton.onclick = function(){
    if(language == "Dutch"){
        language = "English";
        languageIMG.src = "images/nl.png"
        console.log(language);
    }else if(language == "English"){
        language = "Dutch";
        languageIMG.src = "images/eng.png"
          language = "Dutch"
        console.log(language);
    }
}
