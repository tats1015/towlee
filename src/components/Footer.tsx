/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  onNavClick: (sectonId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const links = [
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Services', id: 'services' },
    { label: 'Cases', id: 'cases' },
    { label: 'About', id: 'about' },
  ];

  return (
    <footer className="bg-[#050506] border-t border-brand-text-primary/10 py-12 md:py-16 text-brand-text-secondary/50 text-xs font-serif-jp grainy-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start justify-between gap-12">
        {/* 左側：ブランド表記 */}
        <div className="space-y-4">
          <div className="cursor-pointer flex flex-col" onClick={() => onNavClick('hero')} id="footer-logo">
            <span className="font-serif-en text-lg tracking-[0.25em] text-brand-gold uppercase">
              Towlee
            </span>
          </div>
          <p className="max-w-xs text-[10px] text-brand-text-secondary/40 leading-relaxed font-light font-serif-jp">
            株式会社Towlee (トーリー)<br />
            東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル<br />
            クライアント企業様のリアルパートナーとして役割を全うします。
          </p>
        </div>

        {/* 中央：サイトマップナビゲーション */}
        <div className="flex flex-col space-y-3">
          <span className="text-[10px] tracking-widest uppercase font-serif-en text-brand-gold font-semibold">
            Directory
          </span>
          <div className="flex flex-col sm:flex-row sm:space-x-8 gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className="text-left text-brand-text-secondary/80 hover:text-brand-gold transition-colors font-serif-jp text-xs focus:outline-hidden cursor-pointer"
                id={`footer-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* 右側：リーガル/ライセンス */}
        <div className="space-y-2 max-w-sm text-right md:text-right mt-1 sm:mt-0 text-[10px] text-brand-text-secondary/35 leading-loose font-light">
          <p>© {new Date().getFullYear()} Towlee Co., Ltd. All Rights Reserved.</p>
          <p>
            本Webサイト上の全ての情報・実績等は守秘規約に基づき高度に抽象化されております。複写、転載、および無断引用は厳格に禁止いたします。
          </p>
        </div>
      </div>
    </footer>
  );
}
