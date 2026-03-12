# WOORIDO AI 친화 문서 구조 및 Skill 전환 가이드

> Status: REFERENCE
> Purpose: 문서 구조, profile, hook, workflow 정렬 원칙을 한곳에 모은 거버넌스 가이드다.
> Source Of Truth: `../../../docs/README.md`, `../../../docs/00_CANONICAL/`, `../../../docs/01_REFERENCES/`
> Depends On: `../../../docs/02_DECISIONS/ADR-001-single-backend.md`, `../../../docs/02_DECISIONS/ADR-002-postgresql.md`, `../../../docs/02_DECISIONS/ADR-003-go-modular-monolith.md`
> Used By: `../README.md`, skill/package 정리, hooks/workflows 개편

> 작성일: 2026-03-12
> 참고: `skill-creator` 원칙 + 현재 `woorido_skills` 프레임워크 구조 검토 반영

---

## 1. 한 줄 결론

WOORIDO 문서는 앞으로 **"긴 설명 문서 몇 개"** 가 아니라, **"작은 canonical 문서 + 필요한 reference + 명시적 profile"** 구조로 바꾸는 것이 좋습니다.

핵심은 세 가지입니다.

1. **활성 SSOT는 하나만 둔다**
2. **legacy는 격리 보존한다**
3. **skill은 문서를 중복 설명하지 말고 읽는 순서와 profile만 안내한다**

---

## 2. 현재 구조가 AI에게 어려운 이유

### 2.1 문서 자체의 문제

현재 문서군은 아래 문제가 있습니다.

1. 전략, 정책, 예시, 변경 이력, 구현 힌트가 한 파일에 섞여 있다
2. 같은 상태값과 규칙이 여러 문서에 중복 정의된다
3. 최신 기준과 과거 설명이 같은 문서 안에 공존한다
4. 어떤 파일이 기준인지 즉시 알기 어렵다
5. Demo 산출물과 기준 문서의 책임 경계가 모호하다

### 2.2 현재 `woorido_skills` 프레임워크와의 충돌

현재 프레임워크를 같이 보면 문제는 더 분명합니다.

1. `SKILL.md`, `backend.md`, `architect.md`, `design.template.md` 가 `Spring + Django + Oracle + Elasticsearch` 전제를 강하게 가진다
2. hooks/profile/config 가 디렉터리 단위 자동 로드를 전제로 하고 있어 context가 무거워질 수 있다
3. config 안 일부 경로가 실제 템플릿 구조와 불일치한다
4. 워크플로우 템플릿이 특정 기술 스택을 문서에 하드코딩한다

즉, 문서만 정리하고 skill 구조를 그대로 두면 AI는 다시 legacy 아키텍처를 기본값으로 주입받게 됩니다.

---

## 3. 목표 원칙

### 3.1 단일 활성 SSOT 원칙

AI가 혼란 없이 일하려면 **동시에 두 개의 활성 기준** 이 있으면 안 됩니다.

앞으로의 기준은 아래처럼 분리합니다.

- **Active**: `Go + PostgreSQL + Modular Monolith`
- **Legacy**: Spring/Django/Oracle 참고 자료

### 3.2 legacy 격리 원칙

legacy를 지우지 않아도 됩니다.

하지만 아래는 금지해야 합니다.

1. default profile에 legacy 문서 자동 로드
2. 기본 SKILL.md 에서 신규/legacy 규칙 동시 선언
3. 신규 canonical 문서 안에 legacy 설계와 신규 설계를 같이 서술

### 3.3 작은 canonical 문서 원칙

기준 문서는 짧고, 중복이 없어야 하며, 하나의 주제만 다뤄야 합니다.

### 3.4 profile 기반 로딩 원칙

AI는 문서 전체를 한 번에 읽는 것이 아니라, **작은 기준 문서와 명시적 profile** 로 필요한 범위만 읽어야 합니다.

### 3.5 generated 분리 원칙

API inventory, 권한 매트릭스, 상태도 같은 문서는 SSOT가 아니라 생성물로 다뤄야 합니다.

---

## 4. 목표 문서 구조

권장 디렉터리 구조는 아래와 같습니다.

```text
docs/
  00_CANONICAL/
    00_SCOPE.md
    01_TERMS.md
    02_STATE_MODEL.md
    03_FINANCIAL_MODEL.md
    04_AUTHORIZATION_MODEL.md
    05_API_BOUNDARY.md
    06_DB_SCHEMA.md
    07_OPENAPI.yaml

  01_REFERENCES/
    domain/
      challenge.md
      meeting.md
      vote.md
      ledger.md
      brix.md
    flows/
      join-flow.md
      support-flow.md
      expense-flow.md
      dissolve-flow.md
    architecture/
      topology.md
      runtime.md
      deployment.md
    context/
      product-vision.md
      roadmap.md

  02_DECISIONS/
    ADR-001-single-backend.md
    ADR-002-postgresql.md
    ADR-003-go-modular-monolith.md
    ADR-004-expense-execution-session.md

  03_GENERATED/
    api-inventory.md
    test-traceability.md
    error-catalog.md
    auth-matrix.md
    state-machines.md

  04_MIGRATION/
    legacy-spring-oracle/
      architecture.md
      api-compatibility.md
      schema-notes.md

  05_ARCHIVE/
```

이 구조의 장점:

1. AI가 먼저 `00_CANONICAL` 만 읽어도 핵심 판단 가능
2. 필요할 때만 `01_REFERENCES` 를 읽으면 됨
3. `03_GENERATED` 는 SSOT와 분리되어 context 오염이 적음
4. `04_MIGRATION` 으로 legacy를 격리해 혼동을 줄일 수 있음

---

## 5. canonical 문서 설계 기준

### 5.1 필수 파일

최소한 아래 6~8개 문서는 먼저 고정하는 것이 좋습니다.

1. `00_SCOPE.md`
2. `01_TERMS.md`
3. `02_STATE_MODEL.md`
4. `03_FINANCIAL_MODEL.md`
5. `04_AUTHORIZATION_MODEL.md`
6. `05_API_BOUNDARY.md`
7. `06_DB_SCHEMA.md`
8. `07_OPENAPI.yaml`

### 5.2 각 파일의 책임

- `00_SCOPE.md`: 제품 범위, MVP, 제외 범위, 목표 사용자
- `01_TERMS.md`: 용어 정의, 금지 용어, 표준 명칭
- `02_STATE_MODEL.md`: 상태 enum, 전이 규칙, 종료 사유
- `03_FINANCIAL_MODEL.md`: 입회비, 서포트, 보증금, 원장, 환급 규칙
- `04_AUTHORIZATION_MODEL.md`: 역할, 권한, 제한 상태
- `05_API_BOUNDARY.md`: 서비스 경계, 외부 인터페이스, 책임 분리
- `06_DB_SCHEMA.md`: 테이블, FK, 제약, 인덱스 원칙
- `07_OPENAPI.yaml`: 실제 API 계약

---

## 6. AI 친화 문서 작성 규칙

### 6.1 파일 단위 규칙

- 파일 하나는 하나의 주제만 다룬다
- 제목은 명확하게 쓴다
- 파일명은 정렬 가능한 숫자 접두어를 붙인다
- 200~300줄 이하를 권장한다

### 6.2 내용 규칙

- 배경 설명보다 규칙을 먼저 쓴다
- 예시는 1~2개만 둔다
- 같은 enum과 정책을 여러 문서에 다시 쓰지 않는다
- 옛 설계와 새 설계를 같은 파일에 섞지 않는다
- 미정 사항은 별도 ADR로 분리한다

### 6.3 문서 메타 블록

각 canonical/reference 문서에는 아래 블록을 권장합니다.

```md
## Purpose
## Status
## Source Of Truth
## Depends On
## Used By
```

여기서 `Status` 는 아래 중 하나를 가집니다.

- `ACTIVE`
- `REFERENCE`
- `GENERATED`
- `MIGRATION_ONLY`
- `DEPRECATED`

### 6.4 정책 식별자

정책은 반드시 식별자를 가져야 합니다.

예:

- `POL-CHALLENGE-001`
- `POL-FINANCE-004`
- `POL-AUTH-002`
- `ADR-003`

좋은 점:

1. AI가 문서 간 매핑을 쉽게 한다
2. API, DB, 테스트에서 참조가 쉬워진다
3. 나중에 hooks/agents 가 정책 추적을 자동화하기 좋다

---

## 7. 기존 문서의 권장 재배치

### 7.1 canonical로 흡수할 원천 문서

- `PRODUCT_AGENDA.md`
- `POLICY_DEFINITION.md`
- `USE_CASES.md`
- `SYSTEM_ARCHITECTURE.md`
- `DB_Schema_1.0.0.md`
- `API_SPECIFICATION_1.0.0.md`

이 문서들은 그대로 유지하기보다, 필요한 내용만 잘게 나눠 canonical에 흡수하는 것이 좋습니다.

### 7.2 generated 로 내려야 할 문서

- `OUTPUT_03_API_DEFINITION_IMPLEMENTED.md`
- `OUTPUT_06_API_ERROR_CATALOG.md`
- `OUTPUT_07_AUTHORIZATION_MATRIX.md`
- `OUTPUT_08_STATE_MACHINES.md`
- `OUTPUT_11_TEST_TRACEABILITY_MATRIX.md`

### 7.3 migration 또는 archive 로 보내야 할 문서

Spring/Django/Oracle/Elasticsearch 전제를 직접 담는 설명은 아래로 이동시키는 것이 좋습니다.

- `04_MIGRATION/legacy-spring-oracle/`
- `05_ARCHIVE/`

---

## 8. skill vNext 구조

현재 `woorido_skills` 프레임워크를 고려하면, 문서 구조만이 아니라 skill 구조도 같이 바뀌어야 합니다.

### 8.1 권장 분리

- 기본 skill: `woorido-platform`
- 레거시 보조 skill: `woorido-legacy`

### 8.2 권장 skill 디렉터리 개념 구조

```text
woorido-platform/
  SKILL.md
  references/
    00-navigation.md
    01-terms.md
    02-state-model.md
    03-financial-model.md
    04-api-boundary.md
    05-db-schema.md
  profiles/
    default.md
    backend-go.md
    architect-go.md
    migration.md
  scripts/
    validate-paths.ps1
    validate-policy-links.ps1
    validate-enum-consistency.ps1
    validate-openapi-ddl-diff.ps1

woorido-legacy/
  SKILL.md
  references/
    architecture.md
    oracle-schema.md
    spring-django-integration.md
```

핵심 원칙:

1. `SKILL.md` 는 짧은 네비게이션 문서여야 한다
2. 상세 규칙은 `references/` 로 내린다
3. profile 문서는 어떤 문서를 자동 로드할지 결정한다
4. legacy는 별도 skill 또는 수동 migration profile 로만 접근한다

---

## 9. profile 설계 원칙

### 9.1 기본 profile

`default` profile 은 신규 canonical만 읽습니다.

권장 범위:

1. 용어
2. 상태 모델
3. 금융 모델
4. API 경계
5. DB 스키마

### 9.2 architect-go profile

아래 문서를 추가로 읽습니다.

1. topology
2. runtime
3. 관련 ADR

### 9.3 migration profile

이 profile 은 예외적으로 아래를 함께 읽습니다.

1. active canonical
2. 제한된 legacy reference
3. 호환성 비교 문서

### 9.4 legacy skill

legacy는 기본 auto-load 대상이 아닙니다.

다음 상황에서만 사용합니다.

1. 기존 Spring/Django 코드 해석
2. Oracle 스키마 매핑 검토
3. API 호환성 비교

---

## 10. hooks, agents, workflows 개편 원칙

현재 프레임워크는 문서뿐 아니라 hooks, agents, workflow templates 와도 연결됩니다.

그래서 문서 개편 시 아래도 같이 바뀌어야 합니다.

### 10.1 hooks

- `SessionStart` 는 default profile에서 legacy를 자동 로드하지 않는다
- `PreToolUse` 는 정책 ID와 활성 canonical 문서를 기준으로 경고한다
- `PostToolUse` 는 기술 스택 고정 규칙보다 profile 기반 권고를 우선한다

### 10.2 agents

- `gap-detector` 는 active canonical 기준으로 구현 누락을 판단한다
- `fintech-guardian` 은 Oracle/Spring 특화 규칙 대신 금융 정책 ID 기준으로 검사한다
- 당도 계산, 권한 검사도 문서 경로가 아니라 정책 기준으로 참조하도록 바꾼다

### 10.3 workflows/templates

기존 템플릿의 문제는 특정 스택이 하드코딩돼 있다는 점입니다.

예:

- `design.template.md` 의 `Spring Boot -> Django -> Elasticsearch`
- `plan.template.md` 의 `BigDecimal`, `READ_COMMITTED` 고정 서술

앞으로는 이렇게 바꾸는 것이 좋습니다.

1. 템플릿은 기술 중립 또는 profile 치환형으로 만든다
2. 스택별 예시는 선택적 섹션으로 둔다
3. 설계 템플릿은 active profile의 아키텍처를 참조하게 한다

---

## 11. 검증 스크립트 우선순위

문서 구조를 바꿀 때 가장 먼저 필요한 것은 "많이 쓰는 문서"보다 "틀린 참조를 빨리 잡는 장치" 입니다.

우선순위는 아래가 좋습니다.

### 11.1 1순위

1. 경로/링크 무결성 검사
2. profile이 존재하지 않는 파일을 가리키는지 검사
3. deprecated 문서가 default profile에 포함되는지 검사

### 11.2 2순위

1. enum 중복/충돌 검사
2. 정책 ID 참조 무결성 검사
3. canonical 문서 간 중복 정의 검사

### 11.3 3순위

1. OpenAPI vs DB schema 차이 검사
2. generated 산출물 재생성 가능성 검사
3. workflow template 와 active profile 정합성 검사

---

## 12. 실제 전환 순서

### Step 1. active canonical 먼저 만든다

- Scope
- Terms
- State Model
- Financial Model
- Authorization Model
- API Boundary
- DB Schema

### Step 2. 기존 대형 문서를 분해한다

- 정책은 canonical로 흡수
- 설명과 배경은 reference로 이동
- 결정 근거는 ADR로 이동

### Step 3. generated 와 migration 을 분리한다

- 산출물은 `03_GENERATED`
- 기존 Spring/Django/Oracle 자료는 `04_MIGRATION`

### Step 4. skill을 분리한다

- 기본 skill은 `woorido-platform`
- legacy는 `woorido-legacy`
- default profile은 신규 구조만 로드

### Step 5. hooks/workflows/agents 를 새 canonical에 연결한다

- broken path 수정
- 템플릿의 기술 하드코딩 제거
- 정책 ID 기반 참조 강화

---

## 13. 지금 저장소 기준 즉시 수정해야 할 포인트

현재 검토 기준으로 follow-up 우선순위는 아래가 적절합니다.

1. `woorido_skills` config 의 잘못된 경로 참조 수정
2. 기본 `SKILL.md` 에서 legacy 기술 스택 설명 제거 또는 분리
3. `design.template.md`, `plan.template.md`, `analysis.template.md` 를 기술 중립 또는 profile 기반으로 재작성
4. default auto-load 에 legacy 문서가 들어가지 않도록 재설계
5. legacy 문서에 `MIGRATION_ONLY` 또는 `DEPRECATED` 상태 배너 추가

이 단계까지 가야 AI가 "신규 구조를 기본값으로 이해한다" 고 볼 수 있습니다.

---

## 14. 최종 권장안

WOORIDO 문서는 앞으로 아래 특성을 가져야 합니다.

1. **작다**
2. **중복이 없다**
3. **활성 SSOT는 하나다**
4. **legacy는 격리된다**
5. **AI가 읽을 순서와 profile이 명시된다**
6. **hooks/agents/workflows 와 연결 가능한 정책 ID가 있다**

그래서 권장 방향은:

1. 먼저 `canonical / references / decisions / generated / migration / archive` 구조를 만든다
2. 그 위에 `woorido-platform` 과 `woorido-legacy` 를 분리한다
3. 기본 auto-load 는 신규 canonical만 읽게 한다
4. 검증 스크립트로 참조 무결성과 profile 오염을 먼저 막는다

이 방식이 가장 안전하고, AI 활용 효율도 가장 높습니다.
