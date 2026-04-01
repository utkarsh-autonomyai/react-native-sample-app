// Mock travel data for the landing screen

export interface Destination {
  id: string;
  name: string;
  country: string;
  rating: number;
  price: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface UpcomingTrip {
  destination: string;
  dates: string;
  daysToGo: number;
  totalDays: number;
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.8,
    price: '$1,200',
    color: '#FF6B6B',
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    rating: 4.9,
    price: '$1,800',
    color: '#4ECDC4',
  },
  {
    id: '3',
    name: 'Amalfi Coast',
    country: 'Italy',
    rating: 4.7,
    price: '$2,100',
    color: '#45B7D1',
  },
  {
    id: '4',
    name: 'Machu Picchu',
    country: 'Peru',
    rating: 4.9,
    price: '$1,500',
    color: '#96CEB4',
  },
  {
    id: '5',
    name: 'Maldives',
    country: 'Maldives',
    rating: 4.8,
    price: '$3,200',
    color: '#FFEAA7',
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Beaches', icon: 'umbrella' },
  { id: '2', name: 'Mountains', icon: 'mountain' },
  { id: '3', name: 'Cities', icon: 'home' },
  { id: '4', name: 'Adventure', icon: 'compass' },
];

export const upcomingTrip: UpcomingTrip = {
  destination: 'Santorini, Greece',
  dates: 'Dec 15 - Dec 22, 2025',
  daysToGo: 45,
  totalDays: 90,
};

// Color palette
export const colors = {
  bgPrimary: '#0B0F1A',
  bgSecondary: '#121629',
  bgTertiary: '#1A1F3D',
  accentCyan: '#00D4FF',
  accentPurple: '#7B2FFF',
  accentPink: '#FF2D87',
  accentOrange: '#FF8A00',
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A3BD',
  textMuted: '#6B6F8D',
  glassBg: 'rgba(255,255,255,0.08)',
  glassBorder: 'rgba(255,255,255,0.15)',
};
