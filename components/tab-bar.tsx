'use client';

import {
    BellIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    UserIcon
} from '@heroicons/react/24/outline';
import {
    BellIcon as BellIconSolid,
    HomeIcon as HomeIconSolid,
    MagnifyingGlassIcon as MagnifyingGlassIconSolid,
    UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';

const tabs = [
    { name: 'Home', href: '/home', icon: HomeIcon, activeIcon: HomeIconSolid },
    { name: 'Suche', href: '/search', icon: MagnifyingGlassIcon, activeIcon: MagnifyingGlassIconSolid },
    { name: 'Mitteilungen', href: '/notifications', icon: BellIcon, activeIcon: BellIconSolid },
    { name: 'Profil', href: '/profile', icon: UserIcon, activeIcon: UserIconSolid }
];

export function TabBar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="bg-white border-t border-gray-200 safe-bottom">
            <div className="flex justify-around items-center h-16 px-4">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href;
                    const Icon = isActive ? tab.activeIcon : tab.icon;

                    return (
                        <button
                            key={tab.name}
                            onClick={() => router.push(tab.href)}
                            className="flex flex-col items-center"
                        >
                            <Icon
                                className={`h-6 w-6 ${
                                    isActive ? 'text-blue-500' : 'text-gray-500'
                                }`}
                            />
                            <span
                                className={`text-xs mt-1 ${
                                    isActive ? 'text-blue-500 font-medium' : 'text-gray-500'
                                }`}
                            >
                                {tab.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}