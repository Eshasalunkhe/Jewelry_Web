import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LoginComponent } from './login/login';
import { SignupComponent  } from './signup/signup';
import { ProductsComponent } from './products/products';
import { CartComponent } from './cart/cart';
import { AdminComponent } from './admin/admin';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { OrdersComponent } from './orders/orders';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'signup', loadComponent: () => import('./signup/signup').then(m => m.SignupComponent) },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.LoginComponent) },
  { path: 'products', loadComponent: () => import('./products/products').then(m => m.ProductsComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart').then(m => m.CartComponent) },
  { path: 'admin', loadComponent: () => import('./admin/admin').then(m => m.AdminComponent) },
  { path: 'about', loadComponent: () => import('./about-us/about-us').then(m => m.AboutUs) },
  { path: 'contact', loadComponent: () => import('./contact-us/contact-us').then(m => m.ContactUs) },
  { path: 'orders', loadComponent: () => import('./orders/orders').then(m => m.OrdersComponent) },
  { path: 'category/:name', loadComponent: () => import('./category/category').then(m => m.CategoryComponent) },
  {
  path: 'checkout',
  loadComponent: () => import('./checkout/checkout').then(m => m.CheckoutComponent)
},


  { path: '**', redirectTo: '' }
];

