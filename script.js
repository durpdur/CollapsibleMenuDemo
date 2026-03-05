// const container = document.getElementById("section_container");

// for (let i = 0; i < 3; i++) {
//   const sectionIndex = i + 1;
//   if (i % 2 === 0) {
//     container.innerHTML += `
//         <section id="section${sectionIndex}" class="section section_odd">
//             <h1>Section ${sectionIndex}</h1>
//         </section>
//         `;
//   } else {
//     container.innerHTML += `
//         <section id="section${sectionIndex}" class="section section_even">
//             <h1>Section ${sectionIndex}</h1>
//         </section>
//         `;
//   }
// }

/* Select elements using getElementById, querySelector, querySelectorAll
 - Single unique element	getElementById
 - CSS-style targeting	    querySelector
 - Multiple elements	    querySelectorAll
 - Event delegation	        closest
 - Traversal	            parentElement, children
*/

// Menu toggle: onClick
const toggleButton = document.querySelector("#side_nav div");
const sideNavMenu = document.querySelector("#side_nav ul");

toggleButton.addEventListener("click", () => {
  sideNavMenu.classList.toggle("hidden");
});

// Section 2: onClick
const section2 = document.getElementById("section2");

section2.addEventListener("click", () => {
  section2.classList.toggle("hop");
});
