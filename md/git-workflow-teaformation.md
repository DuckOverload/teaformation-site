# 🌿 Git Workflow - TEAFormation

**Padrões de Branches, Commits e Workflow**  
**Projeto:** Site TEAFormation  
**Versão:** 1.0

---

## 📋 Índice

1. [Estratégia de Branches](#estratégia-de-branches)
2. [Padrão de Commits](#padrão-de-commits)
3. [Workflow de Desenvolvimento](#workflow-de-desenvolvimento)
4. [Pull Requests](#pull-requests)
5. [Versionamento](#versionamento)
6. [Configuração Inicial](#configuração-inicial)
7. [Exemplos Práticos](#exemplos-práticos)

---

# 🌳 Estratégia de Branches

## Estrutura Principal

```
main (produção)
  └── develop (desenvolvimento)
        ├── feature/nome-da-feature
        ├── fix/nome-do-fix
        ├── docs/nome-da-doc
        ├── refactor/nome-do-refactor
        └── chore/nome-da-tarefa
```

## Tipos de Branches

### 1. **main** (Produção)
- Código em produção
- Sempre estável
- Só recebe merges de `develop` ou `hotfix`
- Deploy automático na Vercel (production)
- **Protegida** - Não aceita commits diretos

### 2. **develop** (Staging)
- Branch de desenvolvimento
- Integração contínua
- Preview deployments na Vercel
- Recebe merges de features/fixes
- **Protegida** - Não aceita commits diretos

### 3. **feature/*** (Features)
- Novas funcionalidades
- Criada a partir de `develop`
- Merge de volta para `develop`
- Deletada após merge

**Nomenclatura:**
```
feature/hero-section
feature/contact-form
feature/blog-listing
feature/user-authentication
```

### 4. **fix/*** (Correções)
- Correção de bugs
- Criada a partir de `develop`
- Merge de volta para `develop`
- Deletada após merge

**Nomenclatura:**
```
fix/mobile-menu-overflow
fix/form-validation
fix/seo-meta-tags
fix/image-loading
```

### 5. **hotfix/*** (Correções Urgentes)
- Correção crítica em produção
- Criada a partir de `main`
- Merge para `main` E `develop`
- Deletada após merge

**Nomenclatura:**
```
hotfix/payment-integration
hotfix/security-vulnerability
hotfix/critical-bug
```

### 6. **docs/*** (Documentação)
- Atualização de documentação
- README, guias, etc.
- Criada a partir de `develop`

**Nomenclatura:**
```
docs/api-endpoints
docs/setup-guide
docs/contributing
```

### 7. **refactor/*** (Refatoração)
- Melhoria de código existente
- Sem mudança de funcionalidade
- Criada a partir de `develop`

**Nomenclatura:**
```
refactor/component-structure
refactor/api-handlers
refactor/types-organization
```

### 8. **chore/*** (Tarefas de Manutenção)
- Configurações, dependências
- Build, CI/CD, etc.
- Criada a partir de `develop`

**Nomenclatura:**
```
chore/update-dependencies
chore/configure-eslint
chore/setup-ci
```

### 9. **release/*** (Releases)
- Preparação para release
- Criada a partir de `develop`
- Merge para `main` e `develop`

**Nomenclatura:**
```
release/v1.0.0
release/v1.1.0
```

---

# 📝 Padrão de Commits

## Conventional Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/)

### Estrutura

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **feat** | Nova funcionalidade | `feat(blog): add post listing page` |
| **fix** | Correção de bug | `fix(form): resolve validation error` |
| **docs** | Documentação | `docs(readme): update setup instructions` |
| **style** | Formatação, sem mudança de lógica | `style(button): adjust padding` |
| **refactor** | Refatoração de código | `refactor(api): simplify error handling` |
| **perf** | Melhoria de performance | `perf(images): implement lazy loading` |
| **test** | Adição/correção de testes | `test(auth): add login tests` |
| **build** | Sistema de build | `build(deps): upgrade next to 15.0.1` |
| **ci** | Integração contínua | `ci(vercel): add preview deployment` |
| **chore** | Tarefas de manutenção | `chore(eslint): update rules` |
| **revert** | Reverter commit anterior | `revert: feat(blog): add comments` |

### Escopos Comuns (TEAFormation)

- `home` - Página inicial
- `blog` - Sistema de blog
- `auth` - Autenticação
- `dashboard` - Área do usuário
- `ebooks` - Sistema de e-books
- `contact` - Formulário de contato
- `seo` - Otimizações SEO
- `api` - Rotas de API
- `components` - Componentes gerais
- `ui` - Componentes UI
- `types` - TypeScript types
- `config` - Configurações

### Regras de Escrita

✅ **BOM:**
```bash
feat(blog): add MDX support for blog posts
fix(auth): resolve login redirect issue
docs(readme): add installation steps
style(button): adjust hover state colors
refactor(api): simplify data fetching logic
```

❌ **RUIM:**
```bash
update stuff
fix bug
changes
wip
asdfasdf
```

### Formato Detalhado

**Commit simples (mais comum):**
```bash
git commit -m "feat(contact): add form validation"
```

**Commit com corpo:**
```bash
git commit -m "feat(blog): add reading time estimation" -m "Calculate reading time based on word count. Display in post card and post page."
```

**Commit com breaking change:**
```bash
git commit -m "feat(api)!: change authentication method" -m "BREAKING CHANGE: JWT tokens now required in Authorization header"
```

**Commit que fecha issue:**
```bash
git commit -m "fix(form): resolve email validation bug

Closes #42"
```

---

# 🔄 Workflow de Desenvolvimento

## 1. Iniciar Nova Feature

```bash
# Certifique-se de estar em develop atualizado
git checkout develop
git pull origin develop

# Criar nova branch de feature
git checkout -b feature/hero-section

# Trabalhar na feature...
# Fazer commits seguindo o padrão

git add .
git commit -m "feat(home): add hero section component"
git commit -m "feat(home): add hero section animations"
git commit -m "style(home): adjust hero section responsive layout"
```

## 2. Push da Feature

```bash
# Primeira vez (criar branch remota)
git push -u origin feature/hero-section

# Próximos pushes
git push
```

## 3. Atualizar Branch com Develop

```bash
# Pegar últimas mudanças do develop
git checkout develop
git pull origin develop

# Voltar para sua branch
git checkout feature/hero-section

# Rebase (preferido) ou merge
git rebase develop
# ou
git merge develop

# Push (se já tinha pusheado antes)
git push --force-with-lease
```

## 4. Finalizar Feature

```bash
# Garantir que está atualizado com develop
git checkout develop
git pull origin develop

git checkout feature/hero-section
git rebase develop

# Push final
git push

# Criar Pull Request no GitHub
# Após aprovação e merge, deletar branch local
git checkout develop
git pull origin develop
git branch -d feature/hero-section
```

---

# 🔀 Pull Requests

## Template de PR

```markdown
## Descrição
Breve descrição do que foi feito

## Tipo de mudança
- [ ] Nova funcionalidade (feature)
- [ ] Correção de bug (fix)
- [ ] Refatoração (refactor)
- [ ] Documentação (docs)
- [ ] Outro: _____

## Como testar
1. Passo a passo de como testar
2. ...

## Checklist
- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Build passa sem erros
- [ ] Testado localmente

## Screenshots (se aplicável)
[Adicionar prints]

## Issues relacionadas
Closes #42
Related to #37
```

## Regras de PR

### Tamanho
- ✅ PRs pequenos (até 400 linhas)
- ✅ Foco em uma coisa só
- ⚠️ PRs grandes devem ser divididos

### Qualidade
- ✅ Passar em todos os testes
- ✅ Sem conflitos com develop
- ✅ Code review obrigatório
- ✅ CI/CD verde

### Merge
- **Squash and merge** (padrão) - commits viram um só
- **Rebase and merge** - mantém histórico linear
- **Merge commit** - apenas para releases

---

# 🏷️ Versionamento

## Semantic Versioning (SemVer)

```
v{MAJOR}.{MINOR}.{PATCH}
```

### Incremento

| Tipo | Quando Usar | Exemplo |
|------|-------------|---------|
| **MAJOR** | Breaking changes | 1.0.0 → 2.0.0 |
| **MINOR** | Nova feature (compatível) | 1.0.0 → 1.1.0 |
| **PATCH** | Bug fix | 1.0.0 → 1.0.1 |

### Exemplos

```bash
# Primeira release
v1.0.0 - Site institucional lançado

# Nova feature (blog)
v1.1.0 - Blog adicionado

# Bug fix
v1.1.1 - Correção formulário de contato

# Nova feature (auth)
v1.2.0 - Sistema de autenticação

# Breaking change
v2.0.0 - Nova arquitetura de dados
```

### Criar Release

```bash
# Criar branch de release
git checkout develop
git checkout -b release/v1.1.0

# Atualizar versão no package.json
# Fazer últimos ajustes
git commit -m "chore(release): bump version to 1.1.0"

# Merge para main
git checkout main
git merge release/v1.1.0
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin main --tags

# Merge de volta para develop
git checkout develop
git merge release/v1.1.0
git push origin develop

# Deletar branch de release
git branch -d release/v1.1.0
```

---

# ⚙️ Configuração Inicial

## .gitignore

```bash
# Criar .gitignore (Next.js 15)
# (já vem no create-next-app, mas confirme)

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Configurar Git Hooks (Opcional)

```bash
# Instalar husky + commitlint
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional

# Configurar husky
npx husky init

# Criar hook de commit-msg
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

**commitlint.config.js:**
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
}
```

## Configurar Branch Protection (GitHub)

**Settings → Branches → Add rule:**

Para `main`:
- ✅ Require pull request reviews (1 approval)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators

Para `develop`:
- ✅ Require pull request reviews
- ✅ Require status checks to pass

---

# 📚 Exemplos Práticos

## Exemplo 1: Nova Feature Completa

```bash
# 1. Criar branch
git checkout develop
git pull origin develop
git checkout -b feature/blog-post-page

# 2. Desenvolver
# ... trabalhar no código ...

# 3. Commits (múltiplos, específicos)
git add app/blog/[slug]/
git commit -m "feat(blog): add dynamic post page component"

git add components/post-content.tsx
git commit -m "feat(blog): add post content renderer"

git add lib/mdx.ts
git commit -m "feat(blog): add MDX processing utility"

git add app/blog/[slug]/page.tsx
git commit -m "feat(blog): implement post metadata generation"

# 4. Push
git push -u origin feature/blog-post-page

# 5. Criar PR no GitHub
# 6. Após merge, limpar
git checkout develop
git pull origin develop
git branch -d feature/blog-post-page
```

## Exemplo 2: Bug Fix Rápido

```bash
# 1. Criar branch
git checkout develop
git pull origin develop
git checkout -b fix/mobile-menu

# 2. Corrigir
# ... fix no código ...

# 3. Commit
git add components/header.tsx
git commit -m "fix(ui): resolve mobile menu overflow on small screens

The menu was overflowing outside viewport on screens < 375px.
Added max-width and proper scrolling behavior.

Closes #127"

# 4. Push e PR
git push -u origin fix/mobile-menu
# Criar PR
```

## Exemplo 3: Hotfix Urgente

```bash
# 1. Criar branch do main
git checkout main
git pull origin main
git checkout -b hotfix/payment-webhook

# 2. Corrigir
# ... fix crítico ...

# 3. Commit
git add app/api/webhooks/stripe/route.ts
git commit -m "fix(api): resolve stripe webhook validation

Critical fix for payment confirmation.
Webhook signature validation was failing due to incorrect secret.

Closes #234"

# 4. Merge para main
git checkout main
git merge hotfix/payment-webhook
git tag -a v1.0.1 -m "Hotfix: stripe webhook"
git push origin main --tags

# 5. Merge para develop também
git checkout develop
git merge hotfix/payment-webhook
git push origin develop

# 6. Limpar
git branch -d hotfix/payment-webhook
```

## Exemplo 4: Atualizar Feature com Develop

```bash
# Você está em feature/dashboard
# Develop teve novos commits

# 1. Salvar trabalho atual
git add .
git commit -m "feat(dashboard): wip user profile section"

# 2. Atualizar develop
git checkout develop
git pull origin develop

# 3. Rebase sua feature
git checkout feature/dashboard
git rebase develop

# 4. Resolver conflitos (se houver)
# ... resolver conflitos ...
git add .
git rebase --continue

# 5. Force push (cuidado!)
git push --force-with-lease
```

## Exemplo 5: Refatoração

```bash
git checkout develop
git pull origin develop
git checkout -b refactor/auth-components

# Refatorar código
git add components/auth/
git commit -m "refactor(auth): extract login form to separate component"

git add components/auth/
git commit -m "refactor(auth): add TypeScript types for auth forms"

git add lib/auth/
git commit -m "refactor(auth): simplify validation logic"

git push -u origin refactor/auth-components
# Criar PR
```

---

# 🎯 Comandos Úteis

## Visualização

```bash
# Ver status
git status

# Ver histórico (bonito)
git log --oneline --graph --all

# Ver diferenças
git diff
git diff --staged

# Ver branches
git branch -a
```

## Limpeza

```bash
# Deletar branch local
git branch -d nome-da-branch

# Deletar branch remota
git push origin --delete nome-da-branch

# Limpar branches já mergidas
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d

# Limpar branches remotas deletadas
git fetch --prune
```

## Desfazer Mudanças

```bash
# Desfazer mudanças não commitadas
git restore arquivo.ts
git restore .

# Desfazer commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer commit (descarta mudanças)
git reset --hard HEAD~1

# Reverter commit público
git revert <commit-hash>
```

## Stash (Guardar Temporariamente)

```bash
# Guardar mudanças
git stash

# Guardar com mensagem
git stash save "mensagem descritiva"

# Ver stashes
git stash list

# Aplicar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{0}
```

---

# 📋 Checklist Diário

## Ao Começar o Dia

- [ ] `git checkout develop`
- [ ] `git pull origin develop`
- [ ] Verificar issues/PRs
- [ ] Criar branch de trabalho

## Durante o Desenvolvimento

- [ ] Commits pequenos e frequentes
- [ ] Mensagens descritivas
- [ ] Testar antes de commitar
- [ ] Push regularmente

## Ao Terminar o Dia

- [ ] Commit de progresso (pode ser WIP)
- [ ] Push da branch
- [ ] Atualizar issues/PRs

## Ao Finalizar Feature

- [ ] Rebase com develop
- [ ] Testes passando
- [ ] Documentação atualizada
- [ ] Criar PR
- [ ] Code review

---

# 🚨 Regras de Ouro

1. **NUNCA** commite direto em `main` ou `develop`
2. **SEMPRE** use branches para features/fixes
3. **SEMPRE** faça commits com mensagens claras
4. **SEMPRE** teste antes de fazer push
5. **NUNCA** force push em branches compartilhadas (exceto suas)
6. **SEMPRE** mantenha commits pequenos e focados
7. **SEMPRE** atualize sua branch com develop antes de PR
8. **NUNCA** commite arquivos sensíveis (.env, keys, etc)

---

**Happy Coding! 🚀**