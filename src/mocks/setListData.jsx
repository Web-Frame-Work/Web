// src/mocks/setListData.jsx

export const SetListData = [
  {
    order: 0,
    title: '공연 시작 전',
    artist: '현재는 Setlist만 확인할 수 있습니다.',
  },
  { order: 1, title: '시작의 노래', artist: '루시 (LUCY)' },
  { order: 2, title: '달빛 아래서', artist: '잔나비' },
  { order: 3, title: '별이 쏟아지는 밤', artist: '아이유 (IU)' },
  { order: 4, title: 'Blue Hour', artist: 'TXT' },
  { order: 5, title: 'Dive', artist: '세븐틴 (SEVENTEEN)' },
  { order: 6, title: 'Runaway', artist: 'ONEWE' },
  { order: 7, title: '빛처럼', artist: '악동뮤지션 (AKMU)' },
  { order: 8, title: 'Horizon', artist: 'DAY6' },
  { order: 9, title: 'Dream On', artist: 'N.Flying' },
  { order: 10, title: 'Serenade', artist: '폴킴 (Paul Kim)' },
  { order: 11, title: '밤의 끝', artist: '10cm' },
  { order: 12, title: '하늘 위로', artist: '박효신' },
  { order: 13, title: 'Aurora', artist: '더보이즈 (THE BOYZ)' },
  { order: 14, title: 'Stay With Me', artist: '찬열 & 펀치' },
  { order: 15, title: 'Love Again', artist: '백현 (BAEKHYUN)' },
  { order: 16, title: '그날들', artist: '정승환' },
];

export const dummyProducts = [
  {
    id: 101,
    name: '아이폰 15 Pro',
    price: 1550000,
    discount: 15,
    image: '/images/iphone.jpg',
  },
  {
    id: 102,
    name: '로지텍 마우스',
    price: 139000,
    discount: 20,
    image: '/images/mouse.jpg',
  },
  {
    id: 103,
    name: '에스티로더 세럼',
    price: 120000,
    discount: 10,
    image: '/images/serum.jpg',
  },
  {
    id: 104,
    name: '아크테릭스 재킷',
    price: 890000,
    discount: 20,
    image: '/images/jacket.jpg',
  },
  {
    id: 105,
    name: '애플워치 울트라',
    price: 1190000,
    discount: 5,
    image: '/images/watch.jpg',
  },
  {
    id: 106,
    name: '다이슨 에어랩',
    price: 699000,
    discount: 10,
    image: '/images/airwrap.jpg',
  },
];

export const creatorRecommendedProducts = {
  1: [103, 104, 105, 106],
  2: [101, 102],
};

export const dummyCreators = [
  {
    id: 1,
    name: '이사배',
    category: '뷰티',
    rank: 1,
    image: '/images/creator/risabae.png',
  },
  {
    id: 2,
    name: '침착맨',
    category: '테크',
    rank: 2,
    image: '/images/creator/chimchak.png',
  },
  {
    id: 3,
    name: '원지',
    category: '패션',
    rank: 3,
    image: '/images/creator/wonji.png',
  },
  {
    id: 4,
    name: '보겸',
    category: '라이프',
    rank: 4,
    image: '/images/creator/bokyum.png',
  },
  {
    id: 5,
    name: '꿀주부',
    category: '리빙',
    rank: 5,
    image: '/images/creator/home.png',
  },
  {
    id: 6,
    name: '테스터훈',
    category: '테크',
    rank: 6,
    image: '/images/creator/testerhoon.png',
  },
];

export const productData = {
  id: 'product-wh-ch720n',
  category: '소니',
  name: '소니 노이즈캔슬링 무선 헤드폰 WH-CH720N',
  originalPrice: '709,000원',
  discountRate: '10%',
  price: '567,890원',
  imageUrl: 'https://i.imgur.com/example.png',
};

export const defaultReviews = [
  {
    id: 1,
    user: 'user1',
    date: '2025.01.16',
    text: '정말 만족스러운 제품입니다!',
    rating: 5,
  },
  {
    id: 2,
    user: 'user2',
    date: '2025.01.17',
    text: '정말 만족스러운 제품입니다!',
    rating: 5,
  },
  {
    id: 3,
    user: 'user3',
    date: '2025.01.18',
    text: '정말 만족스러운 제품입니다!',
    rating: 5,
  },
];

export const recommendedCreators = [
  { name: '잇섭', imageUrl: 'https://i.imgur.com/itssup.png' },
  { name: 'User2', imageUrl: 'https://i.imgur.com/user2.png' },
];

export const searchCreators = [
  {
    id: 1,
    name: '점착맨',
    category: '테크 리뷰어',
    followers: '3.2M',
    icon: '🧑‍🦱',
  },
];

export const searchProducts = [
  {
    id: 1,
    name: '아이폰 15 Pro',
    price: 1550000,
    discount: 15,
    rating: 4.9,
    reviews: 3456,
    image: '/images/iphone.jpg',
    description: '디자인과 성능을 모두 갖춘 최신 플래그십 스마트폰입니다.',
  },
  {
    id: 2,
    name: '로지텍 MX Master 3',
    price: 139000,
    discount: 20,
    rating: 4.7,
    reviews: 890,
    image: '/images/mouse.jpg',
    description:
      '인체공학 디자인과 다중 디바이스 지원이 강점인 생산성 마우스입니다.',
  },
  {
    id: 3,
    name: '에스티로더 갈색병 세럼',
    price: 129000,
    discount: 10,
    rating: 4.5,
    reviews: 2500,
    image: '/images/serum.jpg',
    description: '수분·탄력을 동시에 케어해주는 대표 안티에이징 세럼입니다.',
  },
  {
    id: 4,
    name: '아크테릭스 알파 SV 재킷',
    price: 890000,
    discount: 20,
    rating: 4.8,
    reviews: 1120,
    image: '/images/jacket.jpg',
    description:
      '하드코어 아웃도어를 위한 고어텍스 프로 하이엔드 방수 재킷입니다.',
  },
  {
    id: 5,
    name: '애플워치 울트라 2',
    price: 1190000,
    discount: 5,
    rating: 4.9,
    reviews: 980,
    image: '/images/watch.jpg',
    description:
      '아웃도어와 헬스케어 기능이 강화된 프리미엄 스마트 워치입니다.',
  },
  {
    id: 6,
    name: '다이슨 에어랩',
    price: 699000,
    discount: 15,
    rating: 4.6,
    reviews: 2150,
    image: '/images/airwrap.jpg',
    description:
      '열 손상은 줄이고 스타일링은 빠르게 도와주는 멀티 헤어 스타일러입니다.',
  },
  {
    id: 7,
    name: '갤럭시 Z 플립 5',
    price: 1350000,
    discount: 12,
    rating: 4.4,
    reviews: 1900,
    image: '/images/flip5.jpg',
    description:
      '컴팩트한 폴더블 디자인과 개선된 힌지가 돋보이는 스마트폰입니다.',
  },
  {
    id: 8,
    name: '버즈2 프로',
    price: 189000,
    discount: 18,
    rating: 4.3,
    reviews: 740,
    image: '/images/buds2.jpg',
    description:
      '노이즈 캔슬링과 편안한 착용감을 제공하는 무선 인이어 이어폰입니다.',
  },
];
