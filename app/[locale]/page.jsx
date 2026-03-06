"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Starfield from "./Starfield";

export default function Home() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colorMap = {
    pink: {
      bg: "bg-neon-pink",
      text: "text-neon-pink",
      glow: "neon-glow-pink",
      border: "border-neon-pink",
    },
    cyan: {
      bg: "bg-neon-cyan",
      text: "text-neon-cyan",
      glow: "neon-glow-cyan",
      border: "border-neon-cyan",
    },
    gold: {
      bg: "bg-neon-gold",
      text: "text-neon-gold",
      glow: "neon-glow-gold",
      border: "border-neon-gold",
    },
    purple: {
      bg: "bg-neon-purple",
      text: "text-neon-purple",
      glow: "neon-glow-purple",
      border: "border-neon-purple",
    },
    green: {
      bg: "bg-neon-green",
      text: "text-neon-green",
      glow: "neon-glow-green",
      border: "border-neon-green",
    },
    blue: {
      bg: "bg-neon-blue",
      text: "text-neon-blue",
      glow: "neon-glow-blue",
      border: "border-neon-blue",
    },
  };

  const featuresData = [
    {
      title: t("features.items.ultra5g.title"),
      desc: t("features.items.ultra5g.desc"),
      color: "pink",
      image: "/images/eastel5g-icon.svg",
    },
    {
      title: t("features.items.roaming.title"),
      desc: t("features.items.roaming.desc"),
      color: "cyan",
      image: "/images/roaming-icon.svg",
    },
    {
      title: t("features.items.incentives.title"),
      desc: t("features.items.incentives.desc"),
      color: "gold",
      image: "/images/incentives-icon.svg",
    },
    {
      title: t("features.items.wallet.title"),
      desc: t("features.items.wallet.desc"),
      color: "purple",
      image: "/images/wallet-icon.svg",
    },
    {
      title: t("features.items.loyalty.title"),
      desc: t("features.items.loyalty.desc"),
      color: "green",
      image: "/images/ecomm-icon.svg",
    },
    {
      title: t("features.items.cashback.title"),
      desc: t("features.items.cashback.desc"),
      color: "blue",
      image: "/images/cashback-icon.svg",
    },
  ];

  const plansData = [
    {
      name: "EZ15",
      price: "RM15",
      data: "30GB 5G/4G",
      color: "pink",
      img: "/images/ez15.png",
    },
    {
      name: "EZ35",
      price: "RM35",
      data: "300GB 5G/4G",
      color: "cyan",
      img: "/images/ez35.png",
    },
    {
      name: "EZ50",
      price: "RM50",
      data: "500GB 5G/4G",
      color: "gold",
      img: "/images/ez50.png",
    },
  ];

  const linkFooter = [
    { name: "consumer", href: "https://eastel.com.my/mobile-plan/" },
    { name: "business", href: "https://eastel.com.my/business/" },
    { name: "promoters", href: "https://eastel.com.my/promoter/" },
    { name: "faq", href: "https://eastel.com.my/faq/" },
  ];

  const footerBottom = [
    { name: "tnc", href: "https://eastel.com.my/terms-and-conditions/" },
    { name: "privacy", href: "https://eastel.com.my/privacy-policy/" },
    { name: "delivery", href: "https://eastel.com.my/delivery-policy/" },
  ];

  const footerSocial = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61560093503671",
    },
    { name: "Instagram", href: "https://www.instagram.com/eastel_official/" },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@eastel_official?is_from_webapp=1&sender_device=pc",
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-neon-pink selection:text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-colors duration-300 border-b ${isScrolled ? "border-white/10" : "border-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Eastel Logo"
              width={63}
              height={63}
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden space-x-8 text-sm font-bold uppercase tracking-widest md:flex items-center">
            <a href="#hero" className="hover:text-neon-pink transition-colors">
              {t("navbar.home")}
            </a>
            <a href="#why" className="hover:text-neon-cyan transition-colors">
              {t("navbar.why")}
            </a>
            <a href="#plans" className="hover:text-neon-gold transition-colors">
              {t("navbar.plans")}
            </a>
            <a
              href="#contact"
              className="hover:text-neon-pink transition-colors"
            >
              {t("navbar.contact")}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
        >
          {/* Real Hero Background */}
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/hero-bg.jpg"
              alt="5G Background"
              fill
              sizes="100vw"
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
          </div>
          <Starfield />

          <div className="container mx-auto text-center">
            <div className="mb-8 inline-block rounded-full border border-neon-cyan/40 bg-neon-cyan/5 px-6 py-2 text-xs font-black uppercase tracking-[0.2em] text-neon-cyan neon-glow-cyan animate-pulse">
              {t("hero.tagline")}
            </div>
            <h1 className="mb-8 text-6xl font-black tracking-tight sm:text-8xl lg:text-9xl leading-[0.9]">
              {t("hero.title1")}
              <br />
              <span className="text-neon-pink neon-text-pink">
                {t("hero.title2")}
              </span>
            </h1>
            <p className="mx-auto mb-14 max-w-2xl text-xl text-white/80 leading-relaxed font-medium">
              {t("hero.desc")}
            </p>

            {/* THE 3 PROMOTER BUTTONS */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mx-auto max-w-5xl mt-16 mb-8">
              <a
                href="#"
                className="flex flex-col items-center justify-center rounded-3xl border border-neon-pink/30 bg-black/40 backdrop-blur-xl p-8 text-center shadow-2xl hover:border-neon-pink transition-all group scale-100 hover:scale-[1.02] active:scale-95"
              >
                <span className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-neon-pink">
                  {t("hero.cta1Title")}
                </span>
                <span className="text-2xl font-black text-white group-hover:neon-text-pink transition-all">
                  {t("hero.cta1Desc")}
                </span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center justify-center rounded-3xl border border-neon-cyan/30 bg-black/40 backdrop-blur-xl p-8 text-center shadow-2xl hover:border-neon-cyan transition-all group scale-100 hover:scale-[1.02] active:scale-95"
              >
                <span className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-neon-cyan">
                  {t("hero.cta2Title")}
                </span>
                <span className="text-2xl font-black text-white group-hover:text-neon-cyan transition-all">
                  {t("hero.cta2Desc")}
                </span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center justify-center rounded-3xl border border-neon-gold/30 bg-black/40 backdrop-blur-xl p-8 text-center shadow-2xl hover:border-neon-gold transition-all group scale-100 hover:scale-[1.02] active:scale-95"
              >
                <span className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-neon-gold">
                  {t("hero.cta3Title")}
                </span>
                <span className="text-2xl font-black text-white group-hover:text-neon-gold transition-all">
                  {t("hero.cta3Desc")}
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Eastel Section */}
        <section id="why" className="py-32 bg-white/2 relative">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">
                {t("features.title")}
              </h2>
              <p className="text-white/40 font-bold tracking-widest uppercase text-xs">
                {t("features.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((item, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5 p-10 transition-all hover:bg-white/10 hover:border-neon-${item.color}/30`}
                >
                  <div className="relative mb-8 inline-block">
                    <div
                      className={`absolute inset-0 blur-2xl opacity-20 ${colorMap[item.color].bg} rounded-full transition-all group-hover:opacity-40`}
                    ></div>
                    <div
                      className={`relative inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white/5 backdrop-blur-xl ${colorMap[item.color].text} ${colorMap[item.color].glow} p-2 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="h-14 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] brightness-110"
                      />
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/50 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-20 text-5xl font-black text-white uppercase tracking-tighter">
              {t("plans.title")}
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {plansData.map((plan, i) => (
                <div
                  key={i}
                  className={`group relative flex flex-col rounded-[3rem] border ${plan.highlight ? "border-neon-cyan neon-glow-cyan bg-neon-cyan/5" : "border-white/10 bg-white/5"} p-2 overflow-hidden transition-all hover:-translate-y-4 shadow-2xl`}
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-[2.5rem]">
                    <Image
                      src={plan.img}
                      alt={plan.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-8 text-left">
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.3em] ${colorMap[plan.color].text}`}
                      >
                        {plan.name}
                      </span>
                      <p className="text-3xl font-black text-white">
                        {plan.price}
                      </p>
                    </div>
                  </div>

                  <div className="p-10 text-left">
                    <div
                      className={`mb-8 flex items-center gap-4 rounded-2xl ${colorMap[plan.color].bg}/10 p-6 border ${colorMap[plan.color].glow}`}
                    >
                      <span
                        className={`text-2xl font-black ${colorMap[plan.color].text}`}
                      >
                        {plan.data}
                      </span>
                      <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                        {t("plans.highSpeed")}
                      </span>
                    </div>

                    <ul className="mb-10 space-y-5">
                      {[
                        t("plans.validity"),
                        t("plans.unlimited"),
                        t("plans.hotspot"),
                      ].map((f, j) => (
                        <li
                          key={j}
                          className="flex items-center text-sm font-semibold text-white/70"
                        >
                          <svg
                            className={`mr-4 h-5 w-5 ${colorMap[plan.color].text}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full rounded-3xl py-5 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:scale-105 active:scale-95 ${colorMap[plan.color].bg}`}
                    >
                      {t("plans.select")} {plan.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-10 rounded-full bg-neon-pink px-8 py-2.5 text-xs font-black uppercase tracking-widest text-white neon-glow-pink hover:scale-105 transition-transform active:scale-95">
              {t("plans.morePlans")}
            </button>
          </div>
        </section>

        {/* App Promo Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="rounded-[4rem] bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 border border-white/10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 backdrop-blur-2xl">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-5xl font-black text-white leading-tight mb-8">
                  {t("promo.title").split("Eastel App")[0]}{" "}
                  <span className="text-neon-pink">Eastel App</span>
                  <br />
                  {t("promo.subtitle")}
                </h2>
                <p className="text-xl text-white/60 font-medium mb-12 max-w-lg">
                  {t("promo.desc")}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a
                    href="#"
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    <Image
                      src="/images/App-Store.png"
                      alt="App Store"
                      width={180}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                  <a
                    href="#"
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    <Image
                      src="/images/Google-Play.png"
                      alt="Google Play"
                      width={180}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                </div>
              </div>
              <div className="flex-1 relative h-96 w-full max-w-sm">
                <div className="absolute inset-0 bg-neon-cyan/20 blur-[100px] rounded-full"></div>
                <div className="relative h-full w-full rounded-[3rem] border-[12px] border-white/5 bg-black/40 shadow-2xl flex items-center justify-center p-8">
                  <div className="text-neon-cyan animate-pulse">
                    <Image
                      src="/images/logo.svg"
                      alt="App Preview"
                      width={220}
                      height={220}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-20 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none">
                  Eastel
                </span>
              </div>
              <p className="text-white/40 max-w-sm font-medium leading-relaxed">
                {t("footer.desc")}
              </p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">
                {t("footer.resources")}
              </h4>
              <ul className="space-y-4 text-sm font-bold text-white/40">
                {linkFooter.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-neon-pink transition-colors uppercase"
                    >
                      {t(`footer.links.${link.name}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">
                {t("footer.follow")}
              </h4>
              <ul className="space-y-4 text-sm font-bold text-white/40">
                {footerSocial.map((platform) => (
                  <li key={platform}>
                    <a
                      href={platform.href}
                      className="hover:text-white transition-colors uppercase"
                    >
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 pt-10 border-t border-white/5 md:flex-row">
            <div className="flex gap-8 text-[10px] text-white/30 uppercase font-black tracking-widest">
              {footerBottom.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {t(`footer.links.${link.name}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
