import { useEffect } from 'react';
import './LanguageSelector.css';

const LanguageSelector = () => {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'it,de,fr,ro,nl,en,ar,zh,pl',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="google_translate_element" className="language-selector"></div>
  );
};

export default LanguageSelector;