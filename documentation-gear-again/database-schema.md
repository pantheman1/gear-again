# Database Schema

## Users

| Attribute Name  | Attribute Type | Constraints                         |
| --------------- | -------------- | ----------------------------------- |
| id              | integer        | Primary Key, Not Null               |
| name            | string         | Not Null, 100 chars or less         |
| username        | string         | Not Null, 30 chars or less          |
| photo           | string         | Nullable, 2000 chars or less        |
| email           | string         | Not Null, Unique, 255 chars or less |
| hashed_password | string.binary  | Not Null                            |
| createdAt       | datetime       | Not Null                            |
| updatedAt       | datetime       | Not Null                            |

### Model Associations:

- Unique index on `[email]`
- `users` has a `one-to-many` `orders` association.
- `users` has a `one-to-many` `items` association.

---

## Orders

| Attribute Name   | Attribute Type | Constraints           |
| ---------------- | -------------- | --------------------- |
| id               | integer        | Primary Key, Not Null |
| users_id         | integer        | Foreign Key, Not Null |
| total            | integer        | Not Null              |
| shipping address | string         | Not Null              |
| billing address  | string         | Not Null              |
| createdAt        | datetime       | Not Null              |
| updatedAt        | datetime       | Not Null              |

### Model Associations:

- `orders` `belongs-to` `users`
- `orders` has a `one-to-many` `order_details` association.

## Order_details

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| orders_id      | integer        | Foreign Key, Not Null |
| items_id       | integer        | Foreign Key, Not Null |

### Model Associations:

- `order_details` `belongs-to` `orders`
- `order_details` `belongs-to` `items`

## Items

| Attribute Name | Attribute Type | Constraints                 |
| -------------- | -------------- | --------------------------- |
| id             | integer        | Primary Key, Not Null       |
| title          | string         | Not Null, 255 chars or less |
| brand          | string         | Nullable, 50 chars or less  |
| size           | string         | Not Null, 30 chars or less  |
| price          | integer        | Not Null                    |
| cost           | integer        | Nullable                    |
| description    | text           | Nullable                    |
| isSold         | boolean        | Not Null, Default=False     |
| order_id       | integer        | Foreign Key, Not Null       |
| user_id        | integer        | Foreign Key, Not Null       |
| categories_id  | integer        | Foreign Key, Not Null       |
| conditions_id  | integer        | Foreign Key, Not Null       |
| gender_id      | integer        | Foreign Key, Not Null       |
| createdAt      | datetime       | Not Null                    |
| updatedAt      | datetime       | Not Null                    |

### Model Associations:

- `Items` has a `one-to-many` `order_details` association.
- `Items` has a `one-to-many` `Photos` association.
- `Items` `belongs-to` `Users`
- `Items` `belongs-to` `Categories`
- `Items` `belongs-to` `Conditions`
- `Items` `belongs-to` `Gender`

---

## Categories

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |

### Model Associations:

- `Categories` has a `one-to-many` `Items` association.

---

## Conditions

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |

### Model Associations:

- `Conditions` has a `one-to-many` `Items` association.

---

## Gender

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |

### Model Associations:

- `Gender` has a `one-to-many` `Items` association.

---

## Photos

| Attribute Name | Attribute Type | Constraints                  |
| -------------- | -------------- | ---------------------------- |
| id             | integer        | Primary Key, Not Null        |
| url            | string         | Nullable, 1000 chars or less |
| item_id        | integer        | Foreign Key, Not Null        |

### Model Associations:

- `Photos` `belongs-to` `Items`

---

## Diagram Visual

![Schema](https://i.postimg.cc/kgfmH43n/db-schema.jpg)
