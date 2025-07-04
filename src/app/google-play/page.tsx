"use client";

import React from "react";
import {
    FaGooglePlay,
    FaStar,
    FaArrowRight,
    FaCheckCircle,
    FaShieldAlt,
    FaStarHalfAlt,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

// ヘルパーコンポーネント
const RatingBar = ({
    percentage,
    label,
}: {
    percentage: number;
    label: number;
}) => (
    <div className="flex items-center gap-2">
        <span className="text-xs font-medium">{label}</span>
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div
                className="bg-teal-500 h-2 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

const ScreenshotCard = ({
    title,
    bgColor,
}: {
    title: string;
    bgColor: string;
}) => (
    <div
        className={`flex-shrink-0 w-44 h-80 md:w-48 md:h-88 rounded-xl p-4 flex flex-col justify-end shadow-md ${bgColor}`}
    >
        <div className="text-white">
            <h3 className="font-bold">{title}</h3>
        </div>
    </div>
);

export default function GooglePlayPage() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="container mx-auto max-w-6xl p-4 md:p-8">
                <div className="py-4">
                    ⚠️これは仮ページです。決して公式のページとは関係ないことに注意してください。
                </div>
                {/* --- App Header --- */}
                <header className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-teal-500 rounded-3xl flex items-center justify-center shadow-lg">
                        <FaGooglePlay className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            カムサポ - 通学を冒険に変える
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <p className="text-teal-600 font-semibold">
                                Come Support Inc.
                            </p>
                            <FaCheckCircle className="text-teal-500" />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            広告を含む・アプリ内購入あり
                        </p>
                    </div>
                </header>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* --- Left Column (Stats) --- */}
                    <div className="flex md:flex-col justify-around text-center">
                        <div>
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-lg font-semibold">
                                    4.8
                                </span>
                                <FaStar className="text-gray-800" />
                            </div>
                            <p className="text-xs text-gray-500">
                                1.1万件のレビュー
                            </p>
                        </div>
                        <div>
                            <FiDownload className="h-6 w-6 mx-auto text-gray-800" />
                            <p className="text-xs text-gray-500 mt-1">
                                5万+ DL
                            </p>
                        </div>
                        <div>
                            <div className="w-6 h-6 border-2 border-gray-800 rounded-sm flex items-center justify-center text-xs font-bold mx-auto">
                                3+
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                3歳以上
                            </p>
                        </div>
                    </div>

                    {/* --- Center Column (Install) --- */}
                    <div className="flex items-center justify-center">
                        <button className="w-full bg-teal-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-md">
                            インストール
                        </button>
                    </div>
                </div>

                {/* --- Screenshots --- */}
                <section className="mt-8">
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        <ScreenshotCard
                            title="AI最適ルート"
                            bgColor="bg-blue-500"
                        />
                        <ScreenshotCard
                            title="ライブ集合アシスト"
                            bgColor="bg-green-500"
                        />
                        <ScreenshotCard
                            title="通学ポイント"
                            bgColor="bg-orange-500"
                        />
                        <ScreenshotCard
                            title="乗り過ごし防止"
                            bgColor="bg-purple-500"
                        />
                        <ScreenshotCard
                            title="キャンパスクーポン"
                            bgColor="bg-red-500"
                        />
                    </div>
                </section>

                {/* --- About this app --- */}
                <section className="mt-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            このアプリについて
                        </h2>
                        <FaArrowRight className="text-teal-500" />
                    </div>
                    <p className="text-gray-700 mt-2 text-sm">
                        埼玉大学の学生のためだけに作られた、究極の交通コンシェルジュアプリ「カムサポ」。リアルタイムの遅延情報から、友達とのスマートな待ち合わせ、毎日の通学が楽しくなるポイント機能まで。あなたの大学生活から「移動の不安」をなくし、時間と楽しさをプラスします。
                    </p>
                </section>

                {/* --- Ratings & Reviews --- */}
                <section className="mt-8 pt-6 border-t">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            評価とレビュー
                        </h2>
                        <FaArrowRight className="text-teal-500" />
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center">
                            <p className="text-6xl font-bold">4.8</p>
                            <div className="flex justify-center mt-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p className="text-sm text-gray-500 mt-2">11,482</p>
                        </div>
                        <div className="w-full space-y-1">
                            <RatingBar label={5} percentage={85} />
                            <RatingBar label={4} percentage={10} />
                            <RatingBar label={3} percentage={3} />
                            <RatingBar label={2} percentage={1} />
                            <RatingBar label={1} percentage={1} />
                        </div>
                    </div>
                </section>

                {/* --- Data Safety --- */}
                <section className="mt-8 pt-6 border-t">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            データの安全性
                        </h2>
                        <FaArrowRight className="text-teal-500" />
                    </div>
                    <div className="mt-4 flex items-start gap-4 p-4 border rounded-lg">
                        <FaShieldAlt className="h-8 w-8 text-gray-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold">
                                デベロッパーが収集、共有するデータについての情報です。
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                ・位置情報:
                                アプリの機能（経路検索、集合支援）のために使用されます。
                                <br />
                                ・個人情報:
                                氏名、メールアドレス（アカウント作成時）
                                <br />
                                ・データは転送中に暗号化されます。
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
