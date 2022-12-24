const starEl = document.querySelectorAll(".fa-sharp")
const emojiEl = document.querySelectorAll(".far")
const emocolors = ["red", "orange", "lightBlue", "lightGreen", "green"]
updateRating(0)
starEl.forEach((starEl, index) =>{
    starEl.addEventListener("click", () =>{
       updateRating(index);
    });

});
function updateRating(index) {
    starEl.forEach((starEl, idx) => {
        if (idx < index + 1){
            starEl.classList.add("active");
        } else{
            starEl.classList.remove("active")
        }
        
    });
    emojiEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translatex(-${index * 50}px)`;
        emojiEl.style.color = emocolors [index]
    });
   
}
