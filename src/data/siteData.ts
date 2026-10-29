export type Language = 'pt' | 'en';

export type ServiceCategoryKey =
  | 'extensions'
  | 'lift_lamination'
  | 'brows'
  | 'wax';

export interface PriceItem {
  label: { pt: string; en: string };
  price: string;
}

export interface ServiceItem {
  id: string;
  category: ServiceCategoryKey;
  name: { pt: string; en: string };
  description?: { pt: string; en: string };
  prices: PriceItem[];
  image?: string;
  alt?: { pt: string; en: string };
}

export interface GalleryPhoto {
  id: number;
  url: string;
  alt: { pt: string; en: string };
}

export interface StudioPhoto {
  id: number;
  url: string;
  alt: { pt: string; en: string };
}

export interface TestimonialItem {
  id: number;
  name: string;
  service: { pt: string; en: string };
  quote: { pt: string; en: string };
}

export interface FAQItem {
  id: number;
  question: { pt: string; en: string };
  answer: { pt: string; en: string };
}

const galleryUrls = [
  'https://i.ibb.co/sv0fQkm6/Save-Clip-App-502750164-18274157707273750-1858778717235580088-n.webp',
  'https://i.ibb.co/CKVXWWyP/Save-Clip-App-792224139-18334271179273750-5704973687369538933-n.webp',
  'https://i.ibb.co/QFtQwZ6K/Save-Clip-App-574795826-18291793921273750-357611073181160755-n.webp',
  'https://i.ibb.co/fVhVZdb9/Save-Clip-App-553315913-18286694992273750-27668105877423278-n-2.webp',
  'https://i.ibb.co/5gyHpt6Q/Save-Clip-App-475527991-18261498415273750-1802396124170892663-n.webp',
  'https://i.ibb.co/TxxbHyC3/Save-Clip-App-468299115-18253012414273750-2166962317424031583-n.webp',
  'https://i.ibb.co/PscFfx0R/Save-Clip-App-624852285-2378107205945966-8613370480405345928-n.webp',
  'https://i.ibb.co/SDgZjzsD/Save-Clip-App-468267452-18253010392273750-8812094926490098533-n.webp',
];

export const siteData = {
  brandName: 'VIVA Beauty',
  specialistName: 'Vitória Reis',
  professionalLegalName: 'Vitória Reis — VIVA Beauty',
  tagline: {
    pt: 'A sua beleza, com alma.',
    en: 'Your beauty, with soul.',
  },
  bookingUrl:
    'https://www.vagaro.com/vitoriareisbeauty?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadMIKOcQs-g4YtYy0ESXUK6XW1-GCxtk1yekzgIf6X94Nw8G2SDZMj5wUk5og_aem_WUfaIypNcoDtIE_Vse8Yxg',
  whatsappPhone: '17743100841',
  whatsappDisplay: '+1 (774) 310-0841',
  instagramHandle: '@vivabeautymv',
  instagramUrl: 'https://www.instagram.com/vivabeautymv/',
  reelUrl: 'https://www.instagram.com/reel/De11_MARTBj/',
  reelEmbedUrl: 'https://www.instagram.com/reel/De11_MARTBj/embed',
  studioPostUrl: 'https://www.instagram.com/p/Dcd1Xj9O_FB/',
  studioPostEmbedUrl: 'https://www.instagram.com/p/Dcd1Xj9O_FB/embed',
  locationCity: 'Edgartown, Martha’s Vineyard',
  locationPostal: 'Edgartown, MA 02539, United States',
  studioAddress: '', // Preencher endereço exato posteriormente se desejar exibir no mapa
  licenses: '', // Só exibe se preenchido
  contactEmail: 'vivabeautymv@gmail.com',
  timezone: 'America/New_York',

  images: {
    hero: 'https://i.ibb.co/BVQY5SMZ/Woman-centered-on-beige-background-df9fa9e2-2-K-1.webp',
    about: 'https://i.ibb.co/gFyxxV7Y/Woman-positioned-in-middle-59d24503-2-K-1.webp',
    studioLogo: 'https://i.ibb.co/rGmQDrqH/Logo-facing-forward-with-text-82be14b9-2-K.webp',
  },

  hours: [
    {
      days: [1, 2, 3, 4, 5], // Mon - Fri
      label: { pt: 'Segunda a sexta', en: 'Monday to Friday' },
      time: { pt: '8:30 AM – 7:00 PM', en: '8:30 AM – 7:00 PM' },
      openMinutes: 8 * 60 + 30,
      closeMinutes: 19 * 60,
    },
    {
      days: [6], // Saturday
      label: { pt: 'Sábado', en: 'Saturday' },
      time: { pt: '8:30 AM – 5:00 PM', en: '8:30 AM – 5:00 PM' },
      openMinutes: 8 * 60 + 30,
      closeMinutes: 17 * 60,
    },
    {
      days: [0], // Sunday
      label: { pt: 'Domingo', en: 'Sunday' },
      time: { pt: 'Fechado', en: 'Closed' },
      openMinutes: null,
      closeMinutes: null,
    },
  ],

  policies: {
    vagaro: {
      pt: 'Cancelamentos ou remarcações com pelo menos 24 horas de antecedência. Cancelamentos tardios (menos de 24 horas) ou faltas estão sujeitos a uma taxa de 50% do serviço. Chegar com mais de 10 minutos de atraso pode resultar em serviço reduzido ou necessidade de reagendar, com taxa de cancelamento.',
      en: 'Cancellations or rescheduling require at least 24 hours advance notice. Late cancellations (less than 24 hours) or no-shows are subject to a 50% fee of the scheduled service. Arriving more than 10 minutes late may result in a shortened service or the need to reschedule, subject to a cancellation fee.',
    },
    whatsapp: {
      pt: 'Cada horário agendado é reservado exclusivamente para você. Cancelamentos ou alterações devem ser feitos com, no mínimo, 12 horas de antecedência. Cancelamentos com menos de 12 horas ou ausência estarão sujeitos à cobrança de 50% do valor do serviço agendado. A tolerância de atraso é de 10 minutos: programe-se para chegar com pelo menos 5 minutos de antecedência.',
      en: 'Every scheduled appointment is reserved exclusively for you. Cancellations or changes must be made at least 12 hours in advance. Cancellations with less than 12 hours notice or no-shows will be subject to a 50% charge of the scheduled service value. There is a 10-minute grace period for late arrivals: please plan to arrive at least 5 minutes early.',
    },
    gratitude: {
      pt: 'Essa política é essencial para garantir o meu tempo e o meu compromisso com cada cliente. Agradeço pela sua compreensão e apoio!',
      en: 'This policy is essential to respect my time and my commitment to each client. Thank you so much for your understanding and support!',
    },
  },

  services: [
    // --- EXTENSÃO DE CÍLIOS (extensions) ---
    {
      id: 'eyelash-extension-set',
      category: 'extensions',
      name: {
        pt: 'Conjunto de Extensão de Cílios',
        en: 'Eyelash Extension Set',
      },
      description: {
        pt: 'O Conjunto de Extensão de Cílios oferece extensões personalizadas, adaptadas à anatomia única dos seus olhos e às suas preferências individuais. Criadas com cuidado para os seus cílios naturais, nossas opções variam de realces sutis a um volume marcante, disponíveis em tons de marrom e preto.',
        en: 'Eyelash Extension Set offers personalized extensions tailored to the unique anatomy of your eyes and your individual preferences. Crafted with care for your natural lashes, our selections range from subtle enhancements to bold volume, available in both brown and black options.',
      },
      prices: [
        {
          label: {
            pt: 'Conjunto de Extensão de Cílios (Aplicação)',
            en: 'Eyelash Extension Set',
          },
          price: '$190.00',
        },
        {
          label: {
            pt: 'Manutenção de Extensão de Cílios - 2 semanas',
            en: 'Eyelash Extension Fill - 2 weeks',
          },
          price: '$90.00',
        },
        {
          label: {
            pt: 'Manutenção de Extensão de Cílios - 3 semanas',
            en: 'Eyelash Extension Fill - 3 weeks',
          },
          price: '$130.00',
        },
      ],
      image: galleryUrls[0],
      alt: {
        pt: 'Conjunto de Extensão de Cílios personalizado na VIVA Beauty',
        en: 'Eyelash Extension Set at VIVA Beauty',
      },
    },
    {
      id: 'fox-eyes-set',
      category: 'extensions',
      name: {
        pt: 'Fox Eyes - Conjunto de Extensão de Cílios',
        en: 'Fox Eyes - Eyelash Extension Set',
      },
      description: {
        pt: 'O Fox Eyes oferece um conjunto exclusivo de extensões de cílios, desenvolvido para criar o efeito cativante de olhos de raposa. Utilizando cílios com curvatura especial, diferente das extensões tradicionais, essa técnica realça sua beleza natural e adiciona um lift sedutor ao olhar.',
        en: 'Fox Eyes offers a unique eyelash extension set designed to create the captivating fox eye effect. Utilizing specially curved lashes that differ from traditional extensions, this technique enhances your natural beauty and adds an alluring lift to your gaze.',
      },
      prices: [
        {
          label: {
            pt: 'Fox Eyes - Conjunto de Extensão de Cílios (Aplicação)',
            en: 'Fox Eyes - Eyelash Extension Set',
          },
          price: '$195.00',
        },
        {
          label: {
            pt: 'Fox Eyes - Manutenção de Extensão de Cílios - 2 semanas',
            en: 'Fox Eyes - Eyelash Extension Fill - 2 weeks',
          },
          price: '$95.00',
        },
        {
          label: {
            pt: 'Fox Eyes - Manutenção de Extensão de Cílios - 3 semanas',
            en: 'Fox Eyes - Eyelash Extension Fill - 3 weeks',
          },
          price: '$130.00',
        },
      ],
      image: 'https://i.ibb.co/QFtQwZ6K/Save-Clip-App-574795826-18291793921273750-357611073181160755-n.webp',
      alt: {
        pt: 'Fox Eyes Conjunto de Extensão de Cílios na VIVA Beauty',
        en: 'Fox Eyes Eyelash Extension Set at VIVA Beauty',
      },
    },
    {
      id: 'half-fox-set',
      category: 'extensions',
      name: {
        pt: 'Half Fox - Conjunto de Extensão de Cílios',
        en: 'Half Fox - Eyelash Extension Set',
      },
      description: {
        pt: 'O conjunto de extensões de cílios Half Fox utiliza uma técnica que preenche apenas a metade externa dos cílios, criando um olhar deslumbrante e alongado. Este método pode não ser adequado para todos os formatos de olhos, por isso, recomenda-se uma consulta prévia à aplicação para garantir os melhores resultados.',
        en: 'The Half Fox eyelash extension set features a technique that fills only the outer half of the lashes, creating a stunning, elongated look. This method may not suit every eye shape, so a consultation prior to application is recommended to ensure the best results.',
      },
      prices: [
        {
          label: {
            pt: 'Half Fox - Conjunto de Extensão de Cílios (Aplicação)',
            en: 'Half Fox - Eyelash Extension Set',
          },
          price: '$150.00',
        },
        {
          label: {
            pt: 'Half Fox - Manutenção de Extensão de Cílios - 2 semanas',
            en: 'Half Fox - Eyelash Extension Fill - 2 weeks',
          },
          price: '$80.00',
        },
        {
          label: {
            pt: 'Half Fox - Manutenção de Extensão de Cílios - 3 semanas',
            en: 'Half Fox - Eyelash Extension Fill - 3 Weeks',
          },
          price: '$100.00',
        },
      ],
      image: 'https://i.ibb.co/dwtvTTtj/Improve-image-quality-07b1cdb8-2-K.webp',
      alt: {
        pt: 'Half Fox Conjunto de Extensão de Cílios na VIVA Beauty',
        en: 'Half Fox Eyelash Extension Set at VIVA Beauty',
      },
    },
    {
      id: 'diamond-set',
      category: 'extensions',
      name: {
        pt: 'Diamante - Extensão de Cílios',
        en: 'Diamond - Eyelash Extension',
      },
      description: {
        pt: 'Técnica com a durabilidade de 30 dias e não tem manutenção. É uma técnica pra quem gosta de cílios bem volumosos.',
        en: 'Technique with 30-day durability and no maintenance required. Designed for clients who love rich, full-volume lashes.',
      },
      prices: [
        {
          label: {
            pt: 'Diamante - Extensão de Cílios (Aplicação)',
            en: 'Diamond - Eyelash Extension',
          },
          price: '$225.00',
        },
      ],
      image: 'https://i.ibb.co/5gyHpt6Q/Save-Clip-App-475527991-18261498415273750-1802396124170892663-n.webp',
      alt: {
        pt: 'Diamante Extensão de Cílios volumosos na VIVA Beauty',
        en: 'Diamond Eyelash Extension at VIVA Beauty',
      },
    },
    {
      id: 'lower-lashes-set',
      category: 'extensions',
      name: {
        pt: 'Conjunto de Extensão de Cílios Inferiores',
        en: 'Lower Eyelash Extension Set',
      },
      description: {
        pt: 'O Conjunto de Extensão de Cílios Inferiores realça os seus cílios inferiores, criando um visual harmonioso que complementa as extensões superiores. Essa técnica resulta em um olhar mais aberto, perfeito para conquistar um acabamento equilibrado e cativante.',
        en: 'The Lower Eyelash Extension Set enhances your lower lashes, creating a harmonious look that complements your upper extensions. This technique results in a more open-eyed appearance, perfect for achieving a balanced and captivating gaze.',
      },
      prices: [
        {
          label: {
            pt: 'Conjunto de Extensão de Cílios Inferiores (Aplicação)',
            en: 'Lower Eyelash Extension Set',
          },
          price: '$60.00',
        },
        {
          label: {
            pt: 'Manutenção de Extensão de Cílios Inferiores',
            en: 'Lower Eyelash Extension Fill',
          },
          price: '$45.00',
        },
      ],
      image: 'https://i.ibb.co/Pn5SL1s/Improve-image-quality-and-remove-a8109bc4-2-K.webp',
      alt: {
        pt: 'Conjunto de Extensão de Cílios Inferiores na VIVA Beauty',
        en: 'Lower Eyelash Extension Set at VIVA Beauty',
      },
    },
    // Sem foto: Consultation & Removal
    {
      id: 'consultation-allergy-test',
      category: 'extensions',
      name: {
        pt: 'Consulta / Teste de Alergia',
        en: 'Consultation/ allergy test',
      },
      description: {
        pt: 'Nosso serviço de consulta inclui uma avaliação completa para extensão de cílios, juntamente com testes de alergia para pessoas com histórico de reações alérgicas. Esse processo garante sua segurança e conforto ao realçar sua beleza com nossos serviços de extensão de cílios.',
        en: 'Our consultation service includes a thorough assessment for eyelash extensions, along with allergy testing for individuals with a history of allergic reactions. This process ensures your safety and comfort while enhancing your beauty with our eyelash extension services.',
      },
      prices: [
        {
          label: {
            pt: 'Consulta / Teste de Alergia',
            en: 'Consultation/ allergy test',
          },
          price: '$10.00',
        },
      ],
    },
    {
      id: 'removal',
      category: 'extensions',
      name: {
        pt: 'Remoção - Extensão de Cílios',
        en: 'Removal - Eyelash Extension',
      },
      prices: [
        {
          label: {
            pt: 'Remoção - Extensão de Cílios',
            en: 'Removal - Eyelash Extension',
          },
          price: '$20.00',
        },
      ],
    },

    // --- LASH LIFT & BROW LAMINATION (lift_lamination) ---
    {
      id: 'lash-lift',
      category: 'lift_lamination',
      name: {
        pt: 'Lifting de Cílios (Lash Lift)',
        en: 'Lash Lift',
      },
      description: {
        pt: 'O Lash Lift realça a curvatura natural dos seus cílios, proporcionando um efeito semelhante ao da máscara de cílios, sem a necessidade de extensões. Desfrute de cílios lindamente curvados por mais de quatro semanas, com manutenção mínima à medida que crescem.',
        en: 'Lash Lift enhances the natural curl of your eyelashes, providing a mascara-like effect without the need for extensions. Enjoy beautifully lifted lashes for over four weeks, with minimal maintenance required as they grow.',
      },
      prices: [
        {
          label: {
            pt: 'Lifting de Cílios (Lash Lift)',
            en: 'Lash Lift',
          },
          price: '$130.00',
        },
      ],
      image: 'https://i.ibb.co/fVhVZdb9/Save-Clip-App-553315913-18286694992273750-27668105877423278-n-2.webp',
      alt: {
        pt: 'Lifting de Cílios Lash Lift na VIVA Beauty',
        en: 'Lash Lift at VIVA Beauty',
      },
    },
    {
      id: 'brow-lamination',
      category: 'lift_lamination',
      name: {
        pt: 'Laminação de Sobrancelhas (Brow Lamination)',
        en: 'Brow Lamination',
      },
      description: {
        pt: 'A Laminação de Sobrancelhas é um tratamento que alinha e suaviza os pelos da sobrancelha, dando-lhes uma aparência mais preenchida. Permite um visual polido sem a necessidade de os fios ficarem espetados, oferecendo um acabamento mais natural.',
        en: 'Brow lamination is a treatment that aligns and smooths eyebrow hairs, giving them a fuller appearance. This service allows for a polished look without the need for the hairs to stand straight up, offering a more natural finish.',
      },
      prices: [
        {
          label: {
            pt: 'Laminação de Sobrancelhas (Brow Lamination)',
            en: 'Brow Lamination',
          },
          price: '$130.00',
        },
      ],
      image: 'https://i.ibb.co/tMMd8mzw/Save-Clip-App-730304108-18324871300273750-5719620043956202418-n.jpg',
      alt: {
        pt: 'Laminação de Sobrancelhas Brow Lamination na VIVA Beauty',
        en: 'Brow Lamination at VIVA Beauty',
      },
    },

    // --- SOBRANCELHAS (brows) ---
    {
      id: 'eyebrow-design-wax-group',
      category: 'brows',
      name: {
        pt: 'Design de Sobrancelhas + Coloração (Cera)',
        en: 'Eyebrow Design + Tinting (Wax)',
      },
      description: {
        pt: 'Mapeamento personalizado das sobrancelhas com cera suave para valorizar o formato do seu rosto, disponível na opção com coloração ou apenas design.',
        en: 'Personalized eyebrow shaping with gentle wax to flatter your facial features, available with custom tinting or as a classic brow design.',
      },
      prices: [
        {
          label: {
            pt: 'Design de Sobrancelhas + Coloração (Cera)',
            en: 'Eyebrow Design + Tinting (Wax)',
          },
          price: '$45.00',
        },
        {
          label: {
            pt: 'Design de Sobrancelhas (Cera)',
            en: 'Eyebrow design (Wax)',
          },
          price: '$35.00',
        },
      ],
      image: 'https://i.ibb.co/5gyHpt6Q/Save-Clip-App-475527991-18261498415273750-1802396124170892663-n.webp',
      alt: {
        pt: 'Design de Sobrancelhas com Cera e Coloração na VIVA Beauty',
        en: 'Eyebrow Design + Tinting (Wax) at VIVA Beauty',
      },
    },
    // Sem foto: Tweezers
    {
      id: 'eyebrow-design-tweezers',
      category: 'brows',
      name: {
        pt: 'Design de Sobrancelhas (Pinça)',
        en: 'Eyebrow design (Tweezers)',
      },
      prices: [
        {
          label: {
            pt: 'Design de Sobrancelhas (Pinça)',
            en: 'Eyebrow design (Tweezers)',
          },
          price: '$40.00',
        },
      ],
    },
    {
      id: 'eyebrow-design-tint-tweezers',
      category: 'brows',
      name: {
        pt: 'Design de Sobrancelhas + Coloração (Pinça)',
        en: 'Eyebrow design + tint (Tweezers)',
      },
      prices: [
        {
          label: {
            pt: 'Design de Sobrancelhas + Coloração (Pinça)',
            en: 'Eyebrow design + tint (Tweezers)',
          },
          price: '$50.00',
        },
      ],
    },

    // --- DEPILAÇÃO FACIAL / WAX (wax) — Sem foto ---
    {
      id: 'full-face-wax',
      category: 'wax',
      name: {
        pt: 'Depilação Facial Completa - Cera',
        en: 'Full Face - Wax',
      },
      prices: [
        {
          label: {
            pt: 'Depilação Facial Completa - Cera',
            en: 'Full Face - Wax',
          },
          price: '$30.00',
        },
      ],
    },
    {
      id: 'upper-lip-wax',
      category: 'wax',
      name: {
        pt: 'Lábio Superior (Buço) - Cera',
        en: 'Upper Lip - Wax',
      },
      prices: [
        {
          label: {
            pt: 'Lábio Superior (Buço) - Cera',
            en: 'Upper Lip - Wax',
          },
          price: '$8.00',
        },
      ],
    },
  ] as ServiceItem[],

  gallery: [
    {
      id: 1,
      url: galleryUrls[0],
      alt: {
        pt: 'Extensão de cílios fio a fio natural e elegante por Vitória Reis em Martha’s Vineyard',
        en: 'Natural and elegant lash extensions by Vitória Reis in Martha’s Vineyard',
      },
    },
    {
      id: 2,
      url: galleryUrls[1],
      alt: {
        pt: 'Olhar alongado com curvatura especial Fox Eyes na VIVA Beauty',
        en: 'Elongated gaze with Fox Eyes specialty curl at VIVA Beauty',
      },
    },
    {
      id: 3,
      url: galleryUrls[2],
      alt: {
        pt: 'Detalhe de extensão de cílios e design de sobrancelhas harmonioso',
        en: 'Close-up of harmonious lash extensions and brow design',
      },
    },
    {
      id: 4,
      url: galleryUrls[3],
      alt: {
        pt: 'Volume elegante e textura macia em extensão de cílios em Edgartown',
        en: 'Elegant volume and soft texture lash extensions in Edgartown',
      },
    },
    {
      id: 5,
      url: galleryUrls[4],
      alt: {
        pt: 'Acabamento delicado de cílios respeitando a saúde dos fios naturais',
        en: 'Delicate lash finish respecting natural lash health',
      },
    },
    {
      id: 6,
      url: galleryUrls[5],
      alt: {
        pt: 'Olhar iluminado com extensão personalizada e sobrancelhas alinhadas',
        en: 'Brightened gaze with custom lash extensions and aligned brows',
      },
    },
    {
      id: 7,
      url: galleryUrls[6],
      alt: {
        pt: 'Efeito rímel natural e curvatura impecável na VIVA Beauty',
        en: 'Natural mascara effect and flawless curl at VIVA Beauty',
      },
    },
    {
      id: 8,
      url: galleryUrls[7],
      alt: {
        pt: 'Transformação sutil e elegante de cílios e sobrancelhas por Vitória Reis',
        en: 'Subtle, elegant lash and brow transformation by Vitória Reis',
      },
    },
  ] as GalleryPhoto[],

  studioPhotos: [
    {
      id: 1,
      url: 'https://i.ibb.co/C3V2hpHJ/Remove-text-and-improve-quality-545fb1e6-2-K.webp',
      alt: {
        pt: 'Espaço interno acolhedor do studio VIVA Beauty em Edgartown, Martha’s Vineyard',
        en: 'Warm interior space of VIVA Beauty studio in Edgartown, Martha’s Vineyard',
      },
    },
    {
      id: 2,
      url: 'https://i.ibb.co/4nyt4mqY/Remove-objects-from-photo-d0b2d97f-2-K.webp',
      alt: {
        pt: 'Maca confortável e iluminação suave preparada para atendimento na VIVA Beauty',
        en: 'Comfortable lash bed and warm ambient lighting prepared for clients at VIVA Beauty',
      },
    },
    {
      id: 3,
      url: 'https://i.ibb.co/84KfWgZ2/Remove-objects-from-photo-00f21eee-2-K.webp',
      alt: {
        pt: 'Detalhes da decoração em madeira e tons claros do studio em Edgartown',
        en: 'Wood and warm beige decor details at the Edgartown studio',
      },
    },
    {
      id: 4,
      url: 'https://i.ibb.co/tw4rWJQR/Remove-objects-from-photo-146a882e-2-K.webp',
      alt: {
        pt: 'Ambiente privativo e calmo para extensão de cílios e design de sobrancelhas',
        en: 'Private, serene environment for lash extensions and brow design',
      },
    },
    {
      id: 5,
      url: 'https://i.ibb.co/p6t4Ckdw/Remove-objects-from-photo-c7106b26-2-K.webp',
      alt: {
        pt: 'Bancada organizada e materiais higienizados na VIVA Beauty',
        en: 'Organized workstation and sanitized materials at VIVA Beauty',
      },
    },
    {
      id: 6,
      url: 'https://i.ibb.co/jk9R5S2K/Remove-text-from-photo-960271ac-2-K.webp',
      alt: {
        pt: 'Vista do espaço VIVA Beauty pensado com carinho em cada detalhe',
        en: 'View of the VIVA Beauty space thoughtfully prepared in every detail',
      },
    },
  ] as StudioPhoto[],

  testimonials: [
    {
      id: 1,
      name: 'Camila R.',
      service: {
        pt: 'Conjunto de Extensão de Cílios',
        en: 'Eyelash Extension Set',
      },
      quote: {
        pt: '“Ficaram incrivelmente leves, naturais e elegantes! A Vitória avaliou o formato dos meus olhos com toda paciência e escolheu uma curvatura que realçou meu olhar sem pesar nada. É um cuidado em cada detalhe que faz a gente se sentir em casa.”',
        en: '“They turned out incredibly light, natural, and elegant! Vitória carefully assessed my eye shape and chose a curl that enhanced my gaze without feeling heavy at all. Her attention to every detail truly makes you feel at home.”',
      },
    },
    {
      id: 2,
      name: 'Sophie M.',
      service: {
        pt: 'Fox Eyes - Extensão de Cílios',
        en: 'Fox Eyes - Eyelash Extension Set',
      },
      quote: {
        pt: '“O efeito lift do Fox Eyes ficou maravilhoso e super natural. Desde o momento em que cheguei ao studio em Edgartown, senti uma paz enorme. Acordei pronta todos os dias e recebi tantos elogios que já não vivo sem!”',
        en: '“The Fox Eyes lift is gorgeous and looks so effortlessly natural. From the moment I walked into the studio in Edgartown, the atmosphere was so calm and welcoming. I wake up ready every day and have received so many compliments!”',
      },
    },
    {
      id: 3,
      name: 'Fernanda L.',
      service: {
        pt: 'Laminação de Sobrancelhas',
        en: 'Brow Lamination',
      },
      quote: {
        pt: '“Minhas sobrancelhas ficaram alinhadas, encorpadas e com as falhas preenchidas, mas sem aquele aspecto artificial ou espetado. A Vitória tem a mão super leve e acertou exatamente o acabamento sofisticado que eu tanto queria.”',
        en: '“My brows look aligned, fuller, and softly polished without ever looking stiff or artificial. Vitória has such a gentle touch and achieved the exact sophisticated, natural finish I was hoping for.”',
      },
    },
    {
      id: 4,
      name: 'Juliana P.',
      service: {
        pt: 'Lifting de Cílios (Lash Lift)',
        en: 'Lash Lift',
      },
      quote: {
        pt: '“Amei o resultado do Lifting de Cílios! Deu aquele efeito de máscara de cílios impecável logo ao acordar, sem precisar de extensões. Durou semanas com a curvatura linda e facilitou demais a minha rotina corrida.”',
        en: '“I loved my Lash Lift result! It gave me that flawless mascara effect right when I wake up, without needing extensions. The curl stayed beautiful for weeks and made my busy morning routine so much easier.”',
      },
    },
    {
      id: 5,
      name: 'Emma T.',
      service: {
        pt: 'Half Fox - Extensão de Cílios',
        en: 'Half Fox - Eyelash Extension Set',
      },
      quote: {
        pt: '“Na consulta ela me explicou tudo com muita clareza e indicou o Half Fox para o formato dos meus olhos. O resultado alongou o olhar na medida certa, ficou super confortável e com uma durabilidade excelente.”',
        en: '“She explained everything so clearly during the consultation and recommended the Half Fox for my eye shape. The result elongated my eyes in the most flattering way—super comfortable with amazing retention.”',
      },
    },
    {
      id: 6,
      name: 'Mariana S.',
      service: {
        pt: 'Design de Sobrancelhas + Coloração',
        en: 'Eyebrow Design + Tinting',
      },
      quote: {
        pt: '“Um atendimento acolhedor do início ao fim e um espaço impecável. O design com coloração valorizou o meu rosto com muita delicadeza, respeitando o formato natural dos meus fios. Já deixei o próximo horário agendado!”',
        en: '“Warm, attentive care from start to finish in a spotless, peaceful studio. The brow design and tint framed my face so delicately while respecting my natural arch. I already booked my next appointment!”',
      },
    },
  ] as TestimonialItem[],

  faqs: [
    {
      id: 1,
      question: {
        pt: 'Como faço para agendar?',
        en: 'How do I book an appointment?',
      },
      answer: {
        pt: 'O jeito mais rápido é online, pelo Vagaro. Se preferir, preencha o mini formulário e envie pelo WhatsApp.',
        en: 'The fastest way is online through Vagaro. If you prefer, fill out the quick form on this page and send your request via WhatsApp.',
      },
    },
    {
      id: 2,
      question: {
        pt: 'O atendimento é somente com hora marcada?',
        en: 'Is service by appointment only?',
      },
      answer: {
        pt: 'Sim, a VIVA atende exclusivamente com agendamento.',
        en: 'Yes, VIVA Beauty operates exclusively by appointment so your time is reserved just for you.',
      },
    },
    {
      id: 3,
      question: {
        pt: 'Qual a diferença entre o Conjunto de Extensão de Cílios, Fox Eyes e Half Fox?',
        en: 'What is the difference between Eyelash Extension Set, Fox Eyes, and Half Fox?',
      },
      answer: {
        pt: 'O Conjunto de Extensão é personalizado do discreto ao volume marcante. O Fox Eyes usa cílios com curvatura especial para um lift sedutor. O Half Fox preenche só a metade externa, para um olhar alongado.',
        en: 'The Eyelash Extension Set is customized from subtle natural to bold volume. Fox Eyes uses specialty curl lashes for a lifted, elongated effect. Half Fox fills only the outer half of the lashes for a sleek, lengthened gaze.',
      },
    },
    {
      id: 4,
      question: {
        pt: 'O que é a técnica Diamante?',
        en: 'What is the Diamond technique?',
      },
      answer: {
        pt: 'Técnica com durabilidade de 30 dias e sem manutenção. É uma técnica para quem gosta de cílios bem volumosos.',
        en: 'A specialized technique with 30-day durability and no maintenance fills required, created for clients who love rich, voluminous lashes.',
      },
    },
    {
      id: 5,
      question: {
        pt: 'Quando faço a Manutenção (Fill)?',
        en: 'When should I schedule a Fill?',
      },
      answer: {
        pt: 'Com 2 ou 3 semanas, conforme o seu ciclo natural de crescimento. Os valores de aplicação e manutenção estão juntos dentro do card de cada técnica na seção de serviços.',
        en: 'Every 2 or 3 weeks, depending on your natural lash growth cycle. Application and 2-week / 3-week Fill prices are listed together inside each service card.',
      },
    },
    {
      id: 6,
      question: {
        pt: 'Preciso fazer consulta antes?',
        en: 'Do I need a consultation beforehand?',
      },
      answer: {
        pt: 'Na primeira vez, recomenda-se a consulta com teste de alergia, principalmente se você já teve reações.',
        en: 'For first-time clients, a consultation with an allergy patch test is recommended, especially if you have sensitive eyes or have had prior reactions.',
      },
    },
    {
      id: 7,
      question: {
        pt: 'Tenho alergia. Posso fazer?',
        en: 'I have allergies. Can I still get lash extensions?',
      },
      answer: {
        pt: 'Informe antes. A consulta inclui avaliação e teste de alergia para garantir segurança e conforto.',
        en: 'Please let us know beforehand. The consultation includes a complete evaluation and an allergy patch test to ensure your safety and comfort.',
      },
    },
    {
      id: 8,
      question: {
        pt: 'O que é o Lifting de Cílios (Lash Lift)?',
        en: 'What is a Lash Lift?',
      },
      answer: {
        pt: 'Realça a curvatura natural dos seus cílios, proporcionando efeito de máscara de cílios sem a necessidade de extensões, por mais de quatro semanas.',
        en: 'It enhances the natural curl of your own lashes with a mascara effect and no extensions, offering over four weeks of lift with minimal maintenance as they grow.',
      },
    },
    {
      id: 9,
      question: {
        pt: 'O que é a Laminação de Sobrancelhas (Brow Lamination)?',
        en: 'What is Brow Lamination?',
      },
      answer: {
        pt: 'Alinha e suaviza os pelos da sobrancelha para uma aparência mais preenchida e polida, com acabamento natural e sem pelos espetados.',
        en: 'It aligns and softens brow hairs for fuller, polished eyebrows with a soft, natural finish without spiky hairs.',
      },
    },
    {
      id: 10,
      question: {
        pt: 'E se eu me atrasar?',
        en: 'What if I arrive late?',
      },
      answer: {
        pt: 'A tolerância é de 10 minutos. Acima disso, o serviço pode ser encurtado ou reagendado, com taxa de cancelamento.',
        en: 'There is a 10-minute grace period. Arrivals beyond 10 minutes late may result in a shortened service or require rescheduling with a cancellation fee.',
      },
    },
    {
      id: 11,
      question: {
        pt: 'E se eu precisar remarcar ou cancelar?',
        en: 'What if I need to reschedule or cancel?',
      },
      answer: {
        pt: 'Veja a política: 24 horas de antecedência pelo Vagaro e 12 horas pelo WhatsApp. Cancelamentos tardios ou faltas têm taxa de 50%.',
        en: 'Please check the policy for your booking channel: 24 hours advance notice via Vagaro and 12 hours via WhatsApp. Late cancellations or no-shows incur a 50% fee.',
      },
    },
    {
      id: 12,
      question: {
        pt: 'Onde fica a VIVA e qual o horário?',
        en: 'Where is VIVA located and what are the hours?',
      },
      answer: {
        pt: 'Em Edgartown, Martha’s Vineyard. Segunda a sexta, 8:30 AM–7:00 PM; sábado, 8:30 AM–5:00 PM; domingo fechado.',
        en: 'In Edgartown, Martha’s Vineyard, MA. Monday to Friday, 8:30 AM–7:00 PM; Saturday, 8:30 AM–5:00 PM; closed on Sunday.',
      },
    },
  ] as FAQItem[],
};

export const translations = {
  pt: {
    metaTitle: 'VIVA Beauty | Extensão de Cílios e Design de Sobrancelhas em Martha’s Vineyard',
    metaDescription:
      'Extensão de cílios, Fox Eyes, lash lift, brow lamination e design de sobrancelhas em Edgartown, Martha’s Vineyard. Agende online com a Vitória Reis.',
    skipToContent: 'Pular para o conteúdo principal',
    langSwitchLabel: 'Read in English',
    langSwitchAria: 'Mudar idioma para Inglês (Read in English)',
    nav: {
      services: 'Serviços',
      gallery: 'Galeria',
      about: 'Sobre',
      reviews: 'Avaliações',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Agendar',
      openMenu: 'Abrir menu de navegação',
      closeMenu: 'Fechar menu de navegação',
    },
    hero: {
      eyebrow: 'LASH EXTENSIONS & BROW DESIGN • MARTHA’S VINEYARD',
      titlePart1: 'A sua beleza,',
      titleHighlight: 'com alma.',
      subtitle:
        'Extensão de cílios e design de sobrancelhas em Edgartown, Martha’s Vineyard, com naturalidade, elegância e cuidado em cada detalhe.',
      ctaPrimary: 'Agendar online',
      ctaSecondary: 'Ver serviços',
      cards: [
        { title: 'Edgartown, Martha’s Vineyard', detail: 'Massachusetts · Atendimento local' },
        { title: 'Somente com hora marcada', detail: 'Um horário reservado só para você' },
        { title: 'Naturalidade e elegância', detail: 'Do discreto ao volume marcante' },
      ],
      photoAlt: 'Vitória Reis, especialista em cílios e sobrancelhas da VIVA Beauty em Martha’s Vineyard',
    },
    marquee: {
      items: [
        'BEAUTY',
        'LASH DESIGNER',
        'BROW DESIGN',
        'MARTHA’S VINEYARD',
        'ONDE A BELEZA VIVE LEVE',
        'NATURALIDADE',
        'ELEGÂNCIA',
      ],
    },
    services: {
      eyebrow: 'EXTENSÃO DE CÍLIOS, SOBRANCELHAS & COLORAÇÃO',
      titlePart1: 'Cada olhar,',
      titleHighlight: 'desenhado para você',
      subtitle:
        'Do natural ao volume marcante, escolha o efeito que combina com o formato dos seus olhos e com a sua rotina.',
      categories: {
        all: 'Todos os Serviços',
        extensions: 'Extensão de Cílios',
        lift_lamination: 'Lash Lift e Laminação',
        brows: 'Sobrancelhas',
        wax: 'Depilação (Wax)',
      },
      bookCardCta: 'Agendar',
      sectionCta: 'Agendar online',
      note: 'Avaliação e teste de alergia fazem parte do processo. Duração e resultado variam de pessoa para pessoa.',
      priceColService: 'Aplicação / Manutenção',
      priceColValue: 'Valor',
    },
    gallery: {
      eyebrow: 'PORTFÓLIO REAL • FIO A FIO',
      titlePart1: 'Delicadeza que se vê',
      titleHighlight: 'nos detalhes',
      subtitle: 'Olhares naturais, elegantes e feitos fio a fio.',
      note: 'Resultados individuais podem variar.',
      cta: 'Quero um olhar assim',
      openImageAria: 'Ampliar foto da galeria',
      lightboxClose: 'Fechar visualização',
      lightboxPrev: 'Foto anterior',
      lightboxNext: 'Próxima foto',
    },
    about: {
      eyebrow: 'A ESPECIALISTA • VITÓRIA REIS',
      titlePart1: 'Conheça a',
      titleHighlight: 'Vitória Reis',
      subtitle:
        'Uma especialista em cílios e sobrancelhas que valoriza o natural, com elegância e alma.',
      quote:
        '“Realçar o seu olhar não é sobre transformar quem você é, mas revelar com delicadeza a beleza única que já mora em você.”',
      p1: 'VIVA é mais que uma marca de beleza. É um espaço onde a naturalidade é valorizada, a elegância é sentida e cada detalhe é pensado com carinho. Aqui, você vai encontrar mais que estética: vai encontrar cuidado, acolhimento e transformação.',
      p2: 'Com mais de 4 anos de experiência, a Vitória é especialista em extensão de cílios e design de sobrancelhas, sempre focada em realçar a beleza natural de forma elegante e personalizada. Cada atendimento começa com uma avaliação da anatomia dos seus olhos e das suas preferências, com teste de alergia quando necessário, para um resultado seguro, confortável e feito sob medida.',
      indicators: [
        '+4 anos de experiência',
        'Lash & Brow Design',
        'Atendimento personalizado',
        'Martha’s Vineyard',
      ],
      licensesLabel: 'Licenses:',
      cta: 'Agendar com a Vitória',
      instagramTitle: 'Acompanhe a VIVA no Instagram',
      instagramSubtitle:
        'Bastidores, transformações e inspiração para o seu olhar, todos os dias.',
      followBtn: 'Seguir @vivabeautymv',
      bookBtn: 'Agendar',
      reelTitle: 'Reel da VIVA Beauty no Instagram (@vivabeautymv)',
    },
    reviews: {
      eyebrow: 'EXPERIÊNCIA VIVA • DEPOIMENTOS',
      titlePart1: 'Quem sente o cuidado,',
      titleHighlight: 'volta',
      subtitle: 'Palavras de clientes que escolheram a VIVA para o seu olhar.',
      cta: 'Quero viver essa experiência',
      prevReview: 'Avaliação anterior',
      nextReview: 'Próxima avaliação',
    },
    studio: {
      eyebrow: 'NOSSO ESPAÇO • EDGARTOWN, MARTHA’S VINEYARD',
      titlePart1: 'Mais que um studio,',
      titleHighlight: 'um espaço com alma',
      subtitle: 'Naturalidade, elegância e acolhimento em cada detalhe, em Edgartown.',
      brandText:
        'VIVA é mais que uma marca de beleza. É um espaço onde a naturalidade é valorizada, a elegância é sentida, e cada detalhe é pensado com carinho. Aqui, você vai encontrar mais que estética. Vai encontrar cuidado, acolhimento e transformação.',
      welcomeQuote: '“Seja bem-vinda à VIVA: a sua beleza, com alma.”',
      carouselPrev: 'Foto anterior do studio',
      carouselNext: 'Próxima foto do studio',
      behindTheScenes: 'Nos bastidores: preparando tudo para você',
      features: [
        {
          title: 'Higiene',
          desc: 'Materiais esterilizados e descartáveis, espaço preparado antes de cada cliente.',
        },
        {
          title: 'Conforto',
          desc: 'Ambiente calmo e acolhedor, pensado para o seu descanso.',
        },
        {
          title: 'Privacidade',
          desc: 'Atendimento reservado, somente com hora marcada.',
        },
        {
          title: 'Fácil acesso',
          desc: 'Localização prática em Edgartown, Martha’s Vineyard.',
        },
        {
          title: 'Atenção exclusiva',
          desc: 'Um horário reservado só para você, sem pressa.',
        },
        {
          title: 'Produtos de qualidade',
          desc: 'Materiais selecionados e teste de alergia quando necessário.',
        },
      ],
      locationTitle: 'Localização',
      addressNotice: 'O endereço exato é enviado ao confirmar o agendamento.',
      directionsBtn: 'Como chegar',
      hoursTitle: 'Horário de funcionamento',
      byAppointmentOnly: 'Somente com hora marcada.',
      openNow: 'Aberto agora (com hora marcada)',
      closedNow: 'Fechado no momento',
      todayBadge: 'Hoje',
      nyTimeNote: 'Horário local de Martha’s Vineyard (ET)',
      cta: 'Agendar minha visita',
    },
    booking: {
      eyebrow: 'RESERVA ONLINE & ATENDIMENTO • VIVA BEAUTY',
      titlePart1: 'Seu horário, reservado',
      titleHighlight: 'só para você',
      subtitle:
        'Agende online em poucos cliques. Se preferir, fale com a Vitória pelo WhatsApp.',
      onlineBadge: 'Prioridade · Mais rápido',
      onlineTitle: 'Agendar online',
      onlineBtn: 'Agendar online no Vagaro',
      onlineDesc:
        'O jeito mais rápido: escolha o serviço, o dia e o horário, e gerencie o seu agendamento no Vagaro.',
      onlinePolicyTitle: 'Política de cancelamento (Vagaro)',
      whatsappBadge: 'Alternativa · Atendimento direto',
      whatsappTitle: 'Prefere o WhatsApp?',
      whatsappPolicyTitle: 'Política de cancelamento (WhatsApp)',
      educationTitle: 'Orientações para o seu atendimento',
      educationCards: [
        {
          title: 'Atraso',
          text: 'A tolerância é de 10 minutos; chegue com 5 minutos de antecedência.',
        },
        {
          title: 'Cílios',
          text: 'Venha sem maquiagem nos olhos e informe alergias, sensibilidade ou tratamentos recentes.',
        },
        {
          title: 'Primeira vez?',
          text: 'Agende a consulta e teste de alergia, que garante segurança e conforto.',
        },
        {
          title: 'Manutenção',
          text: 'Escolha a manutenção de 2 ou 3 semanas conforme o seu ciclo.',
        },
        {
          title: 'Referência',
          text: 'Se tiver foto do efeito desejado, envie na conversa.',
        },
      ],
      formTitle: 'Montar mensagem para o WhatsApp',
      formSubtitle: 'Preencha abaixo e sua mensagem será gerada automaticamente.',
      fields: {
        nameLabel: 'Como gostaria de ser chamada(o)?',
        namePlaceholder: 'Ex.: Mariana Silva',
        serviceLabel: 'Serviço',
        serviceNotSure: 'Ainda não sei (quero ajuda para escolher)',
        typeLabel: 'Tipo de atendimento',
        types: [
          'Primeira vez (Aplicação)',
          'Manutenção de 2 semanas',
          'Manutenção de 3 semanas',
          'Vindo de outra profissional',
        ],
        dateLabel: 'Melhor dia',
        timeLabel: 'Melhor horário (Seg–Sex 8:30–19:00 | Sáb 8:30–17:00)',
        times: [
          'Manhã (8:30 AM – 12:00 PM)',
          'Tarde (12:00 PM – 4:00 PM)',
          'Fim de tarde (4:00 PM – 7:00 PM)',
          'Sábado (8:30 AM – 5:00 PM)',
        ],
        refPhotoLabel: 'Tem foto de referência?',
        refPhotoOptions: ['Sim, vou enviar na conversa', 'Não tenho'],
        notesLabel: 'Alergias ou algo que devemos saber? (opcional)',
        notesPlaceholder: 'Ex.: Olhos sensíveis, uso lentes de contato...',
      },
      previewLabel: 'Mensagem pronta (pré-visualização em tempo real)',
      copyBtn: 'Copiar mensagem',
      copiedBtn: 'Mensagem copiada!',
      sendWhatsappBtn: 'Enviar pelo WhatsApp',
      supportNote: 'Prefere agendar online? Use o botão do Vagaro acima.',
      msgTemplate: (data: {
        name: string;
        service: string;
        type: string;
        date: string;
        time: string;
        refPhoto: string;
        notes: string;
      }) =>
        `Olá, Vitória! 💛 Gostaria de agendar um horário.\nNome: ${data.name || '[Seu nome]'}\nServiço: ${data.service}\nTipo: ${data.type}\nDia e horário: ${data.date || '[A combinar]'} ${data.time}\nFoto de referência: ${data.refPhoto}\nObservações: ${data.notes || 'Nenhuma'}`,
    },
    faq: {
      eyebrow: 'DÚVIDAS COMUNS • TRANSPARÊNCIA & CUIDADO',
      titlePart1: 'Perguntas',
      titleHighlight: 'frequentes',
      subtitle: 'Tudo o que você precisa saber antes de agendar.',
      cta: 'Agendar meu horário',
    },
    floating: {
      book: 'Agendar',
      bookAria: 'Agendar horário online no Vagaro',
      whatsappAria: 'Conversar com a VIVA Beauty pelo WhatsApp',
      defaultWaMessage: 'Olá, Vitória! 💛 Vim pelo site da VIVA Beauty e gostaria de agendar um horário.',
    },
  },

  en: {
    metaTitle: 'VIVA Beauty | Lash Extensions, Lash Lift & Brow Design in Edgartown, Martha’s Vineyard',
    metaDescription:
      'Lash extensions, Fox Eyes, lash lift, brow lamination and eyebrow design in Edgartown, Martha’s Vineyard. Book online with Vitória Reis.',
    skipToContent: 'Skip to content',
    langSwitchLabel: 'Ler em português',
    langSwitchAria: 'Switch language to Portuguese (Ler em português)',
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      reviews: 'Reviews',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Book Now',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      eyebrow: 'LASH EXTENSIONS & BROW DESIGN • MARTHA’S VINEYARD',
      titlePart1: 'Your beauty,',
      titleHighlight: 'with soul.',
      subtitle:
        'Lash extensions and brow design in Edgartown, Martha’s Vineyard, with naturalness, elegance and care in every detail.',
      ctaPrimary: 'Book online',
      ctaSecondary: 'View services',
      cards: [
        { title: 'Edgartown, Martha’s Vineyard', detail: 'Massachusetts · Island studio' },
        { title: 'By appointment only', detail: 'Exclusive time reserved for you' },
        { title: 'Naturalness and elegance', detail: 'From subtle to bold volume' },
      ],
      photoAlt: 'Vitória Reis, lash and brow specialist at VIVA Beauty in Martha’s Vineyard',
    },
    marquee: {
      items: [
        'BEAUTY',
        'LASH DESIGNER',
        'BROW DESIGN',
        'MARTHA’S VINEYARD',
        'WHERE BEAUTY LIVES LIGHTLY',
        'NATURAL',
        'ELEGANT',
      ],
    },
    services: {
      eyebrow: 'EYELASH AND BROW EXTENSIONS / TINTING',
      titlePart1: 'Every look,',
      titleHighlight: 'designed for you',
      subtitle:
        'From natural to bold volume, choose the effect that suits your eye shape and routine.',
      categories: {
        all: 'All Services',
        extensions: 'Lash Extensions',
        lift_lamination: 'Lash Lift & Lamination',
        brows: 'Eyebrows',
        wax: 'Facial Wax',
      },
      bookCardCta: 'Book Now',
      sectionCta: 'Book online',
      note: 'Evaluation and allergy testing are part of the process. Retention and results vary from person to person.',
      priceColService: 'Application / Fill',
      priceColValue: 'Price',
    },
    gallery: {
      eyebrow: 'REAL PORTFOLIO • LASH BY LASH',
      titlePart1: 'Delicacy you can see',
      titleHighlight: 'in the details',
      subtitle: 'Natural, elegant looks made lash by lash.',
      note: 'Individual results may vary.',
      cta: 'I want a look like this',
      openImageAria: 'Enlarge gallery photo',
      lightboxClose: 'Close lightbox',
      lightboxPrev: 'Previous photo',
      lightboxNext: 'Next photo',
    },
    about: {
      eyebrow: 'THE SPECIALIST • VITÓRIA REIS',
      titlePart1: 'Meet',
      titleHighlight: 'Vitória Reis',
      subtitle:
        'A lash and brow specialist who celebrates natural beauty, with elegance and soul.',
      quote:
        '“Enhancing your gaze is not about changing who you are, but gently revealing the unique beauty that already lives within you.”',
      p1: 'VIVA is more than a beauty brand. It is a space where naturalness is valued, elegance is felt, and every detail is crafted with care. Here, you will find more than aesthetics: you will find care, warmth, and transformation.',
      p2: 'With over 4 years of experience, Vitória specializes in eyelash extensions and eyebrow design, always focused on enhancing natural beauty in an elegant, personalized way. Every appointment begins with an assessment of your eye anatomy and personal preferences, including an allergy test when needed, for a safe, comfortable, and tailor-made result.',
      indicators: [
        '+4 years of experience',
        'Lash & Brow Design',
        'Personalized care',
        'Martha’s Vineyard',
      ],
      licensesLabel: 'Licenses:',
      cta: 'Book with Vitória',
      instagramTitle: 'Follow VIVA on Instagram',
      instagramSubtitle:
        'Behind the scenes, transformations and inspiration for your look, every day.',
      followBtn: 'Follow @vivabeautymv',
      bookBtn: 'Book Now',
      reelTitle: 'VIVA Beauty Instagram Reel (@vivabeautymv)',
    },
    reviews: {
      eyebrow: 'VIVA EXPERIENCE • CLIENT WORDS',
      titlePart1: 'Those who feel the care',
      titleHighlight: 'come back',
      subtitle: 'Words from clients who chose VIVA for their look.',
      cta: 'I want to live this experience',
      prevReview: 'Previous review',
      nextReview: 'Next review',
    },
    studio: {
      eyebrow: 'OUR SPACE • EDGARTOWN, MARTHA’S VINEYARD',
      titlePart1: 'More than a studio,',
      titleHighlight: 'a space with soul',
      subtitle: 'Naturalness, elegance and warmth in every detail, in Edgartown.',
      brandText:
        'VIVA is more than a beauty brand. It is a space where naturalness is valued, elegance is felt, and every detail is crafted with care. Here, you will find more than aesthetics. You will find care, warmth, and transformation.',
      welcomeQuote: '“Welcome to VIVA: your beauty, with soul.”',
      carouselPrev: 'Previous studio photo',
      carouselNext: 'Next studio photo',
      behindTheScenes: 'Behind the scenes: getting everything ready for you',
      features: [
        {
          title: 'Hygiene',
          desc: 'Sterilized and disposable materials, with the space freshly prepared before every client.',
        },
        {
          title: 'Comfort',
          desc: 'A calm, welcoming environment designed for your relaxation.',
        },
        {
          title: 'Privacy',
          desc: 'Private one-on-one care, strictly by appointment only.',
        },
        {
          title: 'Easy Access',
          desc: 'Conveniently located in Edgartown, Martha’s Vineyard.',
        },
        {
          title: 'Exclusive Attention',
          desc: 'An appointment slot reserved solely for you, never rushed.',
        },
        {
          title: 'Quality Products',
          desc: 'Curated professional materials and allergy testing when needed.',
        },
      ],
      locationTitle: 'Location',
      addressNotice: 'The exact address is shared upon appointment confirmation.',
      directionsBtn: 'Get Directions',
      hoursTitle: 'Business Hours',
      byAppointmentOnly: 'By appointment only.',
      openNow: 'Open now (by appointment)',
      closedNow: 'Currently closed',
      todayBadge: 'Today',
      nyTimeNote: 'Martha’s Vineyard local time (ET)',
      cta: 'Book my visit',
    },
    booking: {
      eyebrow: 'ONLINE BOOKING & CARE • VIVA BEAUTY',
      titlePart1: 'Your appointment, reserved',
      titleHighlight: 'just for you',
      subtitle:
        'Book online in a few clicks. If you prefer, message Vitória on WhatsApp.',
      onlineBadge: 'Priority · Fastest way',
      onlineTitle: 'Book online',
      onlineBtn: 'Book online on Vagaro',
      onlineDesc:
        'The fastest way: choose your service, day, and time, and manage your appointment directly on Vagaro.',
      onlinePolicyTitle: 'Cancellation Policy (Vagaro)',
      whatsappBadge: 'Alternative · Direct message',
      whatsappTitle: 'Prefer WhatsApp?',
      whatsappPolicyTitle: 'Cancellation Policy (WhatsApp)',
      educationTitle: 'Before your appointment',
      educationCards: [
        {
          title: 'Late Arrivals',
          text: 'There is a 10-minute grace period; please arrive 5 minutes early.',
        },
        {
          title: 'Clean Lashes',
          text: 'Please arrive without eye makeup and inform us of any allergies, sensitivities, or recent eye treatments.',
        },
        {
          title: 'First Time?',
          text: 'Book the Consultation & Allergy Test to ensure complete safety and comfort.',
        },
        {
          title: 'Maintenance Fills',
          text: 'Choose a 2-week or 3-week Fill according to your natural lash cycle.',
        },
        {
          title: 'Reference Photos',
          text: 'If you have a photo of the look you love, feel free to share it in our chat.',
        },
      ],
      formTitle: 'Create your WhatsApp message',
      formSubtitle: 'Fill in the details below and your ready-to-send message will update live.',
      fields: {
        nameLabel: 'How would you like to be addressed?',
        namePlaceholder: 'e.g., Emma Thompson',
        serviceLabel: 'Service',
        serviceNotSure: 'Not sure yet (I would love guidance)',
        typeLabel: 'Appointment type',
        types: [
          'First time (Full Set)',
          '2-Week Fill',
          '3-Week Fill',
          'Coming from another lash artist',
        ],
        dateLabel: 'Preferred date',
        timeLabel: 'Preferred time (Mon–Fri 8:30–7:00 | Sat 8:30–5:00)',
        times: [
          'Morning (8:30 AM – 12:00 PM)',
          'Afternoon (12:00 PM – 4:00 PM)',
          'Late Afternoon (4:00 PM – 7:00 PM)',
          'Saturday (8:30 AM – 5:00 PM)',
        ],
        refPhotoLabel: 'Do you have a reference photo?',
        refPhotoOptions: ['Yes, I will send it in the chat', 'No, I don’t have one'],
        notesLabel: 'Allergies or anything we should know? (optional)',
        notesPlaceholder: 'e.g., Sensitive eyes, contact lens wearer...',
      },
      previewLabel: 'Ready-to-send message (live preview)',
      copyBtn: 'Copy message',
      copiedBtn: 'Message copied!',
      sendWhatsappBtn: 'Send via WhatsApp',
      supportNote: 'Prefer to book online? Use the Vagaro button above.',
      msgTemplate: (data: {
        name: string;
        service: string;
        type: string;
        date: string;
        time: string;
        refPhoto: string;
        notes: string;
      }) =>
        `Hello, Vitória! 💛 I would like to book an appointment.\nName: ${data.name || '[Your name]'}\nService: ${data.service}\nType: ${data.type}\nPreferred day & time: ${data.date || '[Flexible]'} ${data.time}\nReference photo: ${data.refPhoto}\nNotes: ${data.notes || 'None'}`,
    },
    faq: {
      eyebrow: 'COMMON QUESTIONS • TRANSPARENCY & CARE',
      titlePart1: 'Frequently asked',
      titleHighlight: 'questions',
      subtitle: 'Everything you need to know before booking.',
      cta: 'Book my appointment',
    },
    floating: {
      book: 'Book',
      bookAria: 'Book appointment online on Vagaro',
      whatsappAria: 'Message VIVA Beauty on WhatsApp',
      defaultWaMessage: 'Hello, Vitória! 💛 I visited the VIVA Beauty website and would like to book an appointment.',
    },
  },
};
