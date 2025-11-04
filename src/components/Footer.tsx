const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} VascoVerso. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
