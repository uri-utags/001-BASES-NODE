const fs = require('fs'); // Aqui importamos el paquete de manipulacion de archivos

let  crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';

        if(!Number(base)){
            reject('Favor de insertar un numeor valido');
            return;
        } 

        if(!Number(limite)){
            reject('Favor de insertar un limite valido');
            return;  

        }

        for(let i=1; i<=limite; i++){
            tabla += `${base} X ${i} = ${base * i}\n`;
            
        }   

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if(err) {
                reject (err);
            }else{ 
            resolve(`tabla-${base}.txt`);
            }
        
        });
    });
};

let listartabla = (base, limite) =>{
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('Favor de insertar un numero valido');
            return;
        } 
        if(!Number(limite)){
            reject('Favor de insertar un limite valido');
            return;  

        }

        for(let i=1; i <= limite; i++){
            console.log( `${base} X ${i} = ${base * i}`);
            
        }  
    }); 
};

module.exports ={
    crearArchivo ,
    listartabla
};