import React from "react";

const icons = {
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  notion: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
  drive: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",
  openai: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
};

const OrbitIntegrations = () => {
  return (
    <div className="text-gray-800 h-full flex flex-col justify-center items-center">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Connected <span className="text-blue-600">Integrations</span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2 max-w-xs mx-auto">
          Seamlessly sync your documents, chats, and notes with the tools you already use.
        </p>
      </div>

      <div className="relative mx-auto" style={{ width: "320px", height: "320px" }}>
        {/* Outer orbit ring */}
        <div className="absolute inset-0 rounded-full border border-gray-200"></div>
        {/* Inner orbit ring */}
        <div className="absolute inset-0 m-10 rounded-full border border-gray-200"></div>

        {/* Rotating group (outer) */}
        <div className="absolute inset-0" style={{ animation: "spin 28s linear infinite" }}>
          {/* WhatsApp top-left */}
          <img src={icons.whatsapp} alt="WhatsApp" className="absolute w-7 h-7 -top-2 left-1/4 drop-shadow" />
          {/* Notion right */}
          <img src={icons.notion} alt="Notion" className="absolute w-8 h-8 top-16 -right-2" />
          {/* OpenAI bottom-right */}
          <img src={icons.openai} alt="OpenAI" className="absolute w-8 h-8 bottom-8 right-8" />
          {/* Google Drive bottom */}
          <img src={icons.drive} alt="Google Drive" className="absolute w-8 h-8 -bottom-3 left-1/2 -translate-x-1/2" />
        </div>

        {/* Rotating group (inner, opposite direction) */}
        <div className="absolute inset-10" style={{ animation: "spin-rev 20s linear infinite" }}>
          {/* Notion inner-left */}
          <img src={icons.notion} alt="Notion" className="absolute w-5 h-5 top-16 left-4" />
          {/* OpenAI inner-right */}
          <img src={icons.openai} alt="OpenAI" className="absolute w-6 h-6 top-24 right-6" />
          {/* WhatsApp inner-bottom-left */}
          <img src={icons.whatsapp} alt="WhatsApp" className="absolute w-4 h-4 bottom-6 left-16" />
          {/* Drive inner-bottom-right */}
          <img src={icons.drive} alt="Google Drive" className="absolute w-6 h-6 bottom-6 right-16" />
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes spin-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        `}</style>
      </div>
    </div>
  );
};

export default OrbitIntegrations;