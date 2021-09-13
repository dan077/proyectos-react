const numeros = [1,2,3,4];
/*
document.write("<ul>");
for(numero in numeros)
{
    document.write("<li>");
    document.write(numero);
    document.write("</li>");
}
document.write("</ul>");*/

document.write("<ul>");
const nuevos = numeros.map((numero,i) => {
    document.write("<li>"+numero+" index: "+i+"</li>")
});
document.write("</ul>");

//Pone comas porque no retorna nada.
const nuevos2 = numeros.map((numero,i) => {
    return numero +1
});
document.write(nuevos2)
