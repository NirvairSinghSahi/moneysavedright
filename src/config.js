export const CONFIG = {
  phone: '+12898792200',
  phoneFormatted: '(289) 879-2200',
  phoneTel: 'tel:+12898792200',
  companyName: 'MSR Tax and Insurance',
  brandPromise: 'Money. Saved. Right.',
  brandPromiseFull: 'Money. Saved. Right. E-FILE, NETFILE, HST RETURNS, BUSINESS REGISTRATION, NEW INCORPORATION, CRA AUDITS AND RESOLUTIONS — ONE PHONE CALL DOES IT ALL.',
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  services: [
    'E-FILE',
    'NETFILE',
    'HST RETURNS',
    'BUSINESS REGISTRATION',
    'INCORPORATION',
    'CRA AUDITS',
    'INSURANCE'
  ],
  animations: {
    enabled: true,
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  api: {
    // In production (Vercel), use relative paths. In development, use localhost server
    baseUrl: import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3001')
  }
}

