import React from "react";

const assets = {
  openai: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  drive: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",
  docs: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_Docs_Folder_Logo.png",
  notion: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  zapier: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Zapier_logo.svg",
  messenger: "https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_4_Logo.svg",
};

const Pill = ({ src, alt, className }) => (
<div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg ${className}`}>
    <img src={src} alt={alt} className="w-7 h-7 object-contain" />
  </div>
);

const ArcIntegrations = () => {
  return (
    <div className="text-gray-800 overflow-hidden h-full flex flex-col items-center justify-center w-full">
      {/* Debug Header */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">Arc Integrations</h3>
      
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] bg-white rounded-lg shadow-lg">
        {/* SVG Curves */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6b7280" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#6b7280" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Motion paths - wider spacing */}
            <path id="arc-top" d="M80 80 C 400 250, 800 224, 1120 80" />
            <path id="arc-mid" d="M80 200 L 1120 200" />
            <path id="arc-bottom" d="M80 320 C 400 160, 800 160, 1120 320" />
          </defs>
          {/* Visible strokes */}
          <use href="#arc-top" stroke="#e5e7eb" strokeWidth="2" fill="none" />
          <use href="#arc-mid" stroke="#e5e7eb" strokeWidth="2" fill="none" />
          <use href="#arc-bottom" stroke="#e5e7eb" strokeWidth="2" fill="none" />

          {/* Light streaks (brighter and thinner, every 3s) */}
          <use href="#arc-top" stroke="#c084fc" strokeWidth="1" strokeLinecap="round" fill="none" filter="url(#glow)" strokeDasharray="50 1200" opacity="0.9">
            <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="3s" repeatCount="indefinite" />
          </use>
          <use href="#arc-mid" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" fill="none" filter="url(#glow)" strokeDasharray="30 1200" opacity="0.9">
            <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="3s" begin="0.6s" repeatCount="indefinite" />
          </use>
          <use href="#arc-bottom" stroke="#10b981" strokeWidth="1" strokeLinecap="round" fill="none" filter="url(#glow)" strokeDasharray="40 1200" opacity="0.9">
            <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="3s" begin="1.2s" repeatCount="indefinite" />
          </use>
        </svg>

        {/* Left Icons - wider spacing */}
        <div className="absolute left-8 top-16">
          <Pill src={assets.drive} alt="Google Drive" />
        </div>
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <Pill src={assets.notion} alt="Notion" />
        </div>
        <div className="absolute left-8 bottom-16">
          <Pill src={assets.whatsapp} alt="WhatsApp" />
        </div>

        {/* Right Icons - wider spacing */}
        <div className="absolute right-8 top-16">
          <Pill src={assets.docs} alt="Google Docs" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <Pill src={assets.zapier} alt="Zapier" />
        </div>
        <div className="absolute right-8 bottom-16">
          <Pill src={assets.messenger} alt="Messenger" />
        </div>

        {/* Center Node - larger */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl ring-1 ring-gray-200">
            <img src={assets.openai} alt="OpenAI" className="w-10 h-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcIntegrations;