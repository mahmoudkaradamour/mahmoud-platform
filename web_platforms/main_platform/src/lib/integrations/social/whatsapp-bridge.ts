/**
 * WhatsApp Business Bridge.
 * Generates direct sovereign links for negotiation and support.
 */
export const getWhatsAppLink = (phone: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

/**
 * Facebook Pixel Wrapper.
 * Tracks critical conversions for marketing analytics.
 */
export const trackPixelEvent = (eventName: string, data: any = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  }
};
