// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
    })







const cardContainer = document.querySelector('.cards-container')

function cardCreator(headline, urlAuthor, authorsName) {
    const divCard = documnet.createElement('div')
    divCard.classList.add('card')
    const divHead = documnet.createElement('div')
    divHead.classList.add('headline')
    divHead.textContent = headline
    const divAuthor = documnet.createElement('div')
    divAuthor.classList.add('author')
    const divImg = documnet.createElement('div')
    divImg.classList.add('img-container')
    const imageA = document.createElement('img')
    imageA.src = urlAuthor
    const span = document.createElement('span')
    span.textContent = authorsName


    divCard.appendChild(divHead)
    divCard.appendChild(divAuthor)
    divAuthor.appendChild(divImg)
    divImg.appendChild(imageA)
    divAuthor.appendChild(span)

    return divCard
}




