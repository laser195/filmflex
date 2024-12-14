const background = document.querySelector('body').style.backgroundImage;
const title = document.getElementById('movie-title');
const type = document.querySelector('span');
const desc = document.querySelector('p');
const movie = document.querySelectorAll('.movie-icon')
const list = document.querySelectorAll('.movie-icon')
console.log(movie[0].src)
console.log(list[0])
list[0].addEventListener("click",change1)

function change1(){
    console.log('d')
    title.innerText = 'kung fu panda 4'
    document.querySelector('body').style.backgroundImage= `url(${movie[0].src})`
}
list[1].addEventListener("click",change2)

function change2(){
    console.log('ddd')
    title.innerText = 'Kingdom of the Planet of the Apes'
    document.querySelector('body').style.backgroundImage= `url(${movie[1].src})`
}
list[2].addEventListener("click",change3)

function change3(){
    console.log('ddd')
    title.innerText = 'dune 2'
    document.querySelector('body').style.backgroundImage= `url(${movie[2].src})`
}