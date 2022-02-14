let peliculaGuardada = localStorage.getItem('titulo');
let referencia = document.getElementById('referencia');


if(peliculaGuardada == 'Dragon Ball'){
    referencia.src = 'image/portada_ball.jpg';
}else if(peliculaGuardada == 'Digimon Tamers'){
    referencia.src = 'image/Digimon-Tamers.jpg';
}else if(peliculaGuardada == 'Jujutsu Kaisen'){
    referencia.src ='image/Kaisen1.jpg';
}


document.getElementById("movie-serie").innerHTML = peliculaGuardada;
console.log(peliculaGuardada);


