'use client';

import { useState, useEffect } from 'react';
import withAuth from '@/components/withAuth';
import { getLeagueStandingsForDisplay, getLeagueStandings, updateLeagueStanding } from '@/lib/supabase';
import { Save, RefreshCw, Trophy } from 'lucide-react';

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

const TablePage = () => {
  const [standings, setStandings] = useState<LeagueStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<number | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getLeagueStandingsForDisplay();
      setStandings(data || []);
    } catch (error) {
      console.error('Erro ao buscar tabela:', error);
      alert('Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (
    id: number,
    field: keyof LeagueStanding,
    value: string | number
  ) => {
    setStandings((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value };

          // Recalcular saldo de gols se necessário
          if (field === 'goals_for' || field === 'goals_against') {
            updated.goal_difference = updated.goals_for - updated.goals_against;
          }

          // Detectar automaticamente se é o Vasco da Gama
          if (field === 'team_name') {
            const isVasco = value.toString().toLowerCase().trim() === 'vasco da gama';
            updated.is_vasco = isVasco;

            // Se este time está sendo marcado como Vasco, desmarcar outros
            if (isVasco) {
              return updated;
            }
          }

          return updated;
        }
        // Se outro time está sendo marcado como Vasco, desmarcar este
        if (field === 'team_name' && value.toString().toLowerCase().trim() === 'vasco da gama') {
          return { ...item, is_vasco: false };
        }
        return item;
      })
    );
  };

  const handleSave = async (id: number) => {
    setSaving(id);
    const item = standings.find((s) => s.id === id);
    if (!item) return;

    try {
      // Buscar TODOS os times para verificar estado original
      const allStandings = await getLeagueStandings();
      const originalItem = allStandings?.find((s) => s.id === id);

      if (!originalItem) {
        throw new Error('Time não encontrado');
      }

      // Verificar se a posição mudou
      const positionChanged = originalItem.position !== item.position;

      // Preparar os dados para atualização
      const updates: Partial<LeagueStanding> = {
        team_name: item.team_name,
        points: item.points,
        played: item.played,
        wins: item.wins,
        draws: item.draws,
        losses: item.losses,
        goals_for: item.goals_for,
        goals_against: item.goals_against,
        goal_difference: item.goal_difference,
        is_vasco: item.is_vasco,
      };

      // Se a posição mudou, verificar conflitos e trocar
      if (positionChanged) {
        const conflictingTeam = allStandings?.find(
          (team) => team.position === item.position && team.id !== item.id
        );

        if (conflictingTeam) {
          // Passo 1: Mover o time conflitante para posição temporária
          await updateLeagueStanding(conflictingTeam.id, {
            position: 9999,
          });

          // Passo 2: Atualizar o time atual para a nova posição
          updates.position = item.position;
          await updateLeagueStanding(id, updates);

          // Passo 3: Mover o time conflitante para a posição antiga do time atual
          await updateLeagueStanding(conflictingTeam.id, {
            position: originalItem.position,
          });
        } else {
          // Sem conflito, apenas atualizar posição
          updates.position = item.position;
          await updateLeagueStanding(id, updates);
        }
      } else {
        // Posição não mudou, apenas atualizar outros campos
        await updateLeagueStanding(id, updates);
      }

      alert('Atualizado com sucesso!');
      // Recarregar dados para garantir sincronização
      await fetchData();
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      alert('Erro ao atualizar. Verifique os dados e tente novamente.');
    } finally {
      setSaving(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gerenciar Tabela do Campeonato</h1>
          <p className="text-gray-400 mt-2">
            Edite os 5 times ao redor do Vasco (prático e rápido)
          </p>
          <div className="space-y-1 mt-2">
            <p className="text-primary text-sm flex items-center gap-1">
              <Trophy size={14} />
              O sistema detecta automaticamente quando o time é &quot;Vasco da Gama&quot; e destaca no site
            </p>
            <p className="text-gray-400 text-xs">
              💡 Ao mudar posições, os times trocam de lugar automaticamente
            </p>
          </div>
        </div>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <RefreshCw size={18} />
          Atualizar
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="animate-pulse h-20 bg-gray-700 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {standings.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-lg shadow-md border ${
                item.is_vasco
                  ? 'bg-primary/10 border-primary'
                  : 'bg-card-background border-gray-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                {item.is_vasco && (
                  <Trophy className="text-primary" size={20} />
                )}
                <h3 className="text-lg font-bold text-foreground">
                  {item.position}º - {item.team_name}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Nome do Time
                  </label>
                  <input
                    type="text"
                    value={item.team_name}
                    onChange={(e) => handleUpdate(item.id, 'team_name', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Nome do time"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Posição
                  </label>
                  <input
                    type="number"
                    value={item.position}
                    onChange={(e) => handleUpdate(item.id, 'position', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Pontos
                  </label>
                  <input
                    type="number"
                    value={item.points}
                    onChange={(e) => handleUpdate(item.id, 'points', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Jogos
                  </label>
                  <input
                    type="number"
                    value={item.played}
                    onChange={(e) => handleUpdate(item.id, 'played', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Vitórias
                  </label>
                  <input
                    type="number"
                    value={item.wins}
                    onChange={(e) => handleUpdate(item.id, 'wins', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Empates
                  </label>
                  <input
                    type="number"
                    value={item.draws}
                    onChange={(e) => handleUpdate(item.id, 'draws', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Derrotas
                  </label>
                  <input
                    type="number"
                    value={item.losses}
                    onChange={(e) => handleUpdate(item.id, 'losses', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Gols Pró
                  </label>
                  <input
                    type="number"
                    value={item.goals_for}
                    onChange={(e) => handleUpdate(item.id, 'goals_for', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Gols Contra
                  </label>
                  <input
                    type="number"
                    value={item.goals_against}
                    onChange={(e) => handleUpdate(item.id, 'goals_against', parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Saldo
                  </label>
                  <input
                    type="number"
                    value={item.goal_difference}
                    disabled
                    className="w-full px-3 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleSave(item.id)}
                  disabled={saving === item.id}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-red-700 text-white rounded-lg transition-colors disabled:bg-gray-600"
                >
                  <Save size={18} />
                  {saving === item.id ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withAuth(TablePage);
