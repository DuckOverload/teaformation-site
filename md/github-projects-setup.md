# 📋 GitHub Projects Configuration - TEAFormation

## Estrutura dos Boards

### 1. 🚀 Development Board (Principal)

**Propósito**: Gerenciar o desenvolvimento diário do projeto

**Colunas:**
1. 📥 **Backlog** - Issues ainda não priorizadas
2. 📋 **To Do** - Pronto para ser trabalhado
3. 🏃 **In Progress** - Em desenvolvimento
4. 👀 **In Review** - Em code review
5. ✅ **Done** - Concluído

**Views:**
- **Board View** (padrão)
- **Table View** - Visão tabular com todos os campos
- **Sprint View** - Organizado por sprints/milestones
- **Priority View** - Agrupado por prioridade

**Campos Customizados:**

| Campo | Tipo | Opções | Descrição |
|-------|------|--------|-----------|
| **Status** | Single Select | Backlog, To Do, In Progress, In Review, Done | Status atual |
| **Priority** | Single Select | 🔴 High, 🟡 Medium, 🟢 Low | Prioridade da task |
| **Size** | Single Select | XS, S, M, L, XL | Estimativa de tamanho |
| **Type** | Single Select | Feature, Bug, Docs, Chore, Refactor | Tipo de trabalho |
| **Phase** | Single Select | Phase 1, Phase 2, Phase 3 | Fase do roadmap |
| **Sprint** | Iteration | - | Sprint atual |
| **Estimate** | Number | - | Estimativa em horas |
| **Area** | Single Select | UI, Blog, Auth, Dashboard, E-books, API, SEO | Área do código |
| **Assignee** | People | - | Responsável |

**Automações:**

```yaml
# Auto-mover para "In Progress" quando issue é atribuída
- trigger: issue_assigned
  action: move_to_column
  column: "In Progress"

# Auto-mover para "In Review" quando PR é criado
- trigger: pr_opened
  action: move_to_column
  column: "In Review"

# Auto-mover para "Done" quando PR é merged
- trigger: pr_merged
  action: move_to_column
  column: "Done"
  close_issue: true

# Auto-arquivar após 7 dias em "Done"
- trigger: column_changed
  column: "Done"
  action: auto_archive
  after_days: 7

# Auto-adicionar label baseado na coluna
- trigger: column_changed
  column: "In Progress"
  action: add_label
  label: "status: in-progress"
```

---

### 2. 🎯 Roadmap Board

**Propósito**: Visão estratégica do projeto por fases

**Colunas:**
1. 📝 **Phase 1: Site Institucional** (Nov 2025)
2. 📝 **Phase 2: Blog + SEO** (Dez 2025)
3. 📝 **Phase 3: Área de Membros** (Jan-Fev 2026)
4. 🔮 **Future** (Backlog de longo prazo)
5. ✅ **Completed**

**Views:**
- **Timeline View** - Linha do tempo com datas
- **Roadmap View** - Visão de alto nível
- **Table View** - Lista detalhada

**Campos Customizados:**

| Campo | Tipo | Opções | Descrição |
|-------|------|--------|-----------|
| **Phase** | Single Select | Phase 1, 2, 3, Future | Fase do projeto |
| **Epic** | Text | - | Nome do epic/feature grande |
| **Start Date** | Date | - | Data de início |
| **Target Date** | Date | - | Data alvo |
| **Progress** | Number | 0-100 | % de conclusão |
| **Owner** | People | - | Responsável pela fase |
| **Dependencies** | Text | - | Dependências |

---

### 3. 🐛 Bug Tracker Board

**Propósito**: Gerenciar bugs e issues técnicas

**Colunas:**
1. 🆕 **New** - Bugs recém reportados
2. 🔍 **Triaged** - Analisado e priorizado
3. 🔧 **Fixing** - Em correção
4. ✅ **Fixed** - Corrigido (aguardando deploy)
5. ✔️ **Verified** - Verificado em produção

**Views:**
- **Severity View** - Agrupado por severidade
- **Area View** - Agrupado por área do código
- **Open Bugs** - Apenas bugs abertos

**Campos Customizados:**

| Campo | Tipo | Opções | Descrição |
|-------|------|--------|-----------|
| **Severity** | Single Select | 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low | Severidade |
| **Area** | Single Select | UI, Blog, Auth, API, etc | Área afetada |
| **Browser** | Text | - | Browser onde ocorre |
| **Reproducible** | Single Select | Yes, No, Sometimes | Reproduzível? |
| **Root Cause** | Text | - | Causa raiz |

---

## 🔄 Workflow de Automação

### Setup com GitHub CLI

```bash
# Instalar GitHub CLI (se não tiver)
# macOS
brew install gh

# Linux
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# Autenticar
gh auth login

# Criar project
gh project create \
  --title "TEAFormation Development" \
  --body "Main development board for TEAFormation project"

# Listar projects
gh project list --owner "@me"

# Ver project específico
gh project view 1 --owner "@me"
```

### Configuração Manual (GitHub Web)

1. **Criar Project:**
   - Ir em: `Projects` → `New project`
   - Escolher: `Board` template
   - Nome: "TEAFormation Development"

2. **Adicionar Campos Customizados:**
   - Clicar em `+ New field`
   - Configurar cada campo conforme tabela acima

3. **Configurar Views:**
   - `+ New view`
   - Escolher tipo (Board, Table, Timeline)
   - Configurar filtros e agrupamentos

4. **Adicionar Automações:**
   - Ir em `...` → `Workflows`
   - `+ Add workflow`
   - Escolher triggers e actions

---

## 📊 Templates de Issues para Projects

### Template: Feature Card

```markdown
## 📝 Feature: [Nome da Feature]

### 📋 Descrição
[Descrição clara da feature]

### 🎯 Objetivos
- [ ] Objetivo 1
- [ ] Objetivo 2
- [ ] Objetivo 3

### ✅ Critérios de Aceitação
- [ ] Critério 1
- [ ] Critério 2

### 🔗 Links
- Figma: [link]
- Doc: [link]

### 📊 Metadados do Project
- **Phase**: Phase 1
- **Priority**: High
- **Size**: M
- **Estimate**: 8h
- **Area**: UI
```

### Template: Bug Card

```markdown
## 🐛 Bug: [Descrição curta]

### 📋 Descrição
[Descrição detalhada do bug]

### 🔄 Passos para Reproduzir
1. Passo 1
2. Passo 2
3. Ver erro

### ✅ Comportamento Esperado
[O que deveria acontecer]

### ❌ Comportamento Atual
[O que está acontecendo]

### 📊 Metadados do Project
- **Severity**: Critical
- **Area**: Auth
- **Browser**: Chrome 120
- **Reproducible**: Yes
```

---

## 🤖 Automações Avançadas via GitHub Actions

### Auto-adicionar Issues ao Project

```yaml
# .github/workflows/add-to-project.yml
name: 🔄 Add to Project

on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]

jobs:
  add-to-project:
    runs-on: ubuntu-latest
    steps:
      - name: Add to project
        uses: actions/add-to-project@v0.5.0
        with:
          project-url: https://github.com/users/[seu-usuario]/projects/1
          github-token: ${{ secrets.ADD_TO_PROJECT_PAT }}
```

### Auto-atualizar Status

```yaml
# .github/workflows/update-project-status.yml
name: 🔄 Update Project Status

on:
  pull_request:
    types: [opened, closed, reopened]
  issues:
    types: [assigned, unassigned, closed, reopened]

jobs:
  update-status:
    runs-on: ubuntu-latest
    steps:
      - name: Update project status
        uses: alex-page/github-project-automation-plus@v0.8.3
        with:
          project: TEAFormation Development
          column: In Progress
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```

---

## 📈 Métricas do Project

### Burndown Chart (Manual)

Acompanhar semanalmente:

```
Semana 1: [X] issues fechadas / [Y] issues totais
Semana 2: [X] issues fechadas / [Y] issues totais
Semana 3: [X] issues fechadas / [Y] issues totais
Semana 4: [X] issues fechadas / [Y] issues totais
```

### Velocity Tracking

Medir pontos de story completados por sprint:

```
Sprint 1: 21 pontos
Sprint 2: 18 pontos
Sprint 3: 24 pontos
Média: 21 pontos/sprint
```

### Cycle Time

Tempo médio de uma issue:
- Backlog → To Do: [X] dias
- To Do → In Progress: [X] dias
- In Progress → In Review: [X] dias
- In Review → Done: [X] dias
- **Total**: [X] dias

---

## 🎯 Best Practices

### 1. Manutenção Semanal
- [ ] Atualizar status de todas as issues
- [ ] Priorizar backlog
- [ ] Arquivar issues concluídas há >7 dias
- [ ] Revisar estimativas vs tempo real

### 2. Daily Standup via Project
Usar a board para standup:
- O que foi feito? (Done na última 24h)
- O que vai ser feito? (In Progress)
- Bloqueios? (Issues com label "blocked")

### 3. Sprint Planning
- Filtrar por "Phase" atual
- Ordenar por "Priority"
- Arrastar para "To Do" baseado em "Estimate"
- Atribuir "Assignee"

### 4. Retrospective
- Analisar "Cycle Time"
- Revisar bugs por "Severity"
- Identificar áreas com mais issues

---

## 🔗 Integrações Úteis

### Slack Integration
```yaml
# Notificar no Slack quando issue muda de coluna
webhook_url: https://hooks.slack.com/services/YOUR/WEBHOOK/URL
events:
  - project_card_moved
filters:
  column: "In Review"
message: "🔍 Nova issue em code review: {issue.title}"
```

### Notion Integration (via Zapier)
- Sync issues com Notion database
- Criar páginas de documentação automaticamente
- Atualizar roadmap no Notion

---

## 📋 Checklist de Setup Completo

- [ ] Criar "Development Board" no GitHub Projects
- [ ] Adicionar campos customizados
- [ ] Configurar 5 colunas básicas
- [ ] Criar views (Board, Table, Sprint)
- [ ] Adicionar automações básicas
- [ ] Criar "Roadmap Board"
- [ ] Criar "Bug Tracker Board"
- [ ] Configurar GitHub Actions para auto-add
- [ ] Criar templates de issues
- [ ] Adicionar issues existentes ao board
- [ ] Organizar backlog por prioridade
- [ ] Planejar primeira sprint
- [ ] Documentar workflow para o time

---

## 🎓 Recursos de Aprendizado

- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [Project Automation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project)
- [GitHub CLI for Projects](https://cli.github.com/manual/gh_project)

---

**Última atualização**: Outubro 2025  
**Versão**: 1.0
