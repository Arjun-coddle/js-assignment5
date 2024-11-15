// 1. Create a button and div using JS, when clicked on the button your basic details should be shown in the div. 
// The static html file should only contain the basic HTML structure, no div/buttons .

const newdiv = document.createElement('div');
const newbutton = document.createElement('button');

newdiv.textContent = "hello, my name is Arjun";

newdiv.style.width = '300px';
newdiv.style.height = '100px';
newdiv.style.backgroundColor = 'skyblue';
newdiv.style.padding = '8px';

newbutton.textContent = 'Hide Deatiles'
newbutton.addEventListener('click', () => {
    if (newdiv.textContent === 'hello, my name is Arjun') {
        newdiv.textContent = '';
        newbutton.textContent = 'Show Content';
    }
    else {
        newdiv.textContent = 'hello, my name is Arjun'
        newbutton.textContent = 'Hide Content';
    }
})

document.body.appendChild(newdiv);
document.body.appendChild(newbutton);


// 2. Consider an array with name of 5 fruits, map this array and create five checkboxes with their corresponding names. In a div show the fruit names which are checked.
const fruits = ['apple', 'orange', 'mango', 'jackfruit', 'banana'];

const checkboxContainer = document.getElementById('secondDiv');

fruits.forEach((fruit) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = fruit;
    checkbox.id = fruit;
    checkbox.addEventListener("change", updateSelectedFruits);

    const label = document.createElement("label");
    label.htmlFor = fruit;
    label.textContent = fruit;

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
});

function updateSelectedFruits() {
    const selectedFruits = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    document.getElementById("fruitList").textContent = selectedFruits.join(", ");
}


// 3. Create a toggle button, console the values as either true/ false when toggled.
const toggleButton = document.getElementById("toggleButton");

let isToggled = false;

toggleButton.addEventListener("click", function () {
    isToggled = !isToggled;

    toggleButton.textContent = isToggled ? "ON" : "OFF";

    console.log(isToggled);
});


// 3. Create an image slider without referring online codes, completely by yourself.
const sliders = document.querySelectorAll('.sliders img');
let slideIndex = 0;
let interwellId = null;

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider(){
    if (sliders.length > 0) {
        sliders[slideIndex].classList.add('displaySlide');
        interwellId = setInterval(nextSlide, 5000);
    }
 }
function showSlide(index){

    if (index >= sliders.length) {
        slideIndex = 0;        
    }
    else if(index < 0){
        slideIndex = sliders.length -1;
    }

    sliders.forEach(slide => {
        slide.classList.remove('displaySlide');
    })
    sliders[slideIndex].classList.add('displaySlide');
}
function prevSlide(){
    clearInterval(interwellId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}