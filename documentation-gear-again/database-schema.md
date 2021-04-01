# Database Schema

## Users

| Attribute Name  | Attribute Type | Constraints                         |
| --------------- | -------------- | ----------------------------------- |
| id              | integer        | Primary Key, Not Null               |
| name            | string         | Not Null, 100 chars or less         |
| username        | string         | Not Null, 30 chars or less          |
| profileImageUrl | string         | Nullable, 2000 chars or less        |
| email           | string         | Not Null, Unique, 255 chars or less |
| hashedPassword  | string.binary  | Not Null                            |
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
| userId           | integer        | Foreign Key, Not Null |
| total            | decimal        | Not Null              |
| shipping address | string         | Not Null              |
| billing address  | string         | Not Null              |
| createdAt        | datetime       | Not Null              |
| updatedAt        | datetime       | Not Null              |

### Model Associations:

- `orders` `belongs-to` `users`
- `orders` has a `one-to-many` `orderDetails` association.

## OrderDetails

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| orderId        | integer        | Foreign Key, Not Null |
| itemId         | integer        | Foreign Key, Not Null |

### Model Associations:

- `orderDetails` `belongs-to` `orders`
- `orderDetails` `belongs-to` `items`

## Items

| Attribute Name | Attribute Type | Constraints                 |
| -------------- | -------------- | --------------------------- |
| id             | integer        | Primary Key, Not Null       |
| title          | string         | Not Null, 255 chars or less |
| brand          | string         | Nullable, 50 chars or less  |
| size           | string         | Not Null, 30 chars or less  |
| price          | decimal        | Not Null                    |
| cost           | integer        | Nullable                    |
| description    | text           | Nullable                    |
| isSold         | boolean        | Not Null, Default=False     |
| orderId        | integer        | Nullable, Foreign Key       |
| userId         | integer        | Foreign Key, Not Null       |
| categoryId     | integer        | Foreign Key, Not Null       |
| conditionId    | integer        | Foreign Key, Not Null       |
| genderId       | integer        | Foreign Key, Not Null       |
| createdAt      | datetime       | Not Null                    |
| updatedAt      | datetime       | Not Null                    |

### Model Associations:

- `Items` has a `one-to-many` `orderDetails` association.
- `Items` has a `one-to-many` `Photos` association.
- `Items` `belongs-to` `Users`
- `Items` `belongs-to` `Categories`
- `Items` `belongs-to` `Conditions`
- `Items` `belongs-to` `Gender`

---

## Categories

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| name           | enum           | Not Null              |

### Model Associations:

- `Categories` has a `one-to-many` `Items` association.

---

## Conditions

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| name           | enum           | Not Null              |

### Model Associations:

- `Conditions` has a `one-to-many` `Items` association.

---

## Gender

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| name           | enum           | Not Null              |

### Model Associations:

- `Gender` has a `one-to-many` `Items` association.

---

## Photos

| Attribute Name | Attribute Type | Constraints                  |
| -------------- | -------------- | ---------------------------- |
| id             | integer        | Primary Key, Not Null        |
| url            | string         | Nullable, 1000 chars or less |
| itemId         | integer        | Foreign Key, Not Null        |

### Model Associations:

- `Photos` `belongs-to` `Items`

---

## Diagram Visual

![Schema](https://i.postimg.cc/g0JBn8z1/db-schema.jpg)
