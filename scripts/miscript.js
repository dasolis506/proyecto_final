function toggleBloque(){
    var demo= document.getElementById("demo");
       var mastexto= document.getElementById("mastexto"); 
    
    if (mastexto.style.display === "none"){
        demo.textContent = "mostrar menos  ";
        mastexto.style.display="block";

    }else{
        demo.textContent = "Mostrar más ";
        mastexto.style.display="none";
    }

}
