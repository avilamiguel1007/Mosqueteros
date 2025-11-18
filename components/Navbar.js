function Navbar() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { getTotalItems, setIsCartOpen } = useCart();

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'gradient-bg shadow-lg py-3' : 'bg-transparent py-5'
        }`}
        data-name="navbar"
        data-file="components/Navbar.js"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="icon-flame text-3xl text-[var(--primary-color)]"></div>
            <span className="text-2xl font-bold text-white text-shadow">
              Casa Mexa
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex space-x-6 text-sm">
              <button onClick={() => scrollToSection('inicio')} className="font-medium transition-colors text-white hover:text-[var(--secondary-color)]">
                Inicio
              </button>
              <button onClick={() => scrollToSection('popular')} className="font-medium transition-colors text-white hover:text-[var(--secondary-color)]">
                Lo Más Pedido
              </button>
              <button onClick={() => scrollToSection('menu')} className="font-medium transition-colors text-white hover:text-[var(--secondary-color)]">
                Menú
              </button>
              <button onClick={() => scrollToSection('paquetes')} className="font-medium transition-colors text-white hover:text-[var(--secondary-color)]">
                Paquetes
              </button>
              <button onClick={() => scrollToSection('promociones')} className="font-medium transition-colors text-white hover:text-[var(--secondary-color)]">
                Promociones
              </button>
              <button onClick={() => scrollToSection('contacto')} className="font-medium transition-colors text-white hover:text-[var(--secondary-color)]">
                Contacto
              </button>
            </div>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full transition-colors hover:bg-white hover:bg-opacity-20"
            >
              <div className="icon-shopping-cart text-2xl text-white"></div>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--primary-color)] text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            <a 
              href="https://wa.me/5212345678901?text=Hola!%20Quiero%20hacer%20una%20reservaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Reservar
            </a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}
