// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import "./App.css";

/* ================= NAVBAR ================= */

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <h1 className="logo">RoyalBites</h1>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/booking">Book Table</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/cart" className="cart">
          🛒 Cart ({cart.length})
        </NavLink>
      </div>
    </nav>
  );
}

/* ================= HOME ================= */

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="hero">
        <div className="overlay">
          <h1>Royal Dining Experience</h1>
          <p>Luxury food, premium taste, unforgettable experience.</p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/booking")}>Book Table</button>
            <button className="outline-btn" onClick={() => navigate("/menu")}>
              Explore Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <div className="page">
      <h1 className="title">About RoyalBites</h1>

      <div className="about-container">
        <div className="about-box">
          <h2>Our Story</h2>
          <p>
            RoyalBites is a premium restaurant delivering world-class dining
            experiences with delicious food and luxury ambience.
          </p>
        </div>

        <div className="about-box">
          <h2>Vision</h2>
          <p>To become India’s most loved food brand with quality service.</p>
        </div>

        <div className="about-box">
          <h2>Why Us</h2>
          <ul>
            <li>✔ Premium Quality Food</li>
            <li>✔ Hygienic Kitchen</li>
            <li>✔ Fast Service</li>
            <li>✔ Affordable Prices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= MENU ================= */

function MenuCard({ food, addToCart }) {
  return (
    <div className="menu-card">
      <img src={food.image} alt={food.title} />
      <div className="menu-content">
        <h3>{food.title}</h3>
        <p>{food.price}</p>
        <button onClick={() => addToCart(food)}>Add To Cart</button>
      </div>
    </div>
  );
}

function Menu({ addToCart }) {
  const foods = [
    {
      id: 1,
      title: "Paneer Butter Masala",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Chicken Biryani",
      price: "₹349",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Veg Fried Rice",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Chicken Tandoori",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Cheese Pizza",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Burger Combo",
      price: "₹179",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Masala Dosa",
      price: "₹129",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Butter Naan",
      price: "₹99",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "Chicken Curry",
      price: "₹279",
      image:
        "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "Pasta Alfredo",
      price: "₹229",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      title: "Momos",
      price: "₹139",
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      title: "Cold Coffee",
      price: "₹119",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      title: "Ice Cream",
      price: "₹159",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      title: "Noodles",
      price: "₹189",
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      title: "Cake",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 16,
      title: "Gulab Jamun",
      price: "₹99",
      image:
        "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Menu</h1>

      <div className="menu-grid">
        {foods.map((food) => (
          <MenuCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

/* ================= GALLERY ================= */

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="page">
      <h1 className="title">Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-card" key={i}>
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= BOOKING ================= */

function Booking() {
  return (
    <div className="page">
      <h1 className="title">Book Table</h1>

      <form
        className="booking-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Booked Successfully!");
        }}
      >
        <input placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input placeholder="Phone" required />
        <input type="date" required />
        <input type="time" required />
        <button>Book Now</button>
      </form>
    </div>
  );
}

/* ================= CART ================= */

function CartPage({ cart, removeFromCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="page">
      <h1 className="title">Cart</h1>

      {cart.length === 0 ? (
        <h2 className="empty-cart">Cart Empty</h2>
      ) : (
        <>
          {cart.map((item, i) => (
            <div className="cart-page-item" key={i}>
              <img src={item.image} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(i)}>Remove</button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button onClick={() => navigate("/checkout")}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

/* ================= CHECKOUT ================= */

function Checkout() {
  return (
    <div className="page">
      <h1 className="title">Checkout</h1>

      <form
        className="booking-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Order Placed!");
        }}
      >
        <input placeholder="Name" />
        <input placeholder="Address" />
        <button>Place Order</button>
      </form>
    </div>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <div className="page">
      <h1 className="title">Contact</h1>

      <form className="contact-form">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return <footer className="footer">©️ 2026 RoyalBites</footer>;
}

/* ================= APP ================= */

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => setCart([...cart, food]);

  const removeFromCart = (i) => {
    const temp = [...cart];
    temp.splice(i, 1);
    setCart(temp);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}