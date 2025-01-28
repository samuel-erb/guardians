import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ChatButton() {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bottom-20 right-6"
        >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#A44A3F] rounded-full p-4 shadow-lg relative"
            >
                <MessageCircle className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 bg-[#F19C79] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          1
        </span>
            </motion.button>
        </motion.div>
    );
}