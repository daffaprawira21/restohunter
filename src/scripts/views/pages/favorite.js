import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import createRestaurantList from '../templates/restaurant-list';

const Favorite = {
  async render() {
    return `
    <h2 tabindex="0" class="main-title">Favorite Restaurant</h2>
    <div id="restaurant-list"></div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      <div class="restaurant-item__not__found">Favorite restaurant not found</div>`;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantList(restaurant);
      });
    }
  },
};

export default Favorite;
