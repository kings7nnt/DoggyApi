const button = document.getElementById('fetchButton');

button.addEventListener('click',function(){
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then(respuesta => respuesta.json())
        .then(data => {
           render(data.message)

        });
     //console.log('Hello world');

})

function render(link){
    console.log(link)
    const dogPic = document.getElementById('dogPic');
    dogPic.innerHTML = `
       <img src="${link}" alt="${link}"
       width="300" height="400"
        />
    `;
}

