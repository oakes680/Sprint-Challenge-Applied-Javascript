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


// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         console.log(response.data.articles)
//         let articlesObject = response.data.articles
//         for(let prop in articlesObject) {
//             articlesObject[prop].forEach((x) => {
//                 let cardInfo = cardCreator(x.headline, x.authorPhoto, x.authorName)

//                 console.log(cardContainer.appendChild(cardInfo))
//             })
//         }
//     })
 // let aaa = Object.values(articlesObject)
        // console.log(aaa)
        // aaa.forEach((x, index) => {
        //     console.log(x[2].headline)
        //     let card2 = cardCreator(x[index].headline, x[index].authorPhoto, x[index].authorName)

        //     cardContainer.appendChild(card2)
        // })



    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // //console.log(response.data.articles)
         let articlesObject = response.data.articles

        for(let prop in articlesObject) {
            articlesObject[prop].forEach((x) => {
                let cardInfo = cardCreator(x.headline, x.authorPhoto, x.authorName)

                cardContainer.appendChild(cardInfo)
            })
        }
    })


const cardContainer = document.querySelector('.cards-container')

function cardCreator(headline, urlAuthor, authorsName) {
    const divCard = document.createElement('div')
    divCard.classList.add('card')
    const divHead = document.createElement('div')
    divHead.classList.add('headline')
    divHead.textContent = headline
    const divAuthor = document.createElement('div')
    divAuthor.classList.add('author')
    const divImg = document.createElement('div')
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




