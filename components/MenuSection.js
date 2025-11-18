function MenuSection() {
  try {
    const [activeCategory, setActiveCategory] = React.useState('comida');
    const { addToCart } = useCart();

    const menuItems = {
      comida: [
        { name: 'Tacos al Pastor', description: 'Tortilla suave con carne marinada, piña, cilantro y cebolla', price: '$45', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400' },
        { name: 'Quesadillas', description: 'Tortillas rellenas de queso fundido', price: '$55', image: 'https://cdn.pixabay.com/photo/2017/05/09/01/34/quesadilla-2297035_960_720.jpg' },
        { name: 'Enchiladas Verdes', description: 'Tortillas bañadas en salsa verde con pollo y crema', price: '$85', image: 'https://cdn.pixabay.com/photo/2020/11/07/04/00/enchilada-5719784_1280.jpg' },
        { name: 'Pozole Rojo', description: 'Caldo tradicional con maíz, carne de cerdo y especias', price: '$95', image: 'https://cdn.pixabay.com/photo/2017/10/05/18/08/pozole-2820341_1280.jpg' },
        { name: 'Tamales', description: 'Masa de maíz rellena de carne o rajas', price: '$35', image: 'https://cdn.pixabay.com/photo/2019/09/25/16/29/tamale-4504060_1280.jpg' },
        { name: 'Sopes', description: 'Base de masa con frijoles, carne y verduras', price: '$50', image: 'https://i.pinimg.com/1200x/ba/35/64/ba35648c7c027c4182c25b7208b9bc8f.jpg' }
      ],

      bebidas: [
        { name: 'Agua de Jamaica', description: 'Refrescante bebida natural de flor de jamaica', price: '$25', image: 'https://letrasypoesia.com/wp-content/uploads/2023/08/poema-sobre-agua-de-jamaica-te-sabor-bebida.png?w=1024' },
        { name: 'Horchata', description: 'Bebida dulce de arroz con canela y vainilla', price: '$25', image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/9a75bce4a881d276adf97fb65e0c948e.webp?itok=_twrrAdB' },
        { name: 'Margarita', description: 'Tequila, limón y sal en el borde', price: '$65', image: 'https://thecookinglab.es/wp-content/uploads/2024/08/Coctel-margarita-receta-360x360.jpg' },
        { name: 'Michelada', description: 'Cerveza con limón, sal y salsas', price: '$45', image: 'https://www.aventurasconsabores.com/wp-content/uploads/2022/03/Michelada-825x510.webp' }
      ],

      postres: [
        { name: 'Flan Napolitano', description: 'Postre cremoso con caramelo casero', price: '$45', image: 'https://cdn.pixabay.com/photo/2014/08/08/11/22/flan-413219_1280.jpg' },
        { name: 'Churros', description: 'Masa frita espolvoreada con azúcar y canela', price: '$35', image: 'https://cdn.pixabay.com/photo/2017/03/30/15/46/churros-2188869_1280.jpg' },
        { name: 'Tres Leches', description: 'Pastel empapado en tres tipos de leche', price: '$50', image: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg' }
      ]
    };

    return (
      <section id="menu" className="py-20" data-name="menu-section" data-file="components/MenuSection.js">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-aos="fade-up">Nuestro Menú</h2>
          <p className="text-center text-[var(--text-light)] mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Explora nuestra selección de platillos tradicionales preparados con amor
          </p>

          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            {['comida', 'bebidas', 'postres'].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-[var(--primary-color)] text-white shadow-lg'
                    : 'bg-white text-[var(--text-dark)] hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="menu-card" data-aos="fade-up" data-aos-delay={index * 100}>
                
                <div className="w-full h-48 bg-gray-100 rounded-t-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-[var(--text-light)] mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[var(--primary-color)]">{item.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <div className="icon-shopping-cart text-lg"></div>
                    <span>Añadir al carrito</span>
                  </button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('MenuSection component error:', error);
    return null;
  }
}

