# Changelog

## [1.6.0] - 2026-02-02

### Added
- **SKILL.md Refinement**: 코드 예제에 한글 주석을 추가하여 맥락 이해도 향상.
- **Cross-Reference**: `SKILL.md`와 `AGENTS.md` 간의 상호 참조 연결.


All notable changes to `@channeulparks/woorido-skills` will be documented in this file.


## [1.4.5] - 2026-01-29

### Added
- **UX Workflow**: `/ux-flow` command
  - Creates UX design documents with Emotion Map and Interaction planning
  - Based on `UX_STRATEGY.md` and `UX_EMOTION_MAP.md`
  - Includes `ux-flow.template.md`
- **Design System Evolution (v3.0)**
  - Glassmorphism tokens (`--glass-surface`, `--glass-blur`) added to `component.md` reference
  - Motion Physics tokens (`spring`) added to reference
  - `BrixBadge` (3D/Flat) and `Glassmorphism` examples added to `design.template.md`

  *(KR Translation)*
  - **UX 워크플로우**: `/ux-flow` 명령어 추가
    - 감정 맵(Emotion Map)과 인터랙션 계획이 포함된 UX 설계 문서 생성
    - `UX_STRATEGY.md` 및 `UX_EMOTION_MAP.md` 기반
    - `ux-flow.template.md` 템플릿 포함
  - **디자인 시스템 고도화 (v3.0)**
    - `component.md` 레퍼런스에 Glassmorphism 토큰 (`--glass-surface`, `--glass-blur`) 추가
    - 레퍼런스에 Motion Physics 토큰 (`spring`) 추가
    - `design.template.md`에 `BrixBadge` (3D/Flat) 및 `Glassmorphism` 예시 추가

## [1.4.0] - 2026-01-29

### Changed
- **Directory Structure Improvement**: Moved `hooks/` and `scripts/` under `.woorido/`
  - `hooks/` → `.woorido/hooks/`
  - `scripts/` → `.woorido/scripts/`
  - Prevents conflicts with React project's common folder names (e.g., `src/hooks/`)
- **CLI Updates**:
  - Updated `install` output messages
  - Updated `uninstall` paths (no longer removes standalone `hooks/` and `scripts/`)
  - Updated `check` command to verify `.woorido/hooks/` and `.woorido/scripts/`

  *(KR Translation)*
  - **디렉토리 구조 개선**: `hooks/`와 `scripts/`를 `.woorido/` 하위로 이동
    - `hooks/` → `.woorido/hooks/`
    - `scripts/` → `.woorido/scripts/`
    - React 프로젝트의 공통 폴더명(`src/hooks/`)과 충돌 방지
  - **CLI 업데이트**:
    - `install` 출력 메시지 업데이트
    - `uninstall` 경로 업데이트 (독립된 `hooks/`, `scripts/` 제거 안 함)
    - `check` 명령어가 `.woorido/hooks/`와 `.woorido/scripts/`를 검증하도록 수정

## [1.3.6] - 2026-01-28

### Fixed
- **Brand Color Correction**: Fixed incorrect HEX code in `persona.md` (`#FF4E00` → `#E9481E`)

  *(KR Translation)*
  - **브랜드 컬러 수정**: `persona.md`의 잘못된 HEX 코드 수정 (`#FF4E00` → `#E9481E`)

## [1.3.5] - 2026-01-28

### Changed
- **Package Rename**: `@channeulparks/woorido-skills` → `woorido-skills`
- Updated usage instructions to `npx woorido-skills`

### Fixed
- Added `uninstall` command documentation to README.md
- Updated `cli.js` uninstall logic to remove hooks, scripts, and docs/templates

  *(KR Translation)*
  - **패키지명 변경**: `@channeulparks/woorido-skills` → `woorido-skills`
  - 사용법을 `npx woorido-skills`로 업데이트
  - `README.md`에 `uninstall` 명령어 문서 추가
  - `cli.js`의 제거 로직 업데이트 (hooks, scripts, docs/templates 제거)

## [1.3.1] - 2026-01-28

### Changed
- **Terminology** - Expanded from 34 to 110 lines
  - Added Completion (완주) system
  - Added Entry Fee (입회비) formula
  - Added Revoked state with 7-day grace period
  - Added Deposit Lock (보증금 락) detailed flow
  - Added UI Copy Guidelines
- **Design Tokens** - Expanded from 56 to 130 lines
  - Added Spacing tokens (space-1 ~ space-6)
  - Added Font weight tokens (w1 ~ w7)
  - Added CSS ↔ TypeScript token mapping table
  - Added Bitter level for Brix scale

### Fixed
- Data consistency between npm package and docs

  *(KR Translation)*
  - **용어집(Terminology)** - 34줄에서 110줄로 확장
    - 완주 시스템 추가
    - 입회비 공식 추가
    - 7일 유예 기간이 있는 Revoked 상태 추가
    - 보증금 락(Deposit Lock) 상세 흐름 추가
    - UI 문구 가이드라인 추가
  - **디자인 토큰(Design Tokens)** - 56줄에서 130줄로 확장
    - Spacing 토큰 추가 (space-1 ~ space-6)
    - Font Weight 토큰 추가 (w1 ~ w7)
    - CSS ↔ TypeScript 토큰 매핑 테이블 추가
    - Brix 척도에 Bitter 레벨 추가
  - npm 패키지와 문서 간의 데이터 일관성 수정

## [1.3.0] - 2026-01-28

### Added
- **Hook System** - Event-driven context injection
  - `hooks/hooks.json` - Hook configuration with SessionStart, PreToolUse, PostToolUse
  - `scripts/session-start.js` - Auto-load project context from woorido.config.json
  - `scripts/pre-tool-use.js` - Validate fintech/brix rules before code changes
  - `scripts/post-tool-use.js` - Analyze WDS token usage after edits

- **PDCA Commands** - Structured development workflow
  - `/pdca-plan` - Generate plan documents with WooriDo domain checklist
  - `/pdca-analyze` - Design-implementation gap analysis
  - `/pdca-report` - Generate completion reports
  - `/pdca-status` - Check all PDCA progress

- **Agent System** - Domain-specialized AI agents
  - `gap-detector.md` - Design-implementation gap analysis (sonnet)
  - `brix-calculator.md` - Brix system validation with formulas (sonnet)
  - `fintech-guardian.md` - Financial security rules check (opus)
  - `wds-auditor.md` - WDS token usage audit (haiku)

- **QA Workflows** - Automated quality inspection
  - `/quality-check` - Lint, TypeScript, WDS token validation
  - `/zero-script-qa` - Docker log-based QA without test scripts

- **CLI Improvements**
  - `check` command - Verify installation status
  - `version` command - Display current version

### Changed
- Updated README.md with v1.3.0 features (EN + KR)
- Enhanced install output to show new folders (hooks/, scripts/, agents/)

  *(KR Translation)*
  - **Hook 시스템** - 이벤트 기반 컨텍스트 주입
    - `hooks/hooks.json` - SessionStart, PreToolUse, PostToolUse 훅 설정
    - `scripts/session-start.js` - woorido.config.json에서 프로젝트 컨텍스트 자동 로드
    - `scripts/pre-tool-use.js` - 코드 변경 전 핀테크/당도 규칙 검증
    - `scripts/post-tool-use.js` - 편집 후 WDS 토큰 사용 분석
  - **PDCA 명령어** - 체계적인 개발 워크플로우
    - `/pdca-plan` - 우리두 도메인 체크리스트가 포함된 계획 문서 생성
    - `/pdca-analyze` - 설계-구현 Gap 분석
    - `/pdca-report` - 완료 보고서 생성
    - `/pdca-status` - 모든 PDCA 진행 상태 확인
  - **에이전트 시스템** - 도메인 특화 AI 에이전트
    - `gap-detector.md` - 설계-구현 Gap 분석 (sonnet)
    - `brix-calculator.md` - 공식 기반 당도 시스템 검증 (sonnet)
    - `fintech-guardian.md` - 금융 보안 규칙 검사 (opus)
    - `wds-auditor.md` - WDS 토큰 사용 감사 (haiku)
  - **QA 워크플로우** - 자동화된 품질 검사
    - `/quality-check` - Lint, TypeScript, WDS 토큰 검증
    - `/zero-script-qa` - 테스트 스크립트 없는 Docker 로그 기반 QA
  - **CLI 개선**
    - `check` 명령어 - 설치 상태 검증
    - `version` 명령어 - 현재 버전 표시
  - v1.3.0 기능으로 README.md 업데이트 (국문 + 영문)
  - 새로운 폴더(hooks/, scripts/, agents/)를 표시하도록 설치 출력 개선

## [1.2.0] - 2026-01-26

### Added
- Initial npm release as `@channeulparks/woorido-skills`
- Agentic Framework (`.woorido/`)
  - `_core/` - A.M.I. Persona, Genius Thinking Formulas
  - `_domain/` - Brix, Penalty, IA Structure logic
  - `_security/` - Fintech rules, Access control
  - `strategies/` - Frontend, Backend, Django, PM, Architect, Search
- Unified Skills (`SKILL.md`)
- 8 Antigravity Workflows (component, api-hook, form, page, test, spring-api, mybatis, django-view)
- CLI with install/uninstall/list commands

  *(KR Translation)*
  - `@channeulparks/woorido-skills`로 초기 npm 배포
  - **에이전틱 프레임워크 (`.woorido/`)**
    - `_core/` - A.M.I. 페르소나, 천재적 사고 공식
    - `_domain/` - 당도, 페널티, IA 구조 로직
    - `_security/` - 핀테크 규칙, 접근 제어
    - `strategies/` - Frontend, Backend, Django, PM, Architect, Search 전략
  - **통합 스킬 (`SKILL.md`)**
  - 8개의 Antigravity 워크플로우 (component, api-hook, form, page, test, spring-api, mybatis, django-view)
  - install/uninstall/list 명령어가 포함된 CLI

## [1.0.0] - 2026-01-19

### Added
- Initial development version
- Basic framework structure

  *(KR Translation)*
  - 초기 개발 버전
  - 기본 프레임워크 구조
