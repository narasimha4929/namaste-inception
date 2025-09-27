import React, { useState } from "react";
import { ShoppingCart, Search, Plus, Minus, Trash2 } from "lucide-react";

const Grocery = () => {
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      price: 40,
      unit: "kg",
      image: "🍅",
      category: "Vegetables",
    },
    {
      id: 2,
      name: "Green Capsicum",
      price: 60,
      unit: "kg",
      image: "🫑",
      category: "Vegetables",
    },
    {
      id: 3,
      name: "Fresh Milk",
      price: 65,
      unit: "L",
      image: "🥛",
      category: "Dairy",
    },
    {
      id: 4,
      name: "Brown Eggs",
      price: 120,
      unit: "dozen",
      image: "🥚",
      category: "Dairy",
    },
    {
      id: 5,
      name: "Basmati Rice",
      price: 180,
      unit: "kg",
      image: "🍚",
      category: "Grains",
    },
    {
      id: 6,
      name: "Fresh Bread",
      price: 35,
      unit: "pack",
      image: "🍞",
      category: "Bakery",
    },
    {
      id: 7,
      name: "Banana",
      price: 50,
      unit: "dozen",
      image: "🍌",
      category: "Fruits",
    },
    {
      id: 8,
      name: "Green Apple",
      price: 180,
      unit: "kg",
      image: "🍏",
      category: "Fruits",
    },
  ];

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cartTotal = products.reduce(
    (sum, p) => sum + (cart[p.id] || 0) * p.price,
    0
  );

  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>
            <span style={styles.logoIcon}>🛒</span>
            InstaMart
          </h1>
          <div style={styles.cartBadge}>
            <ShoppingCart size={24} color="white" />
            {cartItemCount > 0 && (
              <span style={styles.badge}>{cartItemCount}</span>
            )}
          </div>
        </div>
      </header>

      <div style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.content}>
        <div style={styles.productsSection}>
          <h2 style={styles.sectionTitle}>Fresh Products</h2>
          <div style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.productImage}>{product.image}</div>
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productPrice}>
                    ₹{product.price}/{product.unit}
                  </p>
                  <span style={styles.category}>{product.category}</span>
                </div>
                {cart[product.id] ? (
                  <div style={styles.quantityControls}>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      style={styles.quantityBtn}
                    >
                      {cart[product.id] === 1 ? (
                        <Trash2 size={16} />
                      ) : (
                        <Minus size={16} />
                      )}
                    </button>
                    <span style={styles.quantity}>{cart[product.id]}</span>
                    <button
                      onClick={() => addToCart(product)}
                      style={styles.quantityBtn}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    style={styles.addBtn}
                  >
                    ADD
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {cartItemCount > 0 && (
          <div style={styles.cartSummary}>
            <h3 style={styles.cartTitle}>Cart Summary</h3>
            <div style={styles.cartItems}>
              {products
                .filter((p) => cart[p.id])
                .map((product) => (
                  <div key={product.id} style={styles.cartItem}>
                    <span>
                      {product.image} {product.name}
                    </span>
                    <span>×{cart[product.id]}</span>
                    <span>₹{cart[product.id] * product.price}</span>
                  </div>
                ))}
            </div>
            <div style={styles.total}>
              <span style={styles.totalLabel}>Total:</span>
              <span style={styles.totalAmount}>₹{cartTotal}</span>
            </div>
            <button style={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#7c3aed",
    color: "white",
    padding: "16px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoIcon: {
    fontSize: "32px",
  },
  cartBadge: {
    position: "relative",
    cursor: "pointer",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#ef4444",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },
  searchContainer: {
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "0 20px",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: "32px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  searchInput: {
    width: "100%",
    padding: "14px 16px 14px 48px",
    fontSize: "16px",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 350px",
    gap: "24px",
  },
  productsSection: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#1f2937",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
  },
  productCard: {
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    padding: "16px",
    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
  },
  productImage: {
    fontSize: "64px",
    textAlign: "center",
    marginBottom: "12px",
  },
  productInfo: {
    marginBottom: "12px",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 8px 0",
    color: "#1f2937",
  },
  productPrice: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#7c3aed",
    margin: "0 0 8px 0",
  },
  category: {
    fontSize: "12px",
    backgroundColor: "#f3e8ff",
    color: "#7c3aed",
    padding: "4px 8px",
    borderRadius: "6px",
  },
  addBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#7c3aed",
    borderRadius: "8px",
    padding: "4px",
  },
  quantityBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "6px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
  },
  cartSummary: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    position: "sticky",
    top: "100px",
    maxHeight: "calc(100vh - 120px)",
    overflowY: "auto",
  },
  cartTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#1f2937",
  },
  cartItems: {
    marginBottom: "16px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderTop: "2px solid #e5e7eb",
    marginTop: "16px",
  },
  totalLabel: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1f2937",
  },
  totalAmount: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#7c3aed",
  },
  checkoutBtn: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "16px",
    transition: "background-color 0.2s",
  },
};

export default Grocery;
