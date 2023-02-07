let contacto = ["Juan Lopez", "Adolfo Castañeda", "Luis Valencia",];
let nuevoContacto = contacto.push("Javier Duque",);
console.log(contacto);


let eraseContacto = contacto.pop('Michel Duque');
console.log(contacto);


let contactoEliminado = contacto.splice(1, 1);
console.log(contacto);


for (let i = 0; i < contacto.length; i++) {
    console.log(contacto[i]);
}