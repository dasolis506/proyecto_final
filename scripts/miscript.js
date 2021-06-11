function toggleBloque(){
    var demo= document.getElementById("demo");
    var operaciones= document.getElementById("operacionesContenedor");  
    
    if (operaciones.style.display === "none"){
        demo.textContent = "Ocultar operaciones"
        operaciones.style.display="block"

    }else{
        demo.textContent = "Mostrar operaciones"
        operaciones.style.display="none"
    }

}
