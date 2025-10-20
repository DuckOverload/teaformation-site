# 📚 GitHub Templates & Workflows - TEAFormation

**Guia Completo de Templates, Actions e Automações**

---

## 📋 Índice

1. [Estrutura de Arquivos](#estrutura-de-arquivos)
2. [Templates de Issues](#templates-de-issues)
3. [Template de Pull Request](#template-de-pull-request)
4. [GitHub Actions (CI/CD)](#github-actions-cicd)
5. [Configuração Inicial](#configuração-inicial)
6. [Como Usar](#como-usar)
7. [Customização](#customização)

---

## 📁 Estrutura de Arquivos

```
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.md           # Template para reportar bugs
│   ├── feature_request.md      # Template para solicitar features
│   ├── documentation.md        # Template para melhorias na doc
│   └── config.yml             # Configuração de templates
├── PULL_REQUEST_TEMPLATE/
│   └── pull_request_template.md # Template padrão de PR
├── workflows/
│   ├── ci.yml                  # CI: Lint, Type Check, Build
│   ├── pr-title-validation.yml # Valida título do PR
│   ├── auto-label.yml          # Auto-labeling de PRs
│   ├── deploy-preview-comment.yml # Comenta URL de preview
│   └── auto-assign.yml         # Auto-assign reviewers
├── labeler.yml                 # Config de labels por arquivos
└── auto-assign.yml            # Config de auto-assign
```

---

## 🐛 Templates de Issues

### 1. Bug Report (`bug_report.md`)

**Quando usar:** Reportar bugs ou comportamentos inesperados

**Inclui:**
- ✅ Descrição do bug
- ✅ Passos para reproduzir
- ✅ Comportamento esperado vs atual
- ✅ Screenshots/vídeos
- ✅ Informações do ambiente (device, OS, browser)
- ✅ Console logs
- ✅ Nível de severidade

**Como criar:**
1. Vá em "Issues" → "New Issue"
2. Selecione "🐛 Bug Report"
3. Preencha o template
4. Adicione label apropriada se necessário

### 2. Feature Request (`feature_request.md`)

**Quando usar:** Sugerir novas funcionalidades ou melhorias

**Inclui:**
- ✅ Descrição da feature
- ✅ Problema/motivação
- ✅ Solução proposta
- ✅ Mockups/wireframes
- ✅ User stories
- ✅ Critérios de aceitação
- ✅ Prioridade
- ✅ Fase do projeto
- ✅ Impacto esperado

**Como criar:**
1. Vá em "Issues" → "New Issue"
2. Selecione "✨ Feature Request"
3. Preencha o template
4. Discuta com o time antes de implementar

### 3. Documentation (`documentation.md`)

**Quando usar:** Melhorias ou adições na documentação

**Inclui:**
- ✅ Tipo de documentação
- ✅ O que precisa ser documentado
- ✅ Por que é importante
- ✅ Público alvo
- ✅ Seções sugeridas
- ✅ Referências/exemplos

**Como criar:**
1. Vá em "Issues" → "New Issue"
2. Selecione "📝 Documentation"
3. Preencha o template

---

## 🔀 Template de Pull Request

### Estrutura do Template

**Seções principais:**

1. **📋 Descrição** - O que foi feito
2. **🔧 Tipo de Mudança** - Feature, bug, docs, etc.
3. **🧪 Como Testar** - Passo a passo para revisar
4. **📸 Screenshots/Vídeos** - Demonstração visual
5. **✅ Checklist** - Verificações obrigatórias
6. **🔗 Issues Relacionadas** - Links para issues
7. **📝 Notas Adicionais** - Contexto extra
8. **🔍 Review Checklist** - Para reviewers

### Checklist Completo

O template inclui checklist para:

**Código:**
- Padrões do projeto
- TypeScript sem erros
- Build sem erros
- Testado localmente

**Estilo & UI:**
- Responsividade
- Acessibilidade
- Tailwind otimizado
- shadcn/ui correto

**Performance & SEO:**
- Imagens otimizadas
- Lazy loading
- Meta tags
- Lighthouse mantido

**Documentação:**
- README atualizado
- Comentários em código complexo
- API documentada

**Git:**
- Branch atualizada
- Commits padronizados
- Sem merge commits desnecessários

### Como Usar

O template aparece **automaticamente** ao criar um PR:

1. Criar branch e fazer commits
2. Push da branch
3. Abrir PR no GitHub
4. Template é preenchido automaticamente
5. Completar informações necessárias
6. Marcar checkboxes
7. Criar PR

---

## 🤖 GitHub Actions (CI/CD)

### 1. CI - Lint, Type Check & Build (`ci.yml`)

**Trigger:**
- Pull requests para `develop` ou `main`
- Push para `develop` ou `main`

**Jobs:**

#### Quality Checks
- ✅ Checkout code
- ✅ Setup Node.js 20
- ✅ Install dependencies
- ✅ Run ESLint
- ✅ Run TypeScript type check
- ✅ Build project
- ✅ Confirmação de sucesso

#### Lighthouse CI (apenas PRs)
- ✅ Build project
- ✅ Run Lighthouse
- ✅ Upload artifacts
- ✅ Comment scores no PR

**Quando falha:**
- Erros de ESLint
- Erros de TypeScript
- Build falha
- Lighthouse score muito baixo

**Como visualizar:**
1. Vá no PR
2. Clique em "Checks"
3. Veja detalhes do que falhou

### 2. PR Title Validation (`pr-title-validation.yml`)

**Trigger:** 
- PR aberto/editado/sincronizado

**Validação:**
- ✅ Título segue Conventional Commits
- ✅ Tipos válidos: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- ✅ Escopos opcionais: home, blog, auth, dashboard, ebooks, contact, seo, api, components, ui, types, config
- ✅ Descrição em minúscula e descritiva

**Exemplos válidos:**
```
✅ feat(blog): add MDX support
✅ fix(auth): resolve login issue
✅ docs: update README
✅ refactor(api): simplify error handling
```

**Exemplos inválidos:**
```
❌ Update stuff
❌ Fix bug
❌ FEAT(BLOG): Add feature
❌ fix: Fix
```

### 3. Auto Label (`auto-label.yml`)

**Trigger:**
- PR aberto/sincronizado/editado

**Funcionalidades:**

#### Label por Arquivos Modificados
Labels automáticas baseadas em quais arquivos foram alterados:

- `area: ui` - Componentes UI
- `area: components` - Componentes gerais
- `area: blog` - Sistema de blog
- `area: auth` - Autenticação
- `area: api` - API routes
- `area: dashboard` - Dashboard
- `area: ebooks` - E-books
- `area: seo` - SEO
- `area: config` - Configurações
- `area: docs` - Documentação
- `area: ci` - CI/CD
- `area: tests` - Testes
- `dependencies` - Dependências

#### Label por Tamanho do PR
- `size: xs` - até 10 linhas
- `size: s` - até 100 linhas
- `size: m` - até 500 linhas
- `size: l` - até 1000 linhas
- `size: xl` - mais de 1000 linhas (aviso!)

### 4. Deploy Preview Comment (`deploy-preview-comment.yml`)

**Trigger:**
- PR aberto/sincronizado

**O que faz:**
- 💬 Adiciona comentário automático no PR
- 📋 Inclui checklist de revisão
- 🔗 Menciona que Vercel comentará URL quando pronto

**Checklist incluído:**
- Testar responsividade
- Verificar performance
- Testar funcionalidades
- Verificar acessibilidade
- Confirmar ausência de erros

### 5. Auto Assign Reviewers (`auto-assign.yml`)

**Trigger:**
- PR aberto/reaberto/pronto para review

**O que faz:**
- 👥 Adiciona reviewers automaticamente
- 🎯 Baseado em configuração (`.github/auto-assign.yml`)
- ⏭️ Pula se for draft PR
- 🏷️ Respeita labels de exclusão (wip, draft)

**Configuração:**
Edite `.github/auto-assign.yml` para adicionar usernames do time:

```yaml
reviewers:
  - seu-usuario-github
  - outro-membro-time
  - mais-um-dev
```

---

## ⚙️ Configuração Inicial

### 1. Adicionar Arquivos ao Repositório

**Copiar estrutura `.github/` para o projeto:**

```bash
# Na raiz do projeto
cp -r .github /seu-projeto/

# Ou criar manualmente seguindo a estrutura mostrada
```

### 2. Configurar Secrets na Vercel/GitHub

**GitHub Secrets necessários:**

Vá em: `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

Adicione:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Configurar Branch Protection Rules

**Para `main`:**

1. Vá em `Settings` → `Branches` → `Add rule`
2. Branch name pattern: `main`
3. Marque:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

**Para `develop`:**

1. Mesmas configurações de `main`
2. Pode ter exigências menos rígidas se preferir

### 4. Configurar Labels do GitHub

**Labels recomendadas:**

Vá em `Issues` → `Labels` → `New label`

**Tipo:**
- `bug` - 🔴 #d73a4a
- `enhancement` - ✨ #a2eeef
- `documentation` - 📝 #0075ca
- `good first issue` - 🟢 #7057ff
- `help wanted` - 🆘 #008672
- `wip` - 🚧 #fbca04
- `priority: high` - 🔥 #b60205
- `priority: medium` - 🟡 #fbca04
- `priority: low` - 🟢 #0e8a16

**Área:**
- `area: ui` - 🎨 #1d76db
- `area: blog` - 📝 #bfdadc
- `area: auth` - 🔐 #5319e7
- `area: api` - ⚡ #0052cc
- `area: dashboard` - 📊 #006b75
- `area: seo` - 🔍 #d4c5f9

**Tamanho:**
- `size: xs` - 📦 #c2e0c6
- `size: s` - 📦 #c2e0c6
- `size: m` - 📦 #fbca04
- `size: l` - 📦 #ff9800
- `size: xl` - 📦 #d73a4a

### 5. Atualizar Configurações do Auto-Assign

Edite `.github/auto-assign.yml`:

```yaml
reviewers:
  - seu-username  # Substitua pelo seu username GitHub
  - outro-membro  # Adicione outros membros
```

### 6. Habilitar GitHub Actions

Se não estiverem habilitadas automaticamente:

1. Vá em `Settings` → `Actions` → `General`
2. Marque `Allow all actions and reusable workflows`
3. Salvar

---

## 🎯 Como Usar

### Criar uma Issue

1. Ir em `Issues` → `New Issue`
2. Escolher template apropriado
3. Preencher informações
4. `Submit new issue`

### Criar um Pull Request

1. Criar branch: `git checkout -b feature/nova-feature`
2. Fazer commits: `git commit -m "feat(home): add hero section"`
3. Push: `git push -u origin feature/nova-feature`
4. No GitHub: `Compare & pull request`
5. Template é preenchido automaticamente
6. Completar informações
7. `Create pull request`

### Aprovar/Mergear PR

**Como Reviewer:**

1. Ir no PR
2. Verificar `Files changed`
3. Verificar `Checks` (CI passou?)
4. Testar deploy preview (link da Vercel)
5. Adicionar comentários se necessário
6. `Approve` ou `Request changes`

**Como Author (após aprovação):**

1. Garantir que CI passou (✅ verde)
2. Resolver conflitos se houver
3. `Squash and merge` (padrão)
4. Deletar branch após merge

### Visualizar Status do CI

1. No PR, aba `Checks`
2. Ver detalhes de cada job
3. Se falhou, clicar em `Details`
4. Ver logs completos
5. Corrigir e push novamente

---

## 🔧 Customização

### Adicionar Novos Tipos de Issue

1. Criar novo arquivo em `.github/ISSUE_TEMPLATE/`
2. Nomear: `novo_tipo.md`
3. Adicionar frontmatter:

```yaml
---
name: 🎯 Nome do Template
about: Descrição do template
title: '[TAG] '
labels: label-padrao
assignees: ''
---
```

4. Adicionar conteúdo do template

### Modificar CI Workflow

Edite `.github/workflows/ci.yml`:

**Adicionar novo step:**

```yaml
- name: 🧪 Run tests
  run: npm test
```

**Adicionar novo job:**

```yaml
security-scan:
  name: Security Scan
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Run security scan
      run: npm audit
```

### Adicionar Novos Labels Automáticos

Edite `.github/labeler.yml`:

```yaml
'area: nova-area':
  - 'pasta/nova-area/**/*'
  - 'outro/caminho/**/*'
```

### Customizar Template de PR

Edite `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`:

- Adicionar/remover seções
- Modificar checklist
- Ajustar formato

---

## 📊 Métricas e Boas Práticas

### Tempo Médio de PR

**Meta:** ≤ 24 horas do PR até merge

**Como melhorar:**
- PRs pequenos (< 400 linhas)
- Descrição clara
- Testar antes de criar PR
- Responder reviews rapidamente

### Taxa de Aprovação no CI

**Meta:** ≥ 95%

**Como melhorar:**
- Rodar `npm run lint` antes de push
- Rodar `npm run type-check` antes de push
- Testar build localmente
- Corrigir issues imediatamente

### Cobertura de Testes

**Meta (futuro):** ≥ 80%

**Como melhorar:**
- Adicionar testes para novas features
- Testar casos edge
- Usar TDD quando possível

---

## 🚨 Troubleshooting

### CI Falhando

**Erro de ESLint:**
```bash
# Rodar localmente para ver erros
npm run lint

# Auto-fix (se possível)
npm run lint -- --fix
```

**Erro de TypeScript:**
```bash
# Rodar localmente
npm run type-check
# ou
npx tsc --noEmit
```

**Build falhando:**
```bash
# Limpar .next e node_modules
rm -rf .next node_modules
npm install
npm run build
```

### PR Title Validation Falhando

**Erro:** `PR title doesn't match conventional commits`

**Solução:**
1. Editar título do PR
2. Seguir formato: `tipo(escopo): descrição`
3. Exemplos corretos:
   - `feat(blog): add post listing`
   - `fix(auth): resolve login bug`
   - `docs: update README`

### Lighthouse Score Baixo

**O que fazer:**

1. Verificar score específico (Performance, Accessibility, etc)
2. Otimizar imagens
3. Adicionar lazy loading
4. Corrigir problemas de acessibilidade
5. Testar novamente localmente

### Auto-Assign Não Funcionando

**Verificar:**

1. `.github/auto-assign.yml` tem usernames corretos?
2. GitHub Action está habilitada?
3. PR é draft? (auto-assign pula drafts)
4. PR tem label `wip` ou `draft`? (auto-assign pula)

---

## 📚 Recursos Adicionais

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Pull Requests](https://github.com/amannn/action-semantic-pull-request)
- [GitHub Issue Templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)

---

**Dúvidas?** Abra uma issue com o template de Documentation! 📝

**Sugestões de melhoria?** Abra um PR! 🚀
