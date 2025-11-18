const CartContext = React.createContext();

function CartProvider({ children }) {
  try {
    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const addToCart = (item) => {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(i => i.name === item.name);
        if (existingItem) {
          return prevItems.map(i =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prevItems, { ...item, quantity: 1 }];
      });
    };

    const removeFromCart = (itemName) => {
      setCartItems(prevItems => prevItems.filter(i => i.name !== itemName));
    };

    const updateQuantity = (itemName, quantity) => {
      if (quantity <= 0) {
        removeFromCart(itemName);
        return;
      }
      setCartItems(prevItems =>
        prevItems.map(i => i.name === itemName ? { ...i, quantity } : i)
      );
    };

    const getTotalItems = () => {
      return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
      return cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + (price * item.quantity);
      }, 0);
    };

    const clearCart = () => {
      setCartItems([]);
    };

    return (
      <CartContext.Provider value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        clearCart,
        isCartOpen,
        setIsCartOpen
      }}>
        {children}
      </CartContext.Provider>
    );
  } catch (error) {
    console.error('CartProvider error:', error);
    return children;
  }
}

function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}