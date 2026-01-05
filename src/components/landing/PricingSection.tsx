'use client';

import { SignUpButton } from '@clerk/nextjs';
import React from 'react';
import { Button } from '../ui/button';
import { CheckCircleIcon } from "lucide-react";
import { useLanguage } from '@/lib/language-context';
import { PricingCards } from './PricingCards';

function PricingSection() {
    const { dict } = useLanguage();

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background via-muted/3 to-background">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-primary">{dict.pricing.badge}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {dict.pricing.titleStart}
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {dict.pricing.titleEnd}
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {dict.pricing.subtitle}
                    </p>
                </div>

                {/* Pricing Cards */}
                <PricingCards />
            </div>
        </section>
    );
}

export default PricingSection;
