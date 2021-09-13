const sumar = (a,b) => {
    return new Promise((resolve,reject)=>{
        if(a < 0 || b < 0){
            reject("Los numeros son negativos.");
        }else{
            resolve(a+b);
        }
    });
}

const result = sumar(-3,5).then((res)=>{
    console.log(res) //Si hay un resolve (una respuesta valida)
}).catch((err)=>{
    console.log(err) //si hay un reject (error)
});
console.log(result)