// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// Data Array
let topics = []; 

// Call HTML component block
const tabs = document.querySelector(".topics"); 

// AXIOS 1: .get(), 2: .then(), 3. .catch()
axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response); 

    response.data.topics.forEach(element => {
      topics.push(element); 
    })
    
    topics.forEach(element => {
      tabs.appendChild(tabCreator(element)); 
    })
  })
  .catch(error => {
    console.log("Error: ", error); 
  })

  console.log(topics);  

  //Component Function
  function tabCreator(element) {
    // CNCC STEPS
    // Step 1-3 Create Element, Add Class, Add Content
    const tab = document.createElement("div"); 
    tab.classList.add("tab"); 
    tab.textContent = element; 

    return tab; 
  }
