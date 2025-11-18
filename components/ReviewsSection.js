function ReviewsSection() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const reviews = [
      { name: 'María González', comment: 'La mejor comida mexicana que he probado. Los tacos al pastor son increíbles!', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
      { name: 'Carlos Ramírez', comment: 'Excelente servicio y sabor auténtico. Totalmente recomendado.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
      { name: 'Ana López', comment: 'Me encanta venir aquí con mi familia. El ambiente es muy acogedor.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461cfba91e3?w=200' },
      { name: 'Luis Hernández', comment: 'Platillos deliciosos y precios justos. ¡Volveré pronto!', rating: 4, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
      <section className="py-20" data-name="reviews-section" data-file="components/ReviewsSection.js">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-aos="fade-up">Reseñas</h2>
          <p className="text-center text-[var(--text-light)] mb-12 max-w-2xl mx-auto" data-aos="fade-up">
            Lo que dicen nuestros clientes
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
                        <div>
                          <h3 className="font-bold text-lg">{review.name}</h3>
                          <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, i) => (
                              <svg key={i} className="w-5 h-5" fill={i < review.rating ? "#FCD34D" : "#E5E7EB"} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[var(--text-light)] text-lg italic">"{review.comment}"</p>
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
    console.error('ReviewsSection component error:', error);
    return null;
  }
}
