# 📘 WooriDo Skills: 신입 가이드북

반갑습니다! 이 문서는 **AI 코딩 어시스턴트**와 함께 **우리두(WooriDo) 팀의 개발 방식**으로 일하는 법을 알려주는 친절한 가이드북입니다.

아무것도 모르셔도 괜찮습니다. 이 가이드만 따라오시면 여러분도 오늘부터 수석 개발자처럼 코딩할 수 있습니다.

---

## 🦸‍♂️ 비유로 이해하기: 아이언맨과 자비스

- **개발자(당신)** = **토니 스타크** (결정권자, 창의력 담당)
- **AI 어시스턴트** = **자비스** (실행 담당, 초고속 코딩)
- **WooriDo Skills** = **아이언맨 수트** (자비스에게 주는 강력한 도구들)

이 패키지가 없다면 자비스는 "그냥 똑똑한 비서"일 뿐이지만, **WooriDo Skills를 장착하면** 우리 회사의 규칙, 보안 규정, 디자인 시스템을 완벽히 이해하는 **"우리두 전용 슈퍼 개발자"**가 됩니다.

---

## 🔑 핵심 개념 3가지 (The Code 3)

이 3가지만 기억하면 90%는 끝난 겁니다.

| 개념 | 설명 | 비유 |
| :--- | :--- | :--- |
| **1. 명령 (Command)** | `/`로 시작하는 표준 작업 지시 | "자비스, 비행 모드 켜줘." |
| **2. 프롬프트 (Prompt)** | 구체적인 요구사항을 말로 +α | "저 건물 옥상으로 갈 건데, 조용히 접근해." |
| **3. 컨텍스트 (Context)** | 말하지 않아도 AI가 이미 아는 것 | "지금 배터리가 부족하니 절전 모드로 갈게요." |

---

## 🎬 실전 시나리오 튜토리얼

### Scenario 1: "예쁜 로그인 버튼이 필요해" (Frontend)
> **목표**: WDS 디자인 시스템을 준수하고, 클릭하면 Lottie 애니메이션이 나오는 버튼 만들기

AI에게 이렇게 말해보세요. (복사해서 바로 써보세요!)

#### [입문자용] 하나씩 해보기
가장 쉬운 방법입니다. 일단 뼈대를 만들고 살을 붙입니다.
1. **명령 입력**: `/component LoginButton --lottie`
2. **AI 답변**: (기본 버튼 코드를 만들어줍니다)
3. **추가 요청**: "고마워. 근데 버튼 색깔은 WDS Primary 컬러(`var(--color-primary)`)로 해주고, 마우스 올리면 약간 커지게 해줘."

#### [숙련자용] 한 방에 끝내기 (추천 ⭐)
명령과 디테일을 한 번에 줍니다. AI가 가장 좋아하는 방식입니다.

> **Command + Prompt**:
> ```text
> /component LoginButton --lottie
> "로그인 버튼을 만들어줘. 평소엔 WDS Primary 색상이고,
> 로딩 중일 땐 Lottie 애니메이션이 가운데서 돌게 해줘.
> 모바일에서는 꽉 찬 너비(width: 100%)로 보여야 해."
> ```

---

### Scenario 2: "안전한 포인트 결제 시스템 만들기" (Backend)
> **목표**: 동시에 여러 명이 인출해도 잔액이 꼬이지 않는(동시성 제어) 안전한 API 만들기

이건 보안이 중요합니다. 하지만 걱정 마세요. Skills가 다 알고 있습니다.

#### [숙련자용] 한 방에 끝내기
> **Command + Prompt**:
> ```text
> /spring-api PointSystem
> "포인트 차감(`deduct`) API를 구현할 거야.
> 1. 동시에 요청이 와도 안전하게 '비관적 락(Pessimistic Lock)'을 걸어줘.
> 2. 데이터를 지울 땐 DB에서 삭제하지 말고 'Soft Delete' 처리를 해줘.
> 3. 에이전트(Fintech Guardian)가 경고하지 않게 핀테크 규정을 완벽히 지켜줘."
> ```

**AI는 이렇게 생각하고 코드를 짭니다:**
1. `/spring-api` ➡️ Controller, Service, DTO 뼈대 생성
2. "비관적 락" ➡️ `mybatis.md` 템플릿의 `SELECT ... FOR UPDATE` 구문 적용
3. "Soft Delete" ➡️ `deleted_at` 컬럼 업데이트 로직 적용
4. "핀테크 규정" ➡️ `BigDecimal` 타입 사용 (돈 계산 오류 방지)

---

### Scenario 3: "이 코드, 괜찮은 건가?" (Maintenance)
> **목표**: 내가(혹은 동료가) 짠 코드가 우리 팀 규칙에 맞는지 검사받기

Skills 패키지는 여러분이 코드를 고칠 때마다 옆에서 지켜보고 있습니다(Hook 시스템).

#### 상황: 실수로 위험한 코드를 짰을 때
여러분이 실수로 **"이체 금액을 `double` 타입으로 계산"**하는 코드를 짰다고 칩시다.

> **AI의 자동 반응 (Hook)**:
> "🚨 **잠깐만요! 금융 관련 코드에서 `double` 사용이 감지되었습니다.**
> 돈 계산 오차가 발생할 수 있습니다. `BigDecimal`로 변경하고, `READ_COMMITTED` 격리 수준을 확인하세요."

#### 상황: 리팩토링 요청하기
> **Prompt**:
> "지금 `PaymentService.java` 코드가 우리 팀의 **Oracle 락 정책**에 맞는지 봐줘.
> `fintech_rules.md` 기준으로 보안 취약점이 있다면 수정 코드를 제안해줘."

---

## ⚡ 자주 쓰는 '치트키' 프롬프트

필요할 때 복사해서 붙여넣으세요.

| 상황 | 치트키 프롬프트 |
| :--- | :--- |
| **설계 검증** | "이 설계가 우리두 핀테크 보안 규정을 준수하고 있어? `fintech_rules.md` 기준으로 깐깐하게 리뷰해줘." |
| **디자인 적용** | "하드코딩된 색상(#123456) 다 빼고, WDS 디자인 토큰(`var(--color-...)`)으로 싹 바꿔줘." |
| **에러 해결** | "API 응답 값이 이상해. 우리 팀 표준인 `ApiResponse<T>` 포맷에 맞게 감싸줘." |
| **배포 전 QA** | "방금 만든 기능의 품질을 검사하고 싶어. `/quality-check` 기준으로 빠진 테스트 케이스가 있으면 알려줘." |

---

## 📚 명령어 모음 (Cheat Sheet)

개발 단계별로 사용할 수 있는 명령어들입니다.

### 🎨 Frontend (React/Vite)
| 명령어 | 용도 | 사용 예시 |
| :--- | :--- | :--- |
| **`/component`** | **WDS 스타일 컴포넌트 생성**<br>디자인 시스템 토큰과 스타일이 적용된 컴포넌트 스캐폴딩 | `/component LoginButton --lottie`<br>"/component UserCard --domain" |
| **`/page`** | **페이지 구조 생성**<br>레이아웃, 데이터 페칭(Suspense)이 포함된 페이지 기본 구조 | `/page Dashboard`<br>"/page LoginPage --auth" |
| **`/form`** | **폼 & 유효성 검사 생성**<br>React Hook Form + Zod 스키마가 적용된 입력 폼 | `/form LoginForm`<br>"/form SignupForm --step-wizard" |
| **`/api-hook`** | **React Query 훅 생성**<br>API 상태 관리(로딩, 에러, 캐싱)를 위한 커스텀 훅 | `/api-hook useUserProfile`<br>"/api-hook useTransactionHistory --infinite" |
| **`/test`** | **단위 테스트 생성**<br>Vitest 기반의 컴포넌트/훅 테스트 코드 작성 | `/test LoginButton`<br>"/test useAuth --hook" |

### 🛠️ Backend (Spring Boot / Django)
| 명령어 | 용도 | 사용 예시 |
| :--- | :--- | :--- |
| **`/spring-api`** | **Spring REST API 생성**<br>Controller, Service, DTO, Entity 구조를 한 번에 생성 | `/spring-api Product`<br>"/spring-api Order --transactional" |
| **`/django-view`** | **Django ViewSet 생성**<br>DRF ViewSet, Serializer, URL 패턴 생성 | `/django-view User`<br>"/django-view Payment --readonly" |
| **`/mybatis`** | **MyBatis XML 매퍼 생성**<br>오라클 DB 최적화 쿼리 및 매퍼 인터페이스 생성 | `/mybatis UserMapper`<br>"/mybatis AccountMapper --batch" |

### 📊 Planning & Analysis
| 명령어 | 용도 | 사용 예시 |
| :--- | :--- | :--- |
| **`/ux-flow`** | **UX 흐름도 설계**<br>사용자 감정선과 인터랙션이 포함된 상세 흐름도 작성 | `/ux-flow JoinMembership`<br>"/ux-flow TransferMoney --risk-high" |
| **`/pdca-plan`** | **기능 개발 계획 (Plan)**<br>구현 전 설계, 필요 리소스, 일정 산정 문서 생성 | `/pdca-plan "QR 결제 기능"` |
| **`/pdca-analyze`** | **설계-구현 차이 분석 (Check)**<br>기획 의도와 실제 구현 간의 Gap 분석 보고서 | `/pdca-analyze` |

### ✅ Quality & Process
| 명령어 | 용도 | 사용 예시 |
| :--- | :--- | :--- |
| **`/quality-check`** | **코드 품질 자동 검사**<br>Lint, 타입, 디자인 토큰 준수 여부 등 종합 진단 | `/quality-check`<br>"/quality-check src/components" |
| **`/git-commit`** | **커밋 메시지 생성**<br>프로젝트 컨벤션에 맞는 표준 커밋 메시지 작성 | `/git-commit "로그인 버튼 디자인 수정"` |
| **`/zero-script-qa`** | **무대본 QA 실행**<br>로그 기반의 탐색적 테스트 및 리포트 주도 | `/zero-script-qa` |

---

## ❓ 자주 묻는 질문 (FAQ)

**Q. 명령어가 작동을 안 해요.**
A. `npx woorido-skills install`을 실행했는지 확인해주세요. 그리고 채팅창에 `/`를 입력했을 때 자동완성이 뜨는지 보세요.

**Q. AI가 우리 팀 규칙을 모르는 것 같아요.**
A. `.woorido/scripts/session-start.js`가 실행되지 않았을 수 있습니다. 터미널을 껐다 켜보시거나, 대화창에 **"세션 초기화해줘"**라고 말해보세요.

**Q. 꼭 명령어를 써야 하나요?**
A. 아니요! 하지만 명령어를 쓰면 **"가장 표준화된 고품질 코드"**를 **"가장 빠르게"** 얻을 수 있습니다.

---

이제 여러분은 준비되었습니다. 자비스와 함께 최고의 코드를 작성해보세요! 🚀
