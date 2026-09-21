export interface RegistrationFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  occupation: string;
  city: string;
  preferredLanguage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  avatarBg: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BatchInfo {
  day: string;
  date: string;
  time: string;
  totalSeats: number;
  remainingSeats: number;
  originalPrice: string;
  offerPrice: string;
  targetDateIso?: string;
}
