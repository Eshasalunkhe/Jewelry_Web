🛍️ NIVETRA – Silver Jewelry Shopping Web App
Nivetra is a full-stack ecommerce platform for browsing, buying, and managing silver jewelry products. The platform supports both user functionalities (shopping, cart, checkout) and admin functionalities (product/user/order management).


## 🧩 Tech Stack

| Layer       | Technologies Used                       |
|-------------|------------------------------------------|
| Frontend    | Angular (v16+), TypeScript, HTML, CSS    |
| Backend     | Spring Boot (v3+), Java                  |
| Database    | MySQL / H2                               |
| Tools       | Postman, VS Code, Git, Spring DevTools   |

---

## 🧑‍💻 Features

### 👤 User Features

- Sign Up / Login with role-based access (`USER` or `ADMIN`)
- View best-selling products on the homepage
- Browse products by category
- Add products to cart
- Checkout using **COD** or **Razorpay**
- View orders in **My Orders**

### 🛒 Cart Features

- Add multiple products with quantity
- Delete specific items from cart
- Automatically clears after placing an order

### 📦 Order Features

- Checkout from a single product or full cart
- Order includes total, date, and status
- View user-specific order history

### 🔐 Admin Panel

- Login with role: `ADMIN`
- Admin Dashboard:
  - ✅ Total Users
  - ✅ Total Orders
  - ✅ Add / Delete Products
  - ✅ View / Delete Users
  - ✅ View / Delete Orders

---

## 📁 Project Structure

### 🔙 Backend - Spring Boot (`/src/main/java/com/example/Nivetra`)

├── Controller
│   ├── AdminController.java
│   ├── CartItemController.java
│   ├── HomeController.java
│   ├── OrderController.java
│   └── ProductController.java
│
├── Model
│   ├── Product.java
│   ├── User.java
│   ├── Order.java
│   ├── OrderItem.java
│   └── CartItem.java
│
├── Repository
│   └── [Product, User, Order, CartItem]Repository.java
│
├── Service
│   └── [Product, User, Admin, Order, CartItem]Service.java
│
├── Config
│   └── SecurityConfig.java, WebConfig.java


### 💅 Frontend - Angular (`/src/app`)

├── app/
│   ├── admin/
│   ├── cart/
│   ├── checkout/
│   ├── home/
│   ├── login/
│   ├── signup/
│   ├── products/
│   ├── services/
│   ├── models/
│   ├── contact-us/
│   ├── about-us/
│   ├── orders/
│   ├── navbar/
│   └── footer/


---

## 🧪 API Endpoints

### 🔑 Authentication

| Method | Endpoint              | Description     |
|--------|-----------------------|-----------------|
| POST   | `/api/users/register` | Register user   |
| POST   | `/api/users/login`    | Login user      |

### 📦 Products

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/api/products`       | Get all products    |
| POST   | `/api/products`       | Add product (admin) |
| DELETE | `/api/products/{id}`  | Delete product      |

### 🛒 Cart

| Method | Endpoint                        | Description              |
|--------|----------------------------------|--------------------------|
| POST   | `/api/cart`                     | Add to cart              |
| GET    | `/api/cart/user/{userId}`       | Get cart for a user      |
| DELETE | `/api/cart/{id}`                | Delete item from cart    |
| DELETE | `/api/cart/clear/{id}`          | Clear full cart          |

### 📦 Orders

| Method | Endpoint                       | Description              |
|--------|--------------------------------|--------------------------|
| POST   | `/api/orders`                 | Place a new order        |
| GET    | `/api/orders/user/{id}`       | View user orders         |

### 🛠️ Admin Panel

| Method | Endpoint                          | Description          |
|--------|-----------------------------------|----------------------|
| GET    | `/api/admin/users`               | Get all users        |
| GET    | `/api/admin/orders`              | Get all orders       |
| DELETE | `/api/admin/delete-user/{id}`    | Delete a user        |
| DELETE | `/api/admin/delete-order/{id}`   | Delete an order      |
| GET    | `/api/admin/user-count`          | Total user count     |
| GET    | `/api/admin/order-count`         | Total order count    |


Screenshots:
✅ signup & Login Page:
<img width="1893" height="928" alt="image" src="https://github.com/user-attachments/assets/e43f65cd-ec66-41f9-bbc4-338f88114042" />
<img width="1880" height="811" alt="image" src="https://github.com/user-attachments/assets/2e2bff3f-34f1-4dea-b359-504ff41717ca" />


✅ Homepage:
<img width="1884" height="905" alt="image" src="https://github.com/user-attachments/assets/3b64c8fd-aa45-49a5-a40a-744ccf30bfaa" />
<img width="1885" height="916" alt="image" src="https://github.com/user-attachments/assets/4efab240-5cd5-4479-8592-4784ccd06c9d" />

✅ Product listing (with Add to Cart / Buy Now)
<img width="1897" height="915" alt="image" src="https://github.com/user-attachments/assets/a38cdc91-76d1-465c-8bfa-b0fca4a09506" />

✅ Cart page with all items:
<img width="1897" height="880" alt="image" src="https://github.com/user-attachments/assets/17a02cc5-fd7a-497a-b3de-c3a19400bcaf" />


✅ Checkout page
<img width="1897" height="890" alt="image" src="https://github.com/user-attachments/assets/c64c9543-4e32-4b58-a26c-b59d15abe807" />


✅ My Orders page
<img width="1885" height="892" alt="image" src="https://github.com/user-attachments/assets/aac6c7d0-f875-430b-ba7d-78ccf9422eb9" />

✅ Admin Dashboard:
<img width="1864" height="899" alt="image" src="https://github.com/user-attachments/assets/817d164b-9928-44f3-8932-d4cf241c2fb1" />



## 🚀 How to Run Locally

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run

For Frontend
cd frontend
npm install
ng serve


🌱 How to Fork & Contribute
1.	Fork this repository
2. Clone your forked repo
git clone https://github.com/YOUR_USERNAME/nivetra.git
cd nivetra
3. Set up backend (backend/) and frontend (frontend/) as explained above
4. Make your changes, commit and push
5. Open a Pull Request on GitHub

🙋‍♀️ Created By
Nivetra Web App by Esha Salunkhe
