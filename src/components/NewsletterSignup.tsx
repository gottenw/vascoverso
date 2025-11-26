'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';
import { subscribeToNewsletter } from '@/lib/supabase';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, insira um email válido.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setMessage('Email cadastrado com sucesso! Agora você receberá nossas notícias em primeira mão.');
      setEmail('');

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        if (error.message.includes('duplicate') || error.message.includes('already exists')) {
          setMessage('Este email já está cadastrado.');
        } else {
          setMessage('Erro ao cadastrar email. Tente novamente.');
        }
      } else {
        setMessage('Erro ao cadastrar email. Tente novamente.');
      }

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 p-8 rounded-2xl border-2 border-gray-600/50 shadow-xl overflow-hidden">
      {/* Metallic shine effects */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-primary/20 rounded-lg">
            <Mail className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white font-heading">Receba as notícias em primeira mão</h3>
            <p className="text-gray-400 text-sm">Seja o primeiro a saber!</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Cadastre seu email e receba <span className="text-primary font-semibold">antecipadamente</span> as últimas notícias do{' '}
          <span className="text-primary font-semibold">Gigante da Colina</span>. Fique à frente com informações exclusivas diretamente na sua caixa de entrada!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              disabled={status === 'loading'}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/80 text-white placeholder-gray-500 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-primary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transform"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Cadastrando...
              </>
            ) : (
              <>
                <Send size={20} />
                Cadastrar Agora
              </>
            )}
          </button>

          {message && (
            <div
              className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                status === 'success'
                  ? 'bg-green-900/30 text-green-300 border-2 border-green-600/50 shadow-lg shadow-green-900/20'
                  : 'bg-red-900/30 text-red-300 border-2 border-red-600/50 shadow-lg shadow-red-900/20'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle size={22} className="flex-shrink-0" />
              ) : (
                <AlertCircle size={22} className="flex-shrink-0" />
              )}
              <span className="text-sm font-medium">{message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
