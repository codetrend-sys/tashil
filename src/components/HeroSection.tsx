import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Download, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import phoneMockup from "@/assets/phone-mockup.png";
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const phoneX = useTransform(smoothX, [0, 1], [-8, 8]);
  const phoneY = useTransform(smoothY, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
      onMouseMove={handleMouseMove}
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

      <div className="container mx-auto px-4 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <motion.img
                src="demo-poster.png"
                alt="TASHIL MAROC ECOM"
                className="w-14 h-14 rounded-xl object-cover mt-6 mix-blend-multiply contrast-[1.1]"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span className="font-heading font-bold text-lg tracking-tight mt-6">TASHIL MAROC ECOM</span>
            </motion.div>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <motion.span
                  className="w-2 h-2 rounded-full gradient-primary"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Sparkles className="h-3.5 w-3.5" />
                {t('hero.badge')}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
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
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
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
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 rounded-xl border-border hover:bg-muted hover:text-black hover:border-primary/30 transition-all duration-300 w-full"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.demo_button')}
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { value: 2500, suffix: "+", label: t('hero.stat_venders'), gradient: "text-gradient" },
                { value: 98, suffix: "%", label: t('hero.stat_satisfaction'), gradient: "text-gradient-gold" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-border" />}
                  <div>
                    <p className={`text-2xl font-heading font-bold ${stat.gradient}`}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-heading font-bold text-gradient">24/7</p>
                <p className="text-sm text-muted-foreground">{t('hero.stat_access')}</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Phone mockup with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div className="relative" style={{ x: phoneX, y: phoneY }}>
              {/* Enhanced Glow Effects */}
              <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
              <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-[60px] opacity-30 animate-pulse-glow" />

              {/* Floating orbit ring */}
              <div className="absolute inset-x-[-15%] inset-y-[-5%] border border-white/5 rounded-[3rem] rotate-12 pointer-events-none" />

              <motion.img
                src={phoneMockup}
                alt="TASHIL MAROC ECOM Dashboard"
                className="relative w-80 lg:w-[420px] rounded-3xl drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] z-10 mix-blend-multiply contrast-[1.1]"
                animate={{ y: [-10, 10, -10], rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Reflection effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] pointer-events-none z-20 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
