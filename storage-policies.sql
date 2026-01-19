-- PRIMEIRO: Remover políticas antigas (se existirem)
drop policy if exists "Usuários autenticados podem fazer upload de imagens" on storage.objects;
drop policy if exists "Imagens são publicamente acessíveis" on storage.objects;
drop policy if exists "Usuários autenticados podem atualizar imagens" on storage.objects;
drop policy if exists "Usuários autenticados podem deletar imagens" on storage.objects;
drop policy if exists "Public Access" on storage.objects;
drop policy if exists "Public Upload" on storage.objects;
drop policy if exists "Public Update" on storage.objects;
drop policy if exists "Public Delete" on storage.objects;
drop policy if exists "Authenticated Upload" on storage.objects;
drop policy if exists "Authenticated Update" on storage.objects;
drop policy if exists "Authenticated Delete" on storage.objects;

-- Políticas de Storage para o bucket news-images

-- Permitir que usuários autenticados façam upload de imagens
create policy "Authenticated Upload"
on storage.objects for insert
to authenticated
with check (bucket_id = 'news-images');

-- Permitir que qualquer pessoa visualize as imagens (leitura pública)
-- As imagens precisam ser públicas para serem exibidas no site
create policy "Public Access"
on storage.objects for select
to public
using (bucket_id = 'news-images');

-- Permitir que usuários autenticados atualizem imagens
create policy "Authenticated Update"
on storage.objects for update
to authenticated
using (bucket_id = 'news-images');

-- Permitir que usuários autenticados deletem imagens
create policy "Authenticated Delete"
on storage.objects for delete
to authenticated
using (bucket_id = 'news-images');
