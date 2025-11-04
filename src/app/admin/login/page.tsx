'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError('Email ou senha incorretos');
        console.error('Erro de autenticação:', error);
        return;
      }

      if (data.session) {
        // Login bem-sucedido - redirecionar para o dashboard
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card-background rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground font-heading">Acesso Administrativo</h1>
          <p className="mt-2 text-sm text-gray-400">Vascoverso - Portal de Notícias</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="operador@vascoverso.com"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="p-3 text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
