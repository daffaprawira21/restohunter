const createLikeRestaurantButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnlikeRestaurantButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export { createLikeRestaurantButton, createUnlikeRestaurantButton };
