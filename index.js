const btn = document.querySelector(".btn")
const jokeArea = document.querySelector('.joke')
async function fetchData(){

  const response = await fetch('https://v2.jokeapi.dev/joke/Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist&amount=10');
const data = await response.json();

const jokes = data.jokes
return jokes
}



async function renderData(){
  const jokes = await fetchData();

  jokes.map((jokes)=>{ if(jokes.setup&&jokes.delivery){
    return jokeArea.innerHTML = `${jokes.setup} ${jokes.delivery} `
  } else if (jokes.joke){
return jokeArea.innerHTML=`${jokes.joke}`
  }
})



 
}






  




btn.addEventListener('click',renderData);







