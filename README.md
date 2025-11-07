- Quick Demo of the project
- Product page
     - API Integration
     - Products from DB (mysql)
- Cart page
- DB persistence
- Reponsive

`Required: Typescript`
```
cd server/
```
then
```
npm install typescript tsx @types/node --save-dev
```
add `.env` file inside `server` directory which will contain `DATABASE_URL`
```
DATABASE_URL="mysql://<user>:<password>@localhost:3306/mydb"
```


### Frontend:
- React
- Tailwind CSS
- React / Tanstack Query
     - trigger get requests on mutation success, smooth refetching

![alt text](image-1.png)
![alt text](image-3.png)
![alt text](image-6.png)

![alt text](image.png)
![alt text](image-2.png)


### Backend:
- Express
- Prisma
     - Models
        - Product
        - User
        - CartItem
        - Receipt
- MySQL
     - docker 

### Routes
### User
- /api/user/:id

### Cart
- /api/cart/ - `DELETE` - delete single item from cart
- /api/cart/:id - `POST` - add item to cart of user
- /api/cart/:id - `PATCH` - update quantity of item in cart

### Checkout
- /api/checkout/ - `POST` - create receipt\
- /api/checkout/:userId - `DELETE` - delete all items from cart of user

### Receipt
- /api/receipt/:userId - `GET` - get receipt of user
