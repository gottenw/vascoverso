import { getLeagueStandingsForDisplay } from '@/lib/supabase';

interface LeagueStanding {
  id: number;
  position: number;
  team_name: string;
  points: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  is_vasco: boolean;
}

const LeagueTable = async () => {
  let standings: LeagueStanding[] = [];

  try {
    const data = await getLeagueStandingsForDisplay();
    standings = data || [];
  } catch (error) {
    console.error('Erro ao buscar tabela do campeonato:', error);
  }

  return (
    <div className="bg-card-background p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-foreground">Campeonato Brasileiro</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-600 text-gray-400">
              <th className="py-2 px-1">Pos</th>
              <th className="px-1">Time</th>
              <th className="px-1 text-center">Pts</th>
              <th className="px-1 text-center">J</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-gray-700 ${
                  row.is_vasco
                    ? 'bg-primary text-white font-bold'
                    : 'hover:bg-gray-800 text-foreground'
                }`}
              >
                <td className="py-2 px-1 text-center">{row.position}</td>
                <td className="py-2 px-1">{row.team_name}</td>
                <td className="py-2 px-1 text-center font-semibold">{row.points}</td>
                <td className="py-2 px-1 text-center">{row.played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
