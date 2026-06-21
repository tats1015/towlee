/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Plus, Minus, FileText } from 'lucide-react';
import { CaseItem } from '../types';

export default function Cases() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const cases: CaseItem[] = [
    {
      id: 'case-01',
      tag: 'CoE構築 / ITガバナンス',
      title: '東証プライム上場 大手ガス会社（売上高 約2.1兆円）',
      client: 'CoEの実行/体制構築支援',
      challenge: 'M＆A等でグループ各社でシステムがバラバラになっており、全体シナジーやITガバナンスが発揮しにくい状態。',
      solution: 'CoE（Center of Excellence）体制を新規構築。グループ全体のシステム標準化および統括、さらに運用のサポートまで包括支援。',
      outcome: '全社最適視点でのシステム統括体制構築･実行を完遂。グループ全体のITシナジー最大化に多大な貢献に寄与。'
    },
    {
      id: 'case-02',
      tag: 'SFA / 営業イネーブルメント',
      title: '東証プライム上場 大手印刷会社（売上高 1.8兆円）',
      client: '営業視点SFA of DX推進',
      challenge: '導入されたSFA（Salesforce）が現場に活用されておらず、新規開拓および追加売上の機会創出が滞っている状態。',
      solution: '単なるシステム改変ではなく「実用的な営業イネーブルメント」を設計。メンバーが真に使いこなせるナビゲーションとしてSFDCを改修。',
      outcome: '営業ナビゲーションを目的とした全社SFDCのリノベーションの成功に寄与。営業力底上げとDXの営業成果に寄与。'
    },
    {
      id: 'case-03',
      tag: 'PMO支援 / プロジェクト再生',
      title: '東証プライム子会社 大手物流機器メーカー(290億円)',
      client: '炎上プロジェクトのPMO支援',
      challenge: '他社大手コンサル・開発ベンダーが入り、プロジェクトが滞っていた状態。',
      solution: 'カオス化したプロジェクトの現状・課題整理および開発スコープと各プレイヤー体制のコントロールを強力に実施。',
      outcome: 'プロジェクトの劇的な軌道修正プロセスの再編成、適切なシステム導入とオペレーション定着に貢献。'
    }
  ];

  const toggleCase = (id: string) => {
    if (expandedCase === id) {
      setExpandedCase(null);
    } else {
      setExpandedCase(id);
    }
  };

  return (
    <section
      id="cases"
      className="py-24 md:py-36 bg-brand-bg relative overflow-hidden flex items-center justify-center grainy-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* セクションインデックス */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase block font-serif-en">
              Proven Outcomes
            </span>
            <h2 className="font-serif-jp text-3xl md:text-4xl font-light text-brand-text-primary tracking-wider pb-1">
              過去伴走支援の事例と評価
            </h2>
          </div>
          <div className="flex items-center space-x-3 text-xs tracking-wider text-brand-text-secondary bg-brand-card px-4 py-3 border border-brand-text-primary/10 rounded-xs max-w-sm font-serif-jp">
            <ShieldCheck className="h-5 w-5 text-brand-gold shrink-0 stroke-[1.2]" />
            <p className="leading-relaxed font-light">
              クライアント企業様との信義違反なきよう、全ての情報は匿名化・一般化し、エッセンスのみを抽出・公開しております。
            </p>
          </div>
        </div>

        {/* 事例リスト（アコーディオン） */}
        <div className="space-y-4" id="cases-accordion-list">
          {cases.map((project) => {
            const isExpanded = expandedCase === project.id;
            return (
              <div
                key={project.id}
                className={`border border-brand-text-primary/10 rounded-xs overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-brand-card border-brand-gold/40 shadow-lg' : 'bg-transparent hover:bg-brand-card/30'
                }`}
                id={`case-item-${project.id}`}
              >
                {/* トリガー部分 */}
                <button
                  onClick={() => toggleCase(project.id)}
                  className="w-full text-left py-8 px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-4">
                      {/* 事例タグ */}
                      <span className="text-[10px] md:text-xs tracking-wider font-serif-jp text-brand-gold font-medium border border-brand-gold/30 px-3 py-1 bg-brand-bg rounded-xs">
                        {project.tag}
                      </span>
                      <span className="font-serif-en text-xs text-brand-text-secondary tracking-widest font-light">
                        {project.id.toUpperCase()}
                      </span>
                    </div>
                    {/* クライアント属性 */}
                    <h3 className="font-serif-jp text-base md:text-xl font-normal tracking-wide text-brand-text-primary">
                      {project.title}
                    </h3>
                  </div>

                  {/* 開閉ボタン */}
                  <div className="flex items-center justify-end space-x-4">
                    <span className="hidden md:inline text-[10px] tracking-widest uppercase font-serif-en text-brand-text-secondary">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                    <div className={`p-2 rounded-xs border border-brand-text-primary/10 transition-transform duration-300 ${isExpanded ? 'bg-brand-gold text-brand-bg border-transparent rotate-90' : 'bg-transparent text-brand-text-primary'}`}>
                      {isExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </div>
                </button>

                {/* 展開コンテンツ */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <div className="px-6 md:px-10 pb-10 pt-4 border-t border-brand-text-primary/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 課題 */}
                        <div className="space-y-3 border-l border-brand-text-primary/10 pl-6 relative">
                          <span className="absolute left-[-1px] top-0 h-4 w-2 bg-brand-text-primary" />
                          <h4 className="text-xs font-semibold tracking-wider font-serif-jp text-brand-text-primary uppercase">
                            01. 経営課題
                          </h4>
                          <p className="text-xs md:text-sm text-brand-text-secondary font-serif-jp font-light leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        {/* アプローチ */}
                        <div className="space-y-3 border-l border-brand-text-primary/10 pl-6 relative">
                          <span className="absolute left-[-1px] top-0 h-4 w-2 bg-brand-gold" />
                          <h4 className="text-xs font-semibold tracking-wider font-serif-jp text-brand-gold uppercase">
                            02. 本質解法と介入
                          </h4>
                          <p className="text-xs md:text-sm text-brand-text-secondary font-serif-jp font-light leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        {/* 成果 */}
                        <div className="space-y-3 border-l border-brand-text-primary/10 pl-6 relative">
                          <span className="absolute left-[-1px] top-0 h-4 w-2 bg-brand-gold/60" />
                          <h4 className="text-xs font-semibold tracking-wider font-serif-jp text-brand-text-primary uppercase">
                            03. 数値成果と進化
                          </h4>
                          <p className="text-xs md:text-sm text-brand-text-primary font-serif-jp font-medium leading-relaxed bg-brand-gold/5 p-4 rounded-xs border border-brand-gold/20">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
