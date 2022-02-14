document.getElementById('agregar').addEventListener('click', function (evento){
    evento.preventDefault();

 let peliculaLista= document.querySelector('h1').textContent;

localStorage.setItem('titulo', peliculaLista);
console.log('titulo', peliculaLista);
alert('Dirigete a List para visualizar el contenido.');

});

