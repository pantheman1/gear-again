# Database Schema

## Users

| Attribute Name  | Attribute Type | Constraints                         |
| --------------- | -------------- | ----------------------------------- |
| id              | integer        | Primary Key, Not Null               |
| name            | string         | Not Null, 30 chars or less          |
| username        | string         | Not Null, 30 chars or less          |
| photo           | string         | Not Null, 2000 chars or less        |
| email           | string         | Not Null, Unique, 255 chars or less |
| hashed_password | string.binary  | Not Null                            |
| createdAt       | datetime       | Not Null                            |
| updatedAt       | datetime       | Not Null                            |

### Model Associations:

- Unique index on `[email]`
- Users `one-to-many` `Items` association.

---

## Items

| Attribute Name | Attribute Type | Constraints                 |
| -------------- | -------------- | --------------------------- |
| id             | integer        | Primary Key, Not Null       |
| title          | string         | Not Null, 255 chars or less |
| brand          | string         | Nullable, 50 chars or less  |
| size           | string         | Not Null, 30 chars or less  |
| price          | integer        | Not Null                    |
| description    | text           | Nullable                    |
| user_id        | integer        | Foreign Key, Not Null       |
| categories_id  | integer        | Foreign Key, Not Null       |
| conditions_id  | integer        | Foreign Key, Not Null       |
| sales_id       | integer        | Foreign Key, Not Null       |
| gender_id      | integer        | Foreign Key, Not Null       |
| createdAt      | datetime       | Not Null                    |
| updatedAt      | datetime       | Not Null                    |

### Model Associations:

- Items `many-to-one` `Users` association.
- Items `many-to-one` `Categories` association.
- Items `many-to-one` `Conditions` association.
- Items `many-to-one` `Gender` association.
- Items `many-to-one` `Sales` association.
- Items `one-to-many` `Photos` association.

---

## Categories

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |
| createdAt      | datetime       | Not Null                   |
| updatedAt      | datetime       | Not Null                   |

### Model Associations:

- Categories `one-to-many` Items association.

---

## Conditions

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |
| createdAt      | datetime       | Not Null                   |
| updatedAt      | datetime       | Not Null                   |

### Model Associations:

- Conditions `one-to-many` Items association.

---

## Gender

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |
| createdAt      | datetime       | Not Null                   |
| updatedAt      | datetime       | Not Null                   |

### Model Associations:

- Gender `one-to-many` Items association.

---

## Sales

| Attribute Name | Attribute Type | Constraints                |
| -------------- | -------------- | -------------------------- |
| id             | integer        | Primary Key, Not Null      |
| name           | string         | Not Null, 50 chars or less |
| createdAt      | datetime       | Not Null                   |
| updatedAt      | datetime       | Not Null                   |

### Model Associations:

- Sales `one-to-many` Items association.

---

## Photos

| Attribute Name | Attribute Type | Constraints                  |
| -------------- | -------------- | ---------------------------- |
| id             | integer        | Primary Key, Not Null        |
| name           | string         | Not Null, 2000 chars or less |
| items_id       | integer        | Foreign Key, Not Null        |
| createdAt      | datetime       | Not Null                     |
| updatedAt      | datetime       | Not Null                     |

### Model Associations:

- Photos `many-to-one` Items association.

---

## Diagram Visual

![Schema](https://i.postimg.cc/8CYMz3Qh/db-schema.jpg)
