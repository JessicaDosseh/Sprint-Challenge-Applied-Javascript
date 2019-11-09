// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



// Data Array
const headerArray = ["SMARCH 28, 2019", "Lambda Times", "98°"]; 

// Call HTML component block
const headerContainer = document.querySelector(".header-container"); 

//Component Function 
function Header(child_1, child_2, child_3) {

  // Step 1 Create Element tags
  const header = document.createElement("div"); 
  const span_1 = document.createElement("span"); 
  const h1_tag = document.createElement("h1"); 
  const span_2 = document.createElement("span"); 

  // Step 2 Place components into HTML page
  headerContainer.appendChild(header); 
  header.appendChild(span_1); 
  header.appendChild(h1_tag); 
  header.appendChild(span_2); 

  // Step 3 Add classes to each tag
  header.classList.add("header"); 
  span_1.classList.add("date"); 
  span_2.classList.add("temp"); 

  // Step 4 Fill each tag with the apropriate content
  span_1.textContent = child_1; 
  h1_tag.textContent = child_2; 
  span_2.textContent = child_3; 

  return header; 

};

Header(headerArray[0], headerArray[1], headerArray[2]);
