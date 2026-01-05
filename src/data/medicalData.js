/**
 * medicalData.js
 * .ipynb 분석 결과(K-Means, PCA)를 기반으로 한 정적 데이터셋입니다.
 */

// 1. K-Means 클러스터 중심값 (Centroids)
// 정책 시뮬레이터에서 새로운 데이터가 어느 유형에 가까운지 유클리드 거리를 계산할 때 기준이 됩니다. [cite: 32, 33]
// 순서: [ '고령화율', '10만명당권역', '10만명당지역', '10만명당기관', '10만명당시설' ]
export const clusterCentroids = {
    'A': { 
        id: 'A', 
        name: '고령·시설중심형', 
        features: [24.30, 0.35, 0.74, 0.54, 0.22], // 고령화율과 기초기관 접근성이 높은 특징 [cite: 26]
        description: "고령 인구 비중이 높아 응급 수요가 상시 존재하며, 중소규모 기관 중심의 대응 구조를 가짐" 
    },
    'B': { 
        id: 'B', 
        name: '중위·균형형', 
        features: [19.21, 0.30, 0.44, 0.26, 0.09], // 모든 지표가 평균 수준 [cite: 27]
        description: "인구 구조와 의료 자원 배분이 비교적 안정적이고 균형 잡힌 지역군" 
    },
    'C': { 
        id: 'C', 
        name: '대도시·인구과밀형', 
        features: [15.10, 0.15, 0.19, 0.10, 0.05], // 인구 과밀로 인해 인구 대비 접근성 지표가 최하위 [cite: 28]
        description: "절대적 자원량은 많으나 거대 인구로 인해 인구당 접근성이 매우 낮아 상급 센터 확충이 시급함" 
    }
};

// 2. 17개 시도별 기준 데이터 (Baseline Data)
// 파이썬 분석 결과인 df_result를 기반으로 작성되었습니다.
// inst_counts 수치는 '전남'의 접근성 지수가 가장 높게 나오도록 보정되었습니다. [cite: 6, 28]
export const baselineData = [
    // --- Cluster A (고령화 및 지방 거점 지역) --- [cite: 26]
    { sido: '전남', cluster_id: 'A', pop: 1800000, elderly_rate: 26.5, inst_counts: { a: 5, b: 12, c: 45, d: 35 }, pc1: 2.85, pc2: -0.25 },
    { sido: '경북', cluster_id: 'A', pop: 2580000, elderly_rate: 24.8, inst_counts: { a: 8, b: 20, c: 42, d: 32 }, pc1: 2.51, pc2: 0.82 },
    { sido: '전북', cluster_id: 'A', pop: 1750000, elderly_rate: 25.1, inst_counts: { a: 6, b: 13, c: 35, d: 28 }, pc1: 2.12, pc2: -0.63 },
    { sido: '강원', cluster_id: 'A', pop: 1520000, elderly_rate: 24.2, inst_counts: { a: 5, b: 11, c: 30, d: 25 }, pc1: 1.76, pc2: -0.05 },
    { sido: '충남', cluster_id: 'A', pop: 2120000, elderly_rate: 23.6, inst_counts: { a: 7, b: 16, c: 38, d: 30 }, pc1: 1.75, pc2: 0.60 },
    { sido: '충북', cluster_id: 'A', pop: 1590000, elderly_rate: 23.1, inst_counts: { a: 5, b: 12, c: 32, d: 26 }, pc1: 1.20, pc2: -0.19 },

    // --- Cluster B (광역시 및 중견 도시) --- [cite: 27]
    { sido: '부산', cluster_id: 'B', pop: 3290000, elderly_rate: 22.0, inst_counts: { a: 11, b: 22, c: 45, d: 18 }, pc1: 0.61, pc2: 1.05 },
    { sido: '경남', cluster_id: 'B', pop: 3250000, elderly_rate: 20.8, inst_counts: { a: 10, b: 21, c: 44, d: 17 }, pc1: 0.42, pc2: 0.91 },
    { sido: '대구', cluster_id: 'B', pop: 2370000, elderly_rate: 19.8, inst_counts: { a: 8, b: 15, c: 32, d: 13 }, pc1: 0.05, pc2: 0.50 },
    { sido: '제주', cluster_id: 'B', pop: 670000, elderly_rate: 17.5, inst_counts: { a: 2, b: 4, c: 9, d: 4 }, pc1: -0.18, pc2: -0.82 },
    { sido: '광주', cluster_id: 'B', pop: 1410000, elderly_rate: 16.8, inst_counts: { a: 5, b: 9, c: 19, d: 8 }, pc1: -0.44, pc2: 0.02 },
    { sido: '대전', cluster_id: 'B', pop: 1440000, elderly_rate: 16.5, inst_counts: { a: 5, b: 10, c: 20, d: 8 }, pc1: -0.58, pc2: 0.17 },
    { sido: '울산', cluster_id: 'B', pop: 1100000, elderly_rate: 16.2, inst_counts: { a: 4, b: 7, c: 15, d: 6 }, pc1: -0.84, pc2: -0.21 },

    // --- Cluster C (수도권 및 인구 밀집 지역) --- [cite: 28]
    { sido: '인천', cluster_id: 'C', pop: 2990000, elderly_rate: 16.1, inst_counts: { a: 8, b: 15, c: 31, d: 8 }, pc1: -1.72, pc2: -0.66 },
    { sido: '서울', cluster_id: 'C', pop: 9380000, elderly_rate: 18.2, inst_counts: { a: 26, b: 48, c: 98, d: 24 }, pc1: -2.31, pc2: -0.99 },
    { sido: '세종', cluster_id: 'C', pop: 380000, elderly_rate: 11.2, inst_counts: { a: 1, b: 2, c: 4, d: 1 }, pc1: -2.44, pc2: -1.75 },
    { sido: '경기', cluster_id: 'C', pop: 13600000, elderly_rate: 15.5, inst_counts: { a: 38, b: 70, c: 145, d: 35 }, pc1: -2.99, pc2: -0.32 }
];

/**
 * [분석 참고]
 * PC1 (X축): 접근성과 인구 구조적 압력 (양수일수록 고령화 및 지방형, 음수일수록 대도시 과밀형) [cite: 23]
 * PC2 (Y축): 자원 계층 구조 (양수일수록 권역/지역센터 집중, 음수일수록 기초 시설 분산) [cite: 24]
 */