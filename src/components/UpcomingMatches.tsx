const mockMatches = [
  { date: '20/10', opponent: 'Corinthians', championship: 'Brasileirão', location: 'São Januário' },
  { date: '27/10', opponent: 'Internacional', championship: 'Brasileirão', location: 'Beira-Rio' },
  { date: '03/11', opponent: 'Botafogo', championship: 'Brasileirão', location: 'Nilton Santos' },
];

const UpcomingMatches = () => {
  return (
    <div className="bg-card-background p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-foreground">Próximos Jogos</h3>
      <ul>
        {mockMatches.map((match, index) => (
          <li key={index} className="mb-3 border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0 last:pb-0">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-foreground">{match.opponent}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{match.championship}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{match.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{match.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMatches;
