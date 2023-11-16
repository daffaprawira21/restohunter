import UrlParser from '../../routes/url-parser';
import DicodingDBSource from '../../data/dicodingdb-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import createRestaurantDetail from '../templates/restaurant-detail';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingDBSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetail(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
