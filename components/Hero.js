function Hero() {
  try {
    const whatsappNumber = '5212345678901';
    const whatsappMessage = encodeURIComponent('Hola! Me gustaría hacer un pedido.');

    return (
      <section 
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600)',
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
            Auténtica Comida Mexicana
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto opacity-90">
            Descubre la tradición y el sabor de México en cada platillo. Ingredientes frescos, recetas auténticas.
          </p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <div className="icon-message-circle text-xl"></div>
            <span>Haz tu pedido por WhatsApp</span>
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
