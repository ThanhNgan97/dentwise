'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '../LanguageSwitcher';

function Header() {
    const { language, setLanguage, dict } = useLanguage();

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={"/logo.png"} alt="DentWise Logo" width={32} height={32} className="w-11" />
                    <span className="font-semibold text-lg">DentWise</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                        {dict.header.howItWorks}
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                        {dict.header.pricing}
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                        {dict.header.about}
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <SignInButton mode="modal">
                        <Button variant={"ghost"} size={"sm"}>
                            {dict.header.login}
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button size={"sm"}>{dict.header.signUp}</Button>
                    </SignUpButton>
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
}
export default Header;

