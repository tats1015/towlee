/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Cases from './components/Cases';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 控えめにオフセットを設けるために、滑らかにスクロール
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary selection:bg-brand-gold/30 selection:text-brand-bg scroll-smooth overflow-x-hidden">
      {/* 繊細な和紙を想起させるグレイン（ノイズ）質感のレイヤーをアプリ全体に乗せる */}
      <div className="grainy-bg min-h-screen flex flex-col justify-between">
        
        {/* グローバル最高峰ヘッダー */}
        <Header onNavClick={handleScrollToSection} />

        <main className="flex-grow">
          {/* 圧倒されるような美しいヒーローセクション */}
          <Hero onNavClick={handleScrollToSection} />

          {/* 桃李不言、下自成蹊：コンサルティングの哲学 */}
          <Philosophy />

          {/* 指針と領域：クライアント企業を導くサービス群 */}
          <Services />

          {/* 匿名かつ具体的な数値成果：厳選された極大実績 */}
          <Cases />

          {/* 組織、所在地とシニアリーダー略歴 */}
          <About />
        </main>

        {/* 格式高きミニマルフッター */}
        <Footer onNavClick={handleScrollToSection} />
      </div>
    </div>
  );
}

