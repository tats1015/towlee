/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Cpu, Layers, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'strategy',
      number: 'I',
      title: 'ITガバナンス・事業分割(カーブアウト)支援',
      enTitle: 'IT Governance & System Carve-Out Strategy',
      description: 'クライアント企業様の経営・事業戦略と連動したIT投资計画を早期に策定。複雑なシステム分離から、次世代CIO・CDOなどのITリーダー育成・常駐型PMO、そしてアジリティの高いサテライト開発チーム構築までを強力に支援します。',
      details: [
        'ITガバナンスの垂直立ち上げ: レガシー棚卸しとITアーキテクチャ定義、共通ITポリシー策定からROIモニタリング体制構築まで、IT基盤を早期に最適化します。',
        'システム・カーブアウト支援: 事業分離（M&A・分社化）に伴い、絡み合ったERPやインフラを安全に分離するロードマップ策定と、クラウド移行による早期自立。',
        '次世代CIO・CDO育成＆常駐PMO: 経営・IT戦略を直結させる「攻めのITチーム」への改編と、PMO現場常駐によるノウハウ直接承継・次世代ITリーダーの育成。',
        'サテライト・開発チーム構築: 生成AIやデータ活用等の最新テクノロジーをPoC（概念実証）し、高速内製アジャイルで検証・完了から全社へスピード展開。'
      ]
    },
    {
      id: 'technology',
      number: 'II',
      title: 'DX・オペレーショナル変革',
      enTitle: 'Operational Excellence & Technology Integration',
      description: 'パッケージの導入に終わる形骸化したIT投資に終止符を打ち、サプライチェーンからフロントエンドに至る全体の「業務オペレーションの再定義」と技術統合を実現します。',
      details: [
        'サプライチェーン（SCM）変革およびコア業務のアーキテクチャ改革',
        'AI・実用ディープテクノロジーを現場基盤に組み込む業務変革設計',
        '非効率レガシーシステムの再構築（モダナイゼーション）とロードマップ策定',
        '自律稼働する組織内変革デジタル人材の内製化・スキルトランスファー`'
      ]
    },
    {
      id: 'global',
      number: 'III',
      title: 'プロダクト開発マネジメント',
      enTitle: 'Product Development Management (PdM/VPoE)',
      description: '高速なプロダクト開発と技術マネジメント、アジリティの高い組織構築により、企業のアイデアを迅速かつ強固に形にし、市場優位性を確立するプロダクト主導型の成長を包括的に支援します。',
      details: [
        'ロードマップ策定、プロダクトビジョンの言語化とロードマップ設計支援',
        'アジャイル開発体制の構築、スクラムプロセスの導入とチーム内製化支援',
        'VPoE / PdM 常駐型伴走による技術組織設計とデリバリーの最大推進',
        'モダンな技術選定、アーキテクチャ設計から標準化へのガイドライン構築'
      ]
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'strategy': return <Compass className="h-6 w-6 stroke-[1.2] text-brand-gold" />;
      case 'technology': return <Cpu className="h-6 w-6 stroke-[1.2] text-brand-gold" />;
      case 'global': return <Layers className="h-6 w-6 stroke-[1.2] text-brand-gold" />;
      default: return null;
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-36 bg-brand-bg text-brand-text-primary relative overflow-hidden flex items-center justify-center grainy-bg"
    >
      {/* 装飾的な半透明の円 */}
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* セクションインデックス */}
        <div className="mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase block font-serif-en">
            High-Level Expertise
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif-jp text-3xl md:text-4xl font-light tracking-wider">
              本質に深く届く支援
            </h2>
            <p className="text-brand-text-secondary text-xs md:text-sm max-w-md font-serif-jp leading-relaxed font-light">
              クライアント企業様が持つ有形無形の資産を最大限に引き出すために、形式的な支援ではなく、実働・実装まで責任を持つコアサービスを定義。
            </p>
          </div>
        </div>

        {/* サービスのメイングリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`border border-brand-text-primary/10 p-8 md:p-10 transition-all duration-500 relative flex flex-col justify-between rounded-xs bg-brand-card hover:border-brand-gold/40 group ${
                activeService === service.id ? 'bg-brand-card/90 border-brand-gold/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : ''
              }`}
              style={{ minHeight: '430px' }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              id={`service-card-${service.id}`}
            >
              <div>
                {/* サービスヘッダー */}
                <div className="flex justify-between items-start mb-8">
                  <span className="font-serif-en text-3xl font-light text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
                    {service.number}
                  </span>
                  <div className="p-3 bg-brand-text-primary/5 rounded-xs border border-brand-text-primary/5 group-hover:border-brand-gold/30 transition-colors duration-500">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* サービス名称 */}
                <div className="space-y-2 mb-6">
                  <h3 className="font-serif-jp text-lg md:text-xl font-normal leading-relaxed text-brand-text-primary group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-serif-en text-[10px] tracking-[0.2em] uppercase text-brand-gold/50">
                    {service.enTitle}
                  </p>
                </div>

                {/* 短い説明 */}
                <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed font-serif-jp font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* 詳細項目（アコーディオン） */}
              <div className="mt-4 pt-6 border-t border-brand-text-primary/5 justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedService(expandedService === service.id ? null : service.id);
                  }}
                  className="text-[10px] tracking-[0.2em] uppercase text-brand-gold flex items-center gap-1 cursor-pointer focus:outline-none text-left"
                >
                  Focus Areas <ChevronRight className={`h-3 w-3 transition-transform duration-300 ${expandedService === service.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </button>
                
                {/* クリック時またはホバー時に美しく表示される詳細項目リスト */}
                <div className={`mt-4 overflow-hidden transition-all duration-700 ease-in-out ${
                  expandedService === service.id
                    ? 'max-h-[300px] opacity-100'
                    : 'max-h-0 opacity-0 lg:group-hover:max-h-[220px] lg:group-hover:opacity-100'
                }`}>
                  <ul className="space-y-2.5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-[11px] text-brand-text-secondary flex items-start gap-2 leading-relaxed">
                        <span className="text-brand-gold mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IT課題別のメッセージエリア */}
        <div className="mt-16 p-6 md:p-8 bg-brand-card border border-brand-text-primary/10 rounded-xs shadow-xl max-w-3xl mx-auto text-center font-serif-jp relative z-10">
          <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed font-light px-2">
            貴社が現在抱えているITの課題に合わせて、<span className="text-brand-gold font-normal">レガシーシステムからの脱却（システム・カーブアウト）</span>、<br className="hidden md:inline" />
            <span className="text-brand-gold font-normal">次世代のITリーダー不足（CIO/CDO育成）</span>、<span className="text-brand-gold font-normal">DXのスピードアップ（サテライトチーム構築）</span>など、<br className="hidden md:inline" />
            どのような課題に対しても、上流からデリバリーまで、クライアント企業様のリアルパートナーとして役割を全うします。
          </p>
        </div>

      </div>
    </section>
  );
}
