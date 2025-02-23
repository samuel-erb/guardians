"use client"
import React, {JSX} from 'react';
import { BellIcon } from 'lucide-react';
import {useRouter} from "next/navigation";

interface Props {
    appName: string;
    notificationText: string;
    openLink: string;
    icon?: JSX.Element;
}

const IOSNotification = ({appName, notificationText, openLink, icon}: Props) => {
    const router = useRouter();
    return (
        <div className="w-full max-w-sm bg-white/90 backdrop-blur-lg rounded-2xl p-3 shadow-lg absolute left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-start space-x-3">
                {/* App Icon */}
                <div className="flex-shrink-0">
                    {
                        icon &&
                        icon

                    }
                    {
                        !icon &&
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <BellIcon className="w-7 h-7 text-white" />
                        </div>
                    }
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-base">{appName}</h3>
                            <p className="text-xs text-gray-500">jetzt</p>
                        </div>
                    </div>

                    {/* Message */}
                    <p className="mt-1 text-sm">
                        {notificationText}
                    </p>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-2 flex space-x-2">
                <button onClick={() => router.push(openLink)} className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-lg py-1.5 text-sm font-medium">
                    Öffnen
                </button>
            </div>
        </div>
    );
};

export default IOSNotification;