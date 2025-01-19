'use client';

import React from 'react';
import { HeartIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import {BrainIcon} from "lucide-react";

interface ChildProfile {
  name: string;
  age: number;
}

interface RecommendationCard {
  title: string;
  description: string;
  icon: any;
  category: string;
}

export default function HomePage() {
  // Demo-Daten für ein Kind
  const childProfile: ChildProfile = {
    name: "Max",
    age: 8
  };

  // Altersgerechte Empfehlungen
  const recommendations: RecommendationCard[] = [
    {
      title: "Gesunde Ernährung",
      description: "In diesem Alter ist eine ausgewogene Ernährung besonders wichtig. Tipps für kindgerechte, gesunde Mahlzeiten.",
      icon: HeartIcon,
      category: "Ernährung"
    },
    {
      title: "Mediennutzung",
      description: "Altersgerechte Empfehlungen zur Bildschirmzeit und digitalen Medien für 8-Jährige.",
      icon: SparklesIcon,
      category: "Prävention"
    },
    {
      title: "Soziale Kompetenzen",
      description: "Fördern Sie die Entwicklung von Freundschaften und sozialen Fähigkeiten.",
      icon: UserGroupIcon,
      category: "Kommunikation"
    },
    {
      title: "Lernentwicklung",
      description: "Unterstützen Sie die schulische Entwicklung mit spielerischen Lernmethoden.",
      icon: BrainIcon,
      category: "Erziehung"
    }
  ];

  return (
      <div className="px-4 py-6 bg-gray-50">
        {/* Personalisierte Begrüßung */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            {childProfile.name}s Entwicklung
          </h1>
          <p className="text-gray-500 mt-1">
            Alter: {childProfile.age} Jahre
          </p>
        </div>

        {/* Tages-Update */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Heute wichtig</h2>
            <span className="text-blue-500 text-sm">Mehr</span>
          </div>
          <p className="mt-2 text-gray-600">
            Im Alter von {childProfile.age} Jahren entwickelt sich das Selbstbewusstsein
            besonders stark. Unterstützen Sie diese Phase aktiv!
          </p>
        </div>

        {/* Empfehlungskarten */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium mb-4">Empfehlungen</h2>
          {recommendations.map((card, index) => (
              <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <card.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{card.title}</h3>
                      <span className="text-xs text-gray-500">{card.category}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>

        {/* Fortschrittsanzeige */}
        <div className="mt-8 bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-2">Entwicklungsfortschritt</h2>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: '75%' }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Nächster Meilenstein in 2 Wochen
          </p>
        </div>
      </div>
  );
}