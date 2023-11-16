import {
  createLikeRestaurantButton,
  createUnlikeRestaurantButton,
} from '../views/templates/like-button';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const resto = await this._favoriteRestaurant.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButton();

    const likedButton = document.querySelector('#likeButton');
    likedButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
