export const salonConfig = {
  businessInfo: {
    name: "Elegance Beauty Lounge",
    tagline: "Where Beauty Meets Artistry",
    phone: "+91 98765 43210",
    whatsappNumber: "919876543210",
    email: "hello@elegancebeauty.com",
    address: "123 Park Street, Kolkata, West Bengal 700016",
  },
  location: {
    lat: 22.5726,
    lng: 88.3639,
    googleMapsUrl: "https://maps.google.com/?q=22.5726,88.3639",
  },
  workingHours: [
    { day: "Monday", hours: "10:00 AM - 8:00 PM", discount: true },
    { day: "Tuesday", hours: "10:00 AM - 8:00 PM", discount: false },
    { day: "Wednesday", hours: "10:00 AM - 8:00 PM", discount: false },
    { day: "Thursday", hours: "10:00 AM - 8:00 PM", discount: false },
    { day: "Friday", hours: "10:00 AM - 8:00 PM", discount: false },
    { day: "Saturday", hours: "10:00 AM - 8:00 PM", discount: false },
    { day: "Sunday", hours: "11:00 AM - 6:00 PM", discount: false },
  ],
  services: [
    {
      id: 1,
      name: { en: "Haircut & Styling", hi: "हेयरकट और स्टाइलिंग" },
      description: {
        en: "Professional cuts and styling for all hair types",
        hi: "सभी प्रकार के बालों के लिए पेशेवर कटिंग और स्टाइलिंग",
      },
      price: "From ₹500",
      icon: "Scissors",
    },
    {
      id: 2,
      name: { en: "Hair Coloring", hi: "बाल रंगना" },
      description: {
        en: "Premium hair color with international brands",
        hi: "अंतर्राष्ट्रीय ब्रांडों के साथ प्रीमियम बाल रंग",
      },
      price: "From ₹1500",
      icon: "Palette",
    },
    {
      id: 3,
      name: { en: "Bridal Makeup", hi: "ब्राइडल मेकअप" },
      description: {
        en: "Complete bridal and special occasion makeup",
        hi: "पूर्ण दुल्हन और विशेष अवसर मेकअप",
      },
      price: "From ₹3000",
      icon: "Sparkles",
    },
    {
      id: 4,
      name: { en: "Facial Treatments", hi: "फेशियल ट्रीटमेंट्स" },
      description: {
        en: "Rejuvenating facials for all skin types",
        hi: "सभी त्वचा प्रकारों के लिए पुनर्जीवित फेशियल",
      },
      price: "From ₹800",
      icon: "Heart",
    },
    {
      id: 5,
      name: { en: "Manicure & Pedicure", hi: "मैनीक्योर और पेडीक्योर" },
      description: {
        en: "Luxury nail care and design services",
        hi: "विलासितापूर्ण नेल केयर और डिजाइन सेवाएँ",
      },
      price: "From ₹600",
      icon: "Hand",
    },
    {
      id: 6,
      name: { en: "Hair Spa & Treatment", hi: "हेयर स्पा और ट्रीटमेंट" },
      description: {
        en: "Deep conditioning and hair repair treatments",
        hi: "गहरी कंडीशनिंग और बाल मरम्मत उपचार",
      },
      price: "From ₹1200",
      icon: "Droplet",
    },
    {
      id: 7,
      name: { en: "Threading & Waxing", hi: "थ्रेडिंग और वैक्सिंग" },
      description: {
        en: "Precision hair removal services",
        hi: "सटीक बाल हटाने की सेवाएँ",
      },
      price: "From ₹150",
      icon: "Zap",
    },
    {
      id: 8,
      name: { en: "Skin Care", hi: "त्वचा की देखभाल" },
      description: {
        en: "Specialized skincare treatments and consultations",
        hi: "विशेष त्वचा देखभाल उपचार और परामर्श",
      },
      price: "From ₹1000",
      icon: "Smile",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: {
        en: "Absolutely loved my bridal makeup! The team was professional and made me feel like a princess.",
        hi: "मेरा ब्राइडल मेकअप बहुत पसंद आया! टीम पेशेवर थी और मुझे राजकुमारी की तरह महसूस कराया।",
      },
      service: { en: "Bridal Makeup", hi: "ब्राइडल मेकअप" },
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Anjali Verma",
      rating: 4.5,
      text: {
        en: "Best haircut I've ever had! The stylists really understand hair and provide great advice.",
        hi: "मेरा सबसे अच्छा हेयरकट! स्टाइलिस्ट वास्तव में बालों को समझते हैं और बहुत अच्छी सलाह देते हैं।",
      },
      service: { en: "Haircut & Styling", hi: "हेयरकट और स्टाइलिंग" },
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Neha Gupta",
      rating: 5,
      text: {
        en: "The facial treatment left my skin glowing! Very relaxing atmosphere and professional staff.",
        hi: "फेशियल ट्रीटमेंट के बाद मेरी त्वचा चमक रही है! बहुत आरामदायक माहौल और पेशेवर स्टाफ।",
      },
      service: { en: "Facial Treatments", hi: "फेशियल ट्रीटमेंट्स" },
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Sneha Patel",
      rating: 5,
      text: {
        en: "Excellent manicure and pedicure service! Love the attention to detail and creative designs.",
        hi: "उत्कृष्ट मैनीक्योर और पेडीक्योर सेवा! विस्तार पर ध्यान और रचनात्मक डिजाइन से प्यार है।",
      },
      service: { en: "Manicure & Pedicure", hi: "मैनीक्योर और पेडीक्योर" },
      avatar: "https://i.pravatar.cc/150?img=4",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1522335617519-bf20b51fa3d8?w=800&h=600&fit=crop",
      alt: "Professional makeup artistry",
      category: "Makeup",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      alt: "Elegant hair styling",
      category: "Styling",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559599810-46d8ec8dd5e3?w=800&h=600&fit=crop",
      alt: "Beautiful bridal makeup",
      category: "Bridal",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1607990591413-b91529b2b9fb?w=800&h=600&fit=crop",
      alt: "Luxury nail art design",
      category: "Nails",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1570172619644-a78b758c3f6f?w=800&h=600&fit=crop",
      alt: "Spa and relaxation therapy",
      category: "Spa",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop",
      alt: "Premium facial treatment",
      category: "Facials",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
      alt: "Hair transformation",
      category: "Hair",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1564865000505-f97a8aaad6de?w=800&h=600&fit=crop",
      alt: "Luxury beauty experience",
      category: "Experience",
    },
  ],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919876543210",
  },
  whatsappTemplate: "Hi! I would like to book an appointment at {salonName}. Can you help me with the availability?",
};

export default salonConfig;
