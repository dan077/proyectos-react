const datos = async ()=>{
    const datos = await axios.get("https://jsonplaceholder.typicode.com/users/3");
    return datos.data;
}

const data = datos().then(console.log);
