import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '@/app/globals.css';
import React from 'react';
import {SignalIcon} from '@heroicons/react/24/outline';
import {TabBar} from '@/components/tab-bar';
import {BatteryCharging} from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'iPhone App',
    description: 'Eine iPhone-ähnliche Web-App',
};

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${inter.className} bg-gray-900 min-h-screen flex gap-4 flex-col items-center justify-center`}>
        <div className="w-[393px] h-[852px] bg-gray-50 flex flex-col relative overflow-hidden rounded-[55px] shadow-2xl">
            {/* Status Bar */}
            <div className="bg-black text-white h-12 flex items-center justify-between px-6 safe-top">
                <div className="text-sm">{new Date().getHours()}:{new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}</div>
                <div className="flex items-center space-x-2">
                    {/* Signal Strength */}
                    <SignalIcon className="h-4 w-4 text-white"/>
                    <span className="text-sm">5G</span>
                    {/* Battery */}
                    <div className="flex items-center space-x-1">
                        <span className="text-sm">100%</span>
                        <BatteryCharging className="h-5 w-5 text-white"/>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-[#D4E09B]">
                {children}
            </main>

            {/* Tab bar */}
            <TabBar/>
        </div>
        </div>
    );
}