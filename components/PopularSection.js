function PopularSection() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const { addToCart } = useCart();

    const popularItems = [
      { name: 'Tacos al Pastor', description: 'Los más vendidos de la casa', price: '$45', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400', rating: 5 },
      { name: 'Quesadillas', description: 'Favoritas del público', price: '$55', image: 'https://cdn.pixabay.com/photo/2017/05/09/01/34/quesadilla-2297035_960_720.jpg', rating: 5 },
      { name: 'Pozole Rojo', description: 'Tradición en cada cucharada', price: '$95', image: 'https://cdn.pixabay.com/photo/2017/10/05/18/08/pozole-2820341_1280.jpg', rating: 5 },
      { name: 'Enchiladas Verdes', description: 'Receta de la abuela', price: '$85', image: 'https://cdn.pixabay.com/photo/2020/11/07/04/00/enchilada-5719784_1280.jpg', rating: 5 }
    ];

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % popularItems.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + popularItems.length) % popularItems.length);
    };

    return (
      <section id="popular" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Lo Más Pedido</h2>
          <p className="text-center text-[var(--text-light)] mb-12 max-w-2xl mx-auto">
            Los platillos favoritos de nuestros clientes
          </p>

          <div className="relative max-w-6xl mx-auto overflow-hidden">

            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / popularItems.length)}%)`,
              }}
            >
              {popularItems.map((item, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ minWidth: "25%" }} // 4 tarjetas
                >
                  <div className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-[var(--text-light)] mb-4">{item.description}</p>

                        <div className="flex items-center gap-1 mb-4">
                          {Array(5).fill(0).map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill={i < item.rating ? "#FCD34D" : "#E5E7EB"} viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[var(--primary-color)]">{item.price}</span>
                        <button onClick={() => addToCart(item)} className="btn-primary py-2 px-5">
                          Añadir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
            >
              <div className="icon-chevron-left text-2xl text-[var(--primary-color)]"></div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
            >
              <div className="icon-chevron-right text-2xl text-[var(--primary-color)]"></div>
            </button>

          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PopularSection component error:', error);
    return null;
  }
}

