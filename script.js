var swiper = new Swiper(".swipe-cont", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button",
  },
});

const ul = document.querySelector('header ul')
var btns = ul.getElementsByClassName("btn");
let hr = document.querySelector("header ul li hr")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";

  });
}

//selecting ul
const gallery = document.querySelector(".gallery");

//select imagbox
const itemboxes = document.querySelectorAll(".itembox")
console.log(itemboxes)


gallery.addEventListener("click", (e)=>{
    console.log(e)



    if(e.target.classList.contains("filter")){
        //
        gallery.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue)

        itemboxes.forEach(item =>{

            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add("show");

                item.classList.remove("hide");
               
            }
            else {
                item.classList.add("hide")
            }


        })
    }
})

const title = document.getElementById("vin");

window.onscroll = () => {
  let scroll = window.scrollY;
  
}

//shoe //shoe - //show //show  hide(watch,headphone)

//watch //watch - //show //show remove hide(watch )  hide(shoe, headphone)

//headphone 
