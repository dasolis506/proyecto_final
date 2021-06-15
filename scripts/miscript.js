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
    var a=document.getElementById("amigos_boton"); 
    var h=document.getElementById("hobbies_boton"); 
    var m=document.getElementById("mascotas_boton"); 
    
    mascotas_galeria.style.display="block";
    m.style.backgroundColor="purple";
    a.style.backgroundColor="lightcoral";
    h.style.backgroundColor="lightcoral";

    amigos_galeria.style.display="none";
    mascotas_galeria.style.display="block";
    hobbies_galeria.style.display="none";

};

function toggleAmigos(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    var a=document.getElementById("amigos_boton"); 
    var h=document.getElementById("hobbies_boton"); 
    var m=document.getElementById("mascotas_boton"); 
    
    amigos_galeria.style.display="block";
    mascotas_galeria.style.display="none";
    hobbies_galeria.style.display="none";
    a.style.backgroundColor="purple";
    h.style.backgroundColor="lightcoral";
    m.style.backgroundColor="lightcoral";
};

function toggleHobbies(){
    var hobbies_galeria=document.getElementById("hobbies_galeria"); 
    var mascotas_galeria=document.getElementById("mascotas_galeria"); 
    var amigos_galeria=document.getElementById("amigos_galeria"); 
    var a=document.getElementById("amigos_boton"); 
    var h=document.getElementById("hobbies_boton"); 
    var m=document.getElementById("mascotas_boton"); 
    
    amigos_galeria.style.display="none";
    mascotas_galeria.style.display="none";
    hobbies_galeria.style.display="block";
    h.style.backgroundColor="purple";
    a.style.backgroundColor="lightcoral";
    m.style.backgroundColor="lightcoral";
};