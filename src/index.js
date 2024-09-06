console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgInput = document.getElementById("dog-image-container")
fetch(imgUrl)
.then(ser => ser.json())
.then(dogs => {
    dogs.message.forEach(element => {
        const img = document.createElement('img')
        img.src = element
        imgInput.appendChild(img)
    })
})


const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedContainer = document.getElementById("dog-breeds")
fetch(breedUrl)
.then(ser => ser.json())
.then(dogs => {
    Object.keys(dogs.message).forEach(element => {
        const breeds = document.createElement("li")
        breeds.textContent = element
        const dropmenu = document.getElementById("breed-dropdown")
        console.log(dropmenu)
        breeds.addEventListener('click',()=> {
            if(breeds.style.color === "black" || breeds.style.color === ""){
            breeds.style.color = "blue"
            }else{
                breeds.style.color = "black"
            }
        })
        breedContainer.appendChild(breeds)




})
})
