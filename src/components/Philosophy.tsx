/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Philosophy() {
  const textureImgUrl = '/src/assets/images/towlee_texture_1782028261935.jpg';

  return (
    <section
      id="philosophy"
      className="py-24 md:py-36 bg-brand-bg relative overflow-hidden flex items-center justify-center grainy-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* 背景の薄いゴールドの流麗なアクセント */}
        <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none select-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* 左側：メッセージと文面（8カラム / 大領域） */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase block font-serif-en">
                Our Philosophy
              </span>
              <h2 className="font-serif-jp text-2xl md:text-4xl font-light text-brand-text-primary tracking-wider leading-relaxed">
                過度な主張はいらない。 <br />
                私たちは、最高の実績を以て語る。
              </h2>
            </div>

            <div className="font-serif-jp text-sm md:text-base text-brand-text-secondary space-y-7 leading-loose font-light">
              <p>
                「桃李もの言わざれども、下自ずから蹊を成す」
              </p>
              <p>
                桃や李（すもも）は、自ら言葉を発することはありません。しかし、その甘美な実と美しい花に惹かれて自然と人々が集まり、その樹の下にはいつしか踏み固められた一本の美しい道が生まれる。
              </p>
              <p>
                「Towlee」の名の由来は、まさにこの故事成語にあります。
              </p>
              <p>
                華美なマーケティングや流行を追った横文字のプレゼンテーションで、クライアント企業様の貴重な時間を消費することは致しません。私たちが重視するのは、ただ一つ。お客様の経営理念を深く理解し、その成長と変革を圧倒的な「具体成果」で示すことです。
              </p>
              <p>
                クライアント企業様が求めるのは、綺麗事だけのコンサルティングではなく、難解な組織の壁を共に突破する「強固な意志」と「圧倒的な解決力」。私たちは声高に自らを語る代わりに、常にお客様の後ろ盾として、静かに、確実に、新たな道を成していきます。
              </p>
            </div>
          </div>

          {/* 右側：アーティスティックなビジュアルと縦型理念（5カラム） */}
          <div className="lg:col-span-5 relative flex justify-center pt-8 lg:pt-0">
            <div className="relative w-full max-w-sm pb-8 lg:pb-0">
              {/* 金箔の額縁のような洗練された枠 */}
              <div className="absolute -inset-4 border border-brand-gold/30 rounded-xs -z-10" />

              {/* 生成した質感画像をフレームに入れて表示 */}
              <div className="aspect-[3/4] bg-brand-bg relative overflow-hidden shadow-2xl rounded-xs">
                <img
                  src={textureImgUrl}
                  alt="Fine Art Gold and Washi Texture of Towlee"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* テクスチャをモダンに演出するための重ね掛け */}
                <div className="absolute inset-0 bg-brand-card/25 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-90" />

                {/* 画像内に美しく縦書きで配置されたメッセージ */}
                <div className="absolute bottom-10 left-8 right-8 flex flex-col justify-end text-brand-text-primary">
                  <span className="font-serif-en text-3xl font-light tracking-widest text-brand-gold mb-2 block">
                    蹊
                  </span>
                  <span className="font-serif-jp text-xs tracking-[0.25em] text-brand-text-secondary leading-relaxed font-light">
                    「踏み固められた確かな道」を、
                    <br />
                    激動の時代にこそ描き出す。
                  </span>
                </div>
              </div>

              {/* 控えめで贅沢な装飾ラベル */}
              <div className="sm:absolute relative mt-6 sm:mt-0 bottom-auto right-auto sm:bottom-[-24px] sm:right-[-24px] float-right sm:float-none bg-brand-card px-6 py-4 border border-brand-gold/20 shadow-xl rounded-xs z-20">
                <p className="font-serif-en text-xl md:text-2xl font-light text-brand-gold tracking-widest text-right sm:text-left">
                  Est. 2024
                </p>
                <p className="text-[9px] tracking-wider text-brand-text-secondary uppercase font-serif-jp mt-1 text-right sm:text-left">
                  東京 渋谷
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
