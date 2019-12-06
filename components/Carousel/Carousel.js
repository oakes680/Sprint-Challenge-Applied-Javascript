/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carouselCreator() {
  const divCarousel = document.createElement('div')
  divCarousel.classList.add('carousel')
  const divLeftB = document.createElement('div')
  divLeftB.classList.add('left-button')
  const imgMountain = document.createElement('img')
  imgMountain.src = "./assets/carousel/mountains.jpeg"
  const imgComputer = document.createElement('img')
  imgComputer.src = "./assets/carousel/computer.jpeg"
  const imgTrees = document.createElement('img')
  imgTrees.src = "./assets/carousel/trees.jpeg"
  const imgTurnTable = document.createElement('img')
  imgTurnTable.src = "./assets/carousel/turntable.jpeg"
  const divRightB = document.createElement('div')
  divRightB.classList.add('right-button')

  divCarousel.appendChild(divLeftB)
  divCarousel.appendChild(imgMountain)
  divCarousel.appendChild(imgComputer)
  divCarousel.appendChild(imgTrees)
  divCarousel.appendChild(imgTurnTable)
  divCarousel.appendChild(divRightB)
 // console.log(divCarousel.classList)

//  let ccc = document.querySelectorAll('.carousel img')
//  console.log(ccc.className)
 
//  ccc.forEach(e => {
//    e.style.display = 'block'
//  })

  return divCarousel
}

let spot = document.querySelector('.carousel-container')
spot.appendChild(carouselCreator())

let ccc = document.querySelectorAll('.carousel img')
console.log(ccc.className)

ccc.forEach(e => {
  e.style.display = 'block'
})







//   const divCarousel = document.createElement('div')
//   divCarousel.classList.add('carousel')
//   const divLeftB = document.createElement('div')
//   divLeftB.classList.add('left-button')
//   const imgMountain = document.createElement('img')
//   imgMountain.src = "./assets/carousel/mountains.jpeg"
//   const imgComputer = document.createElement('img')
//   imgComputer.src = "./assets/carousel/computer.jpeg"
//   const imgTrees = document.createElement('img')
//   imgTrees.src = "./assets/carousel/trees.jpeg"
//   const imgTurnTable = document.createElement('img')
//   imgTurnTable.src = "./assets/carousel/turntable.jpeg"
//   const divRightB = document.createElement('div')
//   divRightB.classList.add('right-button')

//   divCarousel.appendChild(divLeftB)
//   divCarousel.appendChild(imgMountain)
//   divCarousel.appendChild(imgComputer)
//   divCarousel.appendChild(imgTrees)
//   divCarousel.appendChild(imgTurnTable)
//   divCarousel.appendChild(divRightB)
//  console.log(divCarousel.classList)

//  let spot = document.querySelector('.carousel-container')
// spot.appendChild(divCarousel)

// let ccc = document.querySelectorAll('.carousel img')
// console.log(ccc.className)

// ccc.forEach(e => {
//   e.style.display = 'block'
// })







