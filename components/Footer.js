function Footer() {
  try {
    return (
      <footer id="contacto" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-aos="fade-up">Ubicación y Contacto</h2>
          <p className="text-center text-[var(--text-light)] mb-12 max-w-2xl mx-auto" data-aos="fade-up">
            Encuéntranos y visítanos
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div data-aos="fade-right">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text-dark)]">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                      <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Dirección</p>
                      <p className="text-[var(--text-light)]">Av. Insurgentes Sur 1234, Col. Del Valle, CDMX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                      <div className="icon-clock text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Horario</p>
                      <p className="text-[var(--text-light)]">Lunes - Domingo: 10:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                      <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Teléfono</p>
                      <p className="text-[var(--text-light)]">+52 (55) 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                      <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-dark)]">Email</p>
                      <p className="text-[var(--text-light)]">contacto@casamexa.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.3526891746486!2d-99.17967492498595!3d19.372023081896906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAv.%20Insurgentes%20Sur%2C%20Del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Casa Mexa"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="gradient-bg text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <div className="icon-flame text-2xl"></div>
                <span className="text-xl font-bold">Casa Mexa</span>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <div className="icon-facebook text-xl"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <div className="icon-instagram text-xl"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <div className="icon-twitter text-xl"></div>
                </a>
              </div>
              
              <p className="opacity-90 text-sm">&copy; 2025 Casa Mexa. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
