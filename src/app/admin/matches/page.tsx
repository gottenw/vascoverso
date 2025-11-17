'use client';

import withAuth from '@/components/withAuth';
import { useState, useEffect } from 'react';
import { getMatches, updateMatch } from '@/lib/supabase';

interface Match {
  id: number;
  match_date: string;
  opponent: string;
  championship: string;
  location: string;
}

const MatchesAdminPage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const data = await getMatches();
      setMatches(data || []);
    } catch (error) {
      console.error('Erro ao buscar jogos:', error);
      alert('Erro ao carregar os jogos. Verifique o console para mais detalhes.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (index: number, field: keyof Omit<Match, 'id'>, value: string) => {
    const newMatches = [...matches];
    newMatches[index] = { ...newMatches[index], [field]: value };
    setMatches(newMatches);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Atualizar cada jogo no banco de dados
      const updatePromises = matches.map((match) =>
        updateMatch(match.id, {
          match_date: match.match_date,
          opponent: match.opponent,
          championship: match.championship,
          location: match.location,
        })
      );

      await Promise.all(updatePromises);

      // Revalidar a página inicial para atualizar imediatamente
      try {
        await fetch('/api/revalidate', { method: 'POST' });
      } catch (revalidateError) {
        console.warn('Não foi possível revalidar o cache, mas os dados foram salvos:', revalidateError);
      }

      alert('Jogos salvos com sucesso! O site será atualizado em instantes.');
    } catch (error) {
      console.error('Erro ao salvar jogos:', error);
      alert('Erro ao salvar os jogos. Verifique o console para mais detalhes.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Editar Próximos Jogos</h1>
        <p className="text-gray-600 dark:text-gray-400">Carregando jogos...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Próximos Jogos</h1>

      {matches.length === 0 ? (
        <div className="bg-card-background p-4 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-400">
            Nenhum jogo cadastrado. Execute o script SQL <code>matches-table.sql</code> no Supabase para criar a tabela e inserir jogos iniciais.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-card-background p-4 rounded-lg shadow-md">
          {matches.map((match, index) => (
            <div key={match.id} className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-700 pb-4 last:border-0">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">Data</label>
                <input
                  type="text"
                  value={match.match_date}
                  onChange={(e) => handleInputChange(index, 'match_date', e.target.value)}
                  className="w-full p-2 border border-gray-600 bg-background text-foreground rounded"
                  placeholder="DD/MM"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">Adversário</label>
                <input
                  type="text"
                  value={match.opponent}
                  onChange={(e) => handleInputChange(index, 'opponent', e.target.value)}
                  className="w-full p-2 border border-gray-600 bg-background text-foreground rounded"
                  placeholder="Nome do time"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">Campeonato</label>
                <input
                  type="text"
                  value={match.championship}
                  onChange={(e) => handleInputChange(index, 'championship', e.target.value)}
                  className="w-full p-2 border border-gray-600 bg-background text-foreground rounded"
                  placeholder="Ex: Brasileirão"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-400">Local</label>
                <input
                  type="text"
                  value={match.location}
                  onChange={(e) => handleInputChange(index, 'location', e.target.value)}
                  className="w-full p-2 border border-gray-600 bg-background text-foreground rounded"
                  placeholder="Ex: São Januário"
                />
              </div>
            </div>
          ))}
          <button
            type="submit"
            disabled={saving}
            className="mt-4 px-6 py-2 text-white bg-primary rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Salvando...' : 'Salvar Jogos'}
          </button>
        </form>
      )}
    </div>
  );
};

export default withAuth(MatchesAdminPage);
