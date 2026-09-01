export interface ContactChannel {
  id: 'telegram' | 'phone' | 'max' | 'email';
  name: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

export const CONTACT_CONFIG = {
  person: 'Виталий Ткачёв',
  brand: 'TKACHEV STUDIO',
  phone: '+7 (916) 028-69-59',
  phoneHref: 'tel:+79160286959',
  email: 'vital.tkachev@gmail.com',
  emailHref: 'mailto:vital.tkachev@gmail.com',
  telegram: '@vii925',
  telegramHref: 'https://t.me/vii925',
  maxHref: 'https://max.ru/vii925', // Deep Link / Web link
  channels: [
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'Send',
      href: 'https://t.me/vii925',
      ariaLabel: 'Связаться через Telegram',
    },
    {
      id: 'phone',
      name: 'Телефон',
      icon: 'Phone',
      href: 'tel:+79160286959',
      ariaLabel: 'Позвонить в TKACHEV STUDIO',
    },
    {
      id: 'max',
      name: 'MAX',
      icon: 'Sparkles',
      href: 'https://max.ru/vii925',
      ariaLabel: 'Связаться через MAX',
    },
    {
      id: 'email',
      name: 'Электронная почта',
      icon: 'Mail',
      href: 'mailto:vital.tkachev@gmail.com',
      ariaLabel: 'Отправить сообщение на почту',
    },
  ] as ContactChannel[],
};
