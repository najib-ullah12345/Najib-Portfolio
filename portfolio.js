// Page Loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setInterval(() => {
    loader.style.display = "none";
  }, 400);
});


//Message
// setTimeout(()=>{
//   alert('Hi, I am friendly Developer 😀😀');
// }, 5000)

// Screen Width
var logo = document.querySelector(".logo");
var header1 = document.querySelector("#search_in");
var search1 = document.querySelector("#tab_in");
var search2 = document.querySelector(".search");
var mobile_header =
  '<div class="close w-100"><i class="fa fa-bars pe-1" onclick="open_sidebar()" id="open_close_btn"></i></div><div class="sidebar d-flex flex-column gap-5 ps-4 pe-4 pb-4"><a href="index.html">HOME</a><a href="about.html">ABOUT</a><a href="resume.html">RESUME</a><a href="project.html">PROJECTS</a><a href="contact.html">CONTACT US</a></div>';
var original_header =
  '<ul class="d-flex gap-3 gap-lg-5 m-0 p-0" id="ull"><li><a href="index.html">HOME</a></li><li><a href="about.html">ABOUT</a></li><li><a href="resume.html">RESUME</a></li><li><a href="project.html">PROJECTS</a></li><li><a href="contact.html">CONTACT US</a></li></ul>';

document.addEventListener("DOMContentLoaded", () => {
  function handleResize() {
    if (window.innerWidth < 769) {
      header1.innerHTML = search2.outerHTML;
      search1.innerHTML = mobile_header;
      // logo.setAttribute("style", "width:60px, height:60px");
    } else if (window.innerWidth > 769) {
      // logo.setAttribute("style", "width:110px, height:110px");
      header1.innerHTML = original_header;
      search1.innerHTML = search2.outerHTML;
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});

//Open SideBar
function open_sidebar() {
  var side = document.querySelector(".sidebar");
  var btn = document.querySelector("#open_close_btn");
  side.classList.toggle("open_side");
  btn.classList.toggle("fa-close");
}

//Search Button
function search() {
  var searchText = document.querySelector("input[type='search'");
  alert(`Please See this '${searchText.value}' in my Portfolio`);
}

//ABOUT SECTION SKILLS STARS
// document.addEventListener("DOMContentLoaded", function () {
//   const starsHTML = `<i class="fa-sharp fa-solid fa-star" style="color: #f1d118;"></i>
//                      <i class="fa-sharp fa-solid fa-star" style="color: #f1d118;"></i>
//                      <i class="fa-sharp fa-solid fa-star" style="color: #f1d118;"></i>`;

//   document.querySelectorAll(".stars").forEach((starsContainer) => {
//     starsContainer.innerHTML = starsHTML;
//   });
// });
