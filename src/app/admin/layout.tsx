'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="flex h-screen bg-background font-sans">
      <aside className="w-64 bg-header-background text-white flex flex-col">
        <div className="p-4 text-2xl font-bold font-heading border-b border-gray-700">
          <span className="text-primary">vasco</span>
          <span>verso</span>
          <span className="text-sm"> admin</span>
        </div>
        <nav className="mt-8 flex-1">
          <Link href="/admin/dashboard" className="block py-3 px-4 hover:bg-gray-700 transition-colors">Dashboard</Link>
          <Link href="/admin/news" className="block py-3 px-4 hover:bg-gray-700 transition-colors">Notícias</Link>
          <Link href="/admin/newsletter" className="block py-3 px-4 hover:bg-gray-700 transition-colors">Newsletter</Link>
          <Link href="/admin/social" className="block py-3 px-4 hover:bg-gray-700 transition-colors">Redes Sociais</Link>
          <Link href="/admin/matches" className="block py-3 px-4 hover:bg-gray-700 transition-colors">Jogos</Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full py-2 px-4 text-red-400 hover:bg-gray-700 rounded transition-colors"
          >
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto bg-background text-foreground">
        {children}
      </main>
    </div>
  );
}
