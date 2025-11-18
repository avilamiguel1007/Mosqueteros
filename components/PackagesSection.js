function PackagesSection() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const { addToCart } = useCart();

    const packages = [
      { name: 'Paquete Familiar', description: '4 Tacos al Pastor, 2 Quesadillas, 2 Horchatas', price: '$250', image: 'https://cdn.pixabay.com/photo/2025/11/14/01/36/tacos-9955767_960_720.jpg' },
      { name: 'Paquete Pareja', description: '6 Tacos al Pastor, 2 Margaritas, Churros', price: '$180', image: 'https://cdn.pixabay.com/photo/2025/11/14/01/28/tacos-9955753_960_720.jpg' },
      { name: 'Paquete Individual', description: '3 Tacos al Pastor, Agua de Jamaica', price: '$95', image: 'https://cdn.pixabay.com/photo/2025/11/14/02/17/02-17-01-856_960_720.jpg' }
    ];

    const nextSlide = () =>
      setCurrentIndex((prev) => (prev + 1) % packages.length);

    const prevSlide = () =>
      setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);

    return (
      <section id="paquetes" className="py-20">
        <div className="container mx-auto px-4">
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Paquetes
          </h2>

          <p className="text-center text-[var(--text-light)] mb-12 max-w-2xl mx-auto">
            Combos especiales para compartir
          </p>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-[var(--text-light)] mb-4">
                      {pkg.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[var(--primary-color)]">
                        {pkg.price}
                      </span>

                      <button
                        onClick={() => addToCart(pkg)}
                        className="btn-primary py-2 px-6"
                      >
                        Añadir
                      </button>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    );

  } catch (error) {
    console.error('PackagesSection component error:', error);
    return null;
  }
}

