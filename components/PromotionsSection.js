function PromotionsSection() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const promotions = [
      { title: '2x1 en Margaritas', description: 'Todos los viernes de 6pm a 9pm', image: 'https://cdn.pixabay.com/photo/2025/11/14/01/40/margarita-9955768_960_720.jpg', discount: '50%' },
      { title: 'Combo Especial', description: 'Enchiladas Verdes + Horchata + Flan por $145', image: 'https://cdn.pixabay.com/photo/2025/11/14/01/45/01-45-30-868_960_720.jpg', discount: '$145' },
      { title: 'Churros Gratis', description: 'En la compra de cualquier paquete familiar', image: 'https://cdn.pixabay.com/photo/2017/03/30/15/46/churros-2188869_1280.jpg', discount: 'Gratis' }
    ];


    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % promotions.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);

    return (
      <section id="promociones" className="py-20" data-name="promotions-section" data-file="components/PromotionsSection.js">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-aos="fade-up">Promociones</h2>
          <p className="text-center text-[var(--text-light)] mb-12 max-w-2xl mx-auto" data-aos="fade-up">
            Ofertas especiales que no puedes perderte
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {promotions.map((promo, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="menu-card relative">
                      <div className="absolute top-4 right-4 bg-[var(--primary-color)] text-white px-4 py-2 rounded-full font-bold z-10">
                        {promo.discount}
                      </div>
                      <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img 
                          src={promo.image} 
                          alt={promo.title} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                        <p className="text-[var(--text-light)] text-lg">{promo.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
              <div className="icon-chevron-left text-2xl text-[var(--primary-color)]"></div>
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
              <div className="icon-chevron-right text-2xl text-[var(--primary-color)]"></div>
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('PromotionsSection component error:', error);
    return null;
  }
}