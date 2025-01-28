'use client';

import React, { useState } from 'react';
import {
    User, Bell, Globe, Lock, Moon,
    ChevronRight, Shield, Languages, Baby, Mail,
    Phone, Briefcase, UserPlus
} from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface UserProfile {
    name: string;
    email: string;
    phone: string;
    address: string;
    occupation: string;
    children: {
        name: string;
        age: number;
    }[];
    preferences: {
        notifications: boolean;
        offline: boolean;
        darkMode: boolean;
        language: string;
        twoFactor: boolean;
    };
}

export default function ProfilePage() {
    const [openDialog, setOpenDialog] = useState(false);
    const [activeDialog, setActiveDialog] = useState<string>('');

    const [profile, setProfile] = useState<UserProfile>({
        name: "Sarah Schmidt",
        email: "sarah.schmidt@email.de",
        phone: "+49 123 456789",
        address: "Musterstraße 123, 12345 Berlin",
        occupation: "Teilzeit, Home Office",
        children: [
            { name: "Max", age: 8 },
            { name: "Emma", age: 5 }
        ],
        preferences: {
            notifications: true,
            offline: false,
            darkMode: false,
            language: "Deutsch",
            twoFactor: true
        }
    });

    const handleDialogOpen = (dialogType: string) => {
        setActiveDialog(dialogType);
        setOpenDialog(true);
    };

    const renderDialogContent = () => {
        switch (activeDialog) {
            case 'children':
                return (
                    <>
                        <DialogHeader>
                            <DialogTitle>Kinder</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 space-y-4">
                            {profile.children.map((child, index) => (
                                <div key={index} className="flex items-center justify-between bg-[#F6F4D2] p-3 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Baby className="w-5 h-5 text-[#A44A3F]" />
                                        <div>
                                            <p className="font-medium">{child.name}</p>
                                            <p className="text-sm text-gray-500">{child.age} Jahre</p>
                                        </div>
                                    </div>
                                    <button className="text-[#A44A3F]">Bearbeiten</button>
                                </div>
                            ))}
                            <button className="w-full flex items-center justify-center gap-2 bg-[#CBDFBD] p-3 rounded-lg text-[#A44A3F]">
                                <UserPlus className="w-5 h-5" />
                                Kind hinzufügen
                            </button>
                        </div>
                    </>
                );

            case 'personal':
                return (
                    <>
                        <DialogHeader>
                            <DialogTitle>Persönliche Daten</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Name</label>
                                <input
                                    type="text"
                                    value={profile.name}
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">E-Mail</label>
                                <input
                                    type="email"
                                    value={profile.email}
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500">Telefon</label>
                                <input
                                    type="tel"
                                    value={profile.phone}
                                    className="w-full p-2 border rounded-lg"
                                />
                            </div>
                            <button className="w-full bg-[#A44A3F] text-white p-2 rounded-lg">
                                Speichern
                            </button>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-[#D4E09B] min-h-screen pb-6">
            {/* Profilkopf */}
            <div className="bg-[#F6F4D2] p-4 rounded-b-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#A44A3F] rounded-full p-3">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">{profile.name}</h1>
                        <p className="text-sm text-gray-600">
                            {profile.children.length} {profile.children.length === 1 ? 'Kind' : 'Kinder'}
                        </p>
                    </div>
                </div>

                {/* Kontaktinformationen */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        {profile.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        {profile.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        {profile.occupation}
                    </div>
                </div>
            </div>

            {/* Haupteinstellungen */}
            <div className="px-4 mt-6">
                <h2 className="text-sm font-medium text-gray-500 mb-3">PROFIL</h2>

                <div className="space-y-2 mb-6">
                    <button
                        onClick={() => handleDialogOpen('personal')}
                        className="w-full bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Persönliche Daten</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>

                    <button
                        onClick={() => handleDialogOpen('children')}
                        className="w-full bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <Baby className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Kinder</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                <h2 className="text-sm font-medium text-gray-500 mb-3">EINSTELLUNGEN</h2>

                <div className="space-y-2">
                    <div className="bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Benachrichtigungen</span>
                        </div>
                        <Switch
                            checked={profile.preferences.notifications}
                            onCheckedChange={(checked) =>
                                setProfile(prev => ({
                                    ...prev,
                                    preferences: { ...prev.preferences, notifications: checked }
                                }))
                            }
                        />
                    </div>

                    <div className="bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Offline-Modus</span>
                        </div>
                        <Switch
                            checked={profile.preferences.offline}
                            onCheckedChange={(checked) =>
                                setProfile(prev => ({
                                    ...prev,
                                    preferences: { ...prev.preferences, offline: checked }
                                }))
                            }
                        />
                    </div>

                    <div className="bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Moon className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Dark Mode</span>
                        </div>
                        <Switch
                            checked={profile.preferences.darkMode}
                            onCheckedChange={(checked) =>
                                setProfile(prev => ({
                                    ...prev,
                                    preferences: { ...prev.preferences, darkMode: checked }
                                }))
                            }
                        />
                    </div>
                </div>

                <h2 className="text-sm font-medium text-gray-500 mb-3 mt-6">SICHERHEIT</h2>

                <div className="space-y-2">
                    <div className="bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Zwei-Faktor-Auth</span>
                        </div>
                        <Switch
                            checked={profile.preferences.twoFactor}
                            onCheckedChange={(checked) =>
                                setProfile(prev => ({
                                    ...prev,
                                    preferences: { ...prev.preferences, twoFactor: checked }
                                }))
                            }
                        />
                    </div>

                    <button className="w-full bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Datenschutz</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>

                    <button className="w-full bg-[#F6F4D2] p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Languages className="w-5 h-5 text-[#A44A3F]" />
                            <span className="text-sm">Sprache</span>
                        </div>
                        <div className="text-sm text-gray-500">{profile.preferences.language}</div>
                    </button>
                </div>

                <button
                    className="w-full mt-8 bg-[#A44A3F] text-white py-3 rounded-xl font-medium"
                >
                    Ausloggen
                </button>
            </div>

            {/* Dialoge */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    {renderDialogContent()}
                </DialogContent>
            </Dialog>
        </div>
    );
}