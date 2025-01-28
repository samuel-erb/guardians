'use client';

import React, { useState } from 'react';
import { BellIcon, CalendarIcon, CheckCircleIcon, InformationCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Notification {
    id: string;
    type: 'reminder' | 'tip' | 'milestone' | 'update';
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    action?: string;
}

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: '1',
            type: 'reminder',
            title: 'Zeit für den Medien-Check',
            message: 'Überprüfen Sie die Bildschirmzeit und Mediennutzung Ihres Kindes.',
            timestamp: 'Jetzt',
            isRead: false,
            action: 'Jetzt prüfen'
        },
        {
            id: '2',
            type: 'milestone',
            title: 'Neuer Entwicklungsmeilenstein',
            message: 'Max hat einen wichtigen sozialen Entwicklungsschritt erreicht!',
            timestamp: 'Vor 3 Stunden',
            isRead: false,
            action: 'Details'
        },
        {
            id: '3',
            type: 'tip',
            title: 'Tipp des Tages',
            message: 'Gemeinsame Mahlzeiten stärken die Familienbeziehung und fördern gesunde Ernährungsgewohnheiten.',
            timestamp: 'Vor 5 Stunden',
            isRead: true
        },
        {
            id: '4',
            type: 'update',
            title: 'Neue Inhalte verfügbar',
            message: 'Neue Artikel zum Thema "Grenzen setzen" wurden hinzugefügt.',
            timestamp: 'Gestern',
            isRead: true,
            action: 'Ansehen'
        }
    ]);

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'reminder':
                return <CalendarIcon className="w-6 h-6 text-[#A44A3F]" />;
            case 'milestone':
                return <SparklesIcon className="w-6 h-6 text-[#A44A3F]" />;
            case 'tip':
                return <InformationCircleIcon className="w-6 h-6 text-[#A44A3F]" />;
            case 'update':
                return <BellIcon className="w-6 h-6 text-[#A44A3F]" />;
            default:
                return <BellIcon className="w-6 h-6 text-gray-500" />;
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case 'reminder':
                return 'bg-[#CBDFBD]';
            case 'milestone':
                return 'bg-[#F19C79]';
            case 'tip':
                return 'bg-[#F6F4D2]';
            case 'update':
                return 'bg-[#D4E09B]';
            default:
                return 'bg-[#F6F4D2]';
        }
    };

    const markAsRead = (id: string) => {
        setNotifications(notifications.map(notification =>
            notification.id === id ? { ...notification, isRead: true } : notification
        ));
    };

    return (
        <div className="min-h-full bg-[#D4E09B]">
            {/* Header */}
            <div className="bg-[#F6F4D2] px-4 py-3 sticky top-0 z-10 shadow-sm">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900">Mitteilungen</h1>
                    <button className="text-[#A44A3F] text-sm font-medium">
                        Alle gelesen
                    </button>
                </div>
            </div>

            {/* Notifications List */}
            <div className="px-4 py-6 space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`p-4 rounded-xl shadow-sm ${notification.isRead ? 'bg-[#F6F4D2]' : getNotificationColor(notification.type)}`}
                        onClick={() => markAsRead(notification.id)}
                    >
                        <div className="flex space-x-4">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-full p-2 ${notification.isRead ? 'bg-[#CBDFBD]' : getNotificationColor(notification.type)}`}>
                                {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-medium text-gray-900">{notification.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            {notification.message}
                                        </p>
                                    </div>
                                    {!notification.isRead && (
                                        <div className="w-2 h-2 bg-[#A44A3F] rounded-full" />
                                    )}
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs text-gray-500">
                                        {notification.timestamp}
                                    </span>
                                    {notification.action && (
                                        <button className="text-[#A44A3F] text-sm font-medium hover:text-[#F19C79] transition-colors">
                                            {notification.action}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {notifications.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="bg-[#F6F4D2] rounded-full p-4 mb-4">
                        <CheckCircleIcon className="w-8 h-8 text-[#A44A3F]" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                        Keine neuen Mitteilungen
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                        Wir informieren Sie, sobald es Updates gibt
                    </p>
                </div>
            )}
        </div>
    );
}