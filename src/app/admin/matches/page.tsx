'use client';

import withAuth from '@/components/withAuth';
import { useState } from 'react';

interface Match {
  date: string;
  opponent: string;
  championship: string;
  location: string;
}

const mockMatches: Match[] = [
  { date: '20/10', opponent: 'Corinthians', championship: 'Brasileirão', location: 'São Januário' },
  { date: '27/10', opponent: 'Internacional', championship: 'Brasileirão', location: 'Beira-Rio' },
  { date: '03/11', opponent: 'Botafogo', championship: 'Brasileirão', location: 'Nilton Santos' },
];

const MatchesAdminPage = () => {
  const [matches, setMatches] = useState(mockMatches);

  interface Match {
    date: string;
    opponent: string;
    championship: string;
    location: string;
  }

  const handleInputChange = (index: number, field: keyof Match, value: string) => {
    const newMatches = [...matches];
    newMatches[index] = { ...newMatches[index], [field]: value };
    setMatches(newMatches);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the matches data
    console.log(matches);
    alert('Jogos salvos com sucesso!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Próximos Jogos</h1>
      <form onSubmit={handleSubmit} className="bg-card-background p-4 rounded-lg shadow-md">
        {matches.map((match, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-700 pb-4">
            <input type="text" value={match.date} onChange={(e) => handleInputChange(index, 'date', e.target.value)} className="p-1 border border-gray-600 bg-background text-foreground rounded" placeholder="Data" />
            <input type="text" value={match.opponent} onChange={(e) => handleInputChange(index, 'opponent', e.target.value)} className="p-1 border border-gray-600 bg-background text-foreground rounded" placeholder="Adversário" />
            <input type="text" value={match.championship} onChange={(e) => handleInputChange(index, 'championship', e.target.value)} className="p-1 border border-gray-600 bg-background text-foreground rounded" placeholder="Campeonato" />
            <input type="text" value={match.location} onChange={(e) => handleInputChange(index, 'location', e.target.value)} className="p-1 border border-gray-600 bg-background text-foreground rounded" placeholder="Local" />
          </div>
        ))}
        <button type="submit" className="mt-4 px-4 py-2 text-white bg-primary rounded-lg hover:bg-red-700 transition-colors">
          Salvar Jogos
        </button>
      </form>
    </div>
  );
};

export default withAuth(MatchesAdminPage);
