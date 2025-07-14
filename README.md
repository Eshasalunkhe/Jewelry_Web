🛍️ NIVETRA – Silver Jewelry Shopping Web App
Nivetra is a full-stack ecommerce platform for browsing, buying, and managing silver jewelry products. The platform supports both user functionalities (shopping, cart, checkout) and admin functionalities (product/user/order management).

## 🔗 Live Preview

- **Frontend**: [http://localhost:4200](http://localhost:4200)  
- **Backend**: [http://localhost:8081](http://localhost:8081)

---

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

---

## 🚀 How to Run Locally

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run

For Frontend
cd frontend
npm install
ng serve



✅ Homepage
<img width="1893" height="913" alt="image" src="https://github.com/user-attachments/assets/a7bd8b69-880a-4ec1-a912-b9372da7eb99" />

<img width="1883" height="915" alt="image" src="https://github.com/user-attachments/assets/35eaeb87-97ef-4599-ac09-be11c38a802f" />

✅ Product listing (with Add to Cart / Buy Now)
<img width="1905" height="910" alt="image" src="https://github.com/user-attachments/assets/f1ef3c91-5f1d-4408-9e17-52ba43a84460" />



✅ Cart page with all items
<img width="1905" height="772" alt="image" src="https://github.com/user-attachments/assets/dc888fa8-1f39-4354-9584-38db69c1d398" />


✅ Checkout page
<img width="1807" height="899" alt="image" src="https://github.com/user-attachments/assets/e5bdcb5c-a698-4fad-bd58-77984e1ee976" />


✅ My Orders page
<img width="1884" height="589" alt="image" src="https://github.com/user-attachments/assets/de92a4a9-6cc4-4eef-ba2d-c27a836482d0" />

✅ Admin Dashboard:
<img width="1900" height="917" alt="image" src="https://github.com/user-attachments/assets/860d0cbc-226b-4d41-91ec-254b30fce74f" />

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
