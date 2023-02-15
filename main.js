
let contenedor = document.getElementById("contenedor");

const reiniciar = document.getElementById("reload");
const mensaje = document.querySelector(".mensaje");

const botonDep = document.getElementById("btn-add-d");
const botonRet = document.getElementById("btn-add-r");
const error = document.getElementById("error");
const inputDep = document.getElementById("input-deposito");


//DOM BOTONES DEL TECLADO

const t0 = document.getElementById("btn-tecla-a");
const t1 = document.getElementById("btn-tecla-b");
const t2 = document.getElementById("btn-tecla-c");
const t3 = document.getElementById("btn-tecla-d");
const t4 = document.getElementById("btn-tecla-e");
const t5 = document.getElementById("btn-tecla-f");
const t6 = document.getElementById("btn-tecla-g");
const t7 = document.getElementById("btn-tecla-h");
const t8 = document.getElementById("btn-tecla-i");
const t9 = document.getElementById("btn-tecla-j");
const borrar = document.getElementById("btn-tecla-k");
const punto = document.getElementById("btn-tecla-l");

//-------------------DOM--VALIDAR----------------------------

const pass = document.getElementById("contra");
const dni = document.getElementById("user");
const botonVali = document.getElementById("btn-validar");

//-----------------------SISTEMA VALIDAR----------------------------


botonVali.addEventListener("click",(e)=>{
    
    if(pass.value.length == 4 && dni.value.length == 8 && dni.value <= 99999999){
        inputDep.removeAttribute("hidden");
        mensaje.innerHTML = " "
        
    }else{
        error.innerHTML = "Se detectó un error con sus datos"
    }

    //-------------OPERACION--------------------


    botonDep.addEventListener("click", ()=>{
        let valorDep = inputDep.value;
        
        setTimeout(()=>{
    
            if(valorDep > 0){
                mensaje.innerHTML = "Usted depósito s/." + valorDep + ".00 Exitosamente!";
                
            } else{
                error.innerHTML = "Error, solo puede usar números!";
            };
            
        },1000);
    
    });
    botonRet.addEventListener("click", ()=>{
        let valorDep = inputDep.value;
        setTimeout(()=>{
            if(valorDep > 0){
                mensaje.innerHTML = "Usted retiró s/." + valorDep + ".00 Exitosamente!";
            } else{
                error.innerHTML = "Error, solo puede usar números!";
            };
            
        },1000);
    
    });

    
})

//SISTEMA DE TECLADO

function borrador(){
    inputDep.value = inputDep.value.slice(0,-1);
};

punto.addEventListener("click",()=>{
    inputDep.value += "."
});

t0.addEventListener("click",()=>{
    inputDep.value += t0.value;
})
t1.addEventListener("click",()=>{
    inputDep.value += t1.value;
})
t2.addEventListener("click",()=>{
    inputDep.value += t2.value;
})
t3.addEventListener("click",()=>{
    inputDep.value += t3.value;
})
t4.addEventListener("click",()=>{
    inputDep.value += t4.value;
})
t5.addEventListener("click",()=>{
    inputDep.value += t5.value;
})
t6.addEventListener("click",()=>{
    inputDep.value += t6.value;
})
t7.addEventListener("click",()=>{
    inputDep.value += t7.value;
})
t8.addEventListener("click",()=>{
    inputDep.value += t8.value;
})
t9.addEventListener("click",()=>{
    inputDep.value += t9.value;
});


//------------------------------------RELOAD---------------------------------------

reiniciar.addEventListener("click", ()=>{
    location.reload();
})
