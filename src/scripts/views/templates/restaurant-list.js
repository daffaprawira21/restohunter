import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

const createRestaurantList = (resto) => `
    <a href="#/detail/${resto.id}">    
      <div class="restaurant-card">
        <div class="restaurant-card__item">
          <img class="lazyload restaurant-card__item-image" alt="${
            resto.name
          }" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          <span class="restaurant-card__item-rating">
              <i class="fa-solid fa-star"></i>
              <span>${resto.rating}</span>
          </span>
        </div>
        <div class="restaurant-card__content">
            <h3 class="restaurant-card__content-name">${resto.name}</h3>
            <p class="restaurant-card__content-city">(${resto.city})</p>
            <p class="restaurant-card__content-description">${
              resto.description
            }</p>
        </div>
      </div>
    </a>`;

export default createRestaurantList;
