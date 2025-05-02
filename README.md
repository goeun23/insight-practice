## ✅ InsightHub 최적화 과제 리스트 (단계별 실전용)
- [web-vitals] Next.js-hydration 17.30000001192093
### 🧱 1단계: 초기 렌더링 최적화
- [ ] `Chart.tsx`에 `React.memo` 적용 → 불필요한 재렌더 방지
- [ ] `DataList.tsx`를 `react-window` 또는 `react-virtualized`로 변경 → 긴 리스트 가상 스크롤 처리
- [ ] `Chart.tsx`, `DataList.tsx` 내부에서 `useMemo` / `useCallback` 적용

### 🔌 2단계: API 호출 & 상태 최적화 (React Query)
- [ ] `staleTime`, `cacheTime` 조정해 불필요한 refetch 막기
- [ ] `select`, `placeholderData`, `initialData` 등으로 UX 최적화
- [ ] `suspense` + `fallback`으로 로딩 UX 개선

### 🔍 3단계: 렌더링 추적 및 측정
- [ ] `Lighthouse`로 TTI, CLS, LCP 측정 → 개선 전/후 비교
- [ ] `React DevTools Profiler`로 렌더링 횟수 추적
- [ ] `web-vitals` 수집하여 console에서 로그 추적

### 📦 4단계: 번들 사이즈 최적화
- [ ] `@next/bundle-analyzer` 설치 → 어떤 모듈이 무거운지 시각화
- [ ] `dynamic import + ssr: false` 설정된 컴포넌트 분리
- [ ] 불필요한 라이브러리 제거 → `chart`, `date`, `lodash` 등

### 🚀 5단계: 배포/환경 최적화
- [ ] `Vercel` 환경에 올려서 build size, cold start 체크
- [ ] `production build` + `performance 모드`로 실행해 차이 분석

---

### 📘 커밋 예시
- `feat: apply React.memo to Chart component`
- `perf: use react-window for DataList to reduce DOM nodes`
- `refactor: cache API result using React Query staleTime`
- `chore: add Lighthouse report for before optimization`



- 초기 : [web-vitals] Next.js-hydration 17.30000001192093
## 📊 InsightHub 과제별 성능 개선 기록표

| 개선 작업 | 측정 지표 | 적용 전 | 적용 후 | 비고 |
|-----------|-----------|---------|---------|------|
| Chart.tsx에 React.memo 적용 | Hydration Time / Render Count |   |   |  |
| DataList.tsx에 react-window 적용 | DOM Node Count / Hydration Time |   |   |  |
| useMemo / useCallback 적용 | Render Count / CPU 사용량 |   |   |  |
| staleTime / cacheTime 설정 | API 호출 횟수 / TTFB |   |   |  |
| placeholderData, select 사용 | FID / LCP |   |   |  |
| suspense + fallback 적용 | CLS / LCP |   |   |  |
| Lighthouse 리포트 비교 | LCP / TTI / CLS |   |   |  |
| React Profiler 렌더링 추적 | Chart / List 재렌더링 수 |   |   |  |
| bundle-analyzer 적용 | 번들 사이즈 |   |   |  |
| dynamic import 분리 | First Load JS / Hydration Time |   |   |  |
| chart/date/lodash 제거 | Total Bundle Size |   |   |  |
| Vercel 배포 후 로딩 시간 | TTFB / Start Render Time |   |   |  |