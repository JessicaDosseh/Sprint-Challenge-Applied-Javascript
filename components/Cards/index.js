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



// AXIOS 1: .get(), 2: .then(), 3. .catch()
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(arr =>{
  // Call HTML component block
  const cardsContainer = document.querySelector('.cards-container')

  articleData = Object.keys(arr.data.articles)
  
  // loop through array 
  articleData.forEach(element => {
    arr.data.articles[element].forEach(i => {
      cardsContainer.appendChild(cardCreator(i))
    })
  });
})
.catch(error => {
  console.log("Error: ", error); 
})


// Card Creator Function 
function cardCreator(data){
  // CNCC STEPS
  // Step 1 Create Element tags
  const newCard = document.createElement('div');
  const Headline = document.createElement('div');
  const Author = document.createElement('div');
  const Img = document.createElement('div');
  const cardPic = document.createElement('img');
  const authorName = document.createElement('span');

  // Step 2 Nesting Elements 
  newCard.appendChild(Headline);
  newCard.appendChild(Author);
  Author.appendChild(Img);
  Img.appendChild(cardPic);
  Img.appendChild(authorName);

  // Step 3 Add classes to each tag
  newCard.classList.add('card');
  Headline.classList.add('headline');
  Author.classList.add('author');
  Img.classList.add('img-container');

  // Step 4 Fill each tag with the apropriate content
  Headline.textContent= data.headline
  cardPic.setAttribute('src', data.authorPhoto)
  authorName.textContent = `By ${data.authorName}`

  return newCard;
}