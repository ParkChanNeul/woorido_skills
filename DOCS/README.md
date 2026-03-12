# WOORIDO Skills Maintainer Docs

> `woorido_skills` 패키지 유지보수 문서 진입점

## Purpose

이 디렉터리는 `woorido_skills` 패키지의 설계, 운영 원칙, maintainer 가이드를 관리한다. 제품 규칙의 active SSOT는 `../../docs/` 아래에 두고, 여기서는 skill이 그 문서를 어떻게 읽고 연결하는지 다룬다.

## Ownership

- 제품 설계/정책/계약: `../../docs/`
- skill 패키지 runtime source: `../TEMPLATES/`
- maintainer 문서: `./`

prompt/persona runtime source는 `../TEMPLATES/.woorido/_core/`가 유일한 원본이다. 이 디렉터리에는 그 복제본을 두지 않는다.

## Reading Order

1. `../../docs/README.md`
2. `../../docs/00_CANONICAL/`
3. `./governance/16_AI_Friendly_Skill_Ready_Documentation_Architecture.md`
4. `./governance/15_Skill_vNext_Alignment.md`
5. `./usage/AI_DEVELOPMENT_STRATEGY.md`

## Folder Contract

- `governance/`: skill 구조, profile, hook, workflow 정렬 문서
- `usage/`: 도입 가이드, 운영 전략, 사용자/팀 안내 문서

## Ground Rules

- skill 문서는 제품 canonical을 대체하지 않는다.
- runtime payload는 `TEMPLATES/` 아래만 수정한다.
- maintainer 설명 문서는 `DOCS/` 아래에 두고, 설치 대상 워크스페이스에는 배포하지 않는다.

## Entry Points

- [Governance Guide](./governance/16_AI_Friendly_Skill_Ready_Documentation_Architecture.md)
- [Docs + Skills Principle](./governance/00_VIBE_CODING_STRATEGY.md)
- [Skill vNext Alignment](./governance/15_Skill_vNext_Alignment.md)
- [Skill Workflow Backlog](./governance/20_SKILL_WORKFLOW_BACKLOG.md)
- [AI Development Program](./usage/AI_DEVELOPMENT_STRATEGY.md)
