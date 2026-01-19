'use client';

import { useState, useEffect } from 'react';
import withAuth from '@/components/withAuth';
import { getNewsletterSubscribers, deleteNewsletterSubscriber } from '@/lib/supabase';
import { Mail, Trash2, Download, Users, UserCheck, UserX } from 'lucide-react';

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  unsubscribed_at: string | null;
}

const NewsletterPage = () => {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const data = await getNewsletterSubscribers();
      setSubscribers(data || []);
    } catch (error) {
      console.error('Erro ao buscar inscritos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja remover este email da lista?')) {
      try {
        await deleteNewsletterSubscriber(id);
        setSubscribers(subscribers.filter((s) => s.id !== id));
      } catch (error) {
        console.error('Erro ao deletar inscrito:', error);
        alert('Erro ao deletar inscrito. Tente novamente.');
      }
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Email', 'Data de Inscrição', 'Status', 'Data de Cancelamento'],
      ...filteredSubscribers.map((s) => [
        s.email,
        new Date(s.subscribed_at).toLocaleDateString('pt-BR'),
        s.is_active ? 'Ativo' : 'Inativo',
        s.unsubscribed_at ? new Date(s.unsubscribed_at).toLocaleDateString('pt-BR') : '-'
      ])
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSubscribers = subscribers.filter((s) => {
    if (filter === 'active') return s.is_active;
    if (filter === 'inactive') return !s.is_active;
    return true;
  });

  const stats = {
    total: subscribers.length,
    active: subscribers.filter((s) => s.is_active).length,
    inactive: subscribers.filter((s) => !s.is_active).length
  };

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Mail className="text-primary" />
            Emails Cadastrados
          </h1>
          <p className="text-gray-400">Gerencie os emails cadastrados para receber notícias antecipadamente</p>
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Download size={20} />
          Exportar CSV
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card-background p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-blue-500" size={24} />
            <h3 className="text-gray-400 text-sm">Total de Inscritos</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">{stats.total}</p>
        </div>

        <div className="bg-card-background p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <UserCheck className="text-green-500" size={24} />
            <h3 className="text-gray-400 text-sm">Ativos</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">{stats.active}</p>
        </div>

        <div className="bg-card-background p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <UserX className="text-red-500" size={24} />
            <h3 className="text-gray-400 text-sm">Inativos</h3>
          </div>
          <p className="text-3xl font-bold text-foreground">{stats.inactive}</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all'
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'active'
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Ativos
        </button>
        <button
          onClick={() => setFilter('inactive')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'inactive'
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Inativos
        </button>
      </div>

      {/* Subscribers Table */}
      <div className="bg-card-background rounded-lg shadow-lg border border-gray-700 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-gray-400 mt-4">Carregando inscritos...</p>
          </div>
        ) : filteredSubscribers.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <Mail size={48} className="mx-auto mb-4 opacity-50" />
            <p>Nenhum inscrito encontrado.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Data de Inscrição
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Cancelamento
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredSubscribers.map((subscriber) => (
                  <tr
                    key={subscriber.id}
                    className="hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-foreground">
                      {subscriber.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                      {new Date(subscriber.subscribed_at).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          subscriber.is_active
                            ? 'bg-green-900/50 text-green-300 border border-green-700'
                            : 'bg-red-900/50 text-red-300 border border-red-700'
                        }`}
                      >
                        {subscriber.is_active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                      {subscriber.unsubscribed_at
                        ? new Date(subscriber.unsubscribed_at).toLocaleDateString('pt-BR')
                        : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDelete(subscriber.id)}
                        className="text-red-500 hover:text-red-400 transition-colors p-2 rounded hover:bg-gray-700"
                        title="Deletar"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(NewsletterPage);
