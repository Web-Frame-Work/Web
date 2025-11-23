export const SetListData = [
  {
    order: 0,
    title: "공연 시작 전",
    artist: "현재는 Setlist만 확인할 수 있습니다.",
  },
  { order: 1, title: "시작의 노래", artist: "루시 (LUCY)" },
  { order: 2, title: "달빛 아래서", artist: "잔나비" },
  { order: 3, title: "별이 쏟아지는 밤", artist: "아이유 (IU)" },
  { order: 4, title: "Blue Hour", artist: "TXT" },
  { order: 5, title: "Dive", artist: "세븐틴 (SEVENTEEN)" },
  { order: 6, title: "Runaway", artist: "ONEWE" },
  { order: 7, title: "빛처럼", artist: "악동뮤지션 (AKMU)" },
  { order: 8, title: "Horizon", artist: "DAY6" },
  { order: 9, title: "Dream On", artist: "N.Flying" },
  { order: 10, title: "Serenade", artist: "폴킴 (Paul Kim)" },
  { order: 11, title: "밤의 끝", artist: "10cm" },
  { order: 12, title: "하늘 위로", artist: "박효신" },
  { order: 13, title: "Aurora", artist: "더보이즈 (THE BOYZ)" },
  { order: 14, title: "Stay With Me", artist: "찬열 & 펀치" },
  { order: 15, title: "Love Again", artist: "백현 (BAEKHYUN)" },
  { order: 16, title: "그날들", artist: "정승환" },
];
// 이런식으로 더미데이터 넣으시면 됩니다.

// src/mocks/dummyProducts.js
export const dummyProducts = [
  { id: 101, name: "아이폰 15 Pro", price: 1550000, discount: 15, image: "/images/iphone.jpg" },
  { id: 102, name: "로지텍 마우스", price: 139000, discount: 20, image: "/images/mouse.jpg" },
  { id: 103, name: "에스티로더 세럼", price: 120000, discount: 10, image: "/images/serum.jpg" },
  { id: 104, name: "아크테릭스 재킷", price: 890000, discount: 20, image: "/images/jacket.jpg" },
  { id: 105, name: "애플워치 울트라", price: 1190000, discount: 5, image: "/images/watch.jpg" },
  { id: 106, name: "다이슨 에어랩", price: 699000, discount: 10, image: "/images/airwrap.jpg" },
];

//src/mocks/creatorRecommendedProducts.js
export const creatorRecommendedProducts = {
  1: [103, 104, 105, 106], // 이사배: 다이슨(106), 에스티로더(103)
  2: [101, 102], // 침착맨: 아이폰, 마우스
};

// src/mocks/dummyCreators.js
export const dummyCreators = [
  { id: 1, name: "이사배", category: "뷰티", rank: 1, image: "/images/creator/risabae.png" },
  { id: 2, name: "침착맨", category: "테크", rank: 2, image: "/images/creator/chimchak.png"},
  { id: 3, name: "원지", category: "패션", rank: 3, image: "/images/creator/wonji.png"},
  { id: 4, name: "보겸", category: "라이프", rank: 4, image: "/images/creator/bokyum.png"},
  { id: 5, name: "꿀주부", category: "리빙", rank: 5, image: "/images/creator/home.png"},
  { id: 6, name: "테스터훈", category: "테크", rank: 6, image: "/images/creator/testerhoon.png"},
];

// src/mocks/productDetailData.js
export const productData = {
  id: 'product-wh-ch720n', 
  category: '소니',
  name: '소니 노이즈캔슬링 무선 헤드폰 WH-CH720N',   
  originalPrice: '709,000원',
  discountRate: '10%',
  price: '567,890원',
  imageUrl: 'https://i.imgur.com/example.png', // 실제 이미지 URL로 변경 필요
};

export const defaultReviews = [
  { id: 1, user: 'user1',  date: '2025.01.16', text: '정말 만족스러운 제품입니다!', rating: 5 },
  { id: 2, user: 'user2', date: '2025.01.17', text: '정말 만족스러운 제품입니다!', rating: 5 },
  { id: 3, user: 'user3', date: '2025.01.18', text: '정말 만족스러운 제품입니다!', rating: 5 },
];

export const recommendedCreators = [
  { name: '잇섭', imageUrl: 'https://i.imgur.com/itssup.png' }, // 실제 이미지 URL로 변경 필요
  { name: 'User2', imageUrl: 'https://i.imgur.com/user2.png' }, // 실제 이미지 URL로 변경 필요
];
