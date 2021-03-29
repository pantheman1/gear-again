# Database Schema

## Users

| Attribute Name | Attribute Type | Constraints                        |
| -------------- | -------------- | ---------------------------------- |
| id             | integer        | Primary Key, Not Null              |
| firstName      | string         | Not Null, 30 chars or less         |
| lastName       | string         | Not Null, 30 chars or less         |
| email          | string         | Not Null, Unique, 50 chars or less |
| hashedPassword | string.binary  | Not Null                           |
| city           | string         | Not Null, 30 chars or less         |
| chef_id        | integer        | Foreign Key                        |
| createdAt      | datetime       | Not Null                           |
| updatedAt      | datetime       | Not Null                           |

### Model Associations:

- Unique index on `[email]`
- Users `one-to-many` `Reservations` association.
- Users `one-to-many` `Favorites` association.
- Users `one-to-many` `Reviews` association.
- Users `one-to-one` `Chefs` association.

---

## Chefs

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| food_type_id   | integer        | Foreign Key, Not Null |
| price          | integer        | Not Null              |
| bio            | text           | Nullable              |
| profile_image  | String         |
| createdAt      | datetime       | Not Null              |
| updatedAt      | datetime       | Not Null              |

### Model Associations:

- Chefs `many-to-one` `Food_Types` association.
- Chefs `one-to-one` `Users` association.

---

## Food_Types

| Attribute Name | Attribute Type | Constraints           |
| -------------- | -------------- | --------------------- |
| id             | integer        | Primary Key, Not Null |
| name           | string         | Not Null              |
| image          | string         | Not Null              |
| createdAt      | datetime       | Not Null              |
| updatedAt      | datetime       | Not Null              |

### Model Associations:

- Food_Types `one-to-many` Chefs association.

---

## Reservations

| Attribute Name | Attribute Type | Constraints                   |
| -------------- | -------------- | ----------------------------- |
| id             | integer        | Primary Key, Not Null = False |
| user_id        | integer        | Foreign Key, Not Null = False |
| chef_id        | integer        | Foreign Key, Not Null = False |
| event_date     | date           | Not Null = False              |
| event_time     | datetime       | Not Null = False              |
| duration       | integer        | Not Null = False              |
| createdAt      | datetime       | Not Null = False              |
| updatedAt      | datetime       | Not Null = False              |

### Model Associations:

- Reservations `many to one` `Users` (Through user_id) association.
- Reservations `many to one` `Users`(Through chef_id) association.

---

## Favorites

| Attribute Name | Attribute Type | Constraints                   |
| -------------- | -------------- | ----------------------------- |
| id             | integer        | Primary Key, Not Null = False |
| user_id        | integer        | Foreign Key, Not Null = False |
| chef_id        | integer        | Foreign Key, Not Null = False |
| createdAt      | datetime       | Not Null                      |
| updatedAt      | datetime       | Not Null                      |

### Model Associations:

- Favorites `many to one` `Users` (Through user_id) association.
- Favorites `many to one` `Users`(Through chef_id) association.

---

## Reviews

| Attribute Name | Attribute Type | Constraints                   |
| -------------- | -------------- | ----------------------------- |
| id             | integer        | Primary Key, Not Null = False |
| user_id        | integer        | Foreign Key, Not Null = False |
| chef_id        | integer        | Foreign Key, Not Null = False |
| rating         | integer        | Not Null = False              |
| comment        | text           | Not Null = False              |
| createdAt      | datetime       | Not Null                      |
| updatedAt      | datetime       | Not Null                      |

### Model Associations:

- Favorites `many to one` `Users` (Through user_id) association.
- Favorites `many to one` `Users`(Through chef_id) association.

---

## Diagram Visual

![Schema](Screen-Shot-goes-here)
