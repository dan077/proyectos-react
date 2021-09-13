export const Operaciones = (numeros,setNumeros)=>{
    const operaciones = {
            "suma":"+",
            "resta":"-",
            "multiplicacion":"*",
            "division":"/",
        };

        //recorreor json.
    const handleChange = (e)=>{
        setNumeros(
            {
                ...numeros,
                [e.target.name] :parseFloat(e.target.value)
            }
        )
    } 
    
    return {operaciones,handleChange}
}