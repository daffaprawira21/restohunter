import CONFIG from '../../globals/config';

const createRestaurantDetail = (resto) => `
  <h2 tabindex="0" class="content-title">${resto.name} Restaurant</h2>  
  <img class="content-thumbnail" src="${
    CONFIG.BASE_IMAGE_URL + resto.pictureId
  }" alt="${resto.name}"/>
  <div class="content-subtitle">
    <div tabindex="0" class="content-location">
      <i class="fa-solid fa-map-location-dot"></i>
      ${resto.city}, ${resto.address}
    </div>
    <div tabindex="0" class="content-rating">
      <i class="fa-solid fa-star"></i>
      ${resto.rating}
    </div>
  </div>
  <div tabindex="0" class="content-categories">Category : 
    ${resto.categories
      .map((categories) => `<span>#${categories.name}</span>`)
      .join(' ')}
  </div>
  <div tabindex="0" class="content-description"><p>${
    resto.description
  }</p></div>

  <h3 tabindex="0" class="title-menu">Our Menu</h3>
  <div class="content-menu">
    <div tabindex="0" class="content-menu__foods">
      <h4>Foods</h4>
      <ul>${resto.menus.foods
        .map((food) => `<li>${food.name}</li>`)
        .join(' ')}</ul>
    </div>
    <div tabindex="0" class="content-menu__drinks">
      <h4>Drinks</h4>
      <ul>${resto.menus.drinks
        .map((drink) => `<li>${drink.name}</li>`)
        .join(' ')}</ul>
    </div>
  </div>
  
  <h3 tabindex="0" class="title-review">Customer Reviews</h3>
  <div class="content-review">
    ${resto.customerReviews
      .map(
        (review) => `
        <div tabindex="0" class="review">
          <div class="review-header">
            <div class="review-name">
              <i class="fa-solid fa-user"></i>
              ${review.name}
            </div>
            <div class="review-date">
              <i class="fa-regular fa-calendar"></i>
              ${review.date}
            </div>
          </div>
          <div class="review-comment">
            <p>Review:<br><i>"${review.review}"</i></p>
          </div>
        </div>`
      )
      .join('')}
  </div>`;

export default createRestaurantDetail;
