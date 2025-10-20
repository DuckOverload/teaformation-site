# 🗺️ Roadmap Completo - Site TEAFormation

**Projeto:** Site Institucional + Blog + Área de Membros  
**Período Total:** Novembro 2025 - Fevereiro 2026  
**Líder Técnico:** [Seu Nome]  
**Tecnologia Base:** Next.js 15 + React 19

---

## 📊 Visão Geral

**FASE 1:** Site Institucional (Novembro 2025) - 4 semanas  
**FASE 2:** Blog + SEO (Dezembro 2025) - 3-4 semanas  
**FASE 3:** Área de Membros + E-books (Janeiro-Fevereiro 2026) - 6-8 semanas

---

## ⚡ Next.js 15 - Considerações Importantes

### Novidades que Vamos Usar:

✅ **Turbopack** - Dev server até 76% mais rápido  
✅ **React 19** - Componentes Server/Client otimizados  
✅ **Async Request APIs** - Segurança e performance melhoradas  
✅ **Cache Explícito** - Mais controle sobre cache de dados  
✅ **Partial Prerendering** - Otimização híbrida (experimental)

### Breaking Changes Principais:

⚠️ **Request APIs agora são Async:**
- `params`, `searchParams`, `cookies()`, `headers()` precisam de `await`
- Todas as pages que usam params devem ser `async`

⚠️ **Caching Mudou:**
- `fetch()` NÃO é cached por padrão
- Precisa especificar `cache: 'force-cache'` explicitamente

⚠️ **React 19:**
- Algumas libs podem ter warnings (mas principais já compatíveis)
- shadcn/ui, Supabase, Tailwind: ✅ 100% compatíveis

---

# 🎯 FASE 1: SITE INSTITUCIONAL

**Período:** Novembro 2025 (4 semanas)  
**Status:** 🚀 Próximo a iniciar

## Semana 1: Setup & Infraestrutura

**Duração:** 7 dias

### Dias 1-2: Inicialização do Projeto

**Comando de Criação (Next.js 15):**

```bash
npx create-next-app@latest teaformation-site \
  --typescript \
  --tailwind \
  --app \
  --turbopack \
  --eslint \
  --no-src-dir
```

**Ou interativo:**

```bash
npx create-next-app@latest teaformation-site

# Escolher:
✅ TypeScript: Yes
✅ ESLint: Yes
✅ Tailwind CSS: Yes
✅ src/ directory: No
✅ App Router: Yes
✅ Turbopack: Yes (importante!)
✅ Import alias: @ (padrão)
```

**Checklist de Setup:**

- [ ]  Criar repositório no GitHub
- [ ]  Executar comando create-next-app com Next.js 15
- [ ]  Verificar versões (Next 15.x, React 19.x)
- [ ]  Instalar shadcn/ui: `npx shadcn@latest init`
- [ ]  Configurar ESLint + Prettier
- [ ]  Criar estrutura de pastas:

```
teaformation-site/
├── app/
│   ├── (marketing)/     # Site institucional
│   │   ├── page.tsx
│   │   ├── sobre/
│   │   ├── solucoes/
│   │   ├── para-quem-e/
│   │   └── contato/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/              # shadcn
│   └── sections/        # Seções do site
├── lib/
│   ├── utils.ts
│   └── constants.ts
└── public/
```

- [ ]  Conectar com Vercel:
    - Criar conta/projeto na Vercel
    - Conectar repositório GitHub
    - Deploy automático configurado
    - Ativar Turbopack em produção (opcional, ainda experimental)

**⚡ Nota sobre Turbopack:**

- Em dev: `npm run dev` já usa Turbopack automaticamente (se configurou)
- Hot reload muito mais rápido (~80ms vs ~300ms)
- Possíveis incompatibilidades com plugins Webpack antigos (raro)

### Dias 3-4: Design System

- [ ]  Configurar tema (cores da identidade TEAFormation)
- [ ]  Instalar componentes shadcn necessários:

```bash
npx shadcn@latest add button card input label
npx shadcn@latest add form select textarea
npx shadcn@latest add navigation-menu
```

- [ ]  Criar componentes base reutilizáveis
- [ ]  Implementar tipografia e espaçamentos
- [ ]  Configurar `tailwind.config.ts` com cores da marca

**Exemplo de configuração de tema:**

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // Cores da TEAFormation
          50: '#...',
          500: '#...',
          900: '#...',
        }
      }
    }
  }
}
```

### Dias 5-7: Estrutura Global

- [ ]  Layout principal (Header, Footer)
- [ ]  Menu de navegação responsivo
- [ ]  Componentes SEO base (MetaTags, StructuredData)
- [ ]  Configurar favicon e meta images

**Exemplo de Layout Root (Next.js 15):**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TEAFormation',
  description: 'Transformando conhecimento e afeto...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

**⚠️ Importante - Metadata no Next.js 15:**

- Usar `generateMetadata` para páginas dinâmicas
- Metadata é sempre server-side
- Suporta async para buscar dados

**Entregáveis:**

- ✅ Projeto configurado e rodando localmente
- ✅ Deploy staging na Vercel
- ✅ Design system básico funcionando

---

## Semana 2: Páginas Principais

**Duração:** 7 dias

### Dias 8-10: Home Page

- [ ]  Hero Section (título + CTAs)
- [ ]  Seção "O que é TEAFormation"
- [ ]  Cards de Produtos (TEAnimal + Plataforma 360°)
- [ ]  Diferenciais (4 cards)
- [ ]  Animações sutis (scroll reveal)

**Exemplo de Page Component (Next.js 15):**

```typescript
// app/(marketing)/page.tsx
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProductsSection } from '@/components/sections/products'

// ✅ Página estática - sem async necessário
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
    </main>
  )
}

// Metadata estática
export const metadata = {
  title: 'TEAFormation - Transformando conhecimento e afeto',
  description: 'Soluções inovadoras para o desenvolvimento...',
  openGraph: {
    title: 'TEAFormation',
    description: '...',
    images: ['/og-image.jpg'],
  }
}
```

### Dias 11-12: Página Sobre

- [ ]  Hero Section
- [ ]  Missão, Visão, Valores
- [ ]  História da empresa (se disponível)
- [ ]  Seção da equipe (com fotos)

### Dias 13-14: Página Soluções

- [ ]  Seção TEAnimal detalhada
- [ ]  Seção Plataforma 360° detalhada
- [ ]  Benefícios por público
- [ ]  Como funciona (diagrama/fluxo)

**Entregáveis:**

- ✅ 3 páginas principais completas
- ✅ Responsivas (mobile + desktop)
- ✅ Conteúdo real dos documentos implementado

---

## Semana 3: Páginas Secundárias & Interatividade

**Duração:** 7 dias

### Dias 15-17: Página "Para Quem É"

- [ ]  Seção Pais e Familiares
- [ ]  Seção Profissionais da Saúde
- [ ]  Seção Educadores e Escolas
- [ ]  Cards interativos (desafios → soluções)

### Dias 18-19: Página de Contato

- [ ]  Formulário funcional com Server Actions
- [ ]  Integração com serviço de email (Resend)
- [ ]  Validação client-side + server-side
- [ ]  reCAPTCHA (proteção anti-spam)
- [ ]  Página de confirmação/obrigado

**Exemplo de Server Action (Next.js 15):**

```typescript
// app/contato/actions.ts
'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitContact(formData: FormData) {
  const validated = contactSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'contato@teaformation.com',
    to: 'contato@teaformation.com',
    subject: `Novo contato de ${validated.name}`,
    html: `<p>${validated.message}</p>`,
  })

  return { success: true }
}
```

```typescript
// app/contato/page.tsx
import { ContactForm } from './contact-form'

export default function ContatoPage() {
  return (
    <main>
      <h1>Entre em Contato</h1>
      <ContactForm />
    </main>
  )
}
```

```typescript
// app/contato/contact-form.tsx
'use client'

import { useFormStatus } from 'react-dom'
import { submitContact } from './actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  )
}

export function ContactForm() {
  return (
    <form action={submitContact}>
      <input name="name" required />
      <input name="email" type="email" required />
      <textarea name="message" required />
      <SubmitButton />
    </form>
  )
}
```

**⚡ Vantagens das Server Actions (Next.js 15):**

- ✅ Sem necessidade de criar API routes manualmente
- ✅ Type-safe entre client e server
- ✅ Progressively enhanced (funciona sem JS)
- ✅ Built-in loading states com `useFormStatus`

### Dias 20-21: Polimento

- [ ]  Ajustes de UX
- [ ]  Micro-interações
- [ ]  Loading states
- [ ]  Error handling

**Entregáveis:**

- ✅ Site institucional 100% funcional
- ✅ Formulário de contato operacional

---

## Semana 4: SEO, Performance & Lançamento

**Duração:** 7 dias

### Dias 22-24: SEO Técnico

- [ ]  Meta tags otimizadas (todas as páginas)
- [ ]  Open Graph tags (redes sociais)
- [ ]  Sitemap.xml gerado
- [ ]  Robots.txt configurado
- [ ]  Schema.org markup (Organization, WebSite)
- [ ]  Canonical URLs

**⚠️ IMPORTANTE - Caching no Next.js 15:**

O comportamento de cache mudou! Agora é explícito:

```typescript
// ❌ ANTES (Next.js 14): cached por padrão
fetch('https://api.example.com/data')

// ✅ AGORA (Next.js 15): sem cache por padrão
// Se quiser cache, especifique:
fetch('https://api.example.com/data', {
  cache: 'force-cache' // ou 'no-store'
})

// Ou configure no nível da rota:
export const revalidate = 3600 // revalidar a cada 1h
```

**Configuração de Sitemap (Next.js 15):**

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://teaformation.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://teaformation.com/sobre',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... outras páginas
  ]
}
```

**Robots.txt:**

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/', // área privada
    },
    sitemap: 'https://teaformation.com/sitemap.xml',
  }
}
```

### Dias 25-26: Performance & Acessibilidade

- [ ]  Otimização de imagens (Next Image)
- [ ]  Lazy loading implementado
- [ ]  Lighthouse score 90+ (todas as métricas)
- [ ]  Contraste de cores WCAG AA
- [ ]  Alt texts em todas as imagens
- [ ]  Navegação por teclado testada

### Dia 27: Lançamento

- [ ]  Deploy produção (domínio definitivo)
- [ ]  Configurar DNS
- [ ]  SSL automático (Vercel)
- [ ]  Google Analytics / Plausible
- [ ]  Teste final em múltiplos dispositivos

**Entregáveis:**

- ✅ **SITE INSTITUCIONAL NO AR** 🎉
- ✅ SEO técnico completo
- ✅ Performance otimizada

---

# 📝 FASE 2: BLOG + SEO

**Período:** Dezembro 2025 (3-4 semanas)  
**Status:** 🔄 Aguardando Fase 1

## Semana 5: Arquitetura do Blog

**Duração:** 7 dias

### Dias 28-30: Setup Sistema de Blog

**Decisão: Usar MDX Local para MVP**

- [ ]  Instalar dependências MDX:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install gray-matter reading-time
npm install rehype-highlight remark-gfm
```

- [ ]  Configurar `next.config.mjs`:

```javascript
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
```

- [ ]  Criar estrutura de posts:

```
content/
└── posts/
    ├── o-que-e-tea.mdx
    ├── aba-terapia.mdx
    └── inclusao-escolar.mdx
```

- [ ]  Sistema de categorias e tags (frontmatter)
- [ ]  Utilitário para ler posts do filesystem

**Exemplo de Post MDX:**

```mdx
---
title: "O que é TEA? Guia Completo"
description: "Entenda o Transtorno do Espectro Autista..."
date: "2025-11-15"
category: "educacao"
tags: ["tea", "autismo", "desenvolvimento"]
author: "Equipe TEAFormation"
image: "/posts/tea-guia.jpg"
---

# O que é TEA?

O Transtorno do Espectro Autista é...
```

**Utilitário para Buscar Posts (Next.js 15):**

```typescript
// lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      ...data,
    }
  })
  
  return posts.sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data,
  }
}
```

### Dias 31-34: Design & Componentes

- [ ]  Template de listagem de posts (/blog)
- [ ]  Template de post individual (/blog/[slug])
- [ ]  Componente de card de post
- [ ]  Sidebar (categorias, posts populares)
- [ ]  Navegação entre posts (anterior/próximo)
- [ ]  Compartilhamento social

**Exemplo de Listagem (Next.js 15):**

```typescript
// app/blog/page.tsx
import { getAllPosts } from '@/lib/blog'
import { PostCard } from '@/components/post-card'

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <main>
      <h1>Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}

// Metadata dinâmica
export const metadata = {
  title: 'Blog - TEAFormation',
  description: 'Artigos sobre autismo, TEA e desenvolvimento infantil',
}
```

**⚠️ CRÍTICO - Post Individual com Async Params:**

```typescript
// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

// ✅ Next.js 15: params é Promise
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // ⚠️ IMPORTANTE: await params
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <MDXRemote source={post.content} />
    </article>
  )
}

// generateMetadata também recebe Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

// generateStaticParams para SSG
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

**Entregáveis:**

- ✅ Sistema de blog funcional
- ✅ Templates de página criados

---

## Semana 6: SEO Avançado para Blog

**Duração:** 7 dias

### Dias 35-37: Otimização On-Page

- [ ]  URLs amigáveis (/blog/desenvolvimento-infantil-autismo)
- [ ]  Meta descriptions dinâmicas
- [ ]  Headings estruturados (H1, H2, H3)
- [ ]  Internal linking strategy
- [ ]  Breadcrumbs
- [ ]  Reading time estimado

### Dias 38-41: SEO Técnico & Conteúdo Inicial

- [ ]  Schema.org Article markup
- [ ]  RSS feed
- [ ]  Sitemap do blog no sitemap.xml
- [ ]  Escrever 3-5 posts iniciais estratégicos:
    - [ ]  "O que é TEA? Guia completo para pais"
    - [ ]  "ABA: O que é Análise do Comportamento Aplicada"
    - [ ]  "Como escolher terapeutas para crianças com autismo"
    - [ ]  "Inclusão escolar: Direitos e estratégias"
    - [ ]  "Jogos educativos para crianças com TEA"

**Entregáveis:**

- ✅ Blog com SEO completo
- ✅ 3-5 posts de qualidade publicados
- ✅ Otimizado para palavras-chave principais

---

## Semana 7: Categorias & Busca

**Duração:** 7 dias

### Dias 42-45: Sistema de Categorias

- [ ]  Páginas de categoria (/blog/categoria/[slug])
- [ ]  Filtros funcionais
- [ ]  Páginas de tags
- [ ]  Sistema de busca (Algolia ou local)

### Dias 46-48: CTA & Conversão

- [ ]  Newsletter signup (formulário)
- [ ]  CTAs estratégicos em posts
- [ ]  Related posts ao final do artigo
- [ ]  Lead magnets (ex: "Baixe nosso guia gratuito")

**Entregáveis:**

- ✅ Blog completo e otimizado
- ✅ Sistema de categorias e busca
- ✅ Mecanismos de conversão implementados

---

# 🔐 FASE 3: ÁREA DE MEMBROS + E-BOOKS

**Período:** Janeiro-Fevereiro 2026 (6-8 semanas)  
**Status:** 🔮 Planejamento futuro

## Semana 8-9: Autenticação

**Duração:** 14 dias

**Recomendação: Supabase Auth (melhor integração com Next.js 15)**

### Sistema de Autenticação

- [ ]  Instalar Supabase:

```bash
npm install @supabase/supabase-js @supabase/ssr
```

- [ ]  Configurar cliente Supabase:

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

```typescript
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Server Component
          }
        },
      },
    }
  )
}
```

- [ ]  Implementar registro de usuários
- [ ]  Login/Logout com Server Actions
- [ ]  Recuperação de senha
- [ ]  Verificação de email
- [ ]  Perfil de usuário básico

**Exemplo de Login Action (Next.js 15):**

```typescript
// app/auth/actions.ts
'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.message }
  }

  redirect('/auth/verify-email')
}
```

**Middleware para Proteção de Rotas:**

```typescript
// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Proteger rotas /dashboard
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
  ],
}
```

### Banco de Dados

- [ ]  Setup Supabase ou Prisma + PostgreSQL
- [ ]  Schema de usuários
- [ ]  Relações usuário ↔ produtos comprados

**Entregáveis:**

- ✅ Sistema de autenticação funcional
- ✅ Banco de dados estruturado

---

## Semana 10-11: Sistema de Produtos Digitais

**Duração:** 14 dias

### Backend de E-books

- [ ]  Schema de produtos (e-books)
- [ ]  Sistema de permissões (quem comprou o quê)
- [ ]  Upload e armazenamento de PDFs (seguro)
- [ ]  Geração de links temporários/seguros
- [ ]  Sistema de proteção contra compartilhamento

### Frontend Área do Membro

- [ ]  Dashboard do usuário (/dashboard)
- [ ]  Biblioteca de e-books comprados
- [ ]  Página de visualização/download
- [ ]  Histórico de compras

**Entregáveis:**

- ✅ Sistema de produtos digitais funcional
- ✅ Área restrita operacional

---

## Semana 12-13: Integração de Pagamentos

**Duração:** 14 dias

### Gateway de Pagamento

- [ ]  Integração com Stripe ou Mercado Pago
- [ ]  Página de checkout
- [ ]  Processamento de pagamentos
- [ ]  Webhooks para confirmação
- [ ]  Liberação automática de acesso pós-compra
- [ ]  Emails transacionais

### Admin

- [ ]  Painel administrativo básico
- [ ]  Gerenciar produtos
- [ ]  Ver vendas
- [ ]  Gerenciar usuários

**Entregáveis:**

- ✅ Sistema de pagamentos operacional
- ✅ Fluxo completo de compra → acesso

---

## Semana 14: Testes & Segurança

**Duração:** 7 dias

### Segurança & Testes

- [ ]  Testes de segurança (proteção de rotas)
- [ ]  Teste de fluxo completo
- [ ]  Proteção contra scraping
- [ ]  Rate limiting
- [ ]  LGPD compliance básico
- [ ]  Termos de uso e política de privacidade

**Entregáveis:**

- ✅ **PLATAFORMA DE E-BOOKS COMPLETA** 🎉

---

# 📦 Stack Tecnológica

## Frontend

- **Next.js 15.x** (App Router + Turbopack)
- **React 19.x** (Server Components + Client Components)
- **TypeScript 5.x**
- **Tailwind CSS 3.x**
- **shadcn/ui** (componentes)
- **Framer Motion** (animações)

## Backend/Database

**Recomendação: Supabase (All-in-One)** ✅

- **Supabase Auth** - Autenticação
- **Supabase Database** - PostgreSQL
- **Supabase Storage** - Arquivos (e-books)
- **Supabase Realtime** - (futuro, se necessário)

**Alternativa:**

- NextAuth.js/Auth.js + Prisma + PostgreSQL (mais trabalho)

## Pagamentos

- **Stripe** (recomendado para internacional)
- **Mercado Pago** (alternativa Brasil)
- Webhooks para confirmação automática

## Blog

**MVP:** MDX Local (content/posts/)

- @next/mdx
- gray-matter (frontmatter)
- rehype-highlight (syntax highlighting)
- remark-gfm (GitHub Flavored Markdown)

**Escalável (Fase 2):** Sanity.io ou Contentful

## Hospedagem & Deploy

- **Vercel** (frontend + edge functions)
    - Deploy automático via GitHub
    - Preview deployments
    - Edge Runtime support
    - Turbopack em dev (automático)
- **Supabase** (database + storage + auth)

## Emails

- **Resend** (transacionais)
    - React Email templates
    - Até 3k emails/mês grátis

## Monitoring & Analytics

- **Vercel Analytics** (Web Vitals)
- **Plausible** ou **Google Analytics 4**
- **Sentry** (error tracking - opcional)

## Extras

- **Zod** (validação de schemas)
- **React Hook Form** (forms complexos)
- **date-fns** (manipulação de datas)
- **lucide-react** (ícones)

---

## 🆕 Features Específicas do Next.js 15

### Turbopack (Dev Mode)

```bash
# Já vem ativado se escolher na instalação
npm run dev  # Usa Turbopack automaticamente
```

**Benefícios:**

- 52% faster cold start
- 73% faster HMR
- Suporte incremental (pode conviver com Webpack)

### Server Actions

Sem necessidade de API Routes:

```typescript
// Antes: criar /api/contact/route.ts
// Agora: action direto no componente ou arquivo separado
'use server'
export async function submitForm(data: FormData) { ... }
```

### Async Request APIs

Todas as Request APIs agora são async:

```typescript
// cookies, headers, params, searchParams
const cookieStore = await cookies()
const headersList = await headers()
const { slug } = await params
```

### Caching Explícito

Mais controle, menos "mágica":

```typescript
// Definir por rota:
export const revalidate = 3600 // ISR: 1 hora

// Ou por fetch:
fetch(url, { cache: 'force-cache' })
fetch(url, { next: { revalidate: 3600 } })
```

### Parallel Routes & Intercepting Routes

Para modals e layouts complexos (Fase 3):

```
app/
├── @modal/
│   └── (..)products/[id]/
└── products/
    └── [id]/
```

---

# 💰 Estimativa de Custos

## Mínimo Viável (MVP) - Meses 1-3

| Item | Custo |
| --- | --- |
| Vercel (Hobby) | R$ 0 |
| Supabase (Free) | R$ 0 |
| Domínio .com | R$ 40-80/ano |
| **TOTAL MENSAL** | **R$ 0-10/mês** |

## Escala Inicial (Pós-Lançamento)

| Item | Custo |
| --- | --- |
| Vercel Pro | R$ 100/mês |
| Supabase Pro | R$ 125/mês |
| Stripe | 4.99% + R$ 0.99/transação |
| Resend | R$ 0 (até 3k emails) |
| **TOTAL MENSAL** | **R$ 225/mês + taxas** |

---

# 🎯 Métricas de Sucesso

## Fase 1: Site Institucional

- ✅ Lighthouse score: 90+ (todas as métricas)
- ✅ Core Web Vitals: Verde
- ✅ Acessibilidade: 100
- ✅ Tempo de carregamento: <2s

## Fase 2: Blog

- ✅ 10-15 posts de qualidade publicados
- ✅ Ranqueando para 5+ keywords relacionadas a autismo
- ✅ 1000+ visitantes orgânicos/mês (após 3 meses)

## Fase 3: E-books

- ✅ Sistema de pagamento funcional
- ✅ Zero vazamento de conteúdo protegido
- ✅ Taxa de conversão checkout: >60%

---

# 🚨 Riscos & Mitigações

| Risco | Impacto | Mitigação |
| --- | --- | --- |
| Atraso no conteúdo/textos | Alto | Usar textos dos documentos existentes como base |
| Imagens não prontas | Médio | Usar placeholders profissionais inicialmente |
| Complexidade da área de membros | Alto | Usar Supabase (all-in-one) em vez de montar do zero |
| Falta de tempo | Alto | Priorizar MVP, iterar depois |

---

# ✅ Checklist de Pré-Requisitos

## Antes de Começar a Fase 1:

- [ ]  Domínio registrado (teaformation.com)
- [ ]  Textos finalizados (já tem! ✅)
- [ ]  Logo/identidade visual definida
- [ ]  Paleta de cores confirmada
- [ ]  5-10 imagens principais (hero, produtos)

## Antes de Começar a Fase 2:

- [ ]  Estratégia de conteúdo definida
- [ ]  Palavras-chave pesquisadas
- [ ]  Calendário editorial (pelo menos 3 meses)

## Antes de Começar a Fase 3:

- [ ]  E-books criados e finalizados
- [ ]  Decisão de gateway de pagamento
- [ ]  Políticas legais redigidas (termos, privacidade)

---

# 📞 Contato & Suporte

**Líder Técnico:** [Seu Nome]  
**Email:** [seu@email.com]  
**Repositório:** [Link do GitHub]  
**Documentação:** [Link da doc técnica]

---

**Última atualização:** Outubro 2025  
**Versão:** 2.0 (Next.js 15)

---

# 📚 Recursos Adicionais

## Documentação Oficial

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Next.js 15 Release Blog](https://nextjs.org/blog/next-15)
- [React 19 Beta Docs](https://react.dev/blog/2024/04/25/react-19)
- [Turbopack Documentation](https://turbo.build/pack/docs)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

## Migration Guides

- [Upgrading to Next.js 15](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [Codemods Automáticos](https://nextjs.org/docs/app/building-your-application/upgrading/codemods)

```bash
# Rodar codemods para migração automática (se migrar de v14):
npx @next/codemod@latest upgrade latest
```

## Tutoriais Recomendados

- [shadcn/ui + Next.js 15](https://ui.shadcn.com/docs/installation/next)
- [Supabase Auth com Next.js 15](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [MDX no Next.js 15](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

## Comunidade & Suporte

- [Next.js Discord](https://discord.gg/nextjs)
- [Vercel Community](https://github.com/vercel/next.js/discussions)
- [Stack Overflow - nextjs](https://stackoverflow.com/questions/tagged/next.js)

---

# 🚀 Quick Start Checklist

Antes de começar o desenvolvimento, certifique-se de ter:

- [ ]  Node.js 18.18+ instalado
- [ ]  Git configurado
- [ ]  Conta GitHub criada
- [ ]  Conta Vercel criada (vincular com GitHub)
- [ ]  Conta Supabase criada (free tier)
- [ ]  Editor de código (VS Code recomendado)
- [ ]  Extensões úteis instaladas:
    - [ ]  ESLint
    - [ ]  Prettier
    - [ ]  Tailwind CSS IntelliSense
    - [ ]  MDX

**Comando para verificar versões:**

```bash
node --version  # deve ser 18.18+
npm --version   # deve ser 9+
git --version
```

---

# ⚠️ Breaking Changes - Guia Rápido

## 1. Async Request APIs

**Afeta:** Todas as páginas que usam params, searchParams, cookies, headers

```typescript
// ❌ ANTES (Next.js 14)
export default function Page({ params }) {
  const id = params.id
}

// ✅ AGORA (Next.js 15)
export default async function Page({ 
  params 
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
}
```

## 2. Caching de Fetch

**Afeta:** Todas as chamadas fetch() que dependem de cache

```typescript
// ❌ ANTES: cached automaticamente
fetch('https://api.example.com/data')

// ✅ AGORA: sem cache (definir explícito)
fetch('https://api.example.com/data', {
  cache: 'force-cache', // ou 'no-store'
  next: { revalidate: 3600 } // ISR
})
```

## 3. Layout/Page Props

**Afeta:** Componentes que recebem params/searchParams

```typescript
// Todos os layouts e pages com params dinâmicos
// precisam tratar params como Promise
type PageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string }>
}
```

---

# 🎓 Padrões Recomendados

## Estrutura de Server/Client Components

```typescript
// ✅ BOM: Server Component (padrão)
// app/produtos/page.tsx
export default async function ProdutosPage() {
  const produtos = await fetchProdutos()
  return <ProdutosList produtos={produtos} />
}

// ✅ BOM: Client Component (quando necessário)
// components/produto-card.tsx
'use client'
export function ProdutoCard({ produto }) {
  const [favorito, setFavorito] = useState(false)
  // ... lógica interativa
}
```

## Server Actions Pattern

```typescript
// ✅ BOM: Arquivo separado de actions
// app/produtos/actions.ts
'use server'
export async function criarProduto(data: FormData) { ... }
export async function deletarProduto(id: string) { ... }

// app/produtos/novo/page.tsx
import { criarProduto } from '../actions'
export default function NovoProduto() {
  return <form action={criarProduto}>...</form>
}
```

## Metadata Pattern

```typescript
// ✅ BOM: Metadata estática
export const metadata = {
  title: 'Título',
  description: 'Descrição',
}

// ✅ BOM: Metadata dinâmica
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}
```

---

**Ready to code? 🚀 Bora começar o projeto!**