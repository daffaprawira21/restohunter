import DicodingDBSource from '../../data/dicodingdb-source';
import createRestaurantList from '../templates/restaurant-list';

const Home = {
  async render() {
    return `
      <h2 tabindex="0" class="main-title">Explore Restaurant</h2>
      <div id="restaurant-list"></div>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const data = await DicodingDBSource.getRestaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');
    // loop restaurants data
    data.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurant);
    });
  },
};

export default Home;
