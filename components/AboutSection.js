function AboutSection() {
  try {
    return (
      <section id="nosotros" className="py-20" data-name="about-section" data-file="components/AboutSection.js">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-lg text-[var(--text-light)] mb-4">
                Desde hace más de 20 años, nos dedicamos a preservar y compartir la auténtica tradición culinaria mexicana. Cada platillo es preparado con recetas heredadas de generación en generación.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Utilizamos únicamente ingredientes frescos y de la más alta calidad, porque creemos que el verdadero sabor de México merece lo mejor.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">20+</div>
                  <div className="text-sm text-[var(--text-light)]">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">50+</div>
                  <div className="text-sm text-[var(--text-light)]">Platillos únicos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">10K+</div>
                  <div className="text-sm text-[var(--text-light)]">Clientes felices</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800" 
                alt="Restaurante" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}