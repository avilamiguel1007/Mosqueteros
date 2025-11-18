function WhatsAppButton() {
  try {
    const whatsappNumber = '5212345678901';
    const whatsappMessage = encodeURIComponent('Hola! Necesito información.');

    return (
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
        data-name="whatsapp-button"
        data-file="components/WhatsAppButton.js"
      >
        <div className="icon-message-circle text-3xl text-white"></div>
      </a>
    );
  } catch (error) {
    console.error('WhatsAppButton component error:', error);
    return null;
  }
}