"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import {
    FaBell,
    FaUsers,
    FaTrain,
    FaGift,
    FaApple,
    FaGooglePlay,
    FaArrowRight,
    FaRoute,
    FaUniversity,
    FaLightbulb,
} from "react-icons/fa";
import { FiClock, FiMapPin, FiChevronDown } from "react-icons/fi";

// ============================================================================
// 0. スタイリング & アニメーション定義
// ============================================================================

const StyleInjector = () => (
    <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        :root {
            --color-primary: 217 91% 60%;
            --color-secondary: 142 76% 36%;
            --color-accent: 346 77% 62%;
            --color-background: 0 0% 100%;
            --color-foreground: 222.2 84% 4.9%;
            --color-muted-foreground: 215.4 16.3% 46.9%;
        }

        body {
            background-color: hsl(var(--color-background));
            color: hsl(var(--color-foreground));
        }

        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }

        @keyframes slide-in-up {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-slide-in-up {
            animation: slide-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                forwards;
            opacity: 0;
        }
    `}</style>
);

// ============================================================================
// 1. アニメーション制御用カスタムフック
// ============================================================================

const useScrollAnimation = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const node = ref.current; // ここで一度変数に保持

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return ref;
};

// ============================================================================
// 2. UIコンポーネント定義
// ============================================================================

const AnimatedSection = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => {
    const ref = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
};

const FloatingHeader = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed top-0 left-0 z-[9999] m-4 p-3 bg-white rounded-2xl transition-transform hover:scale-105"
            aria-label="ページトップに戻る"
        >
            <div className="flex items-center gap-1">
                <Image
                    src="/images/brand-logo1.png"
                    alt="カムサポ ブランドアイコン"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                />
                <span
                    className="
                        hidden sm:block text-xl font-bold tracking-tighter pr-2
                        bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700
                        text-transparent bg-clip-text
                    "
                >
                    カムサポ
                </span>
            </div>
        </button>
    );
};

const Logo = () => (
    <div className="relative flex items-center z-10">
        {/* ロゴ本体 */}
        <div className="flex items-center bg-white px-3 py-1 rounded-xl relative z-10">
            <Image
                src="/images/brand-logo1.png"
                alt="カムサポ ブランドアイコン"
                width={48}
                height={48}
                className="h-12 w-12"
                priority
            />
            <span className="text-2xl font-bold tracking-tighter text-gray-800">
                カムサポ
            </span>
        </div>
    </div>
);

// ============================================================================
// 3. ページセクションコンポーネント
// ============================================================================

const HeroSection = () => {
    const router = useRouter();

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-gray-50 px-4">
            <div className="absolute inset-0 bg-grid-gray-200/[0.4] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <span
                        className="block animate-slide-in-up"
                        style={{ animationDelay: "100ms" }}
                    >
                        あなたの日々の移動に
                    </span>
                    <span
                        className="block text-[hsl(var(--color-primary))] mt-2 animate-slide-in-up"
                        style={{ animationDelay: "300ms" }}
                    >
                        小さな革命を。
                    </span>
                </h1>
                <p
                    className="mt-6 max-w-md mx-auto text-lg text-gray-600 md:max-w-2xl md:text-xl animate-slide-in-up"
                    style={{ animationDelay: "500ms" }}
                >
                    移動におけるちょっとした悩みを解決。友達との時間も、自分だけの発見も。「カムサポ」であなたの移動をストレスフリーに。
                </p>
                <div
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up"
                    style={{ animationDelay: "700ms" }}
                >
                    <button
                        className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--color-primary))] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => router.push("/app-store")}
                    >
                        <FaApple className="mr-3 h-6 w-6" /> App Store
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-full bg-gray-800 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                        onClick={() => router.push("/google-play")}
                    >
                        <FaGooglePlay className="mr-3 h-6 w-6" /> Google Play
                    </button>
                </div>
            </div>
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-slide-in-up"
                style={{ animationDelay: "900ms" }}
            >
                <FiChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
            </div>
        </section>
    );
};

// --- ▼▼▼ 「Before/After」セクションを復活 ▼▼▼ ---
const BeforeAfterSection = () => (
    <section className="w-full py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    小さな移動の悩み、アプリが解決します。
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    カムサポは、あなたから日々の通勤・通学、待ち合わせなどにおける余計なストレスをなくします。
                </p>
            </AnimatedSection>
            <div className="relative grid grid-cols-1 md:grid-cols-11 gap-8 items-stretch">
                {/* Before */}
                <div className="md:col-span-5">
                    <AnimatedSection>
                        <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl bg-white h-full">
                            <h3 className="text-2xl font-bold text-center text-gray-500 mb-6">
                                Before: 今までの通学・待ち合わせ
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FiClock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">
                                            絶望の遅延情報
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            駅に着いてから知る電車の遅れ。焦りとイライラで一日のスタートが台無しに。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiMapPin className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">
                                            終わらない「どこいる？」
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            友達との待ち合わせは常に不安。何度も連絡を取り合う非効率な時間。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaUniversity className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">
                                            ただ過ぎる移動時間
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            電車やバスの中は、ただスマホを眺めるだけ。退屈で無駄な時間。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>

                <div className="hidden md:flex md:col-span-1 items-center justify-center">
                    <FaArrowRight className="h-12 w-12 text-gray-300" />
                </div>
                <div className="text-center md:hidden my-8">
                    <FiChevronDown className="h-12 w-12 text-gray-300 mx-auto" />
                </div>

                {/* After */}
                <div className="md:col-span-5">
                    <AnimatedSection>
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--color-primary))] to-blue-400 text-white shadow-2xl h-full">
                            <h3 className="text-2xl font-bold text-center mb-6">
                                After: カムサポのある未来
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FaBell className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">
                                            賢い先読み通知
                                        </h4>
                                        <p className="text-blue-100 text-sm">
                                            家を出る前に遅延を察知。AIが提案する最適ルートで、いつもより早く着くことも。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaUsers className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">
                                            スマートな合流体験
                                        </h4>
                                        <p className="text-blue-100 text-sm">
                                            マップ上で友達の位置をリアルタイム共有。カフェで優雅に待つだけのストレスフリーな待ち合わせ。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaLightbulb className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">
                                            移動が学びに変わる
                                        </h4>
                                        <p className="text-blue-100 text-sm">
                                            移動時間に合わせて、興味のある分野のショート講義をレコメンド。通学が自己投資の時間に。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    </section>
);

// --- ▼▼▼ ジグザグレイアウトの「ユーザーストーリー」セクション ▼▼▼ ---
const UserStoriesSection = () => {
    const stories = [
        {
            title: "予測不能な朝に、余裕を。",
            description:
                "「ヤバい、電車遅れてる！」そんな時も、アプリが事前にプッシュ通知。AIが考えた別ルートで、焦らず大学へ。朝の絶望が、余裕に変わる。",
            imageSrc: "/images/story-relief.png",
            alt: "遅延を先読みし、電車内で安心してスマホを見る男子学生",
        },
        {
            title: "すれ違う日々に、出会いを。",
            description:
                "「ごめん、どこいる？」のLINEはもう不要。友達の位置がマップですぐわかり、メッセージ機能も。広いキャンパスでも合流は一瞬。空きコマの貴重な時間も、無駄にしない。",
            imageSrc: "/images/story-meeting.png",
            alt: "キャンパスでアプリを使い、笑顔で落ち合う女子学生たち",
        },
        {
            title: "見慣れた道に、発見を。",
            description:
                "ただの帰り道が、宝探しに変わる。貯まったポイントで、知らなかったカフェのクーポンをGET。いつもの景色に、新しいお気に入りが増えていく。",
            imageSrc: "/images/story-discovery.png",
            alt: "隠れ家カフェでポイントを使い、読書を楽しむ女子学生",
        },
        {
            title: "新しい自分に、自信を。",
            description:
                "完璧な1日の移動計画を、このアプリ1つで。スケジュール通りの移動が、日々のタスクをこなす自信につながる。未来は、自分で創れる。",
            imageSrc: "/images/story-confidence.png",
            alt: "自室でアプリをチェックし、自信に満ちた表情の男子学生",
        },
    ];

    return (
        <section className="w-full py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        「カムサポ」のある、新しい日常。
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        移動が最適化し、ストレスフリーに、友達との時間を増やし、空き時間を創出。
                    </p>
                </AnimatedSection>
                <div className="space-y-20">
                    {stories.map((story, index) => (
                        <AnimatedSection key={index}>
                            <div
                                className={`flex flex-col md:items-center gap-8 md:gap-12 ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="md:w-1/2">
                                    <Image
                                        src={story.imageSrc}
                                        alt={story.alt}
                                        width={800}
                                        height={600}
                                        className="rounded-2xl shadow-xl w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl md:text-3xl font-bold">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600 mt-4 text-base md:text-lg">
                                        {story.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: FaRoute,
            title: "AI最適ルート検索",
            description:
                "遅延・混雑状況をリアルタイムに分析し、あなただけの「神ルート」を瞬時に提案。もう乗り換えアプリをいくつも開く必要はありません。",
        },
        {
            icon: FaUsers,
            title: "ライブ集合アシスト",
            description:
                "グループ内の全員の位置をマップに表示。チャット機能も搭載し、イベントやサークルでの集合が劇的にスムーズになります。",
        },
        {
            icon: FaTrain,
            title: "乗り過ごし防止アラーム",
            description:
                "ウェアラブルデバイスと連携し、眠っていても大丈夫。指定駅で『確実な』覚醒を促し、乗り過ごしを物理的に防ぎます。",
        },
        {
            icon: FaGift,
            title: "通学ポイントプログラム",
            description:
                "毎日の通学がポイントに。貯まったポイントは、学食の割引や提携カフェのクーポンと交換可能。移動がお得に変わります。",
        },
    ];

    return (
        <section className="w-full py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        あなたの移動に小さな革命を
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        退屈な移動を、楽しく、賢く、効率的に変えるための機能がここに。
                    </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index}>
                            <div className="p-8 bg-white rounded-2xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-2">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[hsl(var(--color-accent))] to-pink-400 text-white mb-6">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => {
    const router = useRouter();
    return (
        <section className="w-full py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection>
                    <div className="relative rounded-2xl bg-gray-800 p-8 md:p-12 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/[0.1]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                                さあ、未来の日常を始めよう。
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                                インストールは一瞬。あなたの大学生活は、永遠に変わる。今すぐダウンロードして、新しい毎日へ。
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--color-primary))] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() => router.push("/app-store")}
                                >
                                    <FaApple className="mr-3 h-6 w-6" /> App
                                    Store
                                </button>
                                <button
                                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() => router.push("/google-play")}
                                >
                                    <FaGooglePlay className="mr-3 h-6 w-6" />{" "}
                                    Google Play
                                </button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="w-full py-8 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-sm text-gray-600 text-center md:text-left">
                © 2025 Come Support Inc. All Rights Reserved.
            </p>
            <div className="flex gap-4">
                <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[hsl(var(--color-primary))] transition-colors"
                >
                    利用規約
                </a>
                <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-[hsl(var(--color-primary))] transition-colors"
                >
                    プライバシーポリシー
                </a>
            </div>
        </div>
    </footer>
);

// ============================================================================
// 4. メインページコンポーネント
// ============================================================================

export default function LandingPage() {
    return (
        <>
            <StyleInjector />
            <FloatingHeader />
            <div className="flex flex-col min-h-screen">
                <main className="flex-1">
                    <HeroSection />
                    <BeforeAfterSection />
                    <UserStoriesSection />
                    <FeaturesSection />
                    <CtaSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
