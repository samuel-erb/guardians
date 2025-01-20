"use client"
import React, {useEffect, useState} from 'react';
import {
    Phone,
    Mail,
    Calendar,
    Camera,
    Music2,
    Settings,
    Clock,
    Map,
    Calculator,
    Compass,
    MessageSquare,
    Chrome,
    LucideIcon
} from 'lucide-react';
import Image from "next/image";
import icon from "@/app/icon.svg";
import Link from "next/link";
import {Battery100Icon, SignalIcon} from "@heroicons/react/24/outline";
import IOSNotification from "@/components/notification";

interface AppIconProps {
    icon: LucideIcon;
    name: string;
    color: string;
    showName?: boolean;
}

const AppIcon: React.FC<AppIconProps> = ({ icon: Icon, name, color, showName }) => (
    <div className="flex flex-col items-center w-16 mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}>
            <Icon size={30} color="white" />
        </div>
        {
            showName &&
            <span className={`text-xs mt-1 text-white`}>{name}</span>
        }
    </div>
);

interface AppData {
    icon: LucideIcon;
    name: string;
    color: string;
}

const IOSHomeScreen: React.FC = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.setTimeout(() => setShow(true), 3000);
    }, []);
    const apps: AppData[] = [
        { icon: Phone, name: "Telefon", color: "bg-green-500" },
        { icon: Mail, name: "Mail", color: "bg-blue-500" },
        { icon: Calendar, name: "Kalender", color: "bg-red-500" },
        { icon: Camera, name: "Kamera", color: "bg-gray-700" },
        { icon: Music2, name: "Musik", color: "bg-pink-500" },
        { icon: Settings, name: "Einstellung", color: "bg-gray-500" },
        { icon: Clock, name: "Uhr", color: "bg-black" },
        { icon: Map, name: "Karten", color: "bg-green-600" },
        { icon: Calculator, name: "Rechner", color: "bg-gray-800" },
        { icon: Compass, name: "Kompass", color: "bg-gray-600" },
        { icon: MessageSquare, name: "Nachrichten", color: "bg-green-400" },
        { icon: Chrome, name: "Safari", color: "bg-blue-600" },
    ];

    return (
        <div className="w-[393px] h-[852px] bg-gradient-to-b from-blue-500 to-purple-500 rounded-[55px] relative overflow-hidden">
            {/* Status Bar */}
            <div className="bg-transparent text-white h-12 flex items-center justify-between px-6">
                <div className="text-sm">{new Date().getHours()}:{new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}</div>
                <div className="flex items-center space-x-2">
                    {/* Signal Strength */}
                    <SignalIcon className="h-4 w-4 text-white"/>
                    <span className="text-sm">5G</span>
                    {/* Battery */}
                    <div className="flex items-center space-x-1">
                        <span className="text-sm">100%</span>
                        <Battery100Icon className="h-5 w-5 text-white"/>
                    </div>
                </div>
            </div>
            <div className={`${show ? "": "hidden"}`}>
                <IOSNotification appName={"iParent"} notificationText={"Es gibt neue Vorschläge!"} openLink={"/notifications"} icon={<div className={`w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    <Image src={icon} alt={"Icon"} fill={false}/>
                </div>} />
            </div>

            {/* App Grid */}
            <div className="grid grid-cols-4 gap-x-2 gap-y-1 m-4">
                {apps.map((app, index) => (
                    <AppIcon
                        key={index}
                        icon={app.icon}
                        name={app.name}
                        color={app.color}
                        showName={true}
                    />
                ))}
                <Link href={"/home"} className="flex flex-col items-center w-16 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center`}>
                        <Image src={icon} alt={"Icon"} fill={false}/>
                    </div>
                    <span className="text-xs mt-1 text-white">iParent</span>
                </Link>
            </div>

            {/* Dock */}
            <div className="absolute bottom-4 left-0 right-0 bg-gray-800 bg-opacity-30 mx-4 rounded-2xl pt-6 px-2">
                <div className="flex justify-around">
                    <AppIcon icon={Phone} name="Telefon" color="bg-green-500" />
                    <AppIcon icon={Mail} name="Mail" color="bg-blue-500" />
                    <AppIcon icon={Chrome} name="Chrome" color="bg-blue-600" />
                    <AppIcon icon={Music2} name="Musik" color="bg-pink-500" />
                </div>
            </div>
        </div>
    );
};

export default IOSHomeScreen;