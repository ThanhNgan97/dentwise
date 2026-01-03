'use client';

import React from 'react';

export function Footer() {
    return (
        <footer className="border-t py-12 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} DentWise. All rights reserved.</p>
            </div>
        </footer>
    );
}
