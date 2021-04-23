# GearAgain

<p align="center"><img width="200" src="https://i.postimg.cc/vZ4kxtMz/logo.png" /></p>

### Link to live site

https://gearagain.herokuapp.com

### About GearAgain

GearAgain is an app for people who love the outdoors, and love to find great deals on outdoor equipment. Users can sign up and immediately start shopping for used outdoor items. A user can even list old (or new) items on the site and make a little money!

### Table of Contents

Here is a quick rundown of how this document is laid out:

1. [Tech Stack](#tech-stack)
2. [Feature List](#feature-list)
   - [Login/Signup](#login/signup)
   - [List Items](#list-items)
   - [Purchase](#purchase)
3. [Database Schema](#database-schema)
4. [Frontend Routes](#frontend-routes)
5. [API routes](#api-routes)
6. [Available Scripts](#available-scripts)

## Tech Stack

- React
- Redux
- JavaScript
- Express
- Sequelize
- CSS
- Heroku

## Feature List

### Login/Signup

- A user who wishes to view and experience the site as a fully registered user, but does not wish to create a new account, may use the Demo login.
- Users may create a new account or login using their existing credentials.
<!-- <p align="center"><img src=https://i.postimg.cc/cCHzr61N/Login-page.jpg /></p>
<p align="center"><img src=https://i.postimg.cc/Fzd2T1MV/Signup-page.jpg /></p> -->

### List Items

- Upon signup, users can click on the "Sell" button which is available on any page, and list their used (or new) items to sell on the site.
<!-- <p align="center"><img src=https://i.postimg.cc/Fzd2T1MV/Signup-page.jpg /></p> -->

### Purchase

<!-- <p align="center"><img src=https://i.postimg.cc/HWbG88tT/zones-page.jpg /></p> -->

- Upon signing up or logging in, users may immediately start shopping for items. They can view items by category, or all items.
- Users can add any items to their cart that they have not listed for sale.
- Once inside the cart, the users can walk through the purchase process.

## Database Schema

<p align="center"><img src="https://i.postimg.cc/fRknjh7Y/db-schema.jpg" /></p>

## Frontend Routes

- Login: `/login`
- Signup: `/signup`
- Home: `/`
  - This will be for the main home page
- Category Item listings: `/categories/:id`
  - A user can click on a category to view all items which have that category
- Profile: `/profile`
  - This is the user's profile page
- Item Details: `/items/:id`
  - A user can view a specific item's details
- Cart: `/cart`
  - A user can view their cart items
- Checkout: `/cart/checkout`
  - Checkout page
- Create Listing: `/profile/sell`
  - A user can create a new product listing
- Update Listing: `/:id/:id/edit`
  - A user can edit their listing

## API routes

#### Users

- /users

- Get User: GET `/api/users`
- Login: POST `/api/session`
- Sign-up: POST `/api/users`
- Logout: DELETE `/api/session`

#### Home Page

- Display list of categories: GET `/api/categories`
- Display a select number of items by category: GET `/api/items/:category_id`

#### Categories Display Page

- Display list of categories: GET `/api/categories`
- All items view
  - Display all items: GET `/api/items`
- By category view
  - Display all items for a category: GET `/api/items/:category_id`

#### Item Details Page

- Display items listed by the user: GET `/api/items/id`
- Create new item listing: POST `/api/items`
- Edit listing: PATCH `/api/item/:id`
- Delete listing: DELETE `/api/item/:id`

#### User Profile Page

- Account information
  - Display account information: GET `/api/user/:id`
  - Edit account information: PATCH `/api/user/:id`
- Order Information
  - Display past orders: GET `/api/orders/:user_id`
- Items for sale
  - Display all items: GET `/api/items/:user_id`
  - Create a new listing: POST `api/items`
  - Edit items for sale: PATCH `/api/items/:id`
  - Delete items for sale: DELETE `/api/items/:id`

## Available Scripts

In both the frontend and backend project directory, you can run:

### `npm start`

This runs the frontend and backend server in development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Link to Wiki docs

https://github.com/pantheman1/gear-again/wiki
