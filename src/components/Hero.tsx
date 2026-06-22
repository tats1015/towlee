/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, ChevronDown } from 'lucide-react';
// @ts-ignore
import heroImgUrl from '../assets/images/towlee_hero_1782028246619.jpg';

interface HeroProps {
  onNavClick: (sectonId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  // 生成された画像のパス

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg px-6 md:px-12 pt-16 cursor-default grainy-bg"
    >
      {/* ヒーロー画像背景 */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImgUrl}
          alt="Towlee Consulting Zen Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-[10s] ease-out select-none pointer-events-none"
        />
        {/* 高級感をあおるグラデーション（AIっぽくない、自然な陰影） */}
        <div className="absolute inset-0 bg-radial-at-c from-brand-bg/10 via-brand-bg/85 to-brand-bg z-10" />
      </div>

      {/* メインの格調高いキャッチフレーズ */}
      <div className="relative z-20 max-w-5xl w-full text-center flex flex-col items-center">
        {/* 上部の高級感ある小さなラベル */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center space-x-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-brand-gold/60" />
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-brand-gold font-serif-en">
            Elite Consulting Office
          </span>
          <span className="h-[1px] w-8 bg-brand-gold/60" />
        </motion.div>

        {/* 理念の明朝体縦書き、または中央への優雅な配置 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, delay: 0.5 }}
          className="font-serif-jp text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-text-primary tracking-[0.2em] md:tracking-[0.3em] leading-relaxed md:leading-loose text-center max-w-5xl mb-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-0"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          <span className="inline-block whitespace-nowrap">桃李不言、</span>
          <span className="inline-block whitespace-nowrap">下自成蹊。</span>
        </motion.h1>

        {/* 英文の流麗なメッセージ */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.0 }}
          className="font-serif-en text-lg md:text-2xl font-light italic text-brand-gold tracking-[0.2em] mb-12 max-w-xl"
        >
          Silent Strength, Compelling Wisdom.
        </motion.p>

        {/* コミットメントメッセージ（日本のクライアント企業向け） */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.3 }}
          className="text-xs md:text-sm tracking-[0.25em] text-brand-text-secondary max-w-2xl leading-loose font-serif-jp px-4"
        >
          言葉を並べるのではなく、静かなる圧倒的な実行力と成果をもって。
          <br className="hidden sm:inline" />
          日本の産業を率いるクライアント企業様の「真の右腕」として、未来の道を拓きます。
        </motion.p>
      </div>

      {/* スクロール指示器 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[9px] tracking-[0.4em] text-brand-gold/70 uppercase font-serif-en mb-2 select-none"
        >
          Scroll
        </motion.span>
        <ChevronDown 
          onClick={() => onNavClick('philosophy')} 
          className="h-4 w-4 text-brand-gold/50 cursor-pointer hover:text-brand-gold transition-colors" 
        />
      </div>
    </section>
  );
}
