

// Iteracion 2
 
// 2.1 inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement("div")
let body = document.querySelector("html")
body.appendChild(div)
 
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div = document.createElement("div")
let p = document.createElement("p")
div.appendChild(p)
let body = document.querySelector("body")
body.appendChild(div)
 
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let div = document.createElement("div")
for (let x = 0; x <= 6; x++) {
 let p = document.createElement("p")
 div.appendChild(p)
}
let body = document.querySelector("body")
body.appendChild(div)
 
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let div = document.createElement("div")
let p = document.createElement("p")
p.innerHTML = "Soy dinámico!"
div.appendChild(p)
let body = document.querySelector("body")
body.appendChild(div)
 
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector(".fn-insert-here")
h2.innerHTML = "Wubba Lubba dub dub"
 
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
 
let ul = document.createElement("ul")
let body = document.querySelector("body")
 
for (app of apps) {
 let li = document.createElement("li")
 let text = document.createTextNode(app)
 li.appendChild(text)
 ul.appendChild(li)
}
body.appendChild(ul)
 
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let toRemove = document.querySelectorAll(".fn-remove-me")
for  (item of toRemove) {
 document.querySelector("body").removeChild(item)
}
 
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let divs = document.querySelectorAll("div")
let body = document.querySelector("body")
let p = document.createElement("p")
p.innerHTML = "Voy en medio!"
body.insertBefore(p, divs[1])
 
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let divs = document.querySelectorAll("div + .fn-insert-here")
for (div of divs) {
 let p = document.createElement("p")
 p.innerHTML = "Voy dentro!"
 div.appendChild(p)
}
