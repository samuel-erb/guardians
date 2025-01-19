'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon, ClockIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface SearchSuggestion {
    id: number;
    title: string;
    category: string;
}

interface TopicCategory {
    id: number;
    title: string;
    topics: string[];
    color: string;
}

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const recentSearches = [
        "Gesunde Ernährung",
        "Medienkonsum",
        "Grenzen setzen",
        "Sport Aktivitäten"
    ];

    const suggestions: SearchSuggestion[] = [
        { id: 1, title: "Digitale Medien im Kindesalter", category: "Prävention" },
        { id: 2, title: "Gesunde Snacks für Kinder", category: "Ernährung" },
        { id: 3, title: "Kommunikation in der Familie", category: "Erziehung" },
        { id: 4, title: "Bewegung & Sport", category: "Gesundheit" }
    ];

    const categories: TopicCategory[] = [
        {
            id: 1,
            title: "Prävention",
            topics: ["Medienkonsum", "Selbstvertrauen", "Risikofaktoren"],
            color: "bg-blue-100 text-blue-600"
        },
        {
            id: 2,
            title: "Entwicklung",
            topics: ["Alter 0-3", "Alter 4-6", "Alter 7-10", "Teenager"],
            color: "bg-green-100 text-green-600"
        },
        {
            id: 3,
            title: "Ernährung",
            topics: ["Gesunde Mahlzeiten", "Süßigkeiten", "Getränke"],
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <div className="min-h-full bg-gray-50">
            {/* Search Header */}
            <div className="bg-white px-4 py-3 sticky top-0 z-10 shadow-sm">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Suche nach Themen, Tipps..."
                        className="w-full bg-gray-100 pl-10 pr-10 py-3 rounded-xl text-base outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                    />
                    {searchQuery && (
                        <button
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setSearchQuery('')}
                        >
                            <XMarkIcon className="w-5 h-5 text-gray-400" />
                        </button>
                    )}
                </div>
            </div>

            <div className="px-4 py-6">
                {/* Recent Searches */}
                {!searchQuery && (
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Letzte Suchen</h2>
                        <div className="space-y-3">
                            {recentSearches.map((search, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-600">
                                    <ClockIcon className="w-5 h-5 text-gray-400" />
                                    <span>{search}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Search Suggestions */}
                {searchQuery && (
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Vorschläge</h2>
                        <div className="space-y-3">
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion.id}
                                    className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
                                >
                                    <div>
                                        <h3 className="font-medium">{suggestion.title}</h3>
                                        <span className="text-sm text-gray-500">{suggestion.category}</span>
                                    </div>
                                    <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Categories */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Kategorien</h2>
                    <div className="space-y-6">
                        {categories.map((category) => (
                            <div key={category.id} className="bg-white p-4 rounded-xl shadow-sm">
                                <h3 className="font-medium mb-3">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.topics.map((topic, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 rounded-full text-sm ${category.color}`}
                                        >
                      {topic}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}