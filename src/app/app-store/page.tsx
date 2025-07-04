"use client";

import React from "react";
import {
    FaApple,
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
    FaArrowDown,
} from "react-icons/fa";

// ヘルパーコンポーネント
const StarRating = ({
    rating,
    reviewCount,
}: {
    rating: number;
    reviewCount: number;
}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }
    return (
        <div className="flex items-center">
            <div className="flex">{stars}</div>
            <span className="ml-2 text-sm text-gray-500">
                {reviewCount.toLocaleString()}件の評価
            </span>
        </div>
    );
};

const ScreenshotCard = ({
    title,
    description,
    bgColor,
}: {
    title: string;
    description: string;
    bgColor: string;
}) => (
    <div
        className={`flex-shrink-0 w-48 h-80 md:w-60 md:h-96 rounded-2xl p-4 flex flex-col justify-between shadow-md ${bgColor}`}
    >
        <div className="text-white">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm mt-1">{description}</p>
        </div>
        <div className="w-full h-1/2 bg-white/30 rounded-lg backdrop-blur-sm"></div>
    </div>
);

const ReviewCard = ({
    rating,
    title,
    body,
    user,
}: {
    rating: number;
    title: string;
    body: string;
    user: string;
}) => (
    <div className="border-b border-gray-200 py-4">
        <div className="flex justify-between items-center">
            <h4 className="font-semibold text-sm">{title}</h4>
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={
                            i < rating ? "text-yellow-400" : "text-gray-300"
                        }
                    />
                ))}
            </div>
        </div>
        <p className="text-sm text-gray-700 mt-2">{body}</p>
        <p className="text-xs text-gray-500 mt-2">{user}</p>
    </div>
);

export default function AppStorePage() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto max-w-5xl p-4 md:p-8">
                <div className="py-4">
                    ⚠️これは仮ページです。決して公式のページとは関係ないことに注意してください。
                </div>
                {/* --- App Header --- */}
                <header className="flex flex-col md:flex-row items-center gap-6 md:gap-8 py-4 border-b border-gray-200">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-500 rounded-3xl flex items-center justify-center shadow-lg">
                        <FaApple className="w-16 h-16 text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                            カムサポ - 埼大生のための交通革命
                        </h1>
                        <p className="text-lg text-gray-500 mt-1">
                            あなたの通学を、未来の体験へ。
                        </p>
                        <div className="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
                                <FaArrowDown />
                                <span>入手</span>
                            </button>
                            <div className="text-center">
                                <StarRating rating={4.8} reviewCount={1250} />
                                <p className="text-xs text-gray-400 mt-1">
                                    4+ 年齢
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- Previews --- */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold mb-4">プレビュー</h2>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        <ScreenshotCard
                            title="AI最適ルート"
                            description="遅延も混雑も先読み。あなただけの神ルートを提案。"
                            bgColor="bg-blue-500"
                        />
                        <ScreenshotCard
                            title="ライブ集合アシスト"
                            description="友達は今どこ？マップで一目瞭然、もう迷わない。"
                            bgColor="bg-green-500"
                        />
                        <ScreenshotCard
                            title="通学ポイント"
                            description="ただ通うだけじゃもったいない。移動がご褒美に変わる。"
                            bgColor="bg-orange-500"
                        />
                        <ScreenshotCard
                            title="乗り過ごし防止"
                            description="寝過ごしても大丈夫。降車駅が近づくと優しくお知らせ。"
                            bgColor="bg-purple-500"
                        />
                    </div>
                </section>

                {/* --- Description --- */}
                <section className="py-8 border-t border-gray-200">
                    <p className="text-gray-800 whitespace-pre-wrap">
                        ダルい朝も、めんどい帰りも。「カムサポ」が全部なんとかする。
                        埼玉大学の学生のためだけに作られた、究極の交通コンシェルジュアプリが登場！
                        【主な機能】 ■
                        リアルタイム遅延・経路情報：もう駅でガッカリしない。家を出る前に最適なルートがわかる。
                        ■
                        ライブ集合アシスト：サークルや友達との待ち合わせで「どこいる？」のLINEはもう不要。
                        ■
                        通学ポイントプログラム：毎日の通学でポイントを貯めて、学食やカフェで使えるクーポンをGET！
                        ■
                        乗り過ごし防止アラーム：ついうっかりの乗り過ごしをGPSで防止。
                        あなたの大学生活から「移動の不安」をゼロにし、もっと『時間』と『安心』と『楽しみ』を。
                        さあ、未来の通学を始めよう。
                    </p>
                </section>

                {/* --- What's New --- */}
                <section className="py-8 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">新機能</h2>
                        <button className="text-blue-600 font-semibold">
                            バージョン履歴
                        </button>
                    </div>
                    <p className="text-gray-500 mt-2">バージョン 1.1.0</p>
                    <p className="text-gray-800 mt-2">
                        -
                        新機能「キャンパス・クーポン」を追加！通学ポイントで学内の提携店舗で使えるお得なクーポンをゲット！
                        <br />-
                        集合アシスト機能のUIを改善し、さらに直感的に使えるようになりました。
                        <br />- 軽微なバグ修正とパフォーマンスの向上。
                    </p>
                </section>

                {/* --- Ratings & Reviews --- */}
                <section className="py-8 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">評価とレビュー</h2>
                        <button className="text-blue-600 font-semibold">
                            すべて表示
                        </button>
                    </div>
                    <div className="mt-4">
                        <ReviewCard
                            rating={5}
                            title="神アプリ！もう遅刻しない！"
                            body="バスが遅れてもすぐに別ルート教えてくれるから、1限に間に合うようになりました！マジで助かってます。"
                            user="ユウキ - 経済学部1年"
                        />
                        <ReviewCard
                            rating={5}
                            title="サークルの集合が楽になった"
                            body="イベントの時のメンバーの集合管理がめちゃくちゃ楽になりました。方向音痴の同期も迷わず来れる(笑)"
                            user="アヤカ - 教育学部3年"
                        />
                        <ReviewCard
                            rating={4}
                            title="今後に期待！"
                            body="機能は最高です！欲を言えば、もっと多くのバス会社に対応してくれると嬉しいです。応援してます！"
                            user="タカシ - 理工学部2年"
                        />
                    </div>
                </section>

                {/* --- Information --- */}
                <section className="py-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold mb-4">情報</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        <div className="flex justify-between border-b pb-2">
                            <span>販売元</span>
                            <span className="text-gray-600">
                                Come Support Inc.
                            </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>サイズ</span>
                            <span className="text-gray-600">85.4 MB</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>カテゴリ</span>
                            <span className="text-gray-600">
                                ナビゲーション
                            </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>互換性</span>
                            <span className="text-gray-600">
                                iPhone, iPad, iPod touch
                            </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>言語</span>
                            <span className="text-gray-600">日本語</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>年齢</span>
                            <span className="text-gray-600">4+</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
