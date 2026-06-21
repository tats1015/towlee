/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark } from 'lucide-react';
import { MemberItem } from '../types';

export default function About() {
  const leader: MemberItem = {
    name: '菊地 達也',
    role: '代表取締役',
    enRole: 'Tatsuya Kikuchi, Chief Executive Officer & Founder',
    career: [
      '青山学院大学在学中に東南アジアにてコンピューターサイエンスを専攻。',
      '卒業後、新卒でアビームコンサルティングに入社し、主にCRM・BI・データ領域で複数のプロジェクトリードを担当。',
      '東証プライム上場企業のIT企画を経た後、HRテック企業の執行役員COOとして会社の立ち上げ・黒字化に多大な貢献。',
      '直近では、5年で200名規模の急成長スタートアップにてプロダクト開発マネージャー(VPoE)として参画。デロイト発表の「急成長テクノロジー企業ランキング2025」でTOP10に選出される急成長に貢献。'
    ]
  };

  const corporateDetails = [
    { label: '屋号', value: '株式会社Towlee (Towlee Co., Ltd.)' },
    { label: '設立', value: '2024年 ※2023年事業開始' },
    { label: '代表者', value: '代表取締役 菊地 達也' },
    { label: '本社', value: '〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル' },
    { label: '事業内容', value: '組織/戦略コンサルティング、新規事業コンサルティング、DX/運用設計開発、営業/各運用設計実行、WEB・業務・RPAシステム開発支援' }
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-brand-bg text-brand-text-primary relative overflow-hidden flex items-center justify-center grainy-bg"
    >
      {/* 繊細な装飾 */}
      <div className="absolute top-10 right-10 leading-none select-none pointer-events-none opacity-[0.03] font-serif-en text-[120px] font-bold text-brand-gold">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* セクション見出し */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase block font-serif-en">
            Corporate Profile & Leadership
          </span>
          <h2 className="font-serif-jp text-3xl md:text-4xl font-light text-brand-text-primary tracking-wider">
            確かな出自と組織
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* 左半分：リーダープロフィール */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-medium tracking-[0.2em] text-brand-gold uppercase block font-serif-en">
                LEADERSHIP MESSAGE
              </span>
              <div className="space-y-2">
                <h3 className="font-serif-jp text-2xl font-light text-brand-text-primary tracking-wider">
                  {leader.name}
                </h3>
                <p className="text-xs tracking-[0.1em] text-brand-gold font-serif-jp font-light">
                  {leader.role}
                </p>
              </div>
            </div>

            {/* 代表からの短いステートメント */}
            <blockquote className="border-l-2 border-brand-gold/60 pl-6 italic text-brand-text-primary/90 font-light font-serif-jp text-sm md:text-base leading-relaxed tracking-wide bg-brand-card py-4 pr-4 rounded-r-xs">
              「IT・コンサルの強固なバックグラウンドを持ちつつ、様々な業界の上流戦略から泥臭い下流の実装・実行支援まで包括的に経験してきました。机上の青写真を押し付けるコンサルタントではなく、クライアント企業様の隣に寄り添い、真にプロダクトや組織を成長へと導く包括的な価値を提供いたします。」
            </blockquote>

            <div className="space-y-4">
              <span className="text-xs font-serif-jp font-medium tracking-wider text-brand-gold select-none">主なキャリア略歴</span>
              <ul className="space-y-3 font-serif-jp text-xs md:text-sm text-brand-text-secondary leading-relaxed font-light">
                {leader.career.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-brand-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右半分：会社基本情報 (テーブル) */}
          <div className="lg:col-span-6 bg-brand-card border border-brand-text-primary/10 p-8 md:p-10 rounded-xs shadow-xl">
            <h3 className="font-serif-jp text-lg font-light text-brand-text-primary tracking-wider mb-8 flex items-center space-x-3 pb-3 border-b border-brand-text-primary/10">
              <Landmark className="h-4 w-4 text-brand-gold stroke-[1.2]" />
              <span>会社概要</span>
            </h3>

            <div className="space-y-6" id="company-profile-table">
              {corporateDetails.map((detail, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 pb-4 border-b border-brand-text-primary/5 items-start last:border-0 last:pb-0"
                >
                  <span className="text-xs tracking-wider font-serif-jp text-brand-gold font-medium">
                    {detail.label}
                  </span>
                  <span className="text-xs md:text-sm tracking-wide font-serif-jp text-brand-text-secondary md:col-span-3 leading-relaxed font-light">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
