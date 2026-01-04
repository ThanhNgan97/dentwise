'use client';

import { SignUpButton } from '@clerk/nextjs';
import React from 'react';
import { Button } from '../ui/button';
import { CheckCircleIcon } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

function PricingSection() {
    const [activePlan, setActivePlan] = React.useState('AI Basic');
    const { dict } = useLanguage();

    // Standard button classes for the active state (Gradient Primary)
    const activeBtnClass = "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground shadow-lg hover:shadow-xl border-0";

    // Standard card background for the active state
    const activeCardBg = "bg-gradient-to-br from-card/95 to-card/70 border-primary shadow-2xl shadow-primary/20 -translate-y-4";

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
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <div
                        className={`relative group cursor-pointer transition-all duration-500 ease-out ${activePlan === 'Free' ? 'scale-110 z-20' : 'scale-100 hover:scale-105 z-0'
                            }`}
                        onClick={() => setActivePlan('Free')}
                    >
                        <div className={`relative backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 ${activePlan === 'Free'
                            ? activeCardBg
                            : 'bg-gradient-to-br from-card/90 to-card/60 border-border/50 hover:border-primary/30'
                            }`}>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{dict.pricing.plans.free.name}</h3>
                                    <div className="flex items-end gap-1">
                                        <span className={`text-4xl font-bold ${activePlan === 'Free' ? '' : 'bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'}`}>
                                            {dict.pricing.plans.free.price}
                                        </span>
                                        <span className="text-muted-foreground mb-1">{dict.pricing.month}</span>
                                    </div>
                                    <p className="text-muted-foreground">{dict.pricing.plans.free.description}</p>
                                </div>
                                <SignUpButton mode="modal">
                                    <Button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${activePlan === 'Free'
                                        ? activeBtnClass
                                        : 'bg-gradient-to-r from-muted to-muted/80 text-foreground'
                                        }`}>
                                        {dict.pricing.plans.free.cta}
                                    </Button>
                                </SignUpButton>

                                <div className="space-y-4">
                                    {dict.pricing.plans.free.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${activePlan === 'Free' ? 'text-primary-foreground' : 'text-primary'}`} />
                                            {/* Note: Check icon color might want to stay Primary everywhere or change? Keeping consistent Primary color usually looks better unless dark bg */}
                                            {/* Actually in Basic it is text-primary. Let's keep it text-primary. The background is card so text-primary is visible. */}
                                            {/* Reverting Icon logic to just text-primary as in Basic plan */}
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Plan - Featured */}
                    <div
                        className={`relative group cursor-pointer transition-all duration-500 ease-out ${activePlan === 'AI Basic' ? 'scale-110 z-20' : 'scale-100 hover:scale-105 z-0'
                            }`}
                        onClick={() => setActivePlan('AI Basic')}
                    >
                        {/* Popular Badge - Only show if Active */}
                        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300 ${activePlan === 'AI Basic' ? 'opacity-100' : 'opacity-0'
                            }`}>
                            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                {dict.pricing.mostPopular}
                            </div>
                        </div>

                        <div className={`relative backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 ${activePlan === 'AI Basic'
                            ? activeCardBg
                            : 'bg-gradient-to-br from-card/95 to-card/70 border-primary/30 hover:border-primary/50 shadow-xl'
                            }`}>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{dict.pricing.plans.basic.name}</h3>
                                    <div className="flex items-end gap-1">
                                        <span className={`text-4xl font-bold ${activePlan === 'AI Basic' ? '' : 'bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'}`}>
                                            {dict.pricing.plans.basic.price}
                                        </span>
                                        <span className="text-muted-foreground mb-1">{dict.pricing.month}</span>
                                    </div>
                                    <p className="text-muted-foreground">{dict.pricing.plans.basic.description}</p>
                                </div>

                                <Button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${activePlan === 'AI Basic'
                                    ? activeBtnClass
                                    : 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground shadow-lg hover:shadow-xl'
                                    }`}>
                                    {dict.pricing.plans.basic.cta}
                                </Button>

                                <div className="space-y-4">
                                    {dict.pricing.plans.basic.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div
                        className={`relative group cursor-pointer transition-all duration-500 ease-out ${activePlan === 'AI Pro' ? 'scale-110 z-20' : 'scale-100 hover:scale-105 z-0'
                            }`}
                        onClick={() => setActivePlan('AI Pro')}
                    >
                        {/* Optional: Add badge if we wanted, but mostly unnecessary for Pro unless requested */}

                        <div className={`relative backdrop-blur-xl rounded-3xl p-8 border-2 transition-all duration-500 ${activePlan === 'AI Pro'
                            ? activeCardBg
                            : 'bg-gradient-to-br from-card/90 to-card/60 border-border/50 hover:border-primary/30'
                            }`}>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">{dict.pricing.plans.pro.name}</h3>
                                    <div className="flex items-end gap-1">
                                        <span className={`text-4xl font-bold ${activePlan === 'AI Pro' ? '' : 'bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'}`}>
                                            {dict.pricing.plans.pro.price}
                                        </span>
                                        <span className="text-muted-foreground mb-1">{dict.pricing.month}</span>
                                    </div>
                                    <p className="text-muted-foreground">{dict.pricing.plans.pro.description}</p>
                                </div>

                                <Button
                                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${activePlan === 'AI Pro'
                                        ? activeBtnClass
                                        : 'border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 bg-transparent text-foreground'
                                        }`}
                                >
                                    {dict.pricing.plans.pro.cta}
                                </Button>

                                <div className="space-y-4">
                                    {dict.pricing.plans.pro.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
