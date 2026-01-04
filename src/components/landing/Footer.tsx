'use client';

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/lib/language-context';

function Footer() {
    const { dict } = useLanguage();

    return (
        <footer className="px-6 py-12 border-t bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="DentWise Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="font-semibold text-lg">DentWise</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {dict.footer.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">{dict.footer.product.title}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {dict.footer.product.items.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-foreground">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">{dict.footer.support.title}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {dict.footer.support.items.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-foreground">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">{dict.footer.legal.title}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {dict.footer.legal.items.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-foreground">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>{dict.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
