let chatBot = document.querySelector('.navbar--icon')

chatBot.addEventListener('click', function(){
 
    openChatBot()
})

function closeChatBot() {
document.querySelector('.chatBot').style.display = 'none'

document.querySelector('.navbar--icon :first-child').src = "images/chat.svg"
}

let burger = document.querySelector('.navbar--burgerIcon')
burger.addEventListener('click', function(){
  closeAll()  
  openBurgerMenu()
    
})

let flight = document.querySelector('#navbar--flyIcon')
flight.addEventListener('click', function(){
  closeAll()  
  openFromTo()

})

function openChatBot(){
  closeAll()
  let chatbot = document.querySelector('.chatBot')
  if(chatbot.style.display !== 'block'){
  chatbot.style.display = 'block'
  document.querySelector('.chatBot').style.position = 'fixed'
  let nav = document.querySelector('.navbar')
  nav.classList.add("navbar__active");
  WelcomeMessege()
  console.log('kasjasjsjsjasjasjoasojasoj')
  }
  else{
    chatbot.style.display = 'none'
    let nav = document.querySelector('.navbar')
    nav.classList.remove("navbar__active");
    clearChatHistory()

document.querySelector('.navbar--icon :first-child').src = "images/chat.svg"
  }
  
 

   /*  document.querySelector('.navbar').style.bottom = '70vh' */
}


function openBurgerMenu(){
    document.querySelector('.burgerMenu').style.display = 'block'
    document.querySelector('.body--mask').style.display = 'block'
    document.querySelector('.logo').style.display = "none"

}

function openFromTo(){
    document.querySelector('.holepage').style.display = 'block'

    let nav = document.querySelector('.navbar')
    nav.classList.add("navbar__active");

}

function closeMenu(){
  document.querySelector('.burgerMenu').style.display = 'none'
  document.querySelector('.logo').style.display = "block"
}

function closeAll(){
    let chatbot = document.querySelector('.chatBot')
    chatbot.style.display = 'none'
    document.querySelector('.holepage').style.display = 'none'
    document.querySelector('.body--mask').style.display = 'none'

document.querySelector('.navbar--icon :first-child').src = "images/chat.svg"

    document.querySelector('.logo').style.display = "block"
    /* document.querySelector('.navbar').style.bottom = '0vh' */

    let nav = document.querySelector('.navbar')
    nav.classList.remove("navbar__active");
    
    document.querySelector('.burgerMenu').style.display = 'none'
    console.log('close')

    clearChatHistory()


}


function clearChatHistory(){
let history = document.querySelector('.chatBot--convoWrapper')
let parent = document.querySelector('.chatBot')
console.log(history)
parent.removeChild(history)

let convo = document.createElement('section')
convo.classList.add('chatBot--convoWrapper')
parent.appendChild(convo)

}

/* window.addEventListener('resize', function(){
  scaleNavbar()
})

window.addEventListener('load', function(){
  scaleNavbar()
})

function scaleNavbar(){
  let navbar = document.querySelector('.navbar--svg')
  let procentheight = window.innerHeight/10
  let procentwidth = window.innerWidth
  console.log(procentheight)
  console.log(procentwidth)
  //navbar.setAttribute("viewBox", "0 0 " + procentwidth + " " + procentheight);
  } */

//from too js

function showDate() {
    let date = document.querySelector(".fromToPage__date")
    date.style.display = "block"
}

function showLastStep() {
let lastStep = document.querySelector(".fromToPage__lastStep")
lastStep.style.display = "grid"
}

function dropDownMenu() {
    let menu = document.querySelector(".dropdownContent")
    menu.style.display = "block"
}

function dropDownMenu2() {
    let menu2 = document.querySelector(".dropdownContent2")
    menu2.style.display = "block"
}

/* function writeInput() {
    let input = document.querySelector(".text")
    input.textContent += "This just got added";
} */

/* autocomplete function from 
https://www.w3schools.com/howto/howto_js_autocomplete.asp */

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");


     /*    displays the fromToPage__date, when clicked a suggested country MM  */
        a.setAttribute("onclick", "showDate()");


        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);

  autocomplete(document.getElementById("myInput2"), countries);


  /* swaps the from input value to to input value */
  function swapValues(){
    let from = document.querySelector(".from").value;
    document.querySelector(".from").value = document.querySelector(".to").value;
    document.querySelector(".to").value = from;
    }

    function showSearch() {
        let searchButton = document.querySelector(".search")
        searchButton.style.display = "block"
    }






var imagesArray = [
    {image: 'images/female1-small.jpg'},
    {image: 'images/female2-small.jpg'},
    {image: 'images/male1-small.jpg'},
    {image: 'images/male2-small.jpg'},
    {image: 'images/male3-small.jpg'},

];


function getRandomImg(){
  return imagesArray[Math.floor(Math.random() * imagesArray.length)]
}


function realPerson(){
    

document.querySelector('.navbar--icon :first-child').src = getRandomImg().image
}