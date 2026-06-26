"use client";

import { useCallback } from 'react';

/**
 * Enterprise Audio Accessibility Hook.
 * Implements Web Speech API for screen-reading critical interface elements.
 * Aligns with global W3C accessibility standards.
 */
export const useAudioAccessibility = () => {
  const speak = useCallback((text: string, lang: string = 'ar-SA') => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Cancel any ongoing speech to prevent cognitive overlap (ZCL principle)
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return { speak };
};
