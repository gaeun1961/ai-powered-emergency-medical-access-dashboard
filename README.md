# 시도별 응급 의료 접근성 분석 대시보드 및 정책 시뮬레이터

## 개요

[emergency-policy-clustering-analysis](https://github.com/gaeun1961/emergency-policy-clustering-analysis)에서 진행한 데이터 분석 결과를 바탕으로 만든 웹 대시보드입니다. K-Means 클러스터링으로 도출된 대한민국 17개 시도의 응급 의료 취약성 유형을 시각화하고, 정책 시뮬레이션 기능을 제공합니다.

## 배경

기존 클러스터링 분석에서 17개 시도는 고령화율과 인구 10만 명당 응급 의료기관 접근성 지표(권역센터, 지역센터, 지역기관, 응급시설)를 기준으로 3가지 유형으로 분류되었습니다.

- **Cluster A (고령/시설중심형)**: 고령화 압력이 최우선 과제, 자원 효율화 정책 필요
- **Cluster B (중위/균형형)**: 모든 지표 중간 수준, 지역별 격차 해소에 집중
- **Cluster C (대도시/인구과밀형)**: 인구 과밀로 인한 절대적 자원 부족, 상위 응급센터 확충 시급

이 분석 결과(클러스터 중심점 등)를 정책 결정자와 일반 사용자가 직관적으로 확인할 수 있도록 대시보드 형태로 구현했습니다.

## 주요 기능

**AI 챗봇 (정책 버전 / 일반인 버전)**
클러스터 분석 결과를 기반으로 두 가지 버전의 AI 챗봇을 제공합니다.
- **정책 버전**: 정책 결정자를 대상으로, 소속 지역의 클러스터 유형에 맞는 구체적인 자원 배분 목표와 정책 방향을 안내
- **일반인 버전**: 일반 국민을 대상으로, 거주 지역의 응급 의료 접근성 특징에 맞춘 실생활 응급 대비책을 안내

## 데이터 출처

- 응급의료기관 현황
- 응급의료기관 외의 의료기관(응급의료시설) 현황
- 연령별 인구 현황(연간)

(원본 데이터 파일은 [분석 레포](https://github.com/gaeun1961/emergency-policy-clustering-analysis)에 포함)

## 담당 역할

이 프로젝트에서 데이터 분석(전처리, K-Means 클러스터링, PCA 시각화, 클러스터 유형 해석)을 담당했습니다. 대시보드 UI/UX 구현은 팀원이 맡아 진행했습니다.

## 기술 스택

- JavaScript
- (분석 단계: Python, pandas, scikit-learn — [분석 레포](https://github.com/gaeun1961/emergency-policy-clustering-analysis) 참고)

## 관련 레포

- [emergency-policy-clustering-analysis](https://github.com/gaeun1961/emergency-policy-clustering-analysis) — 원본 데이터 분석 및 클러스터링
