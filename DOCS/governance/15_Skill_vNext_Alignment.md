# WOORIDO Skill vNext 정렬 가이드

> Status: REFERENCE
> Purpose: active canonical 기준에 맞춰 skill, profile, hook, workflow를 어떻게 정렬할지 정의한다.
> Source Of Truth: `../../../docs/README.md`, `../../../docs/00_CANONICAL/`, `./16_AI_Friendly_Skill_Ready_Documentation_Architecture.md`
> Depends On: `../../../docs/02_DECISIONS/ADR-001-single-backend.md`, `../../../docs/02_DECISIONS/ADR-002-postgresql.md`, `../../../docs/02_DECISIONS/ADR-003-go-modular-monolith.md`
> Used By: skill package 정리, hooks/workflows 개편, profile 설계

> 작성일: 2026-03-13
> Note: 제품 규칙은 이 문서가 아니라 `../../../docs/00_CANONICAL/` 에서 판단한다.

---

## 1. 한 줄 결론

기본 활성 skill은 `woorido-platform` 하나만 두고, legacy 해석은 `woorido-legacy` 또는 migration profile 로 분리한다.

## 2. 기본 구조

- 기본 skill: `woorido-platform`
- 보조 skill: `woorido-legacy`
- 기본 profile: 신규 canonical만 자동 로드
- migration profile: active canonical + 제한된 legacy reference만 수동 로드

```text
woorido-platform/
  SKILL.md
  references/
  profiles/
  scripts/

woorido-legacy/
  SKILL.md
  references/
```

## 3. 운영 규칙

1. `SKILL.md` 는 짧은 네비게이션 문서로 유지한다.
2. 상세 규칙은 `references/` 로 내리고, canonical 경로를 우선 링크한다.
3. default profile 은 legacy 문서를 자동 로드하지 않는다.
4. skill 문서는 문서 SSOT를 대체하지 않고, 읽는 순서와 workflow 연결만 담당한다.

## 4. hooks / workflows

- `SessionStart` 는 default profile 에서 active canonical만 로드한다.
- `PreToolUse` 는 기술 스택 고정보다 active canonical 경로와 정책 ID를 먼저 검증한다.
- `PostToolUse` 는 legacy 문서 자동 주입을 금지한다.
- 템플릿은 기술 중립 또는 profile 치환형으로 유지하고, stack-specific 예시는 opt-in 으로 둔다.

## 5. 전환 순서

1. 기본 `SKILL.md` 에서 legacy 기술 스택 설명을 제거한다.
2. default profile 을 신규 canonical-only 로 고정한다.
3. migration 작업에서만 legacy skill 또는 migration profile 을 명시적으로 활성화한다.
4. hooks, workflows, agents 가 `00_CANONICAL/` 과 `01_REFERENCES/` 를 참조하도록 경로를 정리한다.
5. 경로/enum/policy link 검증 스크립트를 우선 유지한다.
