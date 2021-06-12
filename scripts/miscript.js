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
    var a=document.getElementById("A"); 
    var h=document.getElementById("H"); 
    var m=document.getElementById("M"); 
    
    mascotas_galeria.style.display="block";
    m.style.backgroundColor="#AA0000";
    a.style.backgroundColor="#FFFFFF";
    h.style.backgroundColor="#FFFFFF";

    amigos_galeria.style.display="none";
    mascotas_galeria.style.display="block";
    hobbies_galeria.style.display="none";

};

function toggleAmigos(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    var a=document.getElementById("A"); 
    var h=document.getElementById("H"); 
    var m=document.getElementById("M"); 
    
    amigos_galeria.style.display="block";
    mascotas_galeria.style.display="none";
    hobbies_galeria.style.display="none";
    a.style.backgroundColor="#AA0000";
    h.style.backgroundColor="#FFFFFF";
    m.style.backgroundColor="#FFFFFF";
};

function toggleHobbies(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    var a=document.getElementById("A"); 
    var h=document.getElementById("H"); 
    var m=document.getElementById("M"); 
    
    amigos_galeria.style.display="none";
    mascotas_galeria.style.display="none";
    hobbies_galeria.style.display="block";
    h.style.backgroundColor="#AA0000";
    a.style.backgroundColor="#FFFFFF";
    m.style.backgroundColor="#FFFFFF";
};