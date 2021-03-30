### Users

- Get User: GET `/api/users`
- Login: POST `/api/session`
- Sign-up: POST `/api/users`
- Logout: DELETE `/api/session`

### Home Page

- Display all items: GET `/api/items`

### Item Profile Page

- Display items listed by the user: GET `/api/items/id`
- Create new item listing: POST `/api/items`
- Edit listing: PATCH `/api/item/:id`
- Delete listing: DELETE `/api/item/:id`
