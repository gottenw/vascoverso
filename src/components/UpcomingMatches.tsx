import { getMatches } from '@/lib/supabase';

interface Match {
  id: number;
  match_date: string;
  opponent: string;
  championship: string;
  location: string;
}

const UpcomingMatches = async () => {
  let matches: Match[] = [];

  try {
    matches = await getMatches();
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
  }

  return (
    <div className="bg-card-background p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-foreground">Próximos Jogos</h3>
      {matches.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-sm">Nenhum jogo agendado no momento.</p>
      ) : (
        <ul>
          {matches.map((match) => (
            <li key={match.id} className="mb-3 border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-foreground">{match.opponent}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{match.championship}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{match.match_date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{match.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingMatches;
