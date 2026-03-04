import React, { useState, useRef, useEffect } from 'react'; // 🟢 useRef, useEffect added
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareIcon, X as XIcon } from 'lucide-react';

const WhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '94763851618'; // ✅ Correct format for Sri Lanka
  const textareaRef = useRef<HTMLTextAreaElement>(null); // 🟢 Added

  // 🟢 Automatically focus input when modal opens
  useEffect(() => {
    if (isModalOpen && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 200);
    }
  }, [isModalOpen]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setMessage('');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      handleCloseModal();
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
        onClick={handleOpenModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact via WhatsApp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageSquareIcon className="w-6 h-6" />
      </motion.button>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-green-600 text-white flex items-center justify-between">
                <div className="flex items-center">
                  <MessageSquareIcon className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-bold">Professional Inquiry</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-gray-200 focus:outline-none"
                  aria-label="Close dialog"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="p-6">
                <div className="mb-4">
                  <label
                    htmlFor="whatsapp-message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="whatsapp-message"
                    ref={textareaRef} // 🟢 Focus target
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Type your professional inquiry here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mr-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
