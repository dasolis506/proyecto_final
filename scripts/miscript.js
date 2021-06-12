function toggleBloque(){
    var demo= document.getElementById("demo");
       var mastexto= document.getElementById("mastexto"); 
    
    if (mastexto.style.display === "none"){
        demo.textContent="mostrar menos";
        mastexto.style.display="block";

    }else{
        demo.textContent="Mostrar más";
        mastexto.style.display="none";
    }
};

function toggleMascotas(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    
    amigos_galeria.style.display="none";
    mascotas_galeria.style.display="block";
    hobbies_galeria.style.display="none";
};

function toggleAmigos(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    
    amigos_galeria.style.display="block";
    mascotas_galeria.style.display="none";
    hobbies_galeria.style.display="none";
};

function toggleHobbies(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    
    amigos_galeria.style.display="none";
    mascotas_galeria.style.display="none";
    hobbies_galeria.style.display="block";
};