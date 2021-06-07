import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import dataRestaurant from "../DATA.json";
import dataFeedback from "../DataFeedback.json";

const app = new App({
  burger: document.querySelector(".burger"),
  navList: document.querySelectorAll("nav li"),
  nav: document.getElementsByTagName("nav")[0],
  content: document.getElementById("main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

// dataRestaurant.restaurants.forEach((data) => {
//   const list = document.querySelector(".catalog-list");

//   list.innerHTML += `<div class="catalog-product">
//   <a href="#">
//   <div class="product-img" style="background-image:url(${
//     data.pictureId
//   });" alt="${data.name} avatar image"></div>
//   <div class="product-detail">
//     <h2 class="product-detail-title">${data.name}</h2>
//     <label class="product-detail-label">${data.city} | ${data.rating}</label>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       fill="currentColor"
//       class="bi bi-star-fill"
//       viewBox="0 0 16 16"
//       style="margin-bottom: -0.1em"
//     >
//       <path
//         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
//         style="color: rgba(255, 131, 3, 0.75)"
//       />
//     </svg>
//     <p class="product-detail-desc">
//       ${data.description.substring(0, 88)} ...
//     </p>
//   </div></a>
// </div>`;
// });

// dataFeedback.feedbacks.forEach((data) => {
//   const list = document.querySelector(".feedback-list");

//   list.innerHTML += `<div class="feedback-item">
//   <div class="feedback-profile">
//     <img
//       class="feedback-profile-image"
//       src="${data.pictureId}"
//       alt=""
//     />
//     <div class="feedback-profile-detail">
//       <h2>${data.name}</h2>
//       <label>${data.role}</label>
//     </div>
//   </div>
//   <p class="feedback-desc">
//     “ ${data.description} ”
//   </p>
// </div>`;
// });
