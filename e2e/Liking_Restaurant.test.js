/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restarant', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('Favorite restaurant not found', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite restaurant not found', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-card');
  const firstRestaurant = locate('.restaurant-card__content-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurant-card__content-name'
  );
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Favorite restaurant not found', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-card');
  const firstRestaurant = locate('.restaurant-card__content-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurant-card__content-name'
  );
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Favorite restaurant not found', '.restaurant-item__not__found');
});
