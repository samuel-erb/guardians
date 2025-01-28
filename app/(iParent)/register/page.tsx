'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import icon from "@/app/icon.svg";
import {useRouter} from "next/navigation";

interface RegistrationData {
    // Persönliche Daten
    email: string;
    password: string;
    name: string;
    phone?: string;

    // Familiensituation
    familyStatus: 'single' | 'couple' | 'other';
    occupation: string;
    workingHours: 'fulltime' | 'parttime' | 'homeoffice' | 'other';

    // Kinderinformationen
    children: {
        name: string;
        birthDate: string;
    }[];

    // Einstellungen
    notificationPreference: boolean;
    dataUsageConsent: boolean;
}

export default function RegistrationProcess() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<RegistrationData>({
        email: '',
        password: '',
        name: '',
        phone: '',
        familyStatus: 'single',
        occupation: '',
        workingHours: 'fulltime',
        children: [{ name: '', birthDate: '' }],
        notificationPreference: true,
        dataUsageConsent: false
    });
    const router = useRouter();

    const updateData = (field: string, value: any) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const addChild = () => {
        setData(prev => ({
            ...prev,
            children: [...prev.children, { name: '', birthDate: '' }]
        }));
    };

    const updateChild = (index: number, field: string, value: string) => {
        const newChildren = [...data.children];
        newChildren[index] = { ...newChildren[index], [field]: value };
        setData(prev => ({ ...prev, children: newChildren }));
    };

    const goToNextStep = () => {
        setStep(prev => prev + 1);
    };

    const goToPreviousStep = () => {
        setStep(prev => prev - 1);
    };

    const renderStepIndicator = () => (
        <div className="flex justify-center mb-8">
            {[1, 2, 3, 4].map((number) => (
                <div
                    key={number}
                    className={`w-3 h-3 rounded-full mx-1 ${
                        step >= number ? 'bg-[#A44A3F]' : 'bg-gray-300'
                    }`}
                />
            ))}
        </div>
    );

    const renderStep1 = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
        >
            <div className={"w-full flex items-center justify-center flex-col gap-6"}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    <Image src={icon} alt={"Icon"} fill={false}/>
                </div>
                <h2 className="text-xl font-semibold mb-4">Willkommen bei iParent!</h2>
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-600">E-Mail*</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateData('email', e.target.value)}
                    className="w-full p-3 border rounded-xl bg-white"
                    placeholder="ihre@email.de"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-600">Passwort*</label>
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => updateData('password', e.target.value)}
                    className="w-full p-3 border rounded-xl bg-white"
                    placeholder="Mindestens 8 Zeichen"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-600">Name*</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => updateData('name', e.target.value)}
                    className="w-full p-3 border rounded-xl bg-white"
                    placeholder="Ihr Name"
                />
            </div>
        </motion.div>
    );

    const renderStep2 = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
        >
            <h2 className="text-xl font-semibold mb-4">Ihre Situation</h2>
            <div className="space-y-2">
                <label className="text-sm text-gray-600">Familiensituation</label>
                <select
                    value={data.familyStatus}
                    onChange={(e) => updateData('familyStatus', e.target.value)}
                    className="w-full p-3 border rounded-xl bg-white"
                >
                    <option value="single">Alleinerziehend</option>
                    <option value="couple">Mit Partner/in</option>
                    <option value="other">Andere</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-600">Berufstätigkeit</label>
                <select
                    value={data.workingHours}
                    onChange={(e) => updateData('workingHours', e.target.value)}
                    className="w-full p-3 border rounded-xl bg-white"
                >
                    <option value="fulltime">Vollzeit</option>
                    <option value="parttime">Teilzeit</option>
                    <option value="homeoffice">Home Office</option>
                    <option value="other">Andere</option>
                </select>
            </div>
        </motion.div>
    );

    const renderStep3 = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
        >
            <h2 className="text-xl font-semibold mb-4">Ihre Kinder</h2>
            {data.children.map((child, index) => (
                <div key={index} className="bg-[#F6F4D2] p-4 rounded-xl space-y-3">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600">Name des Kindes</label>
                        <input
                            type="text"
                            value={child.name}
                            onChange={(e) => updateChild(index, 'name', e.target.value)}
                            className="w-full p-3 border rounded-xl bg-white"
                            placeholder="Name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-600">Geburtsdatum</label>
                        <input
                            type="date"
                            value={child.birthDate}
                            onChange={(e) => updateChild(index, 'birthDate', e.target.value)}
                            className="w-full p-3 border rounded-xl bg-white"
                        />
                    </div>
                </div>
            ))}
            <button
                onClick={addChild}
                className="w-full p-3 border-2 border-dashed border-[#A44A3F] rounded-xl text-[#A44A3F] font-medium"
            >
                + Weiteres Kind hinzufügen
            </button>
        </motion.div>
    );

    const renderStep4 = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
        >
            <h2 className="text-xl font-semibold mb-4">Letzte Einstellungen</h2>
            <div className="space-y-4">
                <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        checked={data.notificationPreference}
                        onChange={(e) => updateData('notificationPreference', e.target.checked)}
                        className="w-4 h-4 text-[#A44A3F]"
                    />
                    <span className="text-sm">Benachrichtigungen aktivieren</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        checked={data.dataUsageConsent}
                        onChange={(e) => updateData('dataUsageConsent', e.target.checked)}
                        className="w-4 h-4 text-[#A44A3F]"
                    />
                    <span className="text-sm">Ich stimme der Datenschutzerklärung zu</span>
                </label>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-fit bg-[#D4E09B] p-4">
            {renderStepIndicator()}

            <div className="bg-[#F6F4D2] rounded-xl p-6 shadow-sm">
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}

                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button
                            onClick={goToPreviousStep}
                            className="flex items-center text-[#A44A3F]"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Zurück
                        </button>
                    )}
                    <button
                        onClick={step < 4 ? goToNextStep : () => router.push("/home")}
                        className={`flex items-center justify-center px-6 py-2 rounded-xl text-white ${
                            step === 4 && !data.dataUsageConsent
                                ? 'bg-gray-400'
                                : 'bg-[#A44A3F]'
                        } ml-auto`}
                        disabled={step === 4 && !data.dataUsageConsent}
                    >
                        {step < 4 ? (
                            <>
                                Weiter
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </>
                        ) : (
                            'Registrieren'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}