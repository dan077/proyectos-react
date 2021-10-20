fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => {//sdfsdf
       return res.json();
    }
).then(
    (data)=>{console.log(data)}
)