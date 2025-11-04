'use client';

import { useState, useEffect } from 'react';
import withAuth from '@/components/withAuth';
import { getSocialMedia, updateSocialMedia } from '@/lib/supabase';
import { Save, RefreshCw } from 'lucide-react';

interface SocialMedia {
  id: number;
  platform: string;
  follower_count: string;
  url: string;
  display_order: number;
  is_active: boolean;
}

const SocialMediaPage = () => {
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getSocialMedia();
      setSocialMedia(data || []);
    } catch (error) {
      console.error('Erro ao buscar redes sociais:', error);
      alert('Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (id: number, field: 'follower_count' | 'url', value: string) => {
    setSocialMedia((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = async (id: number) => {
    setSaving(true);
    const item = socialMedia.find((s) => s.id === id);
    if (!item) return;

    try {
      await updateSocialMedia(id, {
        follower_count: item.follower_count,
        url: item.url,
      });
      alert('Atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      alert('Erro ao atualizar');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-foreground">Gerenciar Redes Sociais</h1>
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
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse h-24 bg-gray-700 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="bg-card-background p-6 rounded-lg shadow-md border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Plataforma
                  </label>
                  <input
                    type="text"
                    value={item.platform}
                    disabled
                    className="w-full px-3 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Seguidores
                  </label>
                  <input
                    type="text"
                    value={item.follower_count}
                    onChange={(e) => handleUpdate(item.id, 'follower_count', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ex: 1.5M"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    URL
                  </label>
                  <input
                    type="url"
                    value={item.url}
                    onChange={(e) => handleUpdate(item.id, 'url', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleSave(item.id)}
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-red-700 text-white rounded-lg transition-colors disabled:bg-gray-600"
                >
                  <Save size={18} />
                  {saving ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withAuth(SocialMediaPage);
