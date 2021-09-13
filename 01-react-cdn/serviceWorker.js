const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js",
    "./index.js"
];
const CACHE_NAME = "v1_cache_contador_react";
//const self = this
//Espera a que se instale el service worker. luego crea el espacio en caché y agrega los elementos que le pasamos
//en el vector, adicionalmente hace el skipWaiting necesario. y por si hay un error usamos catch.
self.addEventListener("install",(e)=> {
    e.waitUntil(caches.open(CACHE_NAME)
        .then(cache => {cache.addAll(CACHE_ELEMENTS)
            .then(()=>{
                self.skipWaiting();
                }).catch(console.log)
        })
    )
});

//Cuando exista una nueva version lo que haremos será eliminar la version anterior guardada en el caché (si existe) y obtener los datos de archivos desde el caché
self.addEventListener("activate",(e)=> {

    const cacheWhiteList = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cacheName => {
                return cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName);
            }))
        }).then(()=>{self.clients.claim()})
    )
});

self.addEventListener("fetch",(e)=> {
    //console.log(e.request);
    e.respondWith(
        caches.match(e.request).then((res)=> {
            if(res){
                return res;
            }
            return fetch(e.request);
        }
     )
    )
});