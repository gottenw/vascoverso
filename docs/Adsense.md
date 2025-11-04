# Guia Completo: Google AdSense no VascoVerso

Este guia explica **passo a passo** como configurar o Google AdSense no seu site. Siga com calma!

---

## 📚 O que é o Google AdSense?

O **Google AdSense** é um programa que permite exibir anúncios no seu site e ganhar dinheiro quando visitantes:
- Visualizam os anúncios (impressões)
- Clicam nos anúncios (cliques)

**Simples assim!** O Google gerencia os anunciantes e você só precisa adicionar o código no site.

---

## 🎯 Situação Atual do VascoVerso

### ✅ O que JÁ ESTÁ PRONTO:
- **Estrutura completa de AdSense preparada** (código já escrito!)
- **Placeholders OCULTOS temporariamente** (aguardando ativação)
- Locais definidos:
  - 4 cantos do site (top-left, top-right, bottom-left, bottom-right)
  - Meio das notícias (inserção automática no meio do texto)

### ⚠️ IMPORTANTE - Placeholders Ocultos:
- Os placeholders estão **COMENTADOS no código** por enquanto
- Quando o AdSense for aprovado, você pede para **desocultá-los**
- Aí sim vão aparecer os anúncios reais (não mais os visuais cinza)

---

## 🚀 Como Ativar o Google AdSense (Passo a Passo)

### **PASSO 1: Criar conta no Google AdSense**

1. Acesse: https://www.google.com/adsense
2. Clique em **"Começar"**
3. Faça login com sua conta Google
4. Preencha os dados:
   - URL do site: `https://seudominio.com.br`
   - País: Brasil
   - Aceite os termos

### **PASSO 2: Adicionar o código de verificação**

Após criar a conta, o Google vai fornecer um **código JavaScript** parecido com isso:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

**ONDE ESTÁ O SEU CÓDIGO?**
- Vá em: **AdSense → Configurações → Informações da conta**
- Copie o código que começa com `ca-pub-`

👉 **Envie esse código completo para mim!** Vou adicionar no site.

### **PASSO 3: Aguardar aprovação do Google**

- O Google vai **analisar seu site** (pode levar de alguns dias até 2 semanas)
- Eles verificam se o site segue as políticas:
  - Conteúdo original e de qualidade ✅
  - Navegação fácil ✅
  - Sem conteúdo proibido ✅
  - Política de privacidade (recomendado)

💡 **Dica**: Tenha pelo menos 10-15 notícias publicadas antes de aplicar!

### **PASSO 4: Configurar os anúncios (após aprovação)**

Depois da aprovação, você tem 2 opções:

#### **OPÇÃO A: Auto Ads (Mais Fácil)** ⭐ RECOMENDADO
- O Google **coloca os anúncios automaticamente** nos melhores lugares
- Você não precisa fazer nada, só ativar
- Otimizado para ganhar mais dinheiro

**Como ativar:**
1. No painel do AdSense, vá em **"Anúncios" → "Auto Ads"**
2. Ative para o seu site
3. Me envie o código (se mudar)

#### **OPÇÃO B: Manual Ads (Controle Total)**
- Você escolhe **exatamente onde** cada anúncio aparece
- Precisa criar "blocos de anúncios" no painel do AdSense
- Mais trabalhoso, mas você tem controle total

**Como criar blocos:**
1. No painel do AdSense: **"Anúncios" → "Por unidade de anúncio"**
2. Clique em **"+ Nova unidade de anúncio"**
3. Escolha o tipo:
   - **Display** (para os cantos do site)
   - **In-article** (para meio das notícias)
4. Configure o tamanho como **"Responsivo"**
5. Copie o código gerado
6. Me envie **cada código** dizendo onde quer colocar

---

## 📍 Onde os anúncios vão aparecer no VascoVerso

### 1. **Cantos do Site (4 posições fixas)**
- Canto superior esquerdo
- Canto superior direito
- Canto inferior esquerdo
- Canto inferior direito

💡 Esses anúncios "seguem" o usuário enquanto ele rola a página.

### 2. **Meio das Notícias**
- Aparece automaticamente no **meio do texto**
- Não atrapalha a leitura
- Formato: anúncio responsivo horizontal

---

## 🤔 Perguntas Frequentes

### **Quanto vou ganhar?**
Depende de:
- Número de visitantes
- Nicho do site (futebol geralmente paga razoável)
- Localização dos visitantes
- Taxa de cliques (CTR)

**Média**: R$ 0,50 a R$ 5,00 por 1.000 visualizações (varia muito!)

### **Quantos anúncios posso colocar?**
- O Google não tem limite oficial
- **Recomendação**: 3-5 anúncios por página
- Não exagere! Muitos anúncios = experiência ruim = visitantes saem

### **Posso escolher quais anúncios aparecem?**
- Não diretamente, mas você pode **bloquear categorias** no painel
- Exemplo: bloquear anúncios de concorrentes (outros sites de futebol)

### **E se minha conta for suspensa?**
Evite:
- ❌ Clicar nos próprios anúncios
- ❌ Pedir para amigos clicarem
- ❌ Tráfego falso/bots
- ❌ Conteúdo copiado de outros sites

### **Preciso de política de privacidade?**
**SIM!** O Google AdSense exige. Vou criar uma básica para você se quiser.

---

## ✉️ O que você deve me enviar

Quando tiver o código do AdSense, me envie assim:

```
--- Código Principal (para o <head>) ---
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>

--- Se escolher Manual Ads, envie também: ---

Bloco 1 (Cantos do site):
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="YYYYYYYYYY"
     data-ad-format="auto"></ins>

Bloco 2 (Meio das notícias):
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="ZZZZZZZZZZ"
     data-ad-format="auto"></ins>
```

---

## 📝 Resumo do Processo

1. ✅ Crie conta no Google AdSense
2. ✅ Copie o código fornecido pelo Google
3. ✅ Me envie o código
4. ✅ Eu adiciono no site
5. ✅ Aguarde aprovação (alguns dias)
6. ✅ Após aprovação: ative Auto Ads OU crie blocos manuais
7. ✅ Me envie os códigos dos blocos (se manual)
8. ✅ Eu finalizo a integração
9. 💰 Comece a ganhar!

---

## 🆘 Precisa de Ajuda?

- Leia as políticas: https://support.google.com/adsense/answer/48182
- Suporte do AdSense: https://support.google.com/adsense

**Quando tiver o código, é só me enviar que eu faço toda a integração! 🚀**

---

## 🔧 ARQUIVOS QUE PRECISAM SER DESOCULTADOS

Quando você tiver o AdSense aprovado e me enviar os códigos, **EU VOU ALTERAR ESTES ARQUIVOS**:

### **Arquivo 1: `/site/src/app/layout.tsx`**
**Localização**: Linhas 44-47

**ATUAL (Oculto):**
```tsx
{/* Espaços para AdSense nos cantos - OCULTOS até ativação do AdSense */}
{/* <AdSpace position="top-left" />
<AdSpace position="top-right" />
<AdSpace position="bottom-left" />
<AdSpace position="bottom-right" /> */}
```

**VOU MUDAR PARA (Com AdSense):**
```tsx
{/* Espaços para AdSense nos cantos */}
<AdSpace position="top-left" />
<AdSpace position="top-right" />
<AdSpace position="bottom-left" />
<AdSpace position="bottom-right" />
```

---

### **Arquivo 2: `/site/src/components/ArticleContent.tsx`**
**Localização**: Linhas 15-40

**ATUAL (Oculto):**
```tsx
// ADSENSE OCULTO - Descomente quando ativar o AdSense
/*
// Criar o elemento de AdSense
const adElement = document.createElement('div');
...todo o código comentado...
*/
```

**VOU MUDAR PARA (Com AdSense):**
- Vou remover os comentários `/*` e `*/`
- Vou substituir o HTML do placeholder pelo código real do AdSense que você me enviar

---

### **Arquivo 3: `/site/src/components/AdSpace.tsx`**
**O que vai mudar:**
- Vou substituir a div cinza placeholder
- Vou colocar o código real do AdSense (tag `<ins>` com os seus data-ad-client e data-ad-slot)

---

## 📌 RESUMO: O que você faz e o que eu faço

### 👤 VOCÊ FAZ:
1. ✅ Cria conta no AdSense
2. ✅ Me envia o código principal (script do `<head>`)
3. ✅ Aguarda aprovação do Google
4. ✅ Após aprovação: cria os blocos manuais no painel do AdSense
5. ✅ Me envia os códigos dos 2 blocos

### 🤖 EU FAÇO:
1. ✅ Adiciono o script principal no `<head>` do site
2. ✅ Desoculto os placeholders (removo os comentários)
3. ✅ Substituo as divs cinzas pelos códigos reais do AdSense
4. ✅ Testo e garanto que está funcionando
5. ✅ Pronto! Anúncios no ar 🎉

**Você não precisa mexer em NENHUM código! Apenas me enviar os códigos do Google.**
