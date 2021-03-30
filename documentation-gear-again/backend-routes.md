## Users

- Get User: GET `/api/users`
- Login: POST `/api/session`
- Sign-up: POST `/api/users`
- Logout: DELETE `/api/session`

## Home Page

- Display list of categories: GET `/api/categories`
- Display a select number of items by category: GET `/api/items/:category_id`

## Categories Display Page

- Display list of categories: GET `/api/categories`
- All items view
  - Display all items: GET `/api/items`
- By category view
  - Display all items for a category: GET `/api/items/:category_id`

## Item Details Page

- Display items listed by the user: GET `/api/items/id`
- Create new item listing: POST `/api/items`
- Edit listing: PATCH `/api/item/:id`
- Delete listing: DELETE `/api/item/:id`

## User Profile Page

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
