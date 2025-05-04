// js/recipe.js

const recipes = {
    // --- 한식 ---
    kimchiStew: {
        title: "김치찌개",
        image: "images/kimchiStew.jpg",
        description: "국물 맛이 진하고 얼큰한 김치찌개!",
        category: "한식",
        ingredients: [
            "묵은지 300g",
            "돼지고기 앞다리살 200g",
            "두부 1/2모",
            "대파 1대",
            "고춧가루 1큰술",
            "국간장 1큰술",
            "다진마늘 1큰술"
        ],
        steps: [
            "냄비에 참기름을 두르고 돼지고기를 볶는다.",
            "고기가 반쯤 익으면 묵은지를 넣고 3분간 볶는다.",
            "물을 500ml 붓고 국간장, 고춧가루를 넣어 끓인다.",
            "두부를 2cm 크기로 썰어 넣고 10분 더 끓인다.",
            "대파와 다진마늘을 넣고 2분 후 불을 끈다."
        ]
    },
    bulgogi: {
        title: "불고기",
        image: "images/bulgogi.jpg",
        description: "달콤 짭조름한 소고기 볶음!",
        category: "한식",
        ingredients: [
            "소고기 불고기용 400g",
            "간장 4큰술",
            "설탕 2큰술",
            "다진마늘 1큰술",
            "참기름 1큰술",
            "양파 1개",
            "당근 1/2개"
        ],
        steps: [
            "소고기를 간장, 설탕, 다진마늘, 참기름에 30분간 재운다.",
            "팬을 달군 후 고기를 볶는다.",
            "양파와 당근을 채 썰어 넣고 함께 볶는다.",
            "국물이 자작해질 때까지 익힌다."
        ]
    },
    bibimbap: {
        title: "비빔밥",
        image: "images/bibimbap.jpg",
        description: "다양한 나물과 고명을 비벼먹는 한식 대표 음식!",
        category: "한식",
        ingredients: [
            "밥 1공기",
            "시금치 50g",
            "콩나물 50g",
            "당근 1/2개",
            "애호박 1/2개",
            "소고기 다짐육 100g",
            "계란 1개",
            "고추장 1큰술"
        ],
        steps: [
            "나물(시금치, 콩나물)을 데쳐 간장과 참기름으로 무친다.",
            "애호박과 당근을 채 썰어 볶는다.",
            "다짐육을 볶아 간을 맞춘다.",
            "밥 위에 나물, 고기, 채소를 올리고 계란프라이를 얹는다.",
            "고추장을 곁들여 비벼먹는다."
        ]
    },
    japchae: {
        title: "잡채",
        image: "images/japchae.jpg",
        description: "쫄깃한 당면과 야채가 어우러진 볶음요리!",
        category: "한식",
        ingredients: [
            "당면 150g",
            "소고기 채썬 것 100g",
            "시금치 50g",
            "양파 1개",
            "당근 1/2개",
            "간장 4큰술",
            "참기름 2큰술",
            "설탕 1큰술"
        ],
        steps: [
            "당면을 8분간 삶아 찬물에 헹군다.",
            "소고기를 간장과 설탕에 재운다.",
            "채소를 볶고, 소고기도 볶는다.",
            "모든 재료를 당면과 함께 간장, 참기름을 넣고 버무린다."
        ]
    },
    galbijjim: {
        title: "갈비찜",
        image: "images/galbijjim.jpg",
        description: "부드럽게 졸여낸 양념 갈비 요리!",
        category: "한식",
        ingredients: [
            "소갈비 800g",
            "간장 5큰술",
            "설탕 2큰술",
            "배즙 3큰술",
            "마늘 2큰술",
            "대파 1대",
            "무 1/4개",
            "당근 1개"
        ],
        steps: [
            "갈비를 찬물에 담가 핏물을 뺀다.",
            "양념 재료를 모두 섞어 소스를 만든다.",
            "갈비를 냄비에 넣고 양념과 함께 끓인다.",
            "무와 당근을 추가하고 약불에서 1시간 30분 졸인다."
        ]
    },
    steak: {
        title: "스테이크",
        image: "images/steak.jpg",
        description: "육즙 가득한 소고기 스테이크",
        ingredients: ["소고기 등심 250g", "소금 1/2작은술", "후추 약간", "올리브오일 1큰술", "버터 20g", "마늘 3쪽"],
        category: "양식",
        steps: [
            "고기에 소금과 후추를 뿌려 10분간 재운다.",
            "팬을 강불로 달군 뒤 올리브오일을 두르고 고기를 올린다.",
            "한 면을 2분, 뒤집어서 2분 굽는다.",
            "버터와 마늘을 넣고 고기 위에 끼얹으며 1분 더 굽는다.",
            "접시에 담아 5분간 휴지시킨 후 썬다."
        ]
    },
    carbonara: {
        title: "까르보나라",
        image: "images/carbonara.jpg",
        description: "진한 크림 소스와 베이컨이 어우러진 파스타",
        ingredients: ["스파게티면 150g", "베이컨 100g", "달걀노른자 2개", "파르메산 치즈 50g", "후추 약간", "올리브오일 1큰술"],
        category: "양식",
        steps: [
            "끓는 물에 소금을 넣고 면을 9분간 삶는다.",
            "팬에 올리브오일을 두르고 베이컨을 노릇하게 볶는다.",
            "면수를 3큰술 남긴 뒤 면을 팬에 넣어 베이컨과 섞는다.",
            "불을 끄고 노른자, 치즈, 면수를 넣고 재빨리 섞는다.",
            "후추를 뿌려 완성한다."
        ]
    },
    lasagna: {
        title: "라자냐",
        category: "양식",
        image: "images/lasagna.jpg",
        description: "풍부한 미트소스와 치즈가 층층이 쌓인 라자냐",
        ingredients: ["라자냐면 6장", "소고기 다짐육 300g", "토마토소스 400g", "모짜렐라 치즈 150g", "리코타 치즈 100g", "양파 1개"],
        steps: [
            "양파를 다져 팬에 볶고 소고기를 넣어 5분간 볶는다.",
            "토마토소스를 부어 10분간 졸인다.",
            "라자냐면을 끓는 물에 5분간 데친다.",
            "오븐용기에 미트소스-면-치즈 순으로 3번 층층이 쌓는다.",
            "180도 오븐에 30분간 굽는다."
        ]
    },
    risotto: {
        title: "버섯 리조또",
        category: "양식",
        image: "images/risotto.jpg",
        description: "크리미한 식감의 버섯 리조또",
        ingredients: ["쌀 200g", "양송이버섯 100g", "양파 1/2개", "버터 20g", "치킨스톡 500ml", "파르메산 치즈 30g"],
        steps: [
            "양파와 버섯을 얇게 썬다.",
            "팬에 버터를 녹이고 양파를 3분간 볶는다.",
            "쌀을 넣고 2분간 볶다가 치킨스톡을 조금씩 부어가며 20분간 끓인다.",
            "버섯을 넣고 5분간 더 끓인다.",
            "치즈를 넣고 섞어 완성한다."
        ]
    },
    pizza: {
        title: "마르게리타 피자",
        category: "양식",
        image: "images/pizza.jpg",
        description: "상큼한 토마토와 모짜렐라가 어우러진 클래식 피자",
        ingredients: ["피자도우 1장", "토마토소스 100g", "모짜렐라 치즈 150g", "바질잎 5장", "올리브오일 1큰술"],
        steps: [
            "피자도우 위에 토마토소스를 바른다.",
            "모짜렐라 치즈를 골고루 올린다.",
            "바질잎을 흩뿌린다.",
            "220도 오븐에 12분간 굽는다.",
            "올리브오일을 뿌려 마무리한다."
        ]
    },
    // --- 중식 ---
    jajangmyeon: {
        title: "짜장면",
        category: "중식",
        image: "images/jajangmyeon.jpg",
        description: "달콤 짭짤한 중국식 면 요리",
        ingredients: ["중화면 200g", "돼지고기 다짐육 150g", "양파 1개", "춘장 2큰술", "설탕 1큰술", "녹말물 2큰술"],
        steps: [
            "중화면을 끓는 물에 7분간 삶아 찬물에 헹군다.",
            "팬에 돼지고기, 양파를 볶는다.",
            "춘장과 설탕을 넣고 3분 볶는다.",
            "물 200ml를 붓고 5분 끓인다.",
            "녹말물을 넣어 걸쭉하게 만들고 면에 부어낸다."
        ]
    },
    jjamppong: {
        title: "짬뽕",
        category: "중식",
        image: "images/jjamppong.jpg",
        description: "매콤한 해물 국물 요리",
        ingredients: ["중화면 200g", "오징어 100g", "홍합 100g", "배추 100g", "고추기름 2큰술", "다진마늘 1큰술", "육수 500ml"],
        steps: [
            "오징어, 홍합을 손질해 준비한다.",
            "팬에 고추기름과 마늘을 볶는다.",
            "해물과 배추를 넣어 볶은 뒤 육수를 붓는다.",
            "5분간 강불로 끓인다.",
            "삶은 면에 국물을 붓고 낸다."
        ]
    },
    mapoTofu: {
        title: "마파두부",
        category: "중식",
        image: "images/mapoTofu.jpg",
        description: "매콤한 두부 볶음 요리",
        ingredients: ["두부 300g", "돼지고기 다짐육 100g", "두반장 1큰술", "간장 1큰술", "대파 1대", "고추기름 1큰술"],
        steps: [
            "두부는 깍둑썰어 끓는 물에 데친다.",
            "팬에 고추기름을 두르고 고기와 두반장을 볶는다.",
            "간장을 넣고 볶다가 두부를 넣는다.",
            "약불에서 5분 조린다.",
            "대파를 넣고 마무리한다."
        ]
    },
    tangsuyuk: {
        title: "탕수육",
        category: "중식",
        image: "images/tangsuyuk.jpg",
        description: "바삭한 튀김과 새콤달콤한 소스",
        ingredients: ["돼지고기 안심 300g", "감자전분 1컵", "식초 2큰술", "설탕 2큰술", "간장 1큰술", "오이 50g", "당근 30g"],
        steps: [
            "돼지고기를 1cm 두께로 썬다.",
            "감자전분에 물을 붓고 반죽해 고기를 튀긴다.",
            "팬에 식초, 설탕, 간장, 물 200ml를 끓인다.",
            "오이, 당근을 채 썰어 소스에 넣는다.",
            "튀긴 고기에 소스를 부어 낸다."
        ]
    },
    guobaorou: {
        title: "꿔바로우",
        category: "중식",
        image: "images/guobaorou.jpg",
        description: "새콤달콤 바삭한 찹쌀 탕수육",
        ingredients: ["돼지고기 등심 300g", "찹쌀가루 1컵", "식초 3큰술", "설탕 3큰술", "간장 1큰술"],
        steps: [
            "돼지고기를 얇게 썰어 찹쌀가루를 묻힌다.",
            "180도 기름에 고기를 튀긴다.",
            "식초, 설탕, 간장, 물 100ml를 팬에 끓인다.",
            "튀긴 고기에 소스를 끼얹어 버무린다.",
            "바삭하게 식혀 낸다."
        ]
    },

    // --- 일식 ---
    tonkatsu: {
        title: "돈카츠",
        category: "일식",
        image: "images/tonkatsu.jpg",
        description: "바삭한 일본식 돈가스",
        ingredients: ["돼지고기 등심 200g", "밀가루 1/2컵", "달걀 1개", "빵가루 1컵", "식용유 적당량"],
        steps: [
            "등심을 두드려 소금, 후추로 간한다.",
            "밀가루-달걀-빵가루 순서로 입힌다.",
            "170도 기름에 양면 각각 3분씩 튀긴다.",
            "기름을 제거하고 썰어낸다.",
            "돈카츠 소스와 함께 낸다."
        ]
    },
    gyudon: {
        title: "규동",
        category: "일식",
        image: "images/gyudon.jpg",
        description: "달콤 짭짤한 소고기 덮밥",
        ingredients: ["소고기 샤브샤브용 200g", "양파 1/2개", "간장 3큰술", "설탕 1큰술", "미림 2큰술"],
        steps: [
            "양파를 얇게 썬다.",
            "팬에 간장, 설탕, 미림을 넣고 끓인다.",
            "소고기와 양파를 넣어 3분간 볶는다.",
            "밥 위에 얹어낸다.",
            "취향에 따라 반숙 계란을 올린다."
        ]
    },
    ramen: {
        title: "라멘",
        category: "일식",
        image: "images/ramen.jpg",
        description: "진한 육수와 면발의 조화",
        ingredients: ["라멘면 1인분", "돈코츠 육수 500ml", "차슈 2장", "반숙계란 1개", "김 약간", "쪽파 약간"],
        steps: [
            "라멘면을 끓는 물에 2분간 삶는다.",
            "육수를 데워 그릇에 붓는다.",
            "삶은 면을 육수에 담는다.",
            "차슈, 계란, 김, 쪽파를 올린다.",
            "바로 서빙한다."
        ]
    },
    onigiri: {
        title: "오니기리",
        category: "일식",
        image: "images/onigiri.jpg",
        description: "간단하게 쥐어 만든 일본 주먹밥",
        ingredients: ["밥 1공기", "소금 약간", "참치마요 2큰술", "김 약간"],
        steps: [
            "밥에 소금을 살짝 뿌린다.",
            "손에 물을 묻히고 밥을 펴 참치마요를 넣는다.",
            "삼각형 모양으로 쥔다.",
            "김을 둘러준다.",
            "먹기 좋게 싼다."
        ]
    },
    karaage: {
        title: "가라아게",
        category: "일식",
        image: "images/karaage.jpg",
        description: "겉은 바삭, 속은 촉촉한 일본식 치킨",
        ingredients: ["닭다리살 300g", "간장 2큰술", "맛술 1큰술", "생강즙 1큰술", "감자전분 1컵"],
        steps: [
            "닭고기에 간장, 맛술, 생강즙을 넣어 20분간 재운다.",
            "감자전분을 골고루 묻힌다.",
            "170도 기름에 4분간 튀긴다.",
            "기름을 제거하고 식힌다.",
            "레몬을 곁들여 낸다."
        ]
    },
    // --- 동남아 ---
    padThai: {
        title: "팟타이",
        category: "동남아",
        image: "images/padThai.jpg",
        description: "새콤달콤한 쌀국수 볶음",
        ingredients: ["쌀국수 200g", "새우 100g", "숙주 50g", "달걀 1개", "피쉬소스 2큰술", "설탕 1큰술", "땅콩 분태 약간"],
        steps: [
            "쌀국수를 미지근한 물에 30분 불린다.",
            "팬에 기름을 두르고 달걀을 스크램블한다.",
            "새우를 넣고 볶다가 쌀국수를 넣는다.",
            "피쉬소스, 설탕으로 간하고 숙주를 넣어 1분 더 볶는다.",
            "땅콩을 뿌려 마무리한다."
        ]
    },
    nasiGoreng: {
        title: "나시고렝",
        category: "동남아",
        image: "images/nasiGoreng.jpg",
        description: "인도네시아식 볶음밥",
        ingredients: ["밥 1공기", "닭고기 100g", "양파 1/2개", "계란 1개", "케첩마니스 2큰술", "고추 약간"],
        steps: [
            "팬에 기름을 두르고 양파와 닭고기를 볶는다.",
            "밥을 넣고 고루 볶는다.",
            "케첩마니스와 고추를 넣어 간한다.",
            "계란 후라이를 올려 마무리한다."
        ]
    },
    tomYumGoong: {
        title: "똠얌꿍",
        category: "동남아",
        image: "images/tomYumGoong.jpg",
        description: "매콤하고 시큼한 태국식 새우 수프",
        ingredients: ["새우 6마리", "레몬그라스 1대", "고수 한 줌", "라임즙 2큰술", "피쉬소스 2큰술", "고추 2개"],
        steps: [
            "물 500ml에 레몬그라스를 넣고 끓인다.",
            "새우를 넣고 3분간 끓인다.",
            "피쉬소스, 라임즙, 고추를 넣는다.",
            "고수로 마무리한다."
        ]
    },
    banhMi: {
        title: "반미",
        category: "동남아",
        image: "images/banhMi.jpg",
        description: "베트남식 바게트 샌드위치",
        ingredients: ["바게트 1개", "돼지고기 구이 100g", "오이 슬라이스", "피클", "고수", "마요네즈"],
        steps: [
            "바게트를 반으로 가른다.",
            "마요네즈를 바르고 고기, 오이, 피클, 고수를 넣는다.",
            "랩으로 감싸 휴대한다."
        ]
    },
    satay: {
        title: "사테",
        category: "동남아",
        image: "images/satay.jpg",
        description: "땅콩소스를 곁들인 꼬치구이",
        ingredients: ["닭가슴살 200g", "피넛버터 2큰술", "간장 2큰술", "레몬즙 1큰술", "설탕 1큰술"],
        steps: [
            "닭가슴살을 꼬치에 꽂는다.",
            "간장, 레몬즙, 설탕으로 마리네이드한다.",
            "그릴에 양면 각각 4분씩 굽는다.",
            "피넛버터 소스를 곁들여 낸다."
        ]
    },

    // --- 멕시코 ---
    taco: {
        title: "타코",
        category: "멕시코",
        image: "images/타코.jpg",
        description: "고기와 채소를 넣은 멕시코식 또띠야",
        ingredients: ["또띠야 2장", "다진 소고기 100g", "양상추 30g", "토마토 1개", "치즈 30g", "살사소스 약간"],
        steps: [
            "다진 고기를 볶아 양념한다.",
            "또띠야를 데운다.",
            "고기, 채소, 치즈를 올리고 살사소스를 얹는다.",
            "반으로 접어 낸다."
        ]
    },
    burrito: {
        title: "부리또",
        category: "멕시코",
        image: "images/burrito.jpg",
        description: "속재료를 가득 담은 랩 샌드위치",
        ingredients: ["또띠야 1장", "밥 1/2공기", "콩조림 50g", "치즈 30g", "소고기 100g", "살사소스 2큰술"],
        steps: [
            "소고기를 볶는다.",
            "또띠야 위에 밥, 콩조림, 고기, 치즈를 올린다.",
            "살사소스를 뿌리고 돌돌 만다.",
            "랩으로 싸서 먹는다."
        ]
    },
    quesadilla: {
        title: "퀘사디야",
        category: "멕시코",
        image: "images/quesadilla.jpg",
        description: "녹인 치즈가 가득한 멕시코식 그릴 요리",
        ingredients: ["또띠야 2장", "모짜렐라치즈 100g", "닭가슴살 100g", "파프리카 약간"],
        steps: [
            "닭가슴살과 파프리카를 볶는다.",
            "또띠야 위에 재료와 치즈를 올리고 또띠야를 덮는다.",
            "팬에 앞뒤로 굽는다.",
            "먹기 좋게 썬다."
        ]
    },
    nachos: {
        title: "나쵸",
        category: "멕시코",
        image: "images/nachos.jpg",
        description: "치즈와 살사를 얹은 스낵",
        ingredients: ["나쵸칩 100g", "체다치즈 100g", "살사소스 100g", "할라피뇨 약간"],
        steps: [
            "나쵸칩 위에 치즈를 뿌린다.",
            "전자레인지에 1분 돌린다.",
            "살사소스와 할라피뇨를 얹는다.",
            "바로 먹는다."
        ]
    },
    enchilada: {
        title: "엔칠라다",
        category: "멕시코",
        image: "images/enchilada.jpg",
        description: "매콤한 소스를 얹은 멕시코식 롤 요리",
        ingredients: ["또띠야 2장", "닭가슴살 150g", "엔칠라다 소스 100ml", "치즈 50g"],
        steps: [
            "닭가슴살을 익혀 찢는다.",
            "또띠야에 고기를 넣고 말아 팬에 담는다.",
            "엔칠라다 소스를 붓고 치즈를 뿌린다.",
            "180도 오븐에서 15분 굽는다."
        ]
    },
    // --- 국/찌개 ---
    doenjangStew: {
        title: "된장찌개",
        category: "국/찌개",
        image: "images/doenjangStew.jpg",
        description: "구수한 맛이 일품인 된장찌개",
        ingredients: ["된장 2큰술", "애호박 1/3개", "감자 1개", "양파 1/2개", "두부 1/2모", "대파 1대", "멸치육수 500ml"],
        steps: [
            "냄비에 멸치육수를 붓고 된장을 풀어 끓인다.",
            "감자와 양파를 넣고 5분간 끓인다.",
            "애호박과 두부를 넣고 5분 더 끓인다.",
            "대파를 넣고 2분간 더 끓여 마무리한다."
        ]
    },
    kimchiSoup: {
        title: "김치국",
        category: "국/찌개",
        image: "images/kimchiSoup.jpg",
        description: "시원한 김치로 끓인 국",
        ingredients: ["묵은지 200g", "멸치육수 500ml", "두부 1/2모", "대파 1대", "다진마늘 1큰술"],
        steps: [
            "묵은지를 썰어 냄비에 담는다.",
            "멸치육수를 붓고 10분간 끓인다.",
            "두부를 넣고 5분 더 끓인다.",
            "대파와 다진마늘을 넣고 한소끔 끓여 완성한다."
        ]
    },
    samgyetang: {
        title: "삼계탕",
        category: "국/찌개",
        image: "images/samgyetang.jpg",
        description: "닭 한 마리를 통째로 끓인 보양식",
        ingredients: ["영계 1마리", "찹쌀 1/4컵", "대추 4개", "마늘 6쪽", "인삼 1뿌리", "물 1.5L"],
        steps: [
            "찹쌀을 불린다.",
            "영계 배 안에 찹쌀, 대추, 마늘, 인삼을 넣는다.",
            "물 1.5L에 넣고 약불에서 1시간 끓인다.",
            "소금으로 간한다."
        ]
    },
    sundubuJjigae: {
        title: "순두부찌개",
        category: "국/찌개",
        image: "images/sundubuJjigae.jpg",
        description: "부드럽고 얼큰한 순두부 찌개",
        ingredients: ["순두부 1팩", "돼지고기 다짐육 100g", "고춧가루 1큰술", "다진마늘 1큰술", "육수 400ml", "계란 1개"],
        steps: [
            "팬에 돼지고기와 고춧가루를 볶는다.",
            "육수를 붓고 끓인다.",
            "순두부를 넣고 5분간 끓인다.",
            "계란을 깨뜨려 넣고 뚜껑을 덮어 2분 끓인다."
        ]
    },
    seaweedSoup: {
        title: "미역국",
        category: "국/찌개",
        image: "images/미역국.jpg",
        description: "생일에 빠질 수 없는 미역국",
        ingredients: ["미역 20g", "소고기 양지 100g", "국간장 1큰술", "참기름 1큰술", "물 1L"],
        steps: [
            "미역을 20분간 불린다.",
            "소고기를 참기름에 볶는다.",
            "미역을 넣고 같이 볶는다.",
            "물을 부어 30분간 끓인다.",
            "국간장으로 간한다."
        ]
    },

    // --- 반찬 ---
    soyBraisedEgg: {
        title: "계란장조림",
        category: "반찬",
        image: "images/soyBraisedEgg.jpg",
        description: "짭조름한 밥도둑 반찬",
        ingredients: ["삶은계란 6개", "간장 5큰술", "설탕 1큰술", "물 300ml", "마늘 4쪽"],
        steps: [
            "삶은 계란 껍질을 벗긴다.",
            "냄비에 간장, 설탕, 물, 마늘을 넣고 끓인다.",
            "계란을 넣고 중약불로 15분 졸인다.",
            "국물이 자작해지면 불을 끈다."
        ]
    },
    stirFriedAnchovy: {
        title: "멸치볶음",
        category: "반찬",
        image: "images/stirFriedAnchovy.jpg",
        description: "고소하고 달콤한 밑반찬",
        ingredients: ["잔멸치 100g", "간장 2큰술", "설탕 1큰술", "올리고당 1큰술", "참기름 1큰술"],
        steps: [
            "팬에 멸치를 바삭하게 볶는다.",
            "간장, 설탕, 올리고당을 넣고 버무린다.",
            "불을 끄고 참기름을 뿌려 섞는다."
        ]
    },
    stirFriedKimchi: {
        title: "김치볶음",
        category: "반찬",
        image: "images/stirFriedKimchi.jpg",
        description: "묵은지로 만든 매콤한 볶음",
        ingredients: ["묵은지 200g", "설탕 1큰술", "참기름 1큰술", "고춧가루 1큰술"],
        steps: [
            "팬에 참기름을 두르고 김치를 볶는다.",
            "설탕과 고춧가루를 넣고 볶는다.",
            "국물이 졸아들면 완성한다."
        ]
    },
    stirFriedSpam: {
        title: "스팸볶음",
        category: "반찬",
        image: "images/stirFriedSpam.jpg",
        description: "짭조름한 스팸 볶음 반찬",
        ingredients: ["스팸 1캔", "양파 1/2개", "고추 2개", "간장 1큰술"],
        steps: [
            "스팸과 양파를 깍둑썬다.",
            "팬에 스팸과 양파를 볶는다.",
            "고추를 넣고 간장으로 간한다.",
            "3분간 더 볶아 마무리한다."
        ]
    },
    sweetPotatoSide: {
        title: "고구마 맛탕",
        category: "반찬",
        image: "images/sweetPotatoSide.jpg",
        description: "겉은 바삭 속은 달콤한 고구마 맛탕",
        ingredients: ["고구마 2개", "설탕 4큰술", "식용유 적당량", "올리고당 2큰술"],
        steps: [
            "고구마를 깍둑썰어 튀긴다.",
            "팬에 설탕과 올리고당을 녹인다.",
            "튀긴 고구마를 넣고 버무린다.",
            "식혀서 먹는다."
        ]
    },
    // --- 분식 ---
    tteokbokki: {
        title: "떡볶이",
        category: "분식",
        image: "images/tteokbokki.jpg",
        description: "매콤달콤 국민 간식 떡볶이",
        ingredients: ["떡 300g", "어묵 100g", "고추장 2큰술", "설탕 1큰술", "간장 1큰술", "물 400ml", "대파 1대"],
        steps: [
            "떡을 물에 10분간 불린다.",
            "팬에 물과 고추장, 설탕, 간장을 넣고 끓인다.",
            "떡과 어묵을 넣어 중불에서 10분간 졸인다.",
            "대파를 썰어 넣고 2분 더 끓인다."
        ]
    },
    sundae: {
        title: "순대",
        category: "분식",
        image: "images/sundae.jpg",
        description: "쫀득한 돼지순대와 찰떡궁합",
        ingredients: ["순대 300g", "소금 약간", "쌈장 약간", "깻잎 약간"],
        steps: [
            "순대를 찜기에 넣어 10분간 찐다.",
            "먹기 좋은 크기로 썬다.",
            "소금이나 쌈장에 찍어 먹는다."
        ]
    },
    gimbap: {
        title: "김밥",
        category: "분식",
        image: "images/gimbap.jpg",
        description: "한 끼 식사로 좋은 김밥",
        ingredients: ["김밥용 김 3장", "밥 1공기", "단무지 3줄", "햄 3줄", "시금치 50g", "계란 2개", "참기름 약간"],
        steps: [
            "밥에 참기름과 소금을 섞는다.",
            "김 위에 밥을 얇게 편다.",
            "속재료를 올리고 단단히 말아준다.",
            "먹기 좋게 썬다."
        ]
    },
    twigim: {
        title: "튀김",
        category: "분식",
        image: "images/twigim.jpg",
        description: "바삭한 오징어튀김, 야채튀김",
        ingredients: ["튀김가루 1컵", "물 3/4컵", "오징어 1마리", "고구마 1개", "당근 1/2개", "식용유 적당량"],
        steps: [
            "튀김옷을 만든다.",
            "재료를 적당한 크기로 썬다.",
            "튀김옷을 입혀 180도 기름에 3분간 튀긴다.",
            "기름을 빼고 낸다."
        ]
    },
    rabokki: {
        title: "라볶이",
        category: "분식",
        image: "images/rabokki.jpg",
        description: "라면과 떡볶이의 환상 조합",
        ingredients: ["라면사리 1개", "떡 200g", "어묵 50g", "고추장 1큰술", "설탕 1큰술", "물 500ml"],
        steps: [
            "냄비에 물과 고추장, 설탕을 풀고 끓인다.",
            "떡과 어묵을 넣고 5분간 끓인다.",
            "라면을 넣고 3분 더 끓인다.",
            "국물이 자작해지면 완성."
        ]
    },

    // --- 면류 ---
    ramyun: {
        title: "라면",
        category: "면류",
        image: "images/라면.jpg",
        description: "한국인의 소울푸드 라면",
        ingredients: ["라면 1개", "물 550ml", "계란 1개", "대파 약간"],
        steps: [
            "물에 라면스프와 건더기를 넣고 끓인다.",
            "면을 넣고 4분간 끓인다.",
            "계란과 대파를 추가하고 마무리한다."
        ]
    },
    bibimNoodles: {
        title: "비빔면",
        category: "면류",
        image: "images/bibimNoodles.jpg", // 파일명은 실제 이미지 이름에 맞게 저장
        description: "매콤새콤한 양념으로 비벼먹는 여름철 별미!",
        ingredients: ["소면 150g", "고추장 2큰술", "식초 1큰술", "설탕 1큰술", "다진 마늘 1작은술", "참기름 1큰술", "오이채 약간", "삶은 계란 1개"],
        steps: [
            "소면을 삶아 찬물에 헹궈 물기를 뺀다.",
            "고추장, 식초, 설탕, 다진 마늘, 참기름을 섞어 양념장을 만든다.",
            "면에 양념장을 넣고 잘 비빈다.",
            "그릇에 담고 오이채와 삶은 계란을 얹어 마무리한다."
        ]
    },
    udon: {
        title: "우동",
        category: "면류",
        image: "images/우동.jpg",
        description: "쫄깃한 면발의 따뜻한 우동",
        ingredients: ["우동면 1인분", "멸치육수 500ml", "간장 2큰술", "맛술 1큰술", "대파 약간"],
        steps: [
            "육수를 끓이고 간장, 맛술로 간한다.",
            "우동면을 넣고 3분간 끓인다.",
            "대파를 얹어 낸다."
        ]
    },
    coldNoodles: {
        title: "냉면",
        category: "면류",
        image: "images/coldNoodles.jpg",
        description: "시원한 여름 별미 냉면",
        ingredients: ["냉면사리 1개", "냉면육수 1팩", "오이 약간", "삶은 계란 1개", "식초 약간"],
        steps: [
            "냉면사리를 삶아 찬물에 헹군다.",
            "그릇에 담고 냉면육수를 붓는다.",
            "오이와 계란을 올린다.",
            "기호에 따라 식초를 추가한다."
        ]
    },
    spaghetti: {
        title: "스파게티",
        category: "면류",
        image: "images/스파게티.jpg",
        description: "정통 이탈리안 토마토 스파게티",
        ingredients: ["스파게티면 200g", "토마토소스 150g", "다진마늘 1큰술", "올리브오일 2큰술", "바질 약간"],
        steps: [
            "스파게티면을 삶는다.",
            "팬에 올리브오일과 마늘을 볶는다.",
            "토마토소스를 넣고 끓인다.",
            "면과 소스를 섞고 바질로 장식한다."
        ]
    },

    // --- 샐러드 ---
    caesarSalad: {
        title: "시저 샐러드",
        category: "샐러드",
        image: "images/시저샐러드.jpg",
        description: "부드러운 드레싱이 특징인 샐러드",
        ingredients: ["로메인 100g", "크루통 약간", "시저드레싱 3큰술", "파마산 치즈 20g"],
        steps: [
            "로메인을 한입 크기로 찢는다.",
            "시저드레싱을 고루 버무린다.",
            "크루통과 치즈를 올린다."
        ]
    },
    greekSalad: {
        title: "그릭 샐러드",
        category: "샐러드",
        image: "images/그릭샐러드.jpg",
        description: "상큼한 올리브와 치즈 샐러드",
        ingredients: ["오이 1/2개", "토마토 1개", "올리브 10알", "페타치즈 50g", "올리브오일 2큰술"],
        steps: [
            "채소를 깍둑썬다.",
            "페타치즈와 올리브를 얹는다.",
            "올리브오일을 뿌린다."
        ]
    },
    fruitSalad: {
        title: "과일 샐러드",
        category: "샐러드",
        image: "images/fruitSalad.jpg",
        description: "여러 가지 과일을 섞은 샐러드",
        ingredients: ["사과 1/2개", "바나나 1개", "키위 1개", "요거트 100g"],
        steps: [
            "과일을 깍둑썰기한다.",
            "볼에 담고 요거트를 부어 버무린다.",
            "바로 먹는다."
        ]
    },
    potatoSalad: {
        title: "감자 샐러드",
        category: "샐러드",
        image: "images/potatoSalad.jpg",
        description: "부드러운 감자 샐러드",
        ingredients: ["감자 2개", "마요네즈 3큰술", "오이 약간", "당근 약간"],
        steps: [
            "감자를 삶아 으깬다.",
            "잘게 썬 오이, 당근을 넣는다.",
            "마요네즈로 버무린다."
        ]
    },
    tunaSalad: {
        title: "참치 샐러드",
        category: "샐러드",
        image: "images/tunaSalad.jpg",
        description: "고소한 참치 드레싱 샐러드",
        ingredients: ["참치캔 1개", "양상추 50g", "옥수수캔 2큰술", "마요네즈 2큰술"],
        steps: [
            "참치 기름을 빼고 준비한다.",
            "채소와 옥수수를 섞는다.",
            "마요네즈를 넣어 버무린다."
        ]
    },
    // --- 디저트 ---
    bingsu: {
        title: "팥빙수",
        category: "디저트",
        image: "images/bingsu.jpg",
        description: "시원하고 달콤한 여름 디저트",
        ingredients: ["빙수용 얼음 300g", "팥앙금 100g", "연유 2큰술", "떡 50g", "과일 약간"],
        steps: [
            "빙수를 그릇에 담는다.",
            "팥앙금과 연유를 얹는다.",
            "떡과 과일을 올린다.",
            "바로 먹는다."
        ]
    },
    hotteok: {
        title: "호떡",
        category: "디저트",
        image: "images/hotteok.jpg",
        description: "쫀득하고 달콤한 겨울 간식",
        ingredients: ["호떡 믹스 1팩", "물 180ml", "기름 약간"],
        steps: [
            "호떡 믹스에 물을 넣어 반죽한다.",
            "반죽을 소분하고 속재료를 넣어 납작하게 만든다.",
            "팬에 기름을 두르고 앞뒤로 노릇하게 굽는다."
        ]
    },
    yakgwa: {
        title: "약과",
        category: "디저트",
        image: "images/yakgwa.jpg",
        description: "꿀에 절인 전통 디저트",
        ingredients: ["약과 반죽 1팩", "꿀 200ml", "물 100ml", "설탕 50g"],
        steps: [
            "약과를 160도 기름에 튀긴다.",
            "꿀과 설탕, 물을 섞어 시럽을 만든다.",
            "튀긴 약과를 시럽에 담근다.",
            "건져서 식힌다."
        ]
    },
    cheesecake: {
        title: "치즈케이크",
        category: "디저트",
        image: "images/cheesecake.jpg",
        description: "부드럽고 진한 치즈맛 케이크",
        ingredients: ["크림치즈 200g", "설탕 50g", "달걀 2개", "생크림 100ml", "쿠키가루 100g"],
        steps: [
            "쿠키가루를 깔고 녹인 버터로 다진다.",
            "크림치즈와 설탕, 달걀, 생크림을 섞는다.",
            "틀에 부어 160도 오븐에서 40분 굽는다.",
            "식힌 뒤 냉장보관한다."
        ]
    },
    macaron: {
        title: "마카롱",
        category: "디저트",
        image: "images/마카롱.jpg",
        description: "사르르 녹는 달콤한 디저트",
        ingredients: ["아몬드가루 100g", "슈가파우더 100g", "달걀흰자 2개", "설탕 50g", "버터크림"],
        steps: [
            "아몬드가루와 슈가파우더를 체에 내린다.",
            "달걀흰자를 거품내 설탕과 함께 머랭을 만든다.",
            "재료를 섞어 팬에 짜넣는다.",
            "120도 오븐에서 15분 구운 후, 버터크림을 샌드한다."
        ]
    },

    // --- 베이킹 ---
    chocolateChipCookie: {
        title: "초코칩 쿠키",
        category: "베이킹",
        image: "images/chocolateChipCookie.jpg",
        description: "바삭하고 고소한 초코칩 쿠키",
        ingredients: ["박력분 200g", "버터 100g", "설탕 100g", "달걀 1개", "초코칩 100g"],
        steps: [
            "버터와 설탕을 섞고 달걀을 넣는다.",
            "박력분을 넣고 반죽한다.",
            "초코칩을 넣어 섞는다.",
            "180도 오븐에 12분간 굽는다."
        ]
    },
    madeleine: {
        title: "마들렌",
        category: "베이킹",
        image: "images/madeleine.jpg",
        description: "조개 모양의 부드러운 프랑스 과자",
        ingredients: ["박력분 100g", "버터 100g", "설탕 80g", "달걀 2개", "베이킹파우더 1작은술"],
        steps: [
            "버터를 녹인다.",
            "달걀과 설탕을 섞은 뒤 박력분, 베이킹파우더를 넣는다.",
            "녹인 버터를 넣고 섞는다.",
            "170도 오븐에서 10분간 굽는다."
        ]
    },
    bananaBread: {
        title: "바나나 브레드",
        category: "베이킹",
        image: "images/bananaBread.jpg",
        description: "촉촉한 바나나 풍미 가득한 케이크",
        ingredients: ["바나나 2개", "박력분 200g", "설탕 80g", "버터 100g", "달걀 2개", "베이킹파우더 1작은술"],
        steps: [
            "바나나를 으깬다.",
            "버터, 설탕, 달걀을 섞고 바나나를 추가한다.",
            "박력분과 베이킹파우더를 넣고 섞는다.",
            "180도 오븐에서 40분 굽는다."
        ]
    },
    poundCake: {
        title: "파운드 케이크",
        category: "베이킹",
        image: "images/poundCake.jpg",
        description: "버터와 밀가루가 풍부한 클래식 케이크",
        ingredients: ["박력분 200g", "버터 200g", "설탕 200g", "달걀 4개"],
        steps: [
            "버터와 설탕을 부드럽게 휘핑한다.",
            "달걀을 하나씩 넣어가며 섞는다.",
            "박력분을 넣고 섞는다.",
            "170도 오븐에서 50분간 굽는다."
        ]
    },
    croissant: {
        title: "크루아상",
        category: "베이킹",
        image: "images/croissant.jpg",
        description: "겹겹이 버터 향 가득한 빵",
        ingredients: ["강력분 250g", "버터 200g", "설탕 30g", "이스트 5g", "우유 150ml"],
        steps: [
            "반죽을 만들고 1차 발효한다.",
            "버터를 넣어 접기 과정을 반복한다.",
            "모양을 잡아 2차 발효 후 180도 오븐에서 15분 굽는다."
        ]
    },


};

// recipe.html 전용 렌더링 코드
if (document.getElementById('recipe-title')) {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('menu');
    const key = params.get('key');
    const recipeKey = menu || key;
    const recipe = recipes[recipeKey];

    if (recipe) {
        document.getElementById('recipe-title').textContent = recipe.title;
        document.getElementById('recipe-image').src = recipe.image;
        document.getElementById('recipe-description').textContent = recipe.description;

        const ingredientsList = document.getElementById('recipe-ingredients');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        const stepsList = document.getElementById('recipe-steps');
        recipe.steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
    } else {
        document.getElementById('recipe-title').textContent = "레시피를 찾을 수 없습니다.";
    }

    // 즐겨찾기 기능
    const favoriteButton = document.getElementById("favorite-button");
    if (favoriteButton) {
        const user = localStorage.getItem("cookbookUser");
        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (!user || !users[user]) {
            favoriteButton.textContent = "로그인 필요";
            favoriteButton.disabled = true;
        } else {
            const favorites = users[user].favorites || [];

            // 초기 상태
            if (favorites.includes(recipeKey)) {
                favoriteButton.textContent = "★ 즐겨찾기";
            } else {
                favoriteButton.textContent = "☆ 즐겨찾기";
            }

            // 클릭 시 토글
            favoriteButton.addEventListener("click", () => {
                const index = favorites.indexOf(recipeKey);
                if (index === -1) {
                    favorites.push(recipeKey);
                    favoriteButton.textContent = "★ 즐겨찾기";
                } else {
                    favorites.splice(index, 1);
                    favoriteButton.textContent = "☆ 즐겨찾기";
                }
                users[user].favorites = favorites;
                localStorage.setItem("users", JSON.stringify(users));
            });
        }
    }
}
