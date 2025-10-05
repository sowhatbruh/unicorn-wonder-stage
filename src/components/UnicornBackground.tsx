import { useEffect } from 'react';

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const UnicornBackground = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (window.UnicornStudio?.isInitialized) {
      return;
    }

    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.32/dist/unicornStudio.umd.js';
      script.async = true;
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div 
        data-us-project="FtEEV1TYRP71ph6RDJHr" 
        className="w-full h-full"
        style={{ minHeight: '100vh' }}
      />
    </div>
  );
};

export default UnicornBackground;
