axios
.get("https://jsonplaceholder.typicode.com/users/3")
.then((data)=>console.log(data.data.email));

//Usando destructuring.
axios.get("https://jsonplaceholder.typicode.com/users/3").then(({data})=>console.log(data.email))

