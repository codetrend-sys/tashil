import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isAr = i18n.language.startsWith('ar');

    return (
        <div className="fixed top-6 end-6 z-[100]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-foreground shadow-2xl transition-all duration-300 gap-2 px-4 py-6"
                    >
                        <Languages className="h-5 w-5 text-primary" />
                        <span className="font-bold uppercase tracking-wider text-sm text-black">
                            {isAr ? 'AR' : 'FR'}
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={isAr ? "start" : "end"} className="bg-white/90 backdrop-blur-2xl border-white/20 rounded-2xl p-2 shadow-2xl mt-2 overflow-hidden">
                    <DropdownMenuItem
                        onClick={() => toggleLanguage('fr')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${i18n.language.startsWith('fr') ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-primary/5'}`}
                    >
                        <span className="text-lg">🇫🇷</span>
                        <span>{t('common.lang_fr')}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => toggleLanguage('ar')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${i18n.language.startsWith('ar') ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-primary/5'}`}
                    >
                        <span className="text-lg">🇲🇦</span>
                        <span>{t('common.lang_ar')}</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default LanguageSwitcher;
