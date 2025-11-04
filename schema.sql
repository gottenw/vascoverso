-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique,
  full_name text,
  avatar_url text,
  website text,
  updated_at timestamp with time zone
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create a table for categories
create table categories (
  id serial primary key,
  name text not null unique,
  slug text not null unique
);

-- Create a table for news
create table news (
  id serial primary key,
  title text not null,
  content text not null,
  slug text not null unique,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  author_id uuid references profiles(id),
  category_id integer references categories(id),
  is_important boolean default false
);

-- Create a table for tags
create table tags (
  id serial primary key,
  name text not null unique
);

-- Create a join table for news and tags
create table news_tags (
  news_id integer references news(id) on delete cascade,
  tag_id integer references tags(id) on delete cascade,
  primary key (news_id, tag_id)
);

-- Create a table for social links
create table social_links (
  id serial primary key,
  platform text not null,
  url text not null,
  user_id uuid references profiles(id)
);

-- Insert some initial data for categories
insert into categories (name, slug) values
  ('Futebol Profissional', 'futebol-profissional'),
  ('Futebol Feminino', 'futebol-feminino'),
  ('Base e Juvenil', 'base-e-juvenil'),
  ('Bastidores', 'bastidores'),
  ('Mercado da Bola', 'mercado-da-bola'),
  ('Outros', 'outros');

-- Insert some initial data for tags
insert into tags (name) values
  ('Masculino'),
  ('Feminino'),
  ('Brasileirão'),
  ('Copa do Brasil'),
  ('Libertadores'),
  ('Sul-Americana'),
  ('Carioca'),
  ('Sub-20'),
  ('Sub-17'),
  ('Contratações'),
  ('São Januário'),
  ('Torcida'),
  ('Outros');
