function Cart() {
  try {
    const { 
      cartItems, 
      removeFromCart, 
      updateQuantity, 
      getTotalItems, 
      getTotalPrice,
      isCartOpen,
      setIsCartOpen,
      clearCart
    } = useCart();

    const handleCheckout = () => {
      if (cartItems.length === 0) return;
      
      const orderDetails = cartItems.map(item => 
        `${item.quantity}x ${item.name} - $${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`
      ).join('%0A');
      
      const total = getTotalPrice().toFixed(2);
      const message = encodeURIComponent(
        `Hola! Me gustaría hacer el siguiente pedido:\n\n${decodeURIComponent(orderDetails)}\n\nTotal: $${total}`
      );
      
      window.open(`https://wa.me/5212345678901?text=${message}`, '_blank');
      clearCart();
      setIsCartOpen(false);
    };

    return (
      <>
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
            isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsCartOpen(false)}
          data-name="cart-overlay"
          data-file="components/Cart.js"
        ></div>

        <div 
          className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          data-name="cart-sidebar"
          data-file="components/Cart.js"
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tu Pedido</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <div className="icon-x text-2xl"></div>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="icon-shopping-cart text-6xl text-gray-300 mb-4 mx-auto w-fit"></div>
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.name}</h3>
                        <p className="text-[var(--primary-color)] font-bold mb-2">{item.price}</p>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            <div className="icon-minus text-sm"></div>
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            <div className="icon-plus text-sm"></div>
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.name)}
                            className="ml-auto text-red-500 hover:text-red-700"
                          >
                            <div className="icon-trash-2 text-lg"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between mb-4 text-lg">
                  <span className="font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-[var(--primary-color)]">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <div className="icon-message-circle text-xl"></div>
                  <span>Enviar pedido por WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Cart component error:', error);
    return null;
  }
}