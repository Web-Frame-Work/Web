// src/mocks/setListData.jsx

export const creators = [
  {
    "id": 1,
    "name": "스완",
    "category": "뷰티",
    "image": "./assets/image/swan.png",
    "platforms": ["YouTube", "Instagram"],
    "followers": "480K",
    "description": "메이크업과 뷰티 팁을 공유하는 인기 남자 뷰티 크리에이터" 
  },
  {
    "id": 2,
    "name": "깡스타일리스트",
    "category": "패션",
    "image": "./assets/image/kkang.png",
    "platforms": ["YouTube", "Instagram"],
    "followers": "1.2M",
    "description": "트렌디한 패션 스타일링과 코디법을 소개하는 패션 크리에이터"
  },
  {
    "id": 3,
    "name": "티벳동생",
    "category": ["뷰티", "헬스"],
    "image": "./assets/image/tibet.png",
    "platforms": ["YouTube", "Instagram"],
    "followers": "460K",
    "description": "건강한 라이프스타일과 뷰티 루틴을 공유하는 크리에이터"
  }
]


export const products = [
  {"id":101,"name":"[트루션] 센시톨로지 더마 크림 80ml","category":"뷰티","price":36000,"discount":43,"image":"./assets/image/101.png","link":"https://bgroom.co.kr/product/detail.html?product_no=631","creatorId":1},
  {"id":102,"name":"[에스네이처] 아쿠아 오아시스 수분 젤크림 80ml","category":"뷰티","price":32000,"discount":38,"image":"./assets/image/102.png","link":"https://bgroom.co.kr/product/detail.html?product_no=29","creatorId":1},
  {"id":103,"name":"[에스네이처] 아쿠아 라이스 클렌징오일 200ml","category":"뷰티","price":24000,"discount":30,"image":"./assets/image/103.png","link":"https://bgroom.co.kr/product/detail.html?product_no=85","creatorId":1},
  {"id":104,"name":"[웰라쥬] 리얼 히알루로닉 100 토너 200ml","category":"뷰티","price":20000,"discount":33,"image":"./assets/image/104.png","link":"https://bgroom.co.kr/product/detail.html?product_no=285","creatorId":1},
  {"id":105,"name":"[유이크] 레미디 마일드 선크림 50ml","category":"뷰티","price":27000,"discount":41,"image":"./assets/image/105.png","link":"https://bgroom.co.kr/product/detail.html?product_no=157","creatorId":1},
  {"id":106,"name":"[이즈앤트리] 머그워트 카밍 클레이 마스크 대용량 200ml","category":"뷰티","price":38000,"discount":37,"image":"./assets/image/106.png","link":"https://bgroom.co.kr/product/detail.html?product_no=203","creatorId":1},

  {"id":201,"name":"[노이어] 캐시미어 오버핏 더블 코드 블랙","category":"패션","price":425000,"discount":20,"image":"./assets/image/201.png","link":"https://kkst.kr/product/3905","creatorId":2},
  {"id":202,"name":"[론트] 파인 코튼 가디건 블랙","category":"패션","price":114000,"discount":59,"image":"./assets/image/202.png","link":"https://kkst.kr/product/detail.html?product_no=99","creatorId":2},
  {"id":203,"name":"[에드리엘로스] 스모키 피그먼트 롱 슬리브 3color","category":"패션","price":39000,"discount":28,"image":"./assets/image/203.png","link":"https://kkst.kr/product/detail.html?product_no=1340","creatorId":2},
  {"id":204,"name":"[이코르] 골지 라운드 헨리넥 반팔 티셔츠 블랙","category":"패션","price":80000,"discount":60,"image":"./assets/image/204.png","link":"https://kkst.kr/product/detail.html?product_no=11701","creatorId":2},
  {"id":205,"name":"[메르고] 노스트 와이드 치노 팬츠 베이지","category":"패션","price":49000,"discount":10,"image":"./assets/image/205.png","link":"https://kkst.kr/product/3583","creatorId":2},
  {"id":206,"name":"[빅유니온] 커브드 데님 벨티드 팬츠 블랙","category":"패션","price":99000,"discount":40,"image":"./assets/image/206.png","link":"https://kkst.kr/product/detail.html?product_no=13424","creatorId":2},

  {"id":301,"name":"[플로에] 프로틴업 쿠키 2종","category":"헬스","price":19000,"discount":15,"image":"./assets/image/301.png","link":"https://ploe.co.kr/product/65","creatorId":3},
  {"id":302,"name":"[플로에] 해피 그릭요거트 4종","category":"헬스","price":25200,"discount":15,"image":"./assets/image/302.png","link":"https://ploe.co.kr/product/31","creatorId":3},
  {"id":303,"name":"[이데아뉴트리션] 아이즈 프로틴 시리얼 200g","category":"뷰티","price":19000,"discount":16,"image":"./assets/image/303.png","link":"https://idea-nutrition.com/product/44","creatorId":3},
  {"id":304,"name":"[라운드랩] 소나무 진정 시카 바디 미스트 150ml","category":"뷰티","price":23000,"discount":30,"image":"./assets/image/304.png","link":"https://brand.naver.com/roundlab/products/11819862369","creatorId":3},
  {"id":305,"name":"[라운드랩] 소나무 진정 시카 바디 워시 400ml","category":"뷰티","price":21000,"discount":29,"image":"./assets/image/305.png","link":"https://brand.naver.com/roundlab/products/11819867767","creatorId":3},
  {"id":306,"name":"[토리든] 밸런스풀 포맨 시카 프레쉬 올인원 200g","category":"뷰티","price":25000,"discount":20,"image":"./assets/image/306.png","link":"https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000228952","creatorId":3}

]

export const creatorRecommendedProducts = {
  1: [101, 102, 103, 104, 105, 106],
	2: [201, 202, 203, 204, 205, 206],
	3: [301, 302, 303, 304, 305, 306]
};


export const productsReviews = [
  /* ===============================
     크리에이터 1 - 스완 (productId 101~106)
     =============================== */

  { "productId": 101, "nickname": "뷰티덕후", "rating": 5, "comment": "촉촉하고 흡수 빠름!", "createdAt": "2024-11-21" },
  { "productId": 101, "nickname": "익명", "rating": 4, "comment": "지복합성 피부에 잘 맞음.", "createdAt": "2024-11-19" },
  { "productId": 101, "nickname": "코코아", "rating": 5, "comment": "재구매 의사 있음!", "createdAt": "2024-11-17" },

  { "productId": 102, "nickname": "맑은하늘", "rating": 4, "comment": "발림성 좋고 은은한 향.", "createdAt": "2024-11-18" },
  { "productId": 102, "nickname": "피부과가자", "rating": 5, "comment": "수분감 최고!", "createdAt": "2024-11-16" },
  { "productId": 102, "nickname": "익명", "rating": 4, "comment": "가볍고 촉촉해서 데일리로 좋음.", "createdAt": "2024-11-15" },

  { "productId": 103, "nickname": "로션광", "rating": 5, "comment": "메이크업도 잘 지워짐.", "createdAt": "2024-11-20" },
  { "productId": 103, "nickname": "익명", "rating": 5, "comment": "유분기 적당하고 순함.", "createdAt": "2024-11-18" },
  { "productId": 103, "nickname": "수부지", "rating": 4, "comment": "촉촉한데 번들거리지 않음.", "createdAt": "2024-11-17" },

  { "productId": 104, "nickname": "향좋아", "rating": 4, "comment": "은은한 향 좋음.", "createdAt": "2024-11-21" },
  { "productId": 104, "nickname": "익명", "rating": 5, "comment": "진정 효과 확실함!", "createdAt": "2024-11-19" },
  { "productId": 104, "nickname": "스킨케어고수", "rating": 4, "comment": "가성비 괜찮음.", "createdAt": "2024-11-16" },

  { "productId": 105, "nickname": "햇빛조심", "rating": 5, "comment": "백탁 없고 산뜻함.", "createdAt": "2024-11-20" },
  { "productId": 105, "nickname": "여름이", "rating": 4, "comment": "촉촉하고 부담 없음!", "createdAt": "2024-11-17" },
  { "productId": 105, "nickname": "익명", "rating": 5, "comment": "남자도 쓰기 좋음", "createdAt": "2024-11-15" },

  { "productId": 106, "nickname": "지성피부", "rating": 5, "comment": "피부 진정 확실함.", "createdAt": "2024-11-19" },
  { "productId": 106, "nickname": "민감녀", "rating": 4, "comment": "순하고 자극 없음.", "createdAt": "2024-11-16" },
  { "productId": 106, "nickname": "익명", "rating": 5, "comment": "바르고나면 시원함!", "createdAt": "2024-11-14" },



  /* ===============================
     크리에이터 2 - 깡스타일리스트 (productId 203~206)
     =============================== */

  { "productId": 203, "nickname": "옷잘알", "rating": 5, "comment": "핏이 너무 예쁨!", "createdAt": "2024-11-20" },
  { "productId": 203, "nickname": "코디왕", "rating": 4, "comment": "색감 그대로 나옴.", "createdAt": "2024-11-18" },
  { "productId": 203, "nickname": "익명", "rating": 5, "comment": "만족도 최고.", "createdAt": "2024-11-15" },

  { "productId": 204, "nickname": "패션러버", "rating": 4, "comment": "질감 좋고 편함.", "createdAt": "2024-11-20" },
  { "productId": 204, "nickname": "익명", "rating": 5, "comment": "여름에 입기 좋음!", "createdAt": "2024-11-19" },
  { "productId": 204, "nickname": "코튼코튼", "rating": 4, "comment": "세탁해도 형태 유지됨.", "createdAt": "2024-11-16" },

  { "productId": 205, "nickname": "슬랙스수집가", "rating": 5, "comment": "와이드 핏 완벽.", "createdAt": "2024-11-20" },
  { "productId": 205, "nickname": "익명", "rating": 5, "comment": "가성비 진짜 좋음.", "createdAt": "2024-11-17" },
  { "productId": 205, "nickname": "편한청바지", "rating": 4, "comment": "편하고 튼튼함.", "createdAt": "2024-11-15" },

  { "productId": 206, "nickname": "데일리룩", "rating": 4, "comment": "핏 예쁨!", "createdAt": "2024-11-21" },
  { "productId": 206, "nickname": "익명", "rating": 5, "comment": "두께감 적당함.", "createdAt": "2024-11-19" },
  { "productId": 206, "nickname": "옷사쟈", "rating": 4, "comment": "색감 사진과 동일.", "createdAt": "2024-11-18" },


  /* ===============================
     크리에이터 3 - 티벳동생 (productId 301~306)
     =============================== */

  { "productId": 301, "nickname": "헬스덕후", "rating": 5, "comment": "단백질 간식으로 최고!", "createdAt": "2024-11-20" },
  { "productId": 301, "nickname": "익명", "rating": 4, "comment": "맛있고 부담 없음.", "createdAt": "2024-11-18" },
  { "productId": 301, "nickname": "다이어터", "rating": 5, "comment": "식사 대용으로 딱.", "createdAt": "2024-11-17" },

  { "productId": 302, "nickname": "요거트매니아", "rating": 5, "comment": "진짜 꾸덕함!", "createdAt": "2024-11-20" },
  { "productId": 302, "nickname": "익명", "rating": 4, "comment": "가격대비 만족.", "createdAt": "2024-11-18" },
  { "productId": 302, "nickname": "건강맨", "rating": 4, "comment": "매일 먹기 좋음.", "createdAt": "2024-11-16" },

  { "productId": 303, "nickname": "프로틴러버", "rating": 5, "comment": "바삭하고 맛있음.", "createdAt": "2024-11-21" },
  { "productId": 303, "nickname": "익명", "rating": 4, "comment": "우유랑 먹으면 최고.", "createdAt": "2024-11-19" },
  { "productId": 303, "nickname": "헬창", "rating": 5, "comment": "단백질 함량 굿!", "createdAt": "2024-11-17" },

  { "productId": 304, "nickname": "스킨케어좋아", "rating": 4, "comment": "향 좋고 시원함.", "createdAt": "2024-11-18" },
  { "productId": 304, "nickname": "익명", "rating": 5, "comment": "바디 미스트로 딱!", "createdAt": "2024-11-16" },
  { "productId": 304, "nickname": "몸관리중", "rating": 4, "comment": "촉촉함 오래감.", "createdAt": "2024-11-14" },

  { "productId": 305, "nickname": "피부관리남", "rating": 5, "comment": "향기 좋고 지속력 좋음.", "createdAt": "2024-11-20" },
  { "productId": 305, "nickname": "익명", "rating": 4, "comment": "샤워할 때 편함.", "createdAt": "2024-11-17" },
  { "productId": 305, "nickname": "가성비러버", "rating": 5, "comment": "가성비 최고.", "createdAt": "2024-11-15" },

  { "productId": 306, "nickname": "민감피부", "rating": 4, "comment": "순하고 쿨링감 있음.", "createdAt": "2024-11-21" },
  { "productId": 306, "nickname": "익명", "rating": 5, "comment": "포맨 제품이라 그런지 향도 좋음.", "createdAt": "2024-11-19" },
  { "productId": 306, "nickname": "포맨유저", "rating": 4, "comment": "흡수 빠르고 끈적임 없음.", "createdAt": "2024-11-17" }

]



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
