'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const withAuth = <T extends Record<string, unknown>>(WrappedComponent: React.ComponentType<T>) => {
  const Wrapper = (props: T) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const { data: { session } } = await supabase.auth.getSession();

          if (!session) {
            router.replace('/admin/login');
            return;
          }

          setIsAuthenticated(true);
        } catch (error) {
          console.error('Erro ao verificar autenticação:', error);
          router.replace('/admin/login');
        } finally {
          setIsLoading(false);
        }
      };

      checkAuth();

      // Listener para mudanças na autenticação
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          router.replace('/admin/login');
        } else if (event === 'SIGNED_IN') {
          setIsAuthenticated(true);
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    }, [router]);

    // Mostra loading enquanto verifica autenticação
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen bg-background">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-400">Verificando autenticação...</p>
          </div>
        </div>
      );
    }

    // Só renderiza o componente se estiver autenticado
    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
