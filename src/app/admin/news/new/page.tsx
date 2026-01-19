'use client';

import withAuth from '@/components/withAuth';
import NewsForm from '@/components/admin/NewsForm';

const NewNewsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Nova Notícia</h1>
      <NewsForm />
    </div>
  );
};

export default withAuth(NewNewsPage);
