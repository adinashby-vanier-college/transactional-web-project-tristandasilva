# Vinyl Vault - Documentation

<h4 align="center">
  Below is code documentation, describes the process of our application.
  
| [Users](#Users) | [Cart](#Cart) | [Products](#Products) |
</h4>

---

<!-- Body -->

## Users

**Endpoint:**
`GET users/`

Endpoint to retrieve user information based on the provided JWT token.

### Request

The endpoint requires a valid JWT token in the `Authorization` header.

### Response

```json
{
  "user": {
  "_id": "659c16640c514c73ef50bbd5",
  "first_name": "Justin ",
  "last_name": "Elmourne",
  "email": "jelmourne@outlook.com",
  "password": "cbaa18468dbd770daa41bdaddb425abe92d1ce49e43bb96c590b74c399d656c23cb629a41d9e915df8a12a098d2924e10f4689c0d150f3394ee6ce211983ee349b4ef922415a2d8b60361c65a325ac57cab37237817534296fa6b2848b12a8798ec6bfe08da754ef4794ef951dc0fe68ed2461e275d99d595ea47c8ed531de273fd3bd178bba5789a8ec1d3c9c7ae356138017ef2e5760f1f91b03b3209e350b7821aadcd77c94fd4fa450aa05bb9641a70baa5aba06695dc4dff124320b665f05bcfac968f8ce4f2137fa368b0f92a0f1acd654b25d5e70f26ab1f5be609a259634e4ac0cff26ca92946ed81abd6ef2c1f35fd3fd66838a08347400041755921226e44dfa59efc2b349bb6b29632d690f38e097d03a7e1c0b380603b876a663496af489362142110a66ad23c41395c644ecb5f8594eef6772a0a1aed9ce7aa6d5c7893f2ba1e01a0bb57a8f9f5eadd1cb95807eb701006030bd596380b0b6846ebb3828f716a1ceb35b1c1c747904c241a933cef5c09bbc67292449f70970429c1f566792edb21c5d41c8e7b92ee7fa2dfcebf06d0f6b4d234e3633323624304d83d2491bd8b23859c28619b47eda9cdc7d375af86cf9f12a8d495dea90c26c0d6bace981de2d7bf1ebf21ae635095aa16939d34949bb5bfeee8d3732fb8a1ca68ab4fcea48fa1d88fbf1a51e896d9ab896b37233d8bb494d5116f5c0d2ccd8",
  "salt": "LBOG/B4E+Aivr2XfdNIJfsVMK8IKXqQh0hZ3Xfko5K/2stlI/kca86RA3P3V6P/TGRGdLlCrMr/lym6hCs0BXm749mA1l8/aABw0Xp4cpaCfz9XppaA1jMEkcXK9nGbynXBIjXBenOnrrqlwrqJ6kJpXRovdsPoN2+8N/vRfSJA=",
  "__v": 0
}
```

---

**Endpoint:**
`GET /logout`

Endpoint to log out a user.

### Response

## **Status Code:** `200 OK`

**Endpoint:**
`POST /users/login`

Endpoint to authenticate a user and generate an access token.

### Request

- **Parameters:**
  - `email` (string): Email address of the user.
  - `password` (string): Password for the user.

### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWMxNjY0MGM1MTRjNzNlZjUwYmJkNSIsImlhdCI6MTcwNTYyOTI3MH0.mIEK5t-gBaUsUDy0ZD0ID3vjk-AIhm8XJBNU45UVkUM",
  "user": {
    "_id": "659c16640c514c73ef50bbd5",
    "first_name": "Justin",
    "last_name": "Elmourne",
    "email": "jelmourne@outlook.com",
    "password": "cbaa18468dbd770daa41bdaddb425abe92d1ce49e43bb96c590b74c399d656c23cb629a41d9e915df8a12a098d2924e10f4689c0d150f3394ee6ce211983ee349b4ef922415a2d8b60361c65a325ac57cab37237817534296fa6b2848b12a8798ec6bfe08da754ef4794ef951dc0fe68ed2461e275d99d595ea47c8ed531de273fd3bd178bba5789a8ec1d3c9c7ae356138017ef2e5760f1f91b03b3209e350b7821aadcd77c94fd4fa450aa05bb9641a70baa5aba06695dc4dff124320b665f05bcfac968f8ce4f2137fa368b0f92a0f1acd654b25d5e70f26ab1f5be609a259634e4ac0cff26ca92946ed81abd6ef2c1f35fd3fd66838a08347400041755921226e44dfa59efc2b349bb6b29632d690f38e097d03a7e1c0b380603b876a663496af489362142110a66ad23c41395c644ecb5f8594eef6772a0a1aed9ce7aa6d5c7893f2ba1e01a0bb57a8f9f5eadd1cb95807eb701006030bd596380b0b6846ebb3828f716a1ceb35b1c1c747904c241a933cef5c09bbc67292449f70970429c1f566792edb21c5d41c8e7b92ee7fa2dfcebf06d0f6b4d234e3633323624304d83d2491bd8b23859c28619b47eda9cdc7d375af86cf9f12a8d495dea90c26c0d6bace981de2d7bf1ebf21ae635095aa16939d34949bb5bfeee8d3732fb8a1ca68ab4fcea48fa1d88fbf1a51e896d9ab896b37233d8bb494d5116f5c0d2ccd8",
    "salt": "LBOG/B4E+Aivr2XfdNIJfsVMK8IKXqQh0hZ3Xfko5K/2stlI/kca86RA3P3V6P/TGRGdLlCrMr/lym6hCs0BXm749mA1l8/aABw0Xp4cpaCfz9XppaA1jMEkcXK9nGbynXBIjXBenOnrrqlwrqJ6kJpXRovdsPoN2+8N/vRfSJA=",
    "__v": 0
  }
}
```

---

**Endpoint:**
`POST users/register`

Endpoint to create a new user.

### Request

- **Parameters:**
  - `first_name` (string): First name of the user.
  - `last_name` (string): Last name of the user.
  - `email` (string): Email address of the user.
  - `password` (string): Password for the user.

### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoidGVzdCIsImxhc3RfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjM1OTkzYjIyMDAyZDRlOTM1MmQ5M2Q4MzZlZTg0MjkyN2RhMjM2OGJjYjUyNDAwNjE3YzY5MDNhNjkwMjMxZjFlMGQyMTI5ZTI0YWJkMDc4OGExMDEyYTVlNmJiNDU5MmNiMjY4ZTFhYThkYjM2YTYzZTMwZmJmMTA0ZTNlNjY0MzU4NTdjMjYxNmM5OTE5ZGFiMWM5NmVhNWIzMTY1YTJlOTdiNmFhYjgzYWZkYTgwODJmNjcyNWUzNTBlZTFkZjA3ZTc4NWVjYzQ4ODc4NGY0YzVhNjczZWNmMGFlNDk3ZjdjYmEyMDgzZjhkOGFmNTI2MmI5NDczZGI0YWEzODg0YTg5NWI5OTNhYzQ2MmE0NDVkOThjYTczZDMzMzNjOWE5N2RlYmI1YTg5YTU3NDYyYWVkZmI3ZGE4MzI0MTEzYjdmNDM5NDU5ZDE2NmRlMzFiZGUzZjE5YWVjNmJjZmFhMmY0OTRhNmYzMDRiYThmYzUyNDkyMzJiMGMzZDRlNThhYWI3NTBiYmIzZTJmZDY0MmVlYWNhYTIxMGI4NzFiMmQyZDlkNjg2OWY2OGIxOGE1Yzc1OWNhN2JlZGM5ZTE1OGQyNDE2MWU1NjY2ZThlZWIzYWM1NTU3MTg0MTlmZjJiZjU0NmUwNDdkZDc3ZGEwZTViNDIxOWZkNmU1M2M0ZTgxZTgwYzFkNGY3YTJlM2M0NjNjMjY4MmI5YWQ0NWU2NTkwYWIyYzhjOGVjMDdmNjViNjdhNDExOGM3OGM3NWIxZDg2Y2YyZTczNDU0MzY0MjM5OTliNGU3YmEzYmRkOGI5Y2E3NzU2N2E0MTNhYzRiNzFjNGJlNjQyYjAwZjNlM2E5M2YyOTNiMDU0YTg4NjMzNjZkOTA1NTc0YjlkNjczY2VmMjkzYzM3MDdiNTBjMDJjODZjN2QwNjg1MTU5NjkzMGUxMmQ1YmY4ZDFmYTc3ZDMxMDdjOTI0MTBlZjRhZGI4YTNhNzAxYWI1Mzc5NzA0YTQ0MzMwZjY1NzgwYTdmNTJmZWIxOGJjZjljNmUyNjUzNjkwMzUwNjIzODZmZjdlMzYwY2Q3ZWVmYWYyNmI4YTcwNmQ5ZDZkMDU0YjNlNGM1NWExM2FiZWQ5Y2ViODUzOTFjMDEzMzI5ODk3NmI1MGE3NDJhYjI1OGQ0MzcwNTkxNmI5MjNjNTMwZjczYzRiMjljN2E3OGY2MGNkZjhmYjYyYTk3NzA0ZjE2NTBjOGIxNzE0YjMwZTZjODlkZjdhNDc2YzMyMjJjMjlhYjBjNTU3NzE0ZDM5N2IwNTBkOWMxZmVlODc0OWUwZTU3NmVhYzFmMDlmNTdmYTE2ZTQ4NTk0MDMzMTFkNmE1ZTUiLCJfaWQiOiI2NWE5ZDUyYWViNTM0ZWZhMTJkYzdhYjIiLCJzYWx0IjoiUzFyWjRCbVlBS20wbnJzdlczOXRKK3FhUjBDT1p0T1JQZEV4Z1IrdlZUUWo0ZERndGtLL2txM0xKd2ZjNmtZRjN6N2VzeW1QQmh5R05FeGFOQk83K3o0Q1JadGVVdDBST2hEMktESzlNRXptelRBVVpIcUJQU2lrTWJmQjk0YXVsbklzem10M1ZkNjFsQWJTYlFzUVFJWkdzeGRYVkxyWFFTUkxsWERZQlFvPSIsIl9fdiI6MH0.CUQfU8NEZvwxQo161aG4gsLY2BvS5rD5I5YFMW-dJNU",
  "user": {
    "first_name": "test",
    "last_name": "test",
    "email": "test@test.com",
    "password": "35993b22002d4e9352d93d836ee842927da2368bcb52400617c6903a690231f1e0d2129e24abd0788a1012a5e6bb4592cb268e1aa8db36a63e30fbf104e3e66435857c2616c9919dab1c96ea5b3165a2e97b6aab83afda8082f6725e350ee1df07e785ecc488784f4c5a673ecf0ae497f7cba2083f8d8af5262b9473db4aa3884a895b993ac462a445d98ca73d3333c9a97debb5a89a57462aedfb7da8324113b7f439459d166de31bde3f19aec6bcfaa2f494a6f304ba8fc5249232b0c3d4e58aab750bbb3e2fd642eeacaa210b871b2d2d9d6869f68b18a5c759ca7bedc9e158d24161e5666e8eeb3ac555718419ff2bf546e047dd77da0e5b4219fd6e53c4e81e80c1d4f7a2e3c463c2682b9ad45e6590ab2c8c8ec07f65b67a4118c78c75b1d86cf2e7345436423999b4e7ba3bdd8b9ca77567a413ac4b71c4be642b00f3e3a93f293b054a8863366d905574b9d673cef293c3707b50c02c86c7d06851596930e12d5bf8d1fa77d3107c92410ef4adb8a3a701ab5379704a44330f65780a7f52feb18bcf9c6e265369035062386ff7e360cd7eefaf26b8a706d9d6d054b3e4c55a13abed9ceb85391c0133298976b50a742ab258d43705916b923c530f73c4b29c7a78f60cdf8fb62a97704f1650c8b1714b30e6c89df7a476c3222c29ab0c557714d397b050d9c1fee8749e0e576eac1f09f57fa16e4859403311d6a5e5",
    "_id": "65a9d52aeb534efa12dc7ab2",
    "salt": "S1rZ4BmYAKm0nrsvW39tJ+qaR0COZtORPdExgR+vVTQj4dDgtkK/kq3LJwfc6kYF3z7esymPBhyGNExaNBO7+z4CRZteUt0ROhD2KDK9MEzmzTAUZHqBPSikMbfB94aulnIszmt3Vd61lAbSbQsQQIZGsxdXVLrXQSRLlXDYBQo=",
    "__v": 0
  }
}
```

## Cart

**Endpoint:**
`GET cart/`

This endpoint retrieves the user's cart information, including the products in the cart.

**Request:**

The endpoint requires a valid JWT token in the `Authorization` header.

**Response:**

```json
{
  "data": {
    "_id": "659c1efee45557b38a2656ef",
    "products": [
      {
        "product": {
          "_id": "6590679d3e6c77e094c3b8d3",
          "master_id": 35276,
          "title": "The Velvet Underground & Nico",
          "artist": "The Velvet Underground Nico",
          "genre": ["Rock"],
          "price": "10.08",
          "year": 1967,
          "popularity": 417556,
          "cover_image": "https://i.discogs.com/XvCQxP3HvqMv3BQ3fpGkDbzIBoVCWsv0ID96k94kgag/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzQw/NDUtMTYxMDkyMjc5/MC0yNzY4LmpwZWc.jpeg",
          "__v": 0
        },
        "qty": 2,
        "_id": "65a9dd0d9aa7875d73126eed"
      }
    ],
    "__v": 0
  },
  "secret": "?key=AQGfHgAxjcAttorXgXXg&secret=FcacWwsfwuLWpgXtfNJgOsnIlISMGkCt"
}
```

---

**Endpoint:**
`POST cart/products`

This endpoint adds products to the user's cart. If the cart doesn't exist, it creates a new cart.

**Request:**

The endpoint requires a valid JWT token in the `Authorization` header.

- **Body:**

```json
{
  "products": [
    {
      "product": "product_id",
      "qty": 2
    }
  ]
}
```

**Response:**

```json
{
  "_id": "659c1efee45557b38a2656ef",
  "products": [
    {
      "product": "6590679d3e6c77e094c3b8d3",
      "qty": 2,
      "_id": "65a9dd0d9aa7875d73126eed"
    }
  ],
  "__v": 0
}
```

---

**Endpoint:**
`DELETE cart/products`

This endpoint removes a specific product from the user's cart.

**Request:**

The endpoint requires a valid JWT token in the `Authorization` header.

- **Body:**

```json
{
  "product": "product_id"
}
```

**Response:**

```json
{
  "_id": "659c1efee45557b38a2656ef",
  "products": [],
  "__v": 0
}
```

---

**Endpoint:**
`PUT cart/products`

This endpoint updates the quantity of a specific product in the user's cart.

**Request:**

The endpoint requires a valid JWT token in the `Authorization` header.

- **Body:**

```json
{
  "product": "product_id",
  "qty": 10
}
```

**Response:**

```json
{
  "_id": "659c1efee45557b38a2656ef",
  "products": [
    {
      "product": "6590679d3e6c77e094c3b8d3",
      "qty": 10,
      "_id": "65a9dd0d9aa7875d73126eed"
    },
    {
      "product": "6590679d3e6c77e094c6534",
      "qty": 2,
      "_id": "65a9dd7a9aa7875d73126ef2"
    }
  ],
  "__v": 0
}
```

## Products

**Endpoint:**

`GET products/recent`

This endpoint retrieves recently released products from the year 2023, sorted by popularity.

**Request:**

- **Query Parameters:**

  - `limit` (number, optional): Maximum number of products to retrieve.

**Response:**

```json
{
  "data": [
    {
      "_id": "659066ddb93d780be5a91877",
      "master_id": 3029339,
      "title": "So Much (For) Stardust",
      "artist": "Fall Out Boy",
      "genre": ["Rock", "Pop"],
      "price": "69.12",
      "year": 2023,
      "popularity": 9379,
      "cover_image": "https://i.discogs.com/7-OGzvlFe3KrvYIpOvWoFY149OAGKs98GPvTEzpDLow/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NTI0/MjM1LTE2Nzk2NTgz/MDItMTU5Mi5qcGVn.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```

---

**Endpoint:**

`GET products/discount`

This endpoint retrieves discounted products (price less than $10), sorted by popularity.

**Request:**

- **Query Parameters:**

  - `limit` (number, optional): Maximum number of products to retrieve.

**Response:**

```json
{
  "data": [
    {
      "_id": "659062b97f70495684c0bbf1",
      "master_id": 430390,
      "title": "Brutal Gore",
      "artist": "Malicious Onslaught",
      "genre": ["Rock"],
      "price": "4.41",
      "year": 1994,
      "popularity": 488,
      "cover_image": "https://i.discogs.com/7t2my-AIsd0qFbEmoRwL-V632pzAZ4wYvyHSaxE73-U/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTI1/ODctMTU2Mjk5ODY0/MS0zMTY1LmpwZWc.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```

---

**Endpoint:**

`GET products/genre/:id`

This endpoint retrieves products based on the specified genre, sorted by popularity.

**Request:**

- **Path Parameters:**

  - `id` (string): Genre ID.

- **Query Parameters:**

  - `limit` (number, optional): Maximum number of products to retrieve.

**Response:**

```json
{
  "data": [
    {
      "_id": "659063dccced1b85abce6f72",
      "master_id": 484590,
      "title": "Good Kid, M.A.A.d City",
      "artist": "Kendrick Lamar",
      "genre": ["Hip Hop"],
      "price": "12.41",
      "year": 2012,
      "popularity": 1519,
      "cover_image": "https://i.discogs.com/J5cLLlZI_8U9cL5NAJdF4rH_eC0X1TakmzbhtXsnxXM/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNzY1/NzUtMTM1Nzc2MDkx/MC03NDY0LmpwZWc.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```

---

**Endpoint:**

`GET products/search`

This endpoint searches for products based on the provided query in the title, artist, or genre, sorted by popularity.

**Request:**

- **Query Parameters:**
  - `q` (string): Search query.
  - `limit` (number, optional): Maximum number of products to retrieve.

**Response:**

```json
{
  "data": [
    {
      "_id": "659063dccced1b85abce6f72",
      "master_id": 484590,
      "title": "Good Kid, M.A.A.d City",
      "artist": "Kendrick Lamar",
      "genre": ["Hip Hop"],
      "price": "12.41",
      "year": 2012,
      "popularity": 1519,
      "cover_image": "https://i.discogs.com/J5cLLlZI_8U9cL5NAJdF4rH_eC0X1TakmzbhtXsnxXM/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNzY1/NzUtMTM1Nzc2MDkx/MC03NDY0LmpwZWc.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```

---

**Endpoint:**

`GET products/trending`

This endpoint retrieves trending products, sorted by popularity.

**Request:**

- **Query Parameters:**

  - `limit` (number, optional): Maximum number of products to retrieve.

**Response:**

```json
{
  "data": [
    {
      "_id": "6590679d3e6c77e094c3b8d3",
      "master_id": 35276,
      "title": "The Velvet Underground & Nico",
      "artist": "The Velvet Underground Nico",
      "genre": ["Rock"],
      "price": "10.08",
      "year": 1967,
      "popularity": 417556,
      "cover_image": "https://i.discogs.com/XvCQxP3HvqMv3BQ3fpGkDbzIBoVCWsv0ID96k94kgag/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzQw/NDUtMTYxMDkyMjc5/MC0yNzY4LmpwZWc.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```

---

**Endpoint:**

`GET products/discover`

This endpoint retrieves a random selection of products for discovery.

**Response:**

```json
{
  "data": [
    {
      "_id": "659062b97f70495684c0bbf1",
      "master_id": 430390,
      "title": "Brutal Gore",
      "artist": "Malicious Onslaught",
      "genre": ["Rock"],
      "price": "4.41",
      "year": 1994,
      "popularity": 488,
      "cover_image": "https://i.discogs.com/7t2my-AIsd0qFbEmoRwL-V632pzAZ4wYvyHSaxE73-U/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTI1/ODctMTU2Mjk5ODY0/MS0zMTY1LmpwZWc.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```

---

**Endpoint:**

`GET products/staff`

This endpoint retrieves products that are staff picks, based on predefined staff albums.

**Response:**

```json
{
  "data": [
    {
      "_id": "659063dccced1b85abce6f72",
      "master_id": 484590,
      "title": "Good Kid, M.A.A.d City",
      "artist": "Kendrick Lamar",
      "genre": ["Hip Hop"],
      "price": "12.41",
      "year": 2012,
      "popularity": 1519,
      "cover_image": "https://i.discogs.com/J5cLLlZI_8U9cL5NAJdF4rH_eC0X1TakmzbhtXsnxXM/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNzY1/NzUtMTM1Nzc2MDkx/MC03NDY0LmpwZWc.jpeg",
      "__v": 0
    }
  ],
  "secret": "your_secret_string"
}
```
