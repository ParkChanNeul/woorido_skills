# woorido-skills (v1.5.1)

**The Agentic Coding Framework for WooriDo**
> Transforms AI Coding Assistants into "WooriDo Senior Developers".

---

# 🇰🇷 한국어 (Korean)

**우리두(WooriDo) 에이전틱 코딩 프레임워크**
> AI 코딩 어시스턴트를 "우리두 팀의 수석 개발자"로 변신시켜줍니다.

### Active Default
- 기본 활성 구조: `Go + PostgreSQL + Modular Monolith`
- 기본 skill: `woorido-platform`
- legacy Spring/Django/Oracle 자료와 워크플로우는 migration 전용입니다.

## 🚀 v1.5.1 신규 기능

### ✨ 문서화
- **사용자 가이드**: '신입 가이드북' (`GUIDE.md`) 추가 - 시나리오별 프롬프트/명령어 전략 수록

### ✨ 백엔드 디자인 패턴 통합
- **Spring Boot**: Strategy, Visitor, Factory 패턴, Java 17 Record DTO, Lock(Optimistic/Pessimistic)
- **Django**: Pydantic DTO, Soft Delete Model, Read-Only Oracle View
- **MyBatis**: Soft Delete (`softDeleteById`) 및 동시성 제어 쿼리 표준화

### ✨ 워크플로우 확장
- **/git-commit**: 컨벤션을 준수하는 커밋 메시지 생성
- **/component --lottie**: Lottie 애니메이션 컴포넌트 생성 지원

### ✨ 100% 정합성 검증
- 워크플로우 ↔ 문서 템플릿(`design/plan/report`) ↔ 에이전트 ↔ 훅 시스템 간 완벽 호환

## 🚀 v1.4.5 신규 기능

### ✨ UX 워크플로우 (`/ux-flow`)
- **감정 맵 기반 설계**: 사용자의 '불안'과 '기쁨'을 예측하는 UX Flow 문서 생성
- **인터랙션 자동화**: `UX_INTERACTIONS` 및 `WDS Motion` 토큰 자동 제안

### ✨ 디자인 시스템 Evolution (v3.0)
- **Glassmorphism**: `/component` 워크플로우에 Glass 토큰 지원 추가
- **Motion Physics**: Rolling Counter용 Spring 애니메이션 토큰 레퍼런스 추가
- **BrixBadge**: 컴포넌트 템플릿에 3D 배지 지원 추가

## 🚀 v1.3.6 신규 기능

### ✨ Hook 시스템
- **SessionStart**: 프로젝트 컨텍스트 자동 로드
- **PreToolUse**: 코드 수정 전 핀테크/당도 규칙 검증
- **PostToolUse**: 수정 후 WDS 토큰 분석

### ✨ PDCA 명령어
- `/pdca-plan`, `/pdca-analyze`, `/pdca-report`, `/pdca-status`

### ✨ 에이전트 시스템
- `gap-detector` - 설계-구현 Gap 분석
- `brix-calculator` - 당도 시스템 검증
- `fintech-guardian` - 금융 보안 규칙 검사
- `wds-auditor` - WDS 토큰 사용 감사

### ✨ QA 워크플로우
- `/quality-check` - 코드 품질 자동 검사
- `/zero-script-qa` - Docker 로그 기반 QA

---

## 📦 설치 방법

```bash
npx woorido-skills install
```

### 설치 확인
```bash
npx woorido-skills check
```

### 제거 (Uninstall)
```bash
npx woorido-skills uninstall
```

배포되는 항목:
- `.woorido/` (프레임워크 + 에이전트)
- `.claude/skills/woorido/SKILL.md`
- `.agent/workflows/*.md` (15개 워크플로우)
- `hooks/` + `scripts/` (Hook 시스템)

---

## 🛠️ 사용 방법

### PDCA 워크플로우
```bash
/pdca-plan user-auth        # 계획 문서 생성
/pdca-analyze user-auth     # Gap 분석
/pdca-report user-auth      # 보고서 생성
/pdca-status                # 전체 PDCA 상태 확인
/ux-flow user-auth          # 감정 맵 기반 UX Flow 설계 (NEW!)
```

### QA
```bash
/quality-check              # 코드 품질 검사
/zero-script-qa             # Docker 로그 기반 QA
```

### 컴포넌트 생성
```bash
/component UserCard         # WDS 스타일 컴포넌트
/api-hook useChallenge      # React Query Hook
/form JoinChallenge         # Zod 폼
```

### Legacy Migration 전용
```bash
.agent/workflows/legacy/spring-api.md
.agent/workflows/legacy/mybatis.md
.agent/workflows/legacy/django-view.md
```

---

## 🏗️ 기술 스택

### Frontend
- **Core**: React 18, Vite, TypeScript
- **Design**: WDS (WooriDo Design System) - CSS Modules
- **State**: React Query (Server), Zustand (Client)

### Backend
- **Active**: Go modular monolith, PostgreSQL, worker
- **Legacy**: Spring Boot + Django + Oracle + Elasticsearch (migration only)

## 📜 라이선스
WeCollavo, WooriDo Team

---

# �� English (Description)

## 🚀 What's New in v1.5.1

### ✨ Documentation
- **User Guide**: Added `GUIDE.md` ('Beginner Guidebook') - Scenario-based prompts & command strategies

### ✨ Backend Design Patterns
- **Spring Boot**: Strategy, Visitor, Factory, Record DTO, Pessimistic/Optimistic Locks
- **Django**: Pydantic DTO, Soft Delete, Read-Only Views
- **MyBatis**: Standardized Soft Delete & Concurrency Control

### ✨ Workflow Extensions
- **/git-commit**: Generate standardized commit messages
- **/component --lottie**: Support for Lottie animation components

### ✨ 100% Consistency
- Verified alignment across Workflows, Doc Templates, Agents, and Hooks

## 🚀 What's New in v1.4.5

### ✨ UX Workflow (`/ux-flow`)
- **Emotion-First Design**: Generate UX Flow docs mapping user anxiety/delight.
- **Interaction Planning**: Auto-suggests WDS standard interactions and motion tokens.

### ✨ Design System Evolution (v3.0)
- **Glassmorphism**: Added `Glass` tokens support to `/component` workflow
- **Motion Physics**: Added `Spring` animation tokens (Rolling Counter) reference
- **BrixBadge**: Added 3D variant support to Component templates

## 🚀 What's New in v1.3.6

### ✨ Hook System
- **SessionStart**: Auto-load project context
- **PreToolUse**: Validate fintech/brix rules before code changes
- **PostToolUse**: Analyze WDS token usage after edits

### ✨ PDCA Commands
- `/pdca-plan`, `/pdca-analyze`, `/pdca-report`, `/pdca-status`

### ✨ Agent System
- `gap-detector` - Design-implementation gap analysis
- `brix-calculator` - Brix(당도) system validation
- `fintech-guardian` - Financial security rules check
- `wds-auditor` - WDS token usage audit

### ✨ QA Workflows
- `/quality-check` - Automated code quality inspection
- `/zero-script-qa` - Docker log-based QA

---

## � Features

### 1. Agentic Framework (`.woorido/`)
Installs a "Brain" for your AI agent.
- **_core (Mind)**: Persona (A.M.I.), Genius Thinking Formulas.
- **_domain (Heart)**: Business Logic (Brix, Penalty, Deposit Lock).
- **_security (Shield)**: Anti-Ponzi Rules, RBAC Access Control.
- **strategies (Roles)**: Frontend, Backend, Django, PM behavior guides.
- **agents**: Domain-specialized AI agents (NEW!)

### 2. Unified Skills (`SKILL.md`)
Single source of truth for coding styles, tech stack, and conventions.

### 3. Workflows (`.agent/`)
Automated slash commands for PDCA, QA, and component generation.

### 4. Hook System (NEW!)
Event-driven context injection for AI assistants.

---

## 📦 Installation

```bash
npx woorido-skills install
```

### Verify Installation
```bash
npx woorido-skills check
```

### Uninstallation
```bash
npx woorido-skills uninstall
```

This will deploy:
- `.woorido/` (Framework + Agents)
- `.claude/skills/woorido/SKILL.md`
- `.agent/workflows/*.md` (15 workflows)
- `hooks/` + `scripts/` (Hook System)

---

## 🛠️ Usage

### Slash Commands

**PDCA & UX Workflow:**
```bash
/pdca-plan user-auth        # Create plan document
/pdca-analyze user-auth     # Gap analysis
/pdca-report user-auth      # Generate report
/pdca-status                # Check all PDCA status
/ux-flow user-auth          # Design UX Flow with Emotion Map (NEW!)
```

**QA:**
```bash
/quality-check              # Run code quality checks
/zero-script-qa             # Docker log-based QA
```

**Components:**
```bash
/component UserCard         # Create WDS-styled component
/component SuccessAnim --lottie # Lottie Animation
/api-hook useChallenge      # Create React Query hook
/form JoinChallenge         # Create Zod-validated form
/git-commit "Add login"     # Generate commit message
```

**Legacy Migration Only:**
```bash
.agent/workflows/legacy/spring-api.md
.agent/workflows/legacy/mybatis.md
.agent/workflows/legacy/django-view.md
```

---

## 🏗️ Tech Stack

### Frontend
- **Core**: React 18, Vite, TypeScript
- **Design**: WDS (WooriDo Design System) - CSS Modules
- **State**: React Query (Server), Zustand (Client)

### Backend
- **Active**: Go modular monolith, PostgreSQL, worker
- **Legacy**: Spring Boot + Django + Oracle + Elasticsearch (migration only)

## 📜 License
WeCollavo, WooriDo Team
