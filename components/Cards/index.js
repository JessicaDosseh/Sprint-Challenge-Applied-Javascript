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



// Data Array
//let articles = []; 

// // Call HTML component block
// const cardsContainer = document.querySelector(".cards-container"); 

// AXIOS 1: .get(), 2: .then(), 3. .catch()
axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // Call HTML component block
    const cardsContainer = document.querySelector(".cards-container");
    console.log(response); 

    response.data.articles.bootstrap.forEach(element => {
      cardsContainer.appendChild(cardCreator(element)); 
    })

    response.data.articles.javascript.forEach(element => {
      cardsContainer.appendChild(cardCreator(element)); 
    })

    response.data.articles.technology.forEach(element => {
      cardsContainer.appendChild(cardCreator(element)); 
    })

    response.data.articles.jquery.forEach(element => {
      cardsContainer.appendChild(cardCreator(element)); 
    })

    response.data.articles.node.forEach(element => {
      cardsContainer.appendChild(cardCreator(element)); 
    })

  })
  .catch(error => {
    console.log("Error: ", error); 
  })

  console.log(articles); 

  //Component Function 
  function articleCreator(data) {

    // Step 1 Create Element tags
    const article = document.createElement("div"); 
    const header = document.createElement("div"); 
    const writer = document.createElement("div"); 
    const imgBox = document.createElement("div"); 
    const img = document.createElement("img"); 
    const writerName = document.createElement("span"); 

    // Step 2 Place components into HTML page
    //cardsContainer.appendChild(article); 

    article.appendChild(header); 
    article.appendChild(writer); 

    writer.appendChild(imgBox); 
    writer.appendChild(writerName); 

    imgBox.appendChild(img); 

    // Step 3 Add classes to each tag
    article.classList("card"); 
    header.classList("headline"); 
    writer.classList("author"); 
    imgBox.classList("img-container");
    
    // Step 4 Fill each tag with the apropriate content
    header.textContent = data.headline; 
    img.src = data.authorPhoto; 
    writerName.textContent = `By ${data.authorName}`; 

    return article; 
  }