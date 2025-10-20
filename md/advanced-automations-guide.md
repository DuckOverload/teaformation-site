# 🚀 Guia Completo: Security, Metrics & Projects - TEAFormation

**Documentação Definitiva de Automações Avançadas**

---

## 📋 Índice

1. [🔒 Security Analysis](#-security-analysis)
2. [📊 Metrics Dashboard](#-metrics-dashboard)
3. [📋 GitHub Projects](#-github-projects)
4. [⚙️ Configuração Completa](#️-configuração-completa)
5. [🎯 Uso Diário](#-uso-diário)
6. [📈 Interpretando Métricas](#-interpretando-métricas)

---

# 🔒 Security Analysis

## Visão Geral

O workflow de segurança automatizado (`security.yml`) executa **7 tipos diferentes de análises de segurança**:

### 1. Dependency Review
- **O que faz**: Analisa mudanças em dependências em PRs
- **Detecta**: Vulnerabilidades em novas dependências
- **Frequência**: A cada PR
- **Ação**: Falha se severidade >= moderate

### 2. NPM Security Audit
- **O que faz**: Escaneia vulnerabilidades conhecidas nas dependências
- **Detecta**: CVEs (Common Vulnerabilities and Exposures)
- **Frequência**: Push + PR + Semanalmente
- **Report**: Gera JSON com detalhes

### 3. CodeQL Analysis
- **O que faz**: Análise estática de código (SAST)
- **Detecta**: SQL injection, XSS, vulnerabilidades de segurança
- **Linguagens**: JavaScript + TypeScript
- **Queries**: security-extended (mais rigoroso)

### 4. Secret Scanning
- **O que faz**: Detecta secrets vazados (API keys, tokens)
- **Ferramenta**: Gitleaks
- **Detecta**: AWS keys, GitHub tokens, senhas, etc
- **Histórico**: Escaneia todo o histórico do Git

### 5. Docker Security (se aplicável)
- **O que faz**: Escaneia imagens Docker
- **Ferramenta**: Trivy
- **Detecta**: Vulnerabilidades em packages do sistema
- **Output**: SARIF para GitHub Security tab

### 6. Security Headers Check
- **O que faz**: Valida headers HTTP de segurança
- **Verifica**: 
  - X-Frame-Options
  - X-Content-Type-Options
  - Content-Security-Policy
  - Strict-Transport-Security

### 7. License Compliance
- **O que faz**: Verifica licenças de dependências
- **Permite**: MIT, ISC, Apache-2.0, BSD
- **Report**: JSON com todas as licenças

---

## 🔧 Configuração da Análise de Segurança

### Passo 1: Ativar CodeQL

1. Ir em: `Settings` → `Security` → `Code security and analysis`
2. Ativar: **Code scanning**
3. Setup: **Advanced** (já configurado via workflow)

### Passo 2: Ativar Secret Scanning

1. Ir em: `Settings` → `Security` → `Code security and analysis`
2. Ativar: **Secret scanning**
3. Ativar: **Push protection** (bloqueia pushes com secrets)

### Passo 3: Configurar Alerts

1. Ir em: `Settings` → `Notifications`
2. Marcar: **Security alerts**
3. Escolher método: Email / Web

### Passo 4: Adicionar Security Policy

Criar `SECURITY.md` na raiz:

```markdown
# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

Para reportar vulnerabilidades de segurança:
- Email: security@teaformation.com
- Resposta em: 48 horas
- Não divulgar publicamente antes do fix
```

---

## 📊 Interpretando Resultados de Segurança

### Severidade de Vulnerabilidades

| Nível | Ação Recomendada | Prazo |
|-------|------------------|-------|
| **Critical** | Fix imediato | < 24h |
| **High** | Fix prioritário | < 1 semana |
| **Moderate** | Fix no próximo sprint | < 1 mês |
| **Low** | Fix quando possível | Backlog |

### Onde Ver Resultados

**GitHub Security Tab:**
```
Repository → Security → Code scanning / Dependabot / Secret scanning
```

**No PR:**
```
Checks → Security Analysis → Ver detalhes
```

**Artifacts:**
```
Actions → Workflow run → Artifacts → Download reports
```

---

# 📊 Metrics Dashboard

## Visão Geral

O workflow de métricas (`metrics.yml`) coleta **6 categorias de dados**:

### 1. Code Quality Metrics
- **ESLint**: Erros e warnings
- **Complexidade**: Complexidade ciclomática
- **TypeScript**: Número de arquivos e linhas

### 2. Performance Metrics
- **Build time**: Tempo de compilação
- **Bundle size**: Tamanho do build
- **Lighthouse**: Scores de performance

### 3. Dependency Metrics
- **Count**: Produção vs Dev
- **Outdated**: Packages desatualizados
- **Security**: Vulnerabilidades

### 4. Git Metrics
- **Commits**: Total e últimos 7 dias
- **Contributors**: Número de contribuidores
- **Branches**: Total de branches

### 5. Test Coverage (futuro)
- **Coverage %**: Cobertura de testes
- **Tests**: Número de testes
- **Pass rate**: Taxa de sucesso

### 6. Productivity Metrics
- **PR Merge Time**: Tempo médio de merge
- **Issue Close Time**: Tempo de resolução
- **Cycle Time**: Tempo total de desenvolvimento

---

## 📈 Dashboard HTML Interativo

O arquivo `metrics-dashboard.html` é um dashboard visual que pode ser:

1. **Hospedado no GitHub Pages**
2. **Servido via Vercel**
3. **Integrado no projeto**

### Setup no GitHub Pages

```bash
# Criar branch gh-pages
git checkout -b gh-pages

# Adicionar dashboard
cp metrics-dashboard.html index.html
git add index.html
git commit -m "docs: add metrics dashboard"
git push origin gh-pages

# Configurar GitHub Pages
# Settings → Pages → Source: gh-pages branch
```

Acesse: `https://[seu-usuario].github.io/teaformation-site/`

### Atualização Automática

Criar workflow para atualizar dashboard:

```yaml
# .github/workflows/update-dashboard.yml
name: 📊 Update Dashboard

on:
  schedule:
    - cron: '0 0 * * *'  # Diariamente
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: gh-pages
      
      - name: Update metrics
        run: |
          # Buscar métricas da API do GitHub
          # Atualizar dados no HTML
          # Commit e push
```

---

## 📊 Métricas-Chave por Fase

### Fase 1: Site Institucional

**Metas:**
- Build time: < 30s
- Bundle size: < 500KB
- Lighthouse Performance: > 90
- ESLint errors: 0
- TypeScript errors: 0

**Tracking:**
```
Weekly check:
- [ ] Build time dentro do alvo
- [ ] Bundle size não aumentou >10%
- [ ] Lighthouse score mantido
- [ ] Zero erros de lint/type
```

### Fase 2: Blog

**Novas Métricas:**
- Posts publicados: [X]
- Tempo médio de leitura: [X]min
- SEO score: > 95

### Fase 3: Área de Membros

**Novas Métricas:**
- API response time: < 200ms
- Auth success rate: > 99%
- Error rate: < 1%
- Uptime: > 99.9%

---

# 📋 GitHub Projects

## Estrutura Completa

### Development Board (Principal)

**Link de setup rápido:**

```bash
# Via GitHub CLI
gh project create --title "TEAFormation Development" --owner @me

# Adicionar campos
gh project field-create 1 --owner @me \
  --name "Priority" \
  --data-type "SINGLE_SELECT" \
  --single-select-options "🔴 High" "🟡 Medium" "🟢 Low"

gh project field-create 1 --owner @me \
  --name "Size" \
  --data-type "SINGLE_SELECT" \
  --single-select-options "XS" "S" "M" "L" "XL"
```

### Automações Configuradas

**Via `.github/workflows/add-to-project.yml`:**

```yaml
# Auto-adiciona issues/PRs ao project
on: [issues: opened, pull_request: opened]
action: Add to project board
```

**Manualmente no GitHub:**

1. Ir em Project → `...` → `Workflows`
2. Adicionar automações:
   - Auto-move para "In Progress" quando assignee atribuído
   - Auto-move para "In Review" quando PR criado
   - Auto-move para "Done" quando PR merged
   - Auto-close issue quando moved to Done

---

## 🎯 Workflow Diário com Projects

### Morning Routine (5min)

```markdown
1. Abrir Development Board
2. Ver coluna "In Progress"
   - Atualizar progresso
   - Mover para "In Review" se necessário
3. Ver coluna "To Do"
   - Pegar próximo item de maior prioridade
   - Auto-assign para você
   - Auto-move para "In Progress"
4. Ver coluna "In Review"
   - Fazer code review de PRs
```

### End of Day (5min)

```markdown
1. Atualizar status de issues em progresso
2. Comentar bloqueios (se houver)
3. Mover issues concluídas para "Done"
4. Planejar próximo dia (drag issues para To Do)
```

---

## ⚙️ Configuração Completa (Checklist)

### 1. Security Setup

- [ ] Criar workflow `security.yml`
- [ ] Ativar CodeQL no repo
- [ ] Ativar Secret Scanning
- [ ] Ativar Dependabot
- [ ] Configurar notificações
- [ ] Criar `SECURITY.md`
- [ ] Testar rodando workflow manualmente

### 2. Metrics Setup

- [ ] Criar workflow `metrics.yml`
- [ ] Configurar secrets necessários
- [ ] Criar branch `gh-pages`
- [ ] Copiar `metrics-dashboard.html`
- [ ] Ativar GitHub Pages
- [ ] Testar acesso ao dashboard
- [ ] Configurar update automático

### 3. Projects Setup

- [ ] Criar Development Board
- [ ] Adicionar campos customizados
- [ ] Configurar 5 colunas
- [ ] Criar views (Board, Table, Sprint)
- [ ] Adicionar automações via workflow
- [ ] Adicionar automações manuais
- [ ] Criar Roadmap Board
- [ ] Criar Bug Tracker Board
- [ ] Migrar issues existentes
- [ ] Organizar backlog

### 4. Integration Setup

- [ ] Gerar Personal Access Token (PAT)
  - Scope: `repo`, `project`
- [ ] Adicionar como secret: `ADD_TO_PROJECT_PAT`
- [ ] Testar auto-add de issues
- [ ] Configurar Slack notifications (opcional)
- [ ] Configurar email notifications

---

## 🎓 Best Practices

### Security

1. **Nunca commitar secrets**
   - Use `.env.local` (no .gitignore)
   - Use GitHub Secrets para CI/CD
   - Ative push protection

2. **Review regularmente**
   - Checar Security tab semanalmente
   - Atualizar dependências mensalmente
   - Fazer security audits trimestralmente

3. **Responder rápido**
   - Critical: < 24h
   - High: < 1 semana
   - Documentar fixes em CHANGELOG

### Metrics

1. **Definir baselines**
   - Registrar métricas iniciais
   - Definir metas realistas
   - Revisar metas mensalmente

2. **Monitorar trends**
   - Build time aumentando? Investigar
   - Bundle crescendo? Analisar imports
   - Qualidade caindo? Code review mais rigoroso

3. **Agir em alertas**
   - Lighthouse < 90? Otimizar
   - ESLint errors? Fix imediato
   - Coverage < 80%? Adicionar testes

### Projects

1. **Manter atualizado**
   - Update diário de status
   - Priorizar backlog semanalmente
   - Arquivar Done após 7 dias

2. **Usar consistentemente**
   - Todas issues no board
   - Atualizar antes de standup
   - Comentar bloqueios

3. **Refinar processo**
   - Retrospective mensal
   - Ajustar automações
   - Otimizar workflow

---

## 📚 Recursos e Links

### Documentação Oficial

- [GitHub Advanced Security](https://docs.github.com/en/code-security)
- [CodeQL](https://codeql.github.com/)
- [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

### Ferramentas

- [Gitleaks](https://github.com/gitleaks/gitleaks)
- [Trivy](https://github.com/aquasecurity/trivy)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Tutoriais

- [Setting up CodeQL](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)
- [GitHub Projects Automation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project)

---

**Última atualização**: Outubro 2025  
**Versão**: 1.0  
**Próxima review**: Janeiro 2026
