<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>딸까학 AI클래스 가이드</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0A0A0F;
      --surface: #13131A;
      --surface-2: #1A1A24;
      --surface-3: #22222E;
      --glow-cyan: #00E5FF;
      --glow-purple: #B388FF;
      --glow-pink: #FF80AB;
      --glow-amber: #FFD740;
      --glow-green: #69F0AE;
      --text: #EEEEF2;
      --text-dim: #8888A0;
      --text-bright: #FFFFFF;
      --border: rgba(255,255,255,0.06);
      --radius: 16px;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Noto Sans KR', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Hero */
    .hero {
      position: relative;
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem 1.5rem;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -40%;
      left: -20%;
      width: 140%;
      height: 140%;
      background: 
        radial-gradient(ellipse 600px 400px at 30% 20%, rgba(0,229,255,0.12) 0%, transparent 70%),
        radial-gradient(ellipse 500px 500px at 70% 60%, rgba(179,136,255,0.1) 0%, transparent 70%),
        radial-gradient(ellipse 400px 300px at 50% 80%, rgba(255,128,171,0.08) 0%, transparent 70%);
      animation: heroGlow 8s ease-in-out infinite alternate;
    }

    @keyframes heroGlow {
      0% { transform: translate(0, 0) scale(1); }
      100% { transform: translate(-3%, 3%) scale(1.05); }
    }

    .hero-badge {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(0,229,255,0.08);
      border: 1px solid rgba(0,229,255,0.2);
      padding: 0.35rem 0.9rem;
      border-radius: 100px;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--glow-cyan);
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
    }

    .hero-badge .dot {
      width: 6px;
      height: 6px;
      background: var(--glow-cyan);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.7); }
    }

    .hero-title {
      position: relative;
      z-index: 1;
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, var(--text-bright) 0%, var(--glow-cyan) 50%, var(--glow-purple) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-sub {
      position: relative;
      z-index: 1;
      font-size: 1rem;
      color: var(--text-dim);
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .hero-camp {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.8rem;
      color: var(--text-dim);
    }

    .hero-camp .camp-theme {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--glow-amber);
    }

    .scroll-hint {
      position: relative;
      z-index: 1;
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-dim);
      font-size: 0.7rem;
      animation: bounce 2s ease-in-out infinite;
    }

    .scroll-hint .arrow {
      font-size: 1.2rem;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }

    /* Main */
    .main {
      padding: 0 1rem 6rem;
      max-width: 480px;
      margin: 0 auto;
    }

    /* Section */
    .section {
      margin-bottom: 2.5rem;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--glow-cyan);
      margin-bottom: 0.75rem;
    }

    .section-label .line {
      width: 24px;
      height: 1px;
      background: var(--glow-cyan);
      opacity: 0.5;
    }

    .section-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--text-bright);
      margin-bottom: 0.5rem;
    }

    .section-desc {
      font-size: 0.85rem;
      color: var(--text-dim);
      margin-bottom: 1.25rem;
    }

    /* Cards */
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      margin-bottom: 0.75rem;
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    }

    /* AI Tool Cards */
    .ai-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      margin-bottom: 0.75rem;
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease;
    }

    .ai-card:active {
      transform: scale(0.98);
    }

    .ai-card .tap-hint {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      margin-top: 0.875rem;
      padding: 0.5rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 8px;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--text-dim);
    }

    .chatgpt .tap-hint { color: #10A37F; }
    .claude .tap-hint { color: #D4A574; }
    .grok .tap-hint { color: var(--glow-cyan); }
    .nanobanana .tap-hint { color: var(--glow-pink); }
    .suno .tap-hint { color: var(--glow-amber); }

    .ai-card .glow-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
    }

    .ai-card.chatgpt .glow-bar { background: linear-gradient(90deg, #10A37F, #1ED9A4); }
    .ai-card.claude .glow-bar { background: linear-gradient(90deg, #D4A574, #E8C5A0); }
    .ai-card.grok .glow-bar { background: linear-gradient(90deg, var(--glow-cyan), var(--glow-purple)); }
    .ai-card.nanobanana .glow-bar { background: linear-gradient(90deg, var(--glow-pink), #FF4081); }
    .ai-card.suno .glow-bar { background: linear-gradient(90deg, var(--glow-amber), #FF6D00); }

    .ai-card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.875rem;
    }

    .ai-icon {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      flex-shrink: 0;
    }

    .chatgpt .ai-icon { background: rgba(16,163,127,0.15); }
    .claude .ai-icon { background: rgba(212,165,116,0.15); }
    .grok .ai-icon { background: rgba(0,229,255,0.1); }
    .nanobanana .ai-icon { background: rgba(255,128,171,0.12); }
    .suno .ai-icon { background: rgba(255,215,64,0.12); }

    .ai-name {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-bright);
    }

    .ai-tag {
      font-size: 0.7rem;
      color: var(--text-dim);
      margin-top: 0.1rem;
    }

    .ai-access {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.65rem;
      font-weight: 600;
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      background: rgba(255,255,255,0.04);
      color: var(--text-dim);
    }

    .ai-desc {
      font-size: 0.8rem;
      color: var(--text-dim);
      line-height: 1.6;
      margin-bottom: 0.875rem;
    }

    .ai-desc strong {
      color: var(--text);
    }

    .prompt-box {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.875rem;
      position: relative;
    }

    .prompt-label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .chatgpt .prompt-label { color: #10A37F; }
    .claude .prompt-label { color: #D4A574; }
    .grok .prompt-label { color: var(--glow-cyan); }
    .nanobanana .prompt-label { color: var(--glow-pink); }
    .suno .prompt-label { color: var(--glow-amber); }

    .prompt-text {
      font-size: 0.8rem;
      color: var(--text);
      line-height: 1.7;
      word-break: keep-all;
    }

    .prompt-text em {
      font-style: normal;
      color: var(--text-dim);
      font-size: 0.75rem;
    }

    /* Star badge for Grok */
    .star-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.2rem 0.55rem;
      border-radius: 6px;
      background: linear-gradient(135deg, rgba(0,229,255,0.15), rgba(179,136,255,0.15));
      color: var(--glow-cyan);
      border: 1px solid rgba(0,229,255,0.2);
      margin-left: 0.5rem;
    }

    /* Grok steps */
    .grok-steps {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 0.875rem;
    }

    .grok-step {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.625rem 0.75rem;
      background: var(--surface-2);
      border-radius: 10px;
      border: 1px solid var(--border);
    }

    .grok-step-num {
      width: 1.5rem;
      height: 1.5rem;
      background: linear-gradient(135deg, var(--glow-cyan), var(--glow-purple));
      color: var(--bg);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 800;
      flex-shrink: 0;
    }

    .grok-step-text {
      font-size: 0.8rem;
      color: var(--text);
    }

    .grok-step-arrow {
      text-align: center;
      color: var(--glow-cyan);
      font-size: 0.75rem;
      opacity: 0.5;
    }

    /* Timeline */
    .timeline {
      position: relative;
      padding-left: 1rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      bottom: 0.5rem;
      width: 2px;
      background: linear-gradient(to bottom, var(--glow-cyan), var(--glow-purple), var(--glow-pink));
      border-radius: 2px;
      opacity: 0.4;
    }

    .tl-item {
      position: relative;
      padding-left: 1.25rem;
      padding-bottom: 1.5rem;
    }

    .tl-item:last-child { padding-bottom: 0; }

    .tl-item::before {
      content: '';
      position: absolute;
      left: -1.25rem;
      top: 0.4rem;
      width: 8px;
      height: 8px;
      background: var(--glow-cyan);
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(0,229,255,0.4);
    }

    .tl-time {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--glow-cyan);
      margin-bottom: 0.15rem;
    }

    .tl-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--text-bright);
      margin-bottom: 0.15rem;
    }

    .tl-desc {
      font-size: 0.75rem;
      color: var(--text-dim);
    }

    /* Track selector */
    .track-guide {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .track-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      background: var(--surface-2);
      border-radius: 10px;
      border: 1px solid var(--border);
    }

    .track-emoji {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .track-info {
      flex: 1;
    }

    .track-info .label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-bright);
    }

    .track-info .tool {
      font-size: 0.7rem;
      color: var(--text-dim);
    }

    /* Exhibition */
    .exhibit-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .exhibit-item {
      padding: 0.875rem;
      background: var(--surface-2);
      border-radius: 12px;
      border: 1px solid var(--border);
      text-align: center;
    }

    .exhibit-item .emoji {
      font-size: 1.75rem;
      margin-bottom: 0.375rem;
    }

    .exhibit-item .name {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.15rem;
    }

    .exhibit-item .method {
      font-size: 0.65rem;
      color: var(--text-dim);
    }

    /* Tip box */
    .tip-box {
      background: linear-gradient(135deg, rgba(0,229,255,0.06), rgba(179,136,255,0.06));
      border: 1px solid rgba(0,229,255,0.12);
      border-radius: var(--radius);
      padding: 1rem 1.125rem;
      margin-top: 0.75rem;
    }

    .tip-box .tip-title {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--glow-cyan);
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .tip-box p {
      font-size: 0.8rem;
      color: var(--text-dim);
      line-height: 1.6;
    }

    .tip-box p strong {
      color: var(--text);
    }

    /* Theme badge */
    .theme-box {
      text-align: center;
      padding: 1.5rem 1rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      position: relative;
      overflow: hidden;
    }

    .theme-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(255,215,64,0.06) 0%, transparent 70%);
    }

    .theme-box .on {
      position: relative;
      font-size: 1.75rem;
      font-weight: 900;
      background: linear-gradient(135deg, var(--glow-amber), #FF6D00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.375rem;
    }

    .theme-box .sub {
      position: relative;
      font-size: 0.85rem;
      color: var(--text-dim);
      line-height: 1.5;
    }

    .theme-box .sub strong {
      color: var(--glow-amber);
    }

    /* Warning box */
    .warn-box {
      background: rgba(255,215,64,0.06);
      border: 1px solid rgba(255,215,64,0.15);
      border-radius: var(--radius);
      padding: 1rem 1.125rem;
    }

    .warn-box .warn-title {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--glow-amber);
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .warn-box p {
      font-size: 0.8rem;
      color: var(--text-dim);
      line-height: 1.6;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding: 2rem 1rem;
      border-top: 1px solid var(--border);
    }

    .footer p {
      font-size: 0.7rem;
      color: var(--text-dim);
    }

    .footer .ministry {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 0.25rem;
    }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .section {
      animation: fadeUp 0.6s ease-out both;
    }

    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border), transparent);
      margin: 2rem 0;
    }
  </style>
</head>
<body>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-badge">
      <span class="dot"></span>
      겨울캠프 2026 딸까학 AI클래스
    </div>
    <h1 class="hero-title">딸까학<br>AI클래스</h1>
    <p class="hero-sub">딸까학 AI클래스에 오신 여러분을 환영합니다!</p>
    <div class="hero-camp">
      <span class="camp-theme">"여디디야 ON!"</span>
      <span>새 숨결로 다시 시작하는 여디디야</span>
    </div>
    <div class="scroll-hint">
      <span>아래로 스크롤</span>
      <span class="arrow">↓</span>
    </div>
  </section>

  <!-- Main -->
  <main class="main">

    <!-- 타임테이블 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>TIMETABLE</div>
      <h2 class="section-title">진행 순서</h2>
      <p class="section-desc">90분 동안 AI를 배우고, 직접 작품을 만들어봐요.</p>

      <div class="card">
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-time">0 ~ 25분</div>
            <div class="tl-title">AI 5종 소개 & 시연</div>
            <div class="tl-desc">각 AI의 특징과 라이브 데모</div>
          </div>
          <div class="tl-item">
            <div class="tl-time">25 ~ 70분</div>
            <div class="tl-title">실습: 내 폰으로 작품 만들기</div>
            <div class="tl-desc">5개 트랙 중 골라서 자유 제작</div>
          </div>
          <div class="tl-item">
            <div class="tl-time">70 ~ 85분</div>
            <div class="tl-title">발표 & 공유</div>
            <div class="tl-desc">내 작품 소개 + 한마디</div>
          </div>
          <div class="tl-item">
            <div class="tl-time">85 ~ 90분</div>
            <div class="tl-title">마무리 & 전시 안내</div>
            <div class="tl-desc">내일 청년광장 전시회 안내</div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- 시작 전 체크 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>NOTICE</div>
      <h2 class="section-title">시작 전 체크</h2>

      <div class="card">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <span style="font-size: 1.1rem;">✅</span>
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-bright);">구글 계정 준비 & 미리 로그인!</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">실습 전에 미리 각 사이트에 로그인해두면 시간이 절약돼요. ChatGPT는 구글/애플/MS 계정 모두 가능!</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <span style="font-size: 1.1rem;">✅</span>
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-bright);">Wi-Fi 연결</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">현장에서 Wi-Fi 이름과 비밀번호를 안내해드릴게요!</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <span style="font-size: 1.1rem;">✅</span>
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-bright);">무료 횟수 제한 주의</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">Grok · SUNO · ChatGPT(이미지) 모두 하루 생성 횟수가 제한돼요. 작품 1~2개에 집중!</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <span style="font-size: 1.1rem;">✅</span>
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-bright);">배터리 충전</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">90분 동안 폰을 계속 쓰니까 충전 넉넉히! 보조배터리 추천 🔋</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- AI 도구 소개 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>AI TOOLS</div>
      <h2 class="section-title">오늘 만날 AI 5종</h2>
      <p class="section-desc">전부 무료! 구글 계정으로 대부분 로그인 가능해요.</p>

      <a href="https://chatgpt.com" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="ai-card chatgpt">
        <div class="glow-bar"></div>
        <div class="ai-card-header">
          <div class="ai-icon">💬</div>
          <div>
            <div style="display: flex; align-items: center;">
              <div class="ai-name">ChatGPT</div>
              <span class="star-badge" style="background: linear-gradient(135deg, rgba(16,163,127,0.2), rgba(30,217,164,0.2)); color: #10A37F; border-color: rgba(16,163,127,0.3);">🖼️ 글 + 이미지</span>
            </div>
            <div class="ai-tag">글쓰기 + 이미지 포스터 제작!</div>
          </div>
        </div>
        <div class="ai-desc">
          시, 가사, 편지를 쓰고 → <strong>AI 이미지 위에 글을 올린 포스터 작품</strong>까지! 글과 그림을 한 번에 만들 수 있어요.
        </div>
        <div class="ai-access">📱 chatgpt.com → 구글/애플/MS 계정 로그인</div>

        <div class="grok-steps" style="margin-top: 0.75rem;">
          <div class="grok-step" style="border-left: 2px solid #10A37F;">
            <div class="grok-step-num" style="background: linear-gradient(135deg, #10A37F, #1ED9A4);">1</div>
            <div class="grok-step-text">ChatGPT에게 <strong>글 작성</strong> 요청 (시/가사/편지)</div>
          </div>
          <div class="grok-step-arrow" style="color: #10A37F;">↓</div>
          <div class="grok-step" style="border-left: 2px solid #10A37F;">
            <div class="grok-step-num" style="background: linear-gradient(135deg, #10A37F, #1ED9A4);">2</div>
            <div class="grok-step-text">마음에 드는 글이 완성되면</div>
          </div>
          <div class="grok-step-arrow" style="color: #10A37F;">↓</div>
          <div class="grok-step" style="border-left: 2px solid #10A37F;">
            <div class="grok-step-num" style="background: linear-gradient(135deg, #10A37F, #1ED9A4);">3</div>
            <div class="grok-step-text"><strong>"이 글을 이미지 포스터로 만들어줘"</strong> 요청</div>
          </div>
          <div class="grok-step-arrow" style="color: #10A37F;">↓</div>
          <div class="grok-step" style="border-left: 2px solid #10A37F;">
            <div class="grok-step-num" style="background: linear-gradient(135deg, #10A37F, #1ED9A4);">4</div>
            <div class="grok-step-text">🎉 <strong>글 + 배경 이미지 합쳐진 포스터</strong> 완성!</div>
          </div>
        </div>

        <div class="prompt-box">
          <div class="prompt-label">📝 STEP 1 — 글쓰기 프롬프트</div>
          <div class="prompt-text">
            "힘든 시간을 지나 다시 일어서는 청년의 마음을 담은 시를 써줘. 따뜻하고 희망적인 톤으로, 6줄 이내로 짧게"
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem;">
          <div class="prompt-label" style="color: #1ED9A4;">🖼️ STEP 2 — 이미지 포스터 프롬프트</div>
          <div class="prompt-text">
            "위 시를 감성적인 포스터 이미지로 만들어줘. 새벽 하늘에 빛이 퍼지는 배경 위에 시 전문을 하얀 손글씨 느낌으로 넣어줘. 세로형 포스터로 만들어줘"
            <br><br>
            <em>💡 ChatGPT가 DALL-E로 이미지+글씨를 합쳐서 만들어줘요!</em>
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem; background: var(--surface-3);">
          <div class="prompt-label" style="color: #10A37F;">🔄 다양한 스타일 요청</div>
          <div class="prompt-text" style="font-size: 0.75rem;">
            • "수채화 느낌 배경으로 다시 만들어줘"<br>
            • "밤하늘 별빛 배경에 골드 글씨로 바꿔줘"<br>
            • "미니멀한 느낌에 가운데 정렬로 다시 만들어줘"<br>
            • "글씨를 더 크게 해서 다시 그려줘"
          </div>
        </div>

        <div class="tip-box" style="margin-top: 0.75rem; background: rgba(16,163,127,0.06); border-color: rgba(16,163,127,0.15);">
          <div class="tip-title" style="color: #10A37F;">⚠️ 이미지 생성 팁</div>
          <p>무료 계정은 이미지 생성 횟수가 제한돼요.<br>
          <strong>글을 먼저 완성한 후</strong> 이미지를 만드세요!<br>
          글씨가 깨지면 <strong>"글씨를 정확하게 다시 써줘"</strong>라고 요청하세요.</p>
        </div>

        <div class="tap-hint">👆 탭하면 ChatGPT로 이동</div>
      </div>
      </a>

      <a href="https://claude.ai" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="ai-card claude">
        <div class="glow-bar"></div>
        <div class="ai-card-header">
          <div class="ai-icon">📄</div>
          <div>
            <div style="display: flex; align-items: center;">
              <div class="ai-name">Claude</div>
              <span class="star-badge" style="background: linear-gradient(135deg, rgba(212,165,116,0.2), rgba(232,197,160,0.2)); color: #D4A574; border-color: rgba(212,165,116,0.3);">✨ 2단계</span>
            </div>
            <div class="ai-tag">글쓰기 + 웹페이지 제작까지!</div>
          </div>
        </div>
        <div class="ai-desc">
          기도문, 감사편지, 에세이를 쓰고 → <strong>예쁜 웹페이지로 만들기까지!</strong> 클로드의 Artifacts 기능으로 바로 시각적인 작품이 완성됩니다.
        </div>
        <div class="ai-access">📱 claude.ai → 구글 로그인</div>

        <div class="grok-steps" style="margin-top: 0.75rem;">
          <div class="grok-step" style="border-left: 2px solid #D4A574;">
            <div class="grok-step-num" style="background: linear-gradient(135deg, #D4A574, #E8C5A0);">1</div>
            <div class="grok-step-text"><strong>글쓰기</strong> — 기도문/편지/시 생성</div>
          </div>
          <div class="grok-step-arrow" style="color: #D4A574;">↓</div>
          <div class="grok-step" style="border-left: 2px solid #D4A574;">
            <div class="grok-step-num" style="background: linear-gradient(135deg, #D4A574, #E8C5A0);">2</div>
            <div class="grok-step-text"><strong>웹페이지로 변환</strong> — 예쁜 디자인 완성!</div>
          </div>
        </div>

        <div class="prompt-box">
          <div class="prompt-label">📝 STEP 1 — 글쓰기 프롬프트</div>
          <div class="prompt-text">
            "2026년을 시작하는 청년에게 보내는 응원의 시를 써줘. 새로운 시작에 대한 설렘과 하나님의 인도하심을 담아서, 따뜻한 톤으로 8줄 정도로"
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem;">
          <div class="prompt-label" style="color: #E8C5A0;">🎨 STEP 2 — 웹페이지 변환 프롬프트</div>
          <div class="prompt-text">
            "위에서 만든 글을 예쁜 모바일 웹페이지로 만들어줘. 어두운 배경에 따뜻한 조명 느낌으로, 글씨가 한 줄씩 부드럽게 나타나는 애니메이션을 넣어줘. 상단에 제목과 작성자 이름도 넣어줘"
            <br><br>
            <em>💡 클로드가 오른쪽 미리보기 창에서 바로 결과를 보여줘요!</em>
          </div>
        </div>

        <div class="tip-box" style="margin-top: 0.75rem; background: rgba(212,165,116,0.06); border-color: rgba(212,165,116,0.15);">
          <div class="tip-title" style="color: #D4A574;">💡 웹페이지 커스텀 팁</div>
          <p>마음에 안 들면 이렇게 말해보세요:<br>
          <strong>"배경색을 바꿔줘"</strong> / <strong>"글꼴을 더 크게"</strong> / <strong>"꽃잎이 떨어지는 효과 추가해줘"</strong><br>
          대화하듯 수정 요청하면 바로 반영됩니다!</p>
        </div>

        <div class="tap-hint">👆 탭하면 Claude로 이동</div>
      </div>
      </a>

      <a href="https://grok.com" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="ai-card grok">
        <div class="glow-bar"></div>
        <div class="ai-card-header">
          <div class="ai-icon">🎬</div>
          <div>
            <div style="display: flex; align-items: center;">
              <div class="ai-name">Grok</div>
              <span class="star-badge">⭐ 하이라이트</span>
            </div>
            <div class="ai-tag">이미지 + 영상까지 한번에!</div>
          </div>
        </div>
        <div class="ai-desc">
          이미지를 만들고 <strong>바로 6초 영상으로 변환</strong>까지! 소리도 자동 생성됩니다. 오늘의 핵심 도구.
        </div>
        <div class="ai-access">📱 grok.com → 구글 로그인</div>

        <div class="grok-steps" style="margin-top: 0.75rem;">
          <div class="grok-step">
            <div class="grok-step-num">1</div>
            <div class="grok-step-text">grok.com 접속 → <strong>채팅창</strong>에 이미지 프롬프트 입력</div>
          </div>
          <div class="grok-step-arrow">↓</div>
          <div class="grok-step">
            <div class="grok-step-num">2</div>
            <div class="grok-step-text">채팅으로 <strong>이미지 생성</strong> 완료</div>
          </div>
          <div class="grok-step-arrow">↓</div>
          <div class="grok-step">
            <div class="grok-step-num">3</div>
            <div class="grok-step-text">생성된 이미지에서 <strong>🎬 동영상 버튼</strong> 클릭</div>
          </div>
          <div class="grok-step-arrow">↓</div>
          <div class="grok-step">
            <div class="grok-step-num">4</div>
            <div class="grok-step-text">🎉 <strong>6초 영상 + 소리</strong> 완성!</div>
          </div>
        </div>

        <div class="prompt-box">
          <div class="prompt-label">🖼️ 채팅에 입력할 이미지 프롬프트</div>
          <div class="prompt-text">
            "칠흑 같은 어둠 속 낡은 나무 책상 위에 하나의 촛불이 놓여 있다. 촛불 주변으로 따뜻한 주황빛이 퍼지며, 책상 위에 펼쳐진 성경책 위로 빛이 부드럽게 내려앉는다. 영화 같은 구도, 클로즈업, 따뜻한 색감"
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem;">
          <div class="prompt-label" style="color: var(--glow-purple);">🎬 영상 변환 프롬프트</div>
          <div class="prompt-text">
            "촛불이 천천히 흔들리며 빛이 점점 밝아진다. 성경책 페이지가 바람에 살짝 넘어가고, 촛불의 따뜻한 빛이 어둠을 밀어내듯 서서히 퍼져나간다"
            <br><br>
            <em>💡 이미지가 생성되면 → 이미지 아래 🎬 동영상 버튼 → 위 프롬프트 입력!</em>
          </div>
        </div>
        <div class="tap-hint">👆 탭하면 Grok으로 이동</div>
      </div>
      </a>

      <a href="https://gemini.google.com" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="ai-card nanobanana">
        <div class="glow-bar"></div>
        <div class="ai-card-header">
          <div class="ai-icon">🎨</div>
          <div>
            <div style="display: flex; align-items: center;">
              <div class="ai-name">제미나이 + 나노바나나</div>
              <span class="star-badge" style="background: linear-gradient(135deg, rgba(255,128,171,0.2), rgba(255,64,129,0.2)); color: var(--glow-pink); border-color: rgba(255,128,171,0.3);">📺 썸네일</span>
            </div>
            <div class="ai-tag">유튜브 분석 + 썸네일 제작!</div>
          </div>
        </div>
        <div class="ai-desc">
          좋아하는 유튜브 채널을 제미나이로 <strong>분석</strong>하고, 나노바나나로 <strong>나만의 유튜브 썸네일</strong>을 만들어요!
        </div>
        <div class="ai-access">📱 gemini.google.com → 구글 로그인</div>

        <div class="grok-steps" style="margin-top: 0.75rem;">
          <div class="grok-step" style="border-left: 2px solid var(--glow-pink);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-pink), #FF4081);">1</div>
            <div class="grok-step-text">좋아하는 <strong>유튜브 채널 링크</strong>를 복사</div>
          </div>
          <div class="grok-step-arrow" style="color: var(--glow-pink);">↓</div>
          <div class="grok-step" style="border-left: 2px solid var(--glow-pink);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-pink), #FF4081);">2</div>
            <div class="grok-step-text">제미나이에게 <strong>채널 분석</strong> 요청</div>
          </div>
          <div class="grok-step-arrow" style="color: var(--glow-pink);">↓</div>
          <div class="grok-step" style="border-left: 2px solid var(--glow-pink);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-pink), #FF4081);">3</div>
            <div class="grok-step-text">분석 결과 기반으로 <strong>썸네일 이미지 생성</strong> 요청</div>
          </div>
          <div class="grok-step-arrow" style="color: var(--glow-pink);">↓</div>
          <div class="grok-step" style="border-left: 2px solid var(--glow-pink);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-pink), #FF4081);">4</div>
            <div class="grok-step-text">🎉 <strong>나만의 유튜브 썸네일</strong> 완성!</div>
          </div>
        </div>

        <div class="prompt-box">
          <div class="prompt-label">🔍 STEP 1 — 유튜브 채널 분석 프롬프트</div>
          <div class="prompt-text">
            "이 유튜브 채널을 분석해줘: [유튜브 채널 링크 붙여넣기]<br><br>
            이 채널의 콘텐츠 주제, 썸네일 스타일 특징, 색감, 텍스트 배치 방식을 정리해줘"
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem;">
          <div class="prompt-label" style="color: #FF4081;">🎨 STEP 2 — 썸네일 제작 프롬프트</div>
          <div class="prompt-text">
            "위 분석을 바탕으로 이 채널 스타일의 유튜브 썸네일을 만들어줘. 주제는 '여디디야 청년부 겨울캠프 브이로그'. 16:9 비율, 눈에 띄는 색감, 큰 텍스트 배치로 만들어줘"
            <br><br>
            <em>💡 제미나이가 나노바나나 엔진으로 바로 이미지를 그려줘요!</em>
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem; background: var(--surface-3);">
          <div class="prompt-label" style="color: var(--glow-pink);">🔄 다양한 활용 예시</div>
          <div class="prompt-text" style="font-size: 0.75rem;">
            • "내가 먹방 유튜버라면 어떤 썸네일이 좋을까?"<br>
            • "이 채널 느낌으로 '주일예배 브이로그' 썸네일 만들어줘"<br>
            • "텍스트를 더 크게 / 색감을 더 화려하게 바꿔줘"<br>
            • "같은 스타일로 다른 주제의 썸네일도 만들어줘"
          </div>
        </div>

        <div class="tip-box" style="margin-top: 0.75rem; background: rgba(255,128,171,0.06); border-color: rgba(255,128,171,0.15);">
          <div class="tip-title" style="color: var(--glow-pink);">💡 유튜브 링크 복사 방법</div>
          <p>유튜브 앱 → 좋아하는 채널 → <strong>공유 버튼</strong> → 링크 복사<br>
          영상 링크도, 채널 홈 링크도 모두 분석 가능해요!</p>
        </div>

        <div class="tap-hint">👆 탭하면 제미나이로 이동</div>
      </div>
      </a>

      <a href="https://suno.com" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="ai-card suno">
        <div class="glow-bar"></div>
        <div class="ai-card-header">
          <div class="ai-icon">🎵</div>
          <div>
            <div style="display: flex; align-items: center;">
              <div class="ai-name">SUNO</div>
              <span class="star-badge" style="background: linear-gradient(135deg, rgba(255,193,7,0.2), rgba(255,160,0,0.2)); color: var(--glow-amber); border-color: rgba(255,193,7,0.3);">🎤 가사 → 노래</span>
            </div>
            <div class="ai-tag">AI 가사 + 음악 제작!</div>
          </div>
        </div>
        <div class="ai-desc">
          다른 AI에서 먼저 <strong>가사를 만들고</strong> → SUNO에 붙여넣으면 <strong>진짜 노래가 완성</strong>돼요! 찬양, 응원가, 테마송 뭐든 OK!
        </div>
        <div class="ai-access">📱 suno.com → 구글 로그인</div>

        <div class="grok-steps" style="margin-top: 0.75rem;">
          <div class="grok-step" style="border-left: 2px solid var(--glow-amber);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-amber), #FFA000);">1</div>
            <div class="grok-step-text">ChatGPT / Claude / 제미나이에서 <strong>가사 작성</strong></div>
          </div>
          <div class="grok-step-arrow" style="color: var(--glow-amber);">↓</div>
          <div class="grok-step" style="border-left: 2px solid var(--glow-amber);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-amber), #FFA000);">2</div>
            <div class="grok-step-text">완성된 가사를 <strong>복사</strong></div>
          </div>
          <div class="grok-step-arrow" style="color: var(--glow-amber);">↓</div>
          <div class="grok-step" style="border-left: 2px solid var(--glow-amber);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-amber), #FFA000);">3</div>
            <div class="grok-step-text">SUNO에서 <strong>"Custom"</strong> 모드 → 가사 붙여넣기</div>
          </div>
          <div class="grok-step-arrow" style="color: var(--glow-amber);">↓</div>
          <div class="grok-step" style="border-left: 2px solid var(--glow-amber);">
            <div class="grok-step-num" style="background: linear-gradient(135deg, var(--glow-amber), #FFA000);">4</div>
            <div class="grok-step-text">장르 선택 → <strong>Create</strong> → 🎉 노래 완성!</div>
          </div>
        </div>

        <div class="prompt-box">
          <div class="prompt-label">📝 STEP 1 — 가사 작성 프롬프트 (ChatGPT/Claude/제미나이)</div>
          <div class="prompt-text">
            "여디디야 청년부 테마송 가사를 써줘. '다시 시작하는 우리'라는 주제로, 밝고 희망적인 느낌으로. 1절 + 후렴구로 구성해줘. SUNO AI에서 음악으로 만들 거야"
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem;">
          <div class="prompt-label" style="color: #FFA000;">🎵 STEP 2 — SUNO 설정</div>
          <div class="prompt-text">
            ① SUNO 접속 → <strong>Create</strong> 클릭<br>
            ② <strong>"Custom"</strong> 토글 ON<br>
            ③ <strong>Lyrics</strong> 칸에 가사 붙여넣기<br>
            ④ <strong>Style of Music</strong>에 장르 입력<br>
            <em>(예: K-pop ballad, worship, acoustic pop, gospel)</em><br>
            ⑤ <strong>Create ♪</strong> 버튼 → 30초 후 노래 완성!
          </div>
        </div>
        <div class="prompt-box" style="margin-top: 0.5rem; background: var(--surface-3);">
          <div class="prompt-label" style="color: var(--glow-amber);">🎸 장르 추천</div>
          <div class="prompt-text" style="font-size: 0.75rem;">
            • <strong>찬양</strong> → worship, gospel, CCM<br>
            • <strong>발라드</strong> → K-pop ballad, acoustic ballad<br>
            • <strong>신나는 곡</strong> → K-pop, dance pop, upbeat pop<br>
            • <strong>잔잔한 곡</strong> → acoustic, lo-fi, indie folk
          </div>
        </div>

        <div class="tip-box" style="margin-top: 0.75rem; background: rgba(255,193,7,0.06); border-color: rgba(255,193,7,0.15);">
          <div class="tip-title" style="color: var(--glow-amber);">⚠️ SUNO 무료 사용 팁</div>
          <p>무료 계정은 하루 <strong>약 5곡</strong> 생성 가능해요.<br>
          가사를 <strong>먼저 완벽하게 완성</strong>한 후 SUNO에 넣으세요!<br>
          마음에 안 들면 같은 가사로 장르만 바꿔서 재생성!</p>
        </div>

        <div class="tap-hint">👆 탭하면 SUNO로 이동</div>
      </div>
      </a>
    </section>

    <div class="divider"></div>

    <!-- 보너스 AI 소개 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>BONUS</div>
      <h2 class="section-title">이런 AI도 있어요!</h2>
      <p class="section-desc">오늘 실습은 안 하지만, 알아두면 좋은 AI 도구들 🔮</p>

      <a href="https://notebooklm.google.com" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="card" style="border: 1px solid rgba(0,229,255,0.15); background: linear-gradient(135deg, var(--surface-2), rgba(0,229,255,0.03));">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <div style="width: 2.75rem; height: 2.75rem; background: rgba(239,83,80,0.12); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">🎙️</div>
          <div>
            <div style="font-size: 1rem; font-weight: 800; color: var(--text-bright);">NotebookLM</div>
            <div style="font-size: 0.7rem; color: var(--text-dim);">notebooklm.google.com</div>
          </div>
        </div>
        <div style="font-size: 0.813rem; color: var(--text); margin-bottom: 0.75rem;">
          검색어를 입력하면 관련 <strong>뉴스 기사, 문서, 유튜브 링크를 알아서 모아주고</strong> → 이를 바탕으로 <strong>AI가 팟캐스트 형태로 요약</strong>해줘요! 두 명의 진행자가 대화하듯 설명해주는 오디오가 자동 생성됩니다.
        </div>
        <div style="background: var(--surface-3); border-radius: 8px; padding: 0.75rem; font-size: 0.75rem;">
          <div style="color: #EF5350; font-weight: 700; margin-bottom: 0.375rem;">💡 이렇게 쓸 수 있어요</div>
          <span style="color: var(--text-dim);">
            • 관심 있는 뉴스 기사 링크 → 팟캐스트로 듣기<br>
            • 성경 본문 넣기 → 대화형 성경 해설 생성<br>
            • 수업 자료 PDF → 쉬운 요약 오디오
          </span>
        </div>
        <div style="text-align: right; margin-top: 0.5rem; font-size: 0.7rem; color: #EF5350;">👆 탭하면 NotebookLM으로 이동</div>
      </div>
      </a>

      <a href="https://labs.google/fx/ko/tools/flow" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="card" style="border: 1px solid rgba(179,136,255,0.15); background: linear-gradient(135deg, var(--surface-2), rgba(179,136,255,0.03));">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <div style="width: 2.75rem; height: 2.75rem; background: rgba(179,136,255,0.12); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">🎬</div>
          <div>
            <div style="font-size: 1rem; font-weight: 800; color: var(--text-bright);">Flow</div>
            <div style="font-size: 0.7rem; color: var(--text-dim);">labs.google/fx/ko/tools/flow</div>
          </div>
        </div>
        <div style="font-size: 0.813rem; color: var(--text); margin-bottom: 0.75rem;">
          이미지 한 장을 넣으면 → <strong>실사 느낌의 영상으로 변환</strong>해줘요! AI 이미지나 사진을 살아 움직이는 영상으로 만들 수 있습니다.
        </div>
        <div style="background: var(--surface-3); border-radius: 8px; padding: 0.75rem; font-size: 0.75rem;">
          <div style="color: var(--glow-purple); font-weight: 700; margin-bottom: 0.375rem;">💡 이렇게 쓸 수 있어요</div>
          <span style="color: var(--text-dim);">
            • 제미나이/Grok으로 만든 이미지 → 실사 영상<br>
            • 풍경 사진 → 바람 불고 물 흐르는 영상<br>
            • 인물 이미지 → 자연스러운 움직임 추가
          </span>
        </div>
        <div style="text-align: right; margin-top: 0.5rem; font-size: 0.7rem; color: var(--glow-purple);">👆 탭하면 Flow로 이동</div>
      </div>
      </a>

      <a href="https://leonardo.ai" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">
      <div class="card" style="border: 1px solid rgba(255,193,7,0.15); background: linear-gradient(135deg, var(--surface-2), rgba(255,193,7,0.03));">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <div style="width: 2.75rem; height: 2.75rem; background: rgba(255,193,7,0.12); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">🖌️</div>
          <div>
            <div style="font-size: 1rem; font-weight: 800; color: var(--text-bright);">Leonardo AI</div>
            <div style="font-size: 0.7rem; color: var(--text-dim);">leonardo.ai</div>
          </div>
        </div>
        <div style="font-size: 0.813rem; color: var(--text); margin-bottom: 0.75rem;">
          전문가 수준의 <strong>고퀄리티 이미지 생성</strong> AI! 다양한 스타일 모델을 선택할 수 있고, 세밀한 조절이 가능해요.
        </div>
        <div style="background: var(--surface-3); border-radius: 8px; padding: 0.75rem; font-size: 0.75rem;">
          <div style="color: var(--glow-amber); font-weight: 700; margin-bottom: 0.375rem;">💡 이렇게 쓸 수 있어요</div>
          <span style="color: var(--text-dim);">
            • 포스터, 앨범 커버 디자인<br>
            • 실사 / 일러스트 / 3D 등 다양한 스타일<br>
            • 교회 행사 홍보물 이미지 제작
          </span>
        </div>
        <div style="text-align: right; margin-top: 0.5rem; font-size: 0.7rem; color: var(--glow-amber);">👆 탭하면 Leonardo AI로 이동</div>
      </div>
      </a>

      <div class="tip-box" style="margin-top: 0.5rem;">
        <div class="tip-title">🔑 오늘은 소개만!</div>
        <p>위 3가지는 실습 시간에 다루지 않지만,<br>
        <strong>나중에 혼자서도 도전해볼 수 있어요!</strong><br>
        모두 무료 버전이 있으니 궁금하면 검색해보세요 🔍</p>
      </div>
    </section>

    <div class="divider"></div>

    <!-- 실습 안내 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>HANDS-ON</div>
      <h2 class="section-title">뭘 만들까?</h2>
      <p class="section-desc">아래 5개 트랙 중 하고 싶은 것을 골라보세요!</p>

      <div class="track-guide">
        <div class="track-row">
          <div class="track-emoji">✍️</div>
          <div class="track-info">
            <div class="label">시/가사 → 이미지 포스터</div>
            <div class="tool">ChatGPT 사용 (글 + DALL-E 이미지)</div>
          </div>
        </div>
        <div class="track-row">
          <div class="track-emoji">📄</div>
          <div class="track-info">
            <div class="label">기도문/편지 → 웹페이지</div>
            <div class="tool">Claude 사용 (글 + Artifacts)</div>
          </div>
        </div>
        <div class="track-row">
          <div class="track-emoji">🎨</div>
          <div class="track-info">
            <div class="label">유튜브 분석 → 썸네일 제작</div>
            <div class="tool">제미나이(나노바나나) 사용</div>
          </div>
        </div>
        <div class="track-row">
          <div class="track-emoji">🎬</div>
          <div class="track-info">
            <div class="label">이미지 → 영상 만들기</div>
            <div class="tool">Grok 사용</div>
          </div>
        </div>
        <div class="track-row">
          <div class="track-emoji">🎵</div>
          <div class="track-info">
            <div class="label">AI 가사 → 나만의 노래</div>
            <div class="tool">ChatGPT/Claude + SUNO 사용</div>
          </div>
        </div>
      </div>

      <div class="theme-box" style="margin-top: 1rem;">
        <div class="on">여디디야 ON!</div>
        <div class="sub">
          <strong>"나에게 다시 켜진 순간"</strong>을<br>
          AI로 자유롭게 표현해보세요!<br>
          <span style="font-size: 0.75rem; color: var(--text-dim);">자유 주제도 OK 🙆</span>
        </div>
      </div>

      <div class="tip-box">
        <div class="tip-title">💡 프롬프트 꿀팁</div>
        <p><strong>구체적으로 쓸수록 결과가 좋아요!</strong><br>
        "시 써줘" ❌<br>
        "20대 청년이 힘든 시기를 지나고 다시 일어서는 내용의 시를 따뜻한 톤으로 8줄 정도로 써줘" ⭕</p>
      </div>
    </section>

    <div class="divider"></div>

    <!-- AI 조합 팁 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>PRO TIP</div>
      <h2 class="section-title">AI 조합의 기술 🔗</h2>
      <p class="section-desc">2개 이상의 AI를 연결하면 더 멋진 작품이!</p>

      <div class="card" style="border: 1px solid rgba(0,229,255,0.2); background: linear-gradient(135deg, var(--surface-2), rgba(0,229,255,0.04));">
        <div style="display: flex; flex-direction: column; gap: 0.875rem;">
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <div style="font-size: 1.25rem; flex-shrink: 0;">🔗</div>
            <div>
              <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-cyan);">시 → 포스터 → 영상</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">ChatGPT로 시 쓰기 → 이미지 포스터 → Grok에 포스터 업로드 → 영상으로!</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <div style="font-size: 1.25rem; flex-shrink: 0;">🔗</div>
            <div>
              <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-purple);">가사 → 노래 → 뮤직비디오</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">Claude로 가사 → SUNO로 노래 → Grok으로 앨범 커버 영상!</div>
            </div>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.6rem;">
            <div style="font-size: 1.25rem; flex-shrink: 0;">🔗</div>
            <div>
              <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-pink);">기도문 → 웹페이지 + 배경음악</div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">Claude로 기도문 + 웹페이지 → SUNO로 잔잔한 배경음악!</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- 전시회 안내 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>EXHIBITION</div>
      <h2 class="section-title">내일 청년광장 전시회</h2>
      <p class="section-desc">여러분의 작품이 내일 전시됩니다!</p>

      <div class="card">
        <div style="text-align: center; margin-bottom: 1rem;">
          <div style="font-size: 0.7rem; color: var(--glow-amber); font-weight: 700; margin-bottom: 0.25rem;">2/22 (주일)</div>
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-bright);">오후 1시 · 청년광장</div>
        </div>

        <div class="exhibit-grid">
          <div class="exhibit-item">
            <div class="emoji">🖼️</div>
            <div class="name">이미지 포스터</div>
            <div class="method">이미지 저장 → 카톡</div>
          </div>
          <div class="exhibit-item">
            <div class="emoji">🌐</div>
            <div class="name">웹페이지</div>
            <div class="method">링크 공유 → 카톡</div>
          </div>
          <div class="exhibit-item">
            <div class="emoji">🎨</div>
            <div class="name">유튜브 썸네일</div>
            <div class="method">이미지 저장 → 카톡</div>
          </div>
          <div class="exhibit-item">
            <div class="emoji">🎬</div>
            <div class="name">영상</div>
            <div class="method">영상 파일 → 카톡</div>
          </div>
          <div class="exhibit-item" style="grid-column: 1 / -1;">
            <div class="emoji">🎵</div>
            <div class="name">음악</div>
            <div class="method">공유 링크 → 카톡</div>
          </div>
        </div>
      </div>

      <div class="warn-box" style="margin-top: 0.75rem;">
        <div class="warn-title">⚠️ 작품 제출 안내</div>
        <p>클래스 끝나면 결과물을 <strong>카톡으로 보내주세요!</strong><br>
        모아서 내일 전시회에 예쁘게 전시할게요 🎪</p>
      </div>
    </section>

    <div class="divider"></div>

    <!-- 트러블슈팅 -->
    <section class="section">
      <div class="section-label"><span class="line"></span>HELP</div>
      <h2 class="section-title">안 될 때는? 🆘</h2>

      <div class="card">
        <div style="display: flex; flex-direction: column; gap: 0.875rem;">
          <div>
            <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-amber); margin-bottom: 0.2rem;">😵 "로그인이 안 돼요"</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">→ 브라우저의 시크릿/개인정보 모드를 끄고 다시 시도하세요. 크롬 브라우저 추천!</div>
          </div>
          <div>
            <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-amber); margin-bottom: 0.2rem;">😵 "무료 횟수를 다 썼어요"</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">→ 다른 AI로 전환! 예: Grok 이미지 소진 → 제미나이로 이미지 생성</div>
          </div>
          <div>
            <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-amber); margin-bottom: 0.2rem;">😵 "이미지 속 글씨가 깨져요"</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">→ "한글 글씨를 정확하게 다시 써줘"라고 재요청. AI 이미지의 한글은 아직 불완전해요</div>
          </div>
          <div>
            <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-amber); margin-bottom: 0.2rem;">😵 "결과가 마음에 안 들어요"</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">→ 프롬프트를 더 구체적으로! 분위기, 색감, 스타일을 구체적으로 써주면 훨씬 좋아져요</div>
          </div>
          <div>
            <div style="font-size: 0.813rem; font-weight: 700; color: var(--glow-amber); margin-bottom: 0.2rem;">😵 "뭘 만들지 모르겠어요"</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">→ 각 AI 카드의 프롬프트 예시를 그대로 복사해서 시작하세요! 거기서 조금씩 바꿔보면 OK 👌</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="ministry">여디디야 청년부 겨울캠프 2026</p>
      <p>딸까학 AI클래스 · 강사 김범수</p>
    </footer>

  </main>

</body>
</html>
