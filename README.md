🛍️ NIVETRA – Silver Jewelry Shopping Web App
Nivetra is a full-stack ecommerce platform for browsing, buying, and managing silver jewelry products. The platform supports both user functionalities (shopping, cart, checkout) and admin functionalities (product/user/order management).

🔗 Live Preview
Local: http://localhost:4200

Backend: http://localhost:8081

🧩 Tech Stack
Layer	Tech Used
Frontend	Angular (v16+), TypeScript, HTML, CSS
Backend	Spring Boot (v3+), Java
Database	MySQL / H2
Tools	Postman, VS Code, Git, Spring DevTools

🧑‍💻 Features
👤 User Features:
Sign up / Login with role-based access (USER or ADMIN)

View best-selling products on homepage

Browse products by category

Add products to cart

Checkout using COD or Razorpay

View placed orders in "My Orders"

🛒 Cart Features:
Add multiple products with quantity

Delete from cart

Clear cart after placing order

📦 Order Features
Checkout from single product or full cart

Place order with total, date, and status

View order history (user-specific)

🔐 Admin Panel
Login as admin using role: ADMIN

Dashboard showing:

Total Users

Total Orders

Add / Delete Products

View / Delete Users

View / Delete Orders

📁 Folder Structure
🔙 Backend - Spring Boot (/src/main/java/com/example/Nivetra)
pgsql
Copy
Edit
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
💅 Frontend - Angular (/src/app)
pgsql
Copy
Edit
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


🧪 API Endpoints
🔑 Auth
Endpoint	Method	Description
/api/users/register	POST	Register user
/api/users/login	POST	Login user

📦 Product
Endpoint	Method	Description
/api/products	GET	Get all products
/api/products	POST	Add product (admin)
/api/products/{id}	DELETE	Delete product (admin)

🛒 Cart
Endpoint	Method	Description
/api/cart	POST	Add to cart
/api/cart/user/{userId}	GET	Get user cart items
/api/cart/{id}	DELETE	Remove item
/api/cart/clear/{id}	DELETE	Clear full cart

🧾 Orders
Endpoint	Method	Description
/api/orders	POST	Place new order
/api/orders/user/{id}	GET	View user-specific orders

🛠️ Admin
Endpoint	Method	Description
/api/admin/users	GET	Get all users
/api/admin/orders	GET	Get all orders
/api/admin/delete-user/{id}	DELETE	Delete user
/api/admin/delete-order/{id}	DELETE	Delete order
/api/admin/user-count	GET	Total user count
/api/admin/order-count	GET	Total order count

🚀 How to Run
Backend (Spring Boot)
bash
Copy
Edit
cd backend
./mvnw spring-boot:run
Frontend (Angular)
bash
Copy
Edit
cd frontend
npm install
ng serve
📷 Screenshots to Showcase


✅ Homepage
<img width="1893" height="913" alt="image" src="https://github.com/user-attachments/assets/a7bd8b69-880a-4ec1-a912-b9372da7eb99" />

<img width="1883" height="915" alt="image" src="https://github.com/user-attachments/assets/35eaeb87-97ef-4599-ac09-be11c38a802f" />

✅ Product listing (with Add to Cart / Buy Now)
<img width="1901" height="897" alt="image" src="https://github.com/user-attachments/assets/a239bb5f-fd53-44f6-adb6-d13570651410" />


✅ Cart page with all items
<img width="1905" height="772" alt="image" src="https://github.com/user-attachments/assets/dc888fa8-1f39-4354-9584-38db69c1d398" />


✅ Checkout page
<img width="1807" height="899" alt="image" src="https://github.com/user-attachments/assets/e5bdcb5c-a698-4fad-bd58-77984e1ee976" />


✅ My Orders page
<img width="1884" height="589" alt="image" src="https://github.com/user-attachments/assets/de92a4a9-6cc4-4eef-ba2d-c27a836482d0" />

✅ Admin Dashboard:
<img width="1900" height="917" alt="image" src="https://github.com/user-attachments/assets/860d0cbc-226b-4d41-91ec-254b30fce74f" />



🙋‍♀️ Created By
Nivetra Web App by Esha Salunkhe
