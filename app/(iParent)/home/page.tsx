'use client';

import React, { useState } from 'react';
import { HeartIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { BrainIcon, Baby, Trophy, Medal, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ChatButton from "@/components/chat-button";

interface ChildProfile {
  name: string;
  age: number;
  points: number;
  level: number;
  achievements: Achievement[];
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  progress: number;
}

interface RecommendationCard {
  title: string;
  description: string;
  icon: any;
  iconBackground: string;
  category: string;
}

export default function HomePage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const childProfile: ChildProfile = {
    name: "Max",
    age: 8,
    points: 450,
    level: 3,
    achievements: [
      {
        id: 1,
        title: "Ernährungs-Profi",
        description: "5 gesunde Mahlzeiten dokumentiert",
        icon: HeartIcon,
        unlocked: true,
        progress: 100
      },
      {
        id: 2,
        title: "Sozial-Star",
        description: "3 neue Freundschaften geknüpft",
        icon: UserGroupIcon,
        unlocked: false,
        progress: 66
      },
      {
        id: 3,
        title: "Lern-Meister",
        description: "10 Lerneinheiten abgeschlossen",
        icon: BrainIcon,
        unlocked: false,
        progress: 40
      }
    ]
  };

  const recommendations: RecommendationCard[] = [
    {
      title: "Gesunde Ernährung",
      description: "In diesem Alter ist eine ausgewogene Ernährung besonders wichtig. Tipps für kindgerechte, gesunde Mahlzeiten.",
      icon: HeartIcon,
      iconBackground: "#F6F4D2",
      category: "Ernährung"
    },
    {
      title: "Mediennutzung",
      description: "Altersgerechte Empfehlungen zur Bildschirmzeit und digitalen Medien für 8-Jährige.",
      icon: SparklesIcon,
      iconBackground: "#CBDFBD",
      category: "Prävention"
    },
    {
      title: "Soziale Kompetenzen",
      description: "Fördern Sie die Entwicklung von Freundschaften und sozialen Fähigkeiten.",
      icon: UserGroupIcon,
      iconBackground: "#F19C79",
      category: "Kommunikation"
    },
    {
      title: "Lernentwicklung",
      description: "Unterstützen Sie die schulische Entwicklung mit spielerischen Lernmethoden.",
      icon: BrainIcon,
      iconBackground: "#A44A3F",
      category: "Erziehung"
    }
  ];

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setOpenDialog(true);
  };

  return (
      <div className="px-4 py-6 bg-[#D4E09B]">
        <ChatButton/>
        {/* Header für Mobile */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Baby className="w-8 h-8 mr-2"/>
              <h1 className="text-xl font-semibold text-gray-900">{childProfile.name}s Profil</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#F6F4D2] px-2 py-1 rounded-full">
                <Trophy className="w-4 h-4 text-[#A44A3F] mr-1"/>
                <span className="text-sm font-medium text-[#A44A3F]">{childProfile.level}</span>
              </div>
              <div className="flex items-center bg-[#F6F4D2] px-2 py-1 rounded-full">
                <Star className="w-4 h-4 text-[#A44A3F] mr-1"/>
                <span className="text-sm font-medium text-[#A44A3F]">{childProfile.points}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Alter: {childProfile.age} Jahre
          </p>
        </div>

        {/* Tages-Update */}
        <div className="bg-[#F6F4D2] rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Heute wichtig</h2>
            <span className="text-[#A44A3F] text-sm">Mehr</span>
          </div>
          <p className="mt-2 text-gray-600">
            Im Alter von {childProfile.age} Jahren entwickelt sich das Selbstbewusstsein
            besonders stark. Unterstützen Sie diese Phase aktiv!
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Errungenschaften</h2>
          <div className="grid grid-cols-3 gap-4">
            {childProfile.achievements.map((achievement) => (
                <motion.div
                    key={achievement.id}
                    className={`bg-[#F6F4D2] rounded-xl p-4 cursor-pointer transition-all hover:shadow-md 
                ${!achievement.unlocked && 'opacity-50'}`}
                    onClick={() => handleAchievementClick(achievement)}
                    whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#CBDFBD] rounded-full p-3 mb-2 relative">
                      <achievement.icon className="w-6 h-6 text-[#788c69]" />
                      {achievement.unlocked && (
                          <Medal className="w-4 h-4 text-[#F19C79] absolute -top-1 -right-1" />
                      )}
                    </div>
                    <span className="font-medium text-sm">{achievement.title}</span>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div
                          className="bg-[#F19C79] rounded-full h-1"
                          style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
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
                  className="bg-[#F6F4D2] rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#CBDFBD] rounded-full p-2">
                    <card.icon className="w-6 h-6 text-[#788c69]" />
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
        <div className="mt-8 bg-[#F6F4D2] rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-2">Entwicklungsfortschritt</h2>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
                className="bg-[#F19C79] rounded-full h-2"
                style={{ width: '75%' }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Nächster Meilenstein in 2 Wochen
          </p>
        </div>

        {/* Aktivitäten-Checkliste */}
        <div className="mt-4 bg-[#F6F4D2] rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Aktivitäten-Checkliste</h2>
            <a href="/checkliste" className="text-[#A44A3F] text-sm hover:underline">
              Öffnen
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Verfolgen Sie tägliche Aktivitäten und Erfolge
          </p>
        </div>

        {/* Entwicklungstagebuch */}
        <div className="mt-4 bg-[#F6F4D2] rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Entwicklungstagebuch</h2>
            <a href="/tagebuch" className="text-[#A44A3F] text-sm hover:underline">
              Öffnen
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Dokumentieren Sie wichtige Entwicklungsschritte
          </p>
        </div>

        {/* Achievement Dialog */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedAchievement?.title}</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="text-gray-600">{selectedAchievement?.description}</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                      className="bg-[#F19C79] rounded-full h-2"
                      style={{ width: `${selectedAchievement?.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Fortschritt: {selectedAchievement?.progress}%
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
  );
}