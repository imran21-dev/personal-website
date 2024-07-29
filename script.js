
// blogs-category-button
function checkOption() {
      const items = document.getElementById("Items")
      const Up = document.getElementById("up")
      const Down = document.getElementById("down")


             items.classList.add("items-style-js")
             items.classList.remove("demo")
             Up.style.display = "flex"
             Down.style.display = "none"
    
}
function checkUp() {

      const items = document.getElementById("Items")
      const Up = document.getElementById("up")
      const Down = document.getElementById("down")


             items.classList.remove("items-style-js")
             items.classList.add("demo")
             Up.style.display = "none"
             Down.style.display = "flex"
    
}

function checkOptionTwo() {
      const items = document.getElementById("ItemsTwo")
      const Up = document.getElementById("today-up")
      const Down = document.getElementById("today-down")


             items.classList.add("items-style-js")
             items.classList.remove("today-demo")
             Up.style.display = "flex"
             Down.style.display = "none"
    
}
function checkUpTwo() {

      const items = document.getElementById("ItemsTwo")
      const Up = document.getElementById("today-up")
      const Down = document.getElementById("today-down")


             items.classList.remove("items-style-js")
             items.classList.add("today-demo")
             Up.style.display = "none"
             Down.style.display = "flex"
    
}
function checkOptionThree() {
      const items = document.getElementById("ItemsThree")
      const Up = document.getElementById("popular-up")
      const Down = document.getElementById("popular-down")


             items.classList.add("items-style-js")
             items.classList.remove("popular-demo")
             Up.style.display = "flex"
             Down.style.display = "none"
    
}
function checkUpThree() {

      const items = document.getElementById("ItemsThree")
      const Up = document.getElementById("popular-up")
      const Down = document.getElementById("popular-down")


             items.classList.remove("items-style-js")
             items.classList.add("popular-demo")
             Up.style.display = "none"
             Down.style.display = "flex"
    
}