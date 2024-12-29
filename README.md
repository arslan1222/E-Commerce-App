# MERN Stack eCommerce Website

A full-featured **eCommerce website** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) that allows users to browse, purchase products, and securely make payments. Admins can manage products, view orders, and track inventory with ease. This project provides an excellent base for anyone looking to launch or expand an eCommerce business.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Payment Integration](#payment-integration)
- [License](#license)

## Features

### User Features:
- **Browse Products**: View all available products, organized by categories and subcategories.
- **Product Filtering**: Filter products by category, subcategory, price range, and more.
- **Product Details**: View detailed information including title, description, price, sizes, and images.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **Checkout**: Seamlessly proceed to checkout, with an option for **Stripe Payments** or **Cash on Delivery**.
- **Order Tracking**: Track the status of orders post-purchase.

### Admin Features:
- **Product Management**: Admin can add, update, and delete products with details like title, description, price, size, and images.
- **Category/Subcategory Management**: Create and manage categories and subcategories for easy product navigation.
- **Order Management**: View customer orders, update their statuses, and manage deliveries.
- **Inventory Control**: Track product inventory and adjust stock levels as needed.

### Additional Features:
- **Responsive Design**: Fully mobile-responsive design, optimized for all screen sizes.
- **SEO Optimized**: Structured for better visibility in search engines to help attract organic traffic.
- **Real-Time Inventory Management**: Keep track of stock levels with real-time updates.
- **Secure Authentication**: JWT (JSON Web Token) based authentication for secure login and registration.

## Tech Stack

This eCommerce platform is built using the following technologies:

- **Frontend**: 
  - React.js
  - HTML, CSS, JavaScript
- **Backend**: 
  - Node.js
  - Express.js
- **Database**: 
  - MongoDB
- **Payment Integration**: 
  - Stripe (for online payments)
  - Cash on Delivery
- **Authentication**: 
  - JWT (JSON Web Tokens)

## Installation

### Prerequisites

Before you start, ensure you have the following tools installed on your local machine:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (either locally or using a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Stripe Account](https://stripe.com) for payment integration (if using Stripe for payments)

### Clone the repository

```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd mern-ecommerce
