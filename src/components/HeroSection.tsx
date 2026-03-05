import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Download, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const CountUp = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-primary/20"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.2, 0.6, 0.2],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const { t } = useTranslation();
  const apkUrl = "https://tashil.rakopssolutions.com/TASHIL-MAROC-ECOM.apk";


  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl animate-blob"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-blob"
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[
        { delay: 0, x: 10, y: 20 }, { delay: 1, x: 85, y: 15 },
        { delay: 2, x: 70, y: 70 }, { delay: 0.5, x: 25, y: 80 },
        { delay: 1.5, x: 50, y: 40 }, { delay: 3, x: 90, y: 50 },
      ].map((p, i) => <FloatingParticle key={i} {...p} />)}

      <div className="container mx-auto px-4 py-10 md:py-20 lg:py-0 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="space-y-6 lg:space-y-8 flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3"
            >
              <motion.img
                src="demo-poster.png"
                alt="TASHIL MAROC ECOM"
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover md:mt-6 mix-blend-multiply contrast-[1.1]"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span className="font-heading font-bold text-base md:text-lg tracking-tight md:mt-6">TASHIL MAROC ECOM</span>
            </motion.div>

            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-2 text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              >
                {t('hero.title_part1')}{" "}
                <motion.span
                  className="text-gradient inline-block"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {t('hero.title_highlight')}
                </motion.span>{" "}
                {t('hero.title_part2')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed px-2 lg:px-0 mx-auto"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            {/* Video Player Section Styled as Phone Mockup - Fixed Stable Version */}
            <div className="relative w-full max-w-[320px] lg:max-w-[420px] my-8 z-10 mx-auto">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/5 backdrop-blur-sm drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] contrast-[1.1] mix-blend-multiply">
                <motion.video
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className="w-full h-full block object-contain"
                >
                  <source src="/demo-tashil.mp4" type="video/mp4" />
                </motion.video>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="gradient-gold text-secondary-foreground font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden w-full"
                  onClick={() => {
                    const waNumber = '212674901873';
                    const text = encodeURIComponent(t('hero.whatsapp_msg'));
                    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`;
                    const waWindow = window.open(waUrl, '_blank');
                    if (waWindow) waWindow.opener = null;
                    const a = document.createElement('a');
                    a.href = apkUrl;
                    a.setAttribute('download', 'TASHIL-MAROC-ECOM.apk');
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                  }}
                >
                  <span className="absolute inset-0 shimmer-btn" />
                  <Download className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">{t('hero.cta_button')}</span>
                </Button>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-black/40 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 w-full"
                >
                  <div className="bg-secondary rounded-full p-1.5 shadow-lg">
                    <Zap className="w-4 h-4 text-secondary-foreground fill-current" />
                  </div>
                  <p className="text-sm font-black text-white uppercase tracking-tight">
                    {t('hero.activation_code')} <span className="text-secondary text-base">{t('hero.price')}</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4 w-full"
            >
              {[
                { value: 2500, suffix: "+", label: t('hero.stat_venders'), gradient: "text-gradient" },
                { value: 98, suffix: "%", label: t('hero.stat_satisfaction'), gradient: "text-gradient-gold" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <div className="hidden sm:block w-px h-10 bg-border" />}
                  <div className="text-center sm:text-left">
                    <p className={`text-xl sm:text-2xl font-heading font-bold ${stat.gradient}`}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-heading font-bold text-gradient">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('hero.stat_access')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
