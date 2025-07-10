const aboutmelink = document.getElementById("aboutme");
const projectslink = document.getElementById("projects");
const contactmelink = document.getElementById("contactme");
const aboutpage = document.getElementById("aboutpage");
const projectspage = document.getElementById("projectspage");
const contactpage = document.getElementById("contactpage");

const aboutmelink_mobile = document.getElementById("aboutme_mobile");
const projectslink_mobile = document.getElementById("projects_mobile");
const contactmelink_mobile = document.getElementById("contactme_mobile");
const aboutpage_mobile = document.getElementById("aboutpage_mobile");
const projectspage_mobile = document.getElementById("projectspage_mobile");
const contactpage_mobile = document.getElementById("contactpage_mobile");

aboutmelink.classList.add("active");
aboutpage.style.display = "block";
projectspage.style.display = "none";
contactpage.style.display = "none";

aboutmelink_mobile.classList.add("active");
aboutpage_mobile.style.display = "block";
projectspage_mobile.style.display = "none";
contactpage_mobile.style.display = "none";

aboutmelink.addEventListener("click", function (e) {
   e.preventDefault(); // hxumov ancnely chexarkel
   aboutmelink.classList.add("active");
   contactmelink.classList.remove("active");
   projectslink.classList.remove("active");
   projectspage.style.display = "none";
   contactpage.style.display = "none";
   setTimeout(() => {
      aboutpage.style.display = "block";
   }, 500)
})



projectslink.addEventListener("click", function (e) {
   e.preventDefault(); // hxumov ancnely chexarkel
   aboutmelink.classList.remove("active");
   contactmelink.classList.remove("active");
   projectslink.classList.add("active");
   aboutpage.style.display = "none";
   contactpage.style.display = "none";
   setTimeout(() => {
      projectspage.style.display = "block";
   }, 500)
})

contactmelink.addEventListener("click", function (e) {
   e.preventDefault(); // hxumov ancnely chexarkel
   aboutmelink.classList.remove("active");
   contactmelink.classList.add("active");
   projectslink.classList.remove("active");
   aboutpage.style.display = "none";
   projectspage.style.display = "none";
   setTimeout(() => {
      contactpage.style.display = "block";
   }, 500)
})
aboutmelink_mobile.addEventListener("click", function (e) {
   e.preventDefault(); // hxumov ancnely chexarkel
   aboutmelink_mobile.classList.add("active");
   contactmelink_mobile.classList.remove("active");
   projectslink_mobile.classList.remove("active");
   projectspage_mobile.style.display = "none";
   contactpage_mobile.style.display = "none";
   setTimeout(() => {
      aboutpage_mobile.style.display = "block";
   }, 500)
})



projectslink_mobile.addEventListener("click", function (e) {
   e.preventDefault(); // hxumov ancnely chexarkel
   aboutmelink_mobile.classList.remove("active");
   contactmelink_mobile.classList.remove("active");
   projectslink_mobile.classList.add("active");
   aboutpage_mobile.style.display = "none";
   contactpage_mobile.style.display = "none";
   setTimeout(() => {
      projectspage_mobile.style.display = "block";
   }, 500)
})

contactmelink_mobile.addEventListener("click", function (e) {
   e.preventDefault(); // hxumov ancnely chexarkel
   aboutmelink_mobile.classList.remove("active");
   contactmelink_mobile.classList.add("active");
   projectslink_mobile.classList.remove("active");
   aboutpage_mobile.style.display = "none";
   projectspage_mobile.style.display = "none";
   setTimeout(() => {
      contactpage_mobile.style.display = "block";
   }, 500)
})

const mobile_content = document.getElementById("mobile-content");
const menu = document.getElementById('menu-icon');
const close = document.getElementById('close-icon');
let isOpen = false;
menu.addEventListener("click", function (e) {
   mobile_content.classList.add("open-sidebar");
   mobile_content.classList.remove("close-sidebar");
   isOpen = true;
})

close.addEventListener("click", function () {
   mobile_content.classList.remove("open-sidebar");
   mobile_content.classList.add("close-sidebar");
   isOpen = false;
})
document.addEventListener("click", function (e) {
   if (
      isOpen &&
      !mobile_content.contains(e.target) &&
      !menu.contains(e.target)
   ) {
      mobile_content.classList.remove("open-sidebar");
      mobile_content.classList.add("close-sidebar");
      isOpen = false;
   }
});
mobile_content.addEventListener("animationend", function (e) {
   if (e.animationName === "openSidebarAnimation") {
      mobile_content.style.pointerEvents = "auto";
   } else if (e.animationName === "closeSidebarAnimation") {
      mobile_content.style.pointerEvents = "none";
   }
});