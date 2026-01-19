import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';

const Header = () => {
  return (
    <header className="bg-header-background border-b border-gray-700 shadow-lg">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/cruzdemalta.webp"
              alt="Cruz de Malta do Vasco da Gama"
              width={40}
              height={40}
              className="group-hover:opacity-80 transition-opacity duration-300"
            />
            <span className="text-3xl font-extrabold tracking-tight font-heading">
              <span className="text-primary">vasco</span>
              <span className="text-gray-200">verso</span>
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block md:w-96">
            <SearchBar />
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/quem-somos" className="text-lg font-medium text-gray-200 hover:text-primary transition-colors duration-300 py-1 px-2 rounded hover:bg-gray-800">
              Quem Somos
            </Link>
            <Link href="/contato" className="text-lg font-medium text-gray-200 hover:text-primary transition-colors duration-300 py-1 px-2 rounded hover:bg-gray-800">
              Contato
            </Link>
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden w-full mt-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
