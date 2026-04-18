'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Show button after component mounts and after scrolling
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Optional: You can add scroll-based visibility logic here
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stop pulse animation on user interaction
  const handleInteraction = () => {
    setPulse(false);
  };

  const whatsappNumber = '9310842687'; // Replace with your WhatsApp number (include country code)
  const message = 'Hello! I am interested in your course.'; // Default message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .whatsapp-button-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          animation: slide-up 0.5s ease-out;
        }

        @media (max-width: 640px) {
          .whatsapp-button-container {
            bottom: 20px;
            right: 20px;
          }
        }

        .whatsapp-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          border: none;
          position: relative;
          overflow: hidden;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-button:active {
          transform: scale(0.95);
        }

        .whatsapp-button.pulse::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: rgba(12, 226, 90, 0.88);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-ring 2s infinite;
        }

        .whatsapp-button.float {
          animation: float 3s ease-in-out infinite;
        }

        .whatsapp-icon {
          width: 30px;
          height: 30px;
          position: relative;
          z-index: 1;
          animation: scale-in 0.4s ease-out;
        }

        .whatsapp-tooltip {
          position: absolute;
          bottom: 75px;
          right: 0;
          background: #0ac14dff;
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 500;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .whatsapp-button-container:hover .whatsapp-tooltip {
          opacity: 1;
        }
      `}</style>

      {isVisible && (
        <div className="whatsapp-button-container">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-button ${pulse ? 'pulse' : ''} float`}
            onClick={handleInteraction}
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            <img
              src="/WhatsApp.svg.webp"
              alt="WhatsApp"
              className="whatsapp-icon"
            />
          </a>
          <div className="whatsapp-tooltip">Chat with us!</div>
        </div>
      )}
    </>
  );
}