// Extended Camera & Visual Guide Data
const cameraData = {
    // ============= AIFI FRAMEWORK INFO =============
    // 강사 소개
    'instructor-intro': {
        title: '강사 소개',
        koreanTitle: 'Instructor Introduction',
        instructorInfo: {
            name: '김진욱',
            position: 'AIFI 프레임워크 개발이사',
            company: [
                '(주)알앤픽 대표이사',
                '(주)제이콥 소프트 전략영업대표'
            ],
            email: 'ggamsire@gmail.com',
            image: 'images/instructor.jpg'
        },
        description: 'AI 기술과 창의적 콘텐츠 제작 분야의 전문가로, 다년간의 경험을 바탕으로 AIFI 프레임워크에 합류하게 되었습니다.',
        usage: [
            'AIFI 프레임워크 설계 및 개발',
            '10년 이상의 IT 업무경력 보유',
            'AI 이미지/영상 생성 전문가',
            '다수의 기업 AI 도입 컨설팅 경험',
        ]
    },

    // AIFI AI 생성 도구
    'aifi-tool': {
        title: 'AIFI AI 생성 도구',
        koreanTitle: 'AI Image & Video Prompt Generator',
        type: 'tool',
        description: 'Gemini AI를 활용한 이미지 및 영상 프롬프트 생성 도구'
    },

    // ============= CAMERA SHOTS =============
    // Shot Size
    'extreme-closeup': {
        title: '익스트림 클로즈업(Extreme Close-up)',
        koreanTitle: '익스트림 클로즈업',
        prompt: 'extreme close-up',
        description: '눈, 입술 등 인물의 특정 신체 부위나 사물의 디테일한 부분을 화면에 극도로 크게 채우는 샷입니다.',
        usage: [
            '강렬한 감정을 극대화할 때',
            '이야기의 중요한 단서를 관객에게 명확히 보여줄 때',
            '극도의 긴장감을 조성할 때',
            '피사체의 세밀한 디테일을 강조할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/ecfcd186-90cd-4674-a321-8643dbac907c/0_3.png', caption: 'Eye extreme close-up' },
            { src: 'https://cdn.midjourney.com/78fd0ea7-2a19-4442-8ab0-9e652c69ab52/0_1.png', caption: 'Detail shot' },
            { src: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=400&fit=crop', caption: 'Texture emphasis' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Emotion focus' }
        ]
    },

    'closeup': {
        title: '클로즈업(Close-up)',
        koreanTitle: '클로즈업',
        prompt: 'close-up',
        description: '인물의 얼굴이 화면에 가득 차는 샷으로, 보통 어깨선 윗부분까지를 포함합니다.',
        usage: [
            '인물의 미세한 표정 변화와 감정을 전달할 때',
            '관객이 인물과 친밀감을 느끼게 할 때',
            '감정적으로 몰입하게 만들 때',
            '대화 장면에서 인물의 반응을 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c5198e9d-612f-46fa-b06f-9c63064b80d4/0_3.png', caption: 'Portrait close-up' },
            { src: 'https://cdn.midjourney.com/dae4392d-4bae-4e1d-882b-46817dfed2cb/0_1.png', caption: 'Emotional expression' },
            { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop', caption: 'Character detail' },
            { src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=400&fit=crop', caption: 'Face focus' }
        ]
    },

    'medium-shot': {
        title: '미디엄 샷(Medium Shot)',
        koreanTitle: '미디엄 샷',
        prompt: 'medium shot',
        description: '인물의 상반신(보통 허리 위)을 담는 샷입니다.',
        usage: [
            '가장 보편적으로 사용되는 샷',
            '인물의 표정과 손동작(제스처)을 함께 보여줄 때',
            '대화 장면에 가장 적합',
            '안정적인 느낌을 줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d21ac535-abd1-4dd4-a9fb-7e0160cb9f3a/0_3.png', caption: 'Standard medium shot' },
            { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop', caption: 'Conversation shot' },
            { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop', caption: 'Waist-up framing' },
            { src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&h=400&fit=crop', caption: 'Natural perspective' }
        ]
    },

    'cowboy-shot': {
        title: '카우보이 샷(Cowboy Shot)',
        koreanTitle: '카우보이 샷',
        prompt: 'cowboy shot',
        description: '인물의 허벅지나 무릎 위까지를 담는 샷으로, 미디엄 샷과 풀 샷의 중간 단계입니다.',
        usage: [
            '인물의 행동과 자신감을 강조할 때',
            '표정을 놓치지 않으면서도 동작을 보여줄 때',
            '위풍당당한 느낌을 줄 때',
            '액션 장면의 준비 상태를 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/51ec9dbc-30a4-4fd2-910e-b70bd468630f/0_2.png', caption: 'Classic cowboy shot' },
            { src: 'https://cdn.midjourney.com/42973f1e-0776-479c-a943-efb1ffc6acd8/0_2.png', caption: 'Action ready stance' },
            { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop', caption: 'Mid-thigh framing' },
            { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop', caption: 'Power pose' }
        ]
    },

    'full-shot': {
        title: '풀 샷(Full Shot)',
        koreanTitle: '풀 샷',
        prompt: 'full shot',
        description: '인물의 머리부터 발끝까지 전신을 모두 화면에 담는 샷입니다.',
        usage: [
            '인물의 전체적인 의상, 자세를 보여줄 때',
            '신체를 이용한 큰 동작을 보여줄 때',
            '인물과 배경의 관계를 설명하기 시작할 때',
            '캐릭터의 전체적인 모습을 소개할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5da09c9c-3c66-4c57-915e-b299e7ba4640/0_1.png', caption: 'Full body shot' },
            { src: 'https://cdn.midjourney.com/992308ef-59aa-49d0-a99e-d790c52c1213/0_3.png', caption: 'Complete figure' },
            { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop', caption: 'Head to toe view' },
            { src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop', caption: 'Character reveal' }
        ]
    },

    'wide-shot': {
        title: '와이드 샷(Wide Shot)',
        koreanTitle: '와이드 샷',
        prompt: 'wide shot',
        description: '인물과 함께 주변 환경을 충분히 보여주는 샷입니다.',
        usage: [
            '인물과 배경의 관계를 보여줄 때',
            '공간의 규모를 전달할 때',
            '고립감이나 외로움을 표현할 때',
            '장면 전체의 분위기를 설정할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/61484eb1-c523-4aeb-88af-46c56c7ea91d/0_2.png', caption: 'Wide landscape' },
            { src: 'https://cdn.midjourney.com/06cb726a-cf6d-4526-97ef-e14f45000cba/0_3.png', caption: 'Environmental context' },
            { src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop', caption: 'Spatial relationship' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Scene setting' }
        ]
    },

    'extreme-wide': {
        title: '익스트림 와이드(Extreme Wide Shot)',
        koreanTitle: '익스트림 와이드 샷',
        prompt: 'extreme wide shot',
        description: '매우 넓은 범위를 보여주는 샷으로, 인물이 점처럼 작게 보이거나 아예 보이지 않을 수도 있습니다.',
        usage: [
            '광활한 공간감을 표현할 때',
            '인간의 왜소함을 강조할 때',
            '영화의 시작이나 새로운 장소를 소개할 때',
            '웅장한 스케일을 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/01c90d39-d174-443b-89dd-e1c799a2fa2a/0_0.png', caption: 'Vast landscape' },
            { src: 'https://cdn.midjourney.com/bbe2c719-f087-48ad-bd89-717e9160465c/0_1.png', caption: 'Epic scale' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Environmental dominance' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Grand establishing shot' }
        ]
    },

    // Camera Angles
    'eye-level': {
        title: '아이 레벨(Eye Level)',
        koreanTitle: '아이 레벨',
        prompt: 'eye level',
        description: '피사체와 카메라가 같은 높이에 위치하는 가장 자연스러운 앵글입니다.',
        usage: [
            '중립적이고 객관적인 시선을 제공할 때',
            '관객과 인물 사이의 동등한 관계를 만들 때',
            '일상적인 대화나 상황을 보여줄 때',
            '편안하고 친근한 느낌을 줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/38bd6991-5210-4ac1-aaef-36a3ac8c72a0/0_3.png', caption: 'Neutral perspective' },
            { src: 'https://cdn.midjourney.com/a3851e06-e287-4455-8dc6-06142d7b5fdb/0_2.png', caption: 'Natural eye contact' },
            { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop', caption: 'Equal relationship' },
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Standard angle' }
        ]
    },

    'low-angle': {
        title: '로우 앵글(Low Angle)',
        koreanTitle: '로우 앵글',
        prompt: 'low angle',
        description: '카메라가 피사체보다 아래에 위치하여 위를 올려다보는 앵글입니다.',
        usage: [
            '피사체를 위엄 있고 강력하게 보이게 할 때',
            '영웅적인 인물을 표현할 때',
            '건물이나 구조물의 웅장함을 강조할 때',
            '위협적인 분위기를 조성할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/8a422d4f-d700-4229-9502-480a5f751470/0_1.png', caption: 'Power perspective' },
            { src: 'https://cdn.midjourney.com/3173d561-014c-42c0-a409-e27a869922fa/0_3.png', caption: 'Heroic angle' },
            { src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&h=400&fit=crop', caption: 'Dominant view' },
            { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop', caption: 'Looking up' }
        ]
    },

    'high-angle': {
        title: '하이 앵글(High Angle)',
        koreanTitle: '하이 앵글',
        prompt: 'high angle',
        description: '카메라가 피사체보다 위에 위치하여 아래를 내려다보는 앵글입니다.',
        usage: [
            '피사체를 작고 약하게 보이게 할 때',
            '전체적인 상황을 조망할 때',
            '취약함이나 고립감을 표현할 때',
            '관찰자의 시점을 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/73b6717f-27ec-4209-bf84-fd052c4fb13f/0_1.png', caption: 'Looking down' },
            { src: 'https://cdn.midjourney.com/5dfe60ae-2b2c-43bf-8691-abdb78d18db1/0_1.png', caption: 'Vulnerable angle' },
            { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop', caption: 'Overview perspective' },
            { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop', caption: 'Superior view' }
        ]
    },

    'birds-eye': {
        title: '버즈 아이 뷰(Bird\'s Eye View)',
        koreanTitle: '버즈 아이 뷰',
        prompt: 'birds eye view',
        description: '거의 수직으로 위에서 아래를 내려다보는 극단적인 하이 앵글입니다.',
        usage: [
            '패턴이나 구조를 보여줄 때',
            '전체적인 레이아웃을 제시할 때',
            '초현실적인 느낌을 만들 때',
            '지도와 같은 관점을 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/60dc7d0d-5723-490e-8aff-aabe07a8ba86/0_1.png', caption: 'Aerial view' },
            { src: 'https://cdn.midjourney.com/6f7202ee-2943-4106-953b-a7acb87bc199/0_0.png', caption: 'Top-down perspective' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Pattern view' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Map-like angle' }
        ]
    },

    'overhead': {
        title: '오버헤드 샷(Overhead Shot)',
        koreanTitle: '오버헤드 샷',
        prompt: 'overhead shot',
        description: '피사체 바로 위에서 수직으로 내려다보는 샷으로, 완전한 탑다운 뷰를 제공합니다.',
        usage: [
            '음식 사진이나 플랫레이 촬영',
            '테이블 위의 물건들을 보여줄 때',
            '패턴이나 대칭성을 강조할 때',
            '독특한 시각적 효과를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5a913eff-45cc-4722-b443-61640fdde23a/0_1.png', caption: 'Food overhead' },
            { src: 'https://cdn.midjourney.com/10a4ddbb-f471-4f5a-91ad-41de26782a81/0_2.png', caption: 'Table top view' },
            { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop', caption: 'Flat lay style' },
            { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop', caption: 'Direct overhead' }
        ]
    },

    'dutch-angle': {
        title: '더치 앵글(Dutch Angle)',
        koreanTitle: '더치 앵글',
        prompt: 'dutch angle, tilted camera',
        description: '카메라를 의도적으로 기울여 수평선이 비스듬하게 보이도록 하는 촬영 기법입니다.',
        usage: [
            '불안정하고 혼란스러운 느낌을 줄 때',
            '긴장감이나 불안감을 조성할 때',
            '캐릭터의 심리적 불안정을 표현할 때',
            '액션 씬에서 역동성을 더할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/1ec7b0a2-cf1d-4e61-8ed4-e3ed66af22b9/0_3.png', caption: 'Tilted perspective' },
            { src: 'https://cdn.midjourney.com/1ec7b0a2-cf1d-4e61-8ed4-e3ed66af22b9/0_0.png', caption: 'Dynamic angle' },
            { src: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?w=600&h=400&fit=crop', caption: 'Unstable feeling' },
            { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop', caption: 'Dramatic tilt' }
        ]
    },

    'worms-eye': {
        title: '웜즈 아이 뷰(Worm\'s Eye View)',
        koreanTitle: '웜즈 아이 뷰',
        prompt: 'worms eye view',
        description: '지면 높이에서 위를 올려다보는 극단적인 로우 앵글로, 피사체가 거대하고 위압적으로 보입니다.',
        usage: [
            '피사체의 위엄과 권력을 극대화할 때',
            '건물이나 나무의 웅장함을 표현할 때',
            '영웅적인 인물을 묘사할 때',
            '관객에게 작고 무력한 느낌을 줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/653f8a92-a2f9-4316-bd05-0594cb3348e0/0_0.png', caption: 'Ground perspective' },
            { src: 'https://cdn.midjourney.com/7b03ce40-99f9-4eca-a268-7c948c708571/0_1.png', caption: 'Looking up' },
            { src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop', caption: 'Extreme low angle' },
            { src: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=600&h=400&fit=crop', caption: 'Heroic angle' }
        ]
    },

    'ground-level': {
        title: '그라운드 레벨(Ground Level)',
        koreanTitle: '그라운드 레벨',
        prompt: 'ground level shot',
        description: '카메라를 지면에 놓고 촬영하는 샷으로, 독특한 시점을 제공합니다.',
        usage: [
            '작은 피사체를 크게 보이게 할 때',
            '독특한 시각적 효과를 원할 때',
            '발걸음이나 바닥의 디테일을 강조할 때',
            '색다른 관점을 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/74aede5c-1cf3-42d3-900c-48858fb17363/0_2.png', caption: 'Floor level' },
            { src: 'https://cdn.midjourney.com/ab7951b4-0f65-467a-bebe-acc759f54395/0_2.png', caption: 'Ground perspective' },
            { src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&h=400&fit=crop', caption: 'Low position' },
            { src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop', caption: 'Surface level' }
        ]
    },

    // Viewpoint
    'side-view': {
        title: '사이드/프로필 뷰(Side/Profile View)',
        koreanTitle: '사이드/프로필 뷰',
        prompt: 'side profile view',
        description: '피사체를 정확히 90도 측면에서 바라보는 샷으로, 프로필을 명확히 보여줍니다.',
        usage: [
            '인물의 측면 윤곽을 강조할 때',
            '극적인 실루엣을 만들 때',
            '대화 장면에서 방향성을 제시할 때',
            '제품의 측면 디자인을 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/a0710f91-79ad-40fe-909a-4545c37e8ece/0_0.png', caption: 'Profile portrait' },
            { src: 'https://cdn.midjourney.com/f7620359-b4cb-4b5c-a916-884d513e1e29/0_1.png', caption: 'Side silhouette' },
            { src: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?w=600&h=400&fit=crop', caption: 'Lateral view' },
            { src: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=600&h=400&fit=crop', caption: 'Profile angle' }
        ]
    },

    'back-view': {
        title: '백 뷰(Back View)',
        koreanTitle: '백 뷰',
        prompt: 'back view, from behind',
        description: '피사체의 뒤에서 바라보는 샷으로, 신비롭고 몰입감 있는 관점을 제공합니다.',
        usage: [
            '관객이 인물과 함께 무언가를 바라보게 할 때',
            '미스터리한 분위기를 조성할 때',
            '인물의 고독함이나 사색을 표현할 때',
            '여정의 시작을 암시할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5955ef5b-7be0-40a6-a036-f5f746e85bd6/0_0.png', caption: 'Back silhouette' },
            { src: 'https://cdn.midjourney.com/b9f049fd-63d7-4509-a1cb-79889845dbda/0_1.png', caption: 'Rear perspective' },
            { src: 'https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?w=600&h=400&fit=crop', caption: 'From behind' },
            { src: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=600&h=400&fit=crop', caption: 'Walking away' }
        ]
    },

    'three-quarter': {
        title: '3/4 뷰(3/4 View)',
        koreanTitle: '3/4 뷰',
        prompt: 'three quarter view',
        description: '피사체를 약 45도 각도에서 바라보는 샷으로, 얼굴의 입체감과 특징을 잘 보여줍니다.',
        usage: [
            '가장 보편적인 인물 촬영 각도',
            '얼굴의 입체감을 표현할 때',
            '자연스럽고 편안한 느낌을 줄 때',
            '제품의 형태를 효과적으로 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/9c48b1a3-8c09-4535-bafe-96ce308604a6/0_0.png', caption: 'Three-quarter portrait' },
            { src: 'https://cdn.midjourney.com/2075f43a-1663-47bd-be27-e4af8e9db1b4/0_3.png', caption: '45-degree angle' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Classic angle' },
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Natural pose' }
        ]
    },

    'rear-three-quarter': {
        title: '리어 3/4 뷰(Rear 3/4 View)',
        koreanTitle: '리어 3/4 뷰',
        prompt: 'rear three quarter view',
        description: '피사체의 뒤쪽에서 약 45도 각도로 바라보는 샷입니다.',
        usage: [
            '인물이 무언가를 바라보는 방향을 암시할 때',
            '신비로운 분위기를 만들 때',
            '차량이나 제품의 후면 디자인을 보여줄 때',
            '출발이나 이별의 순간을 표현할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/687b9db2-7c89-41b3-8106-7386dbad9be0/0_3.png', caption: 'Rear quarter angle' },
            { src: 'https://cdn.midjourney.com/063df8f1-c026-48ad-94bc-92bc8342b678/0_2.png', caption: 'Back diagonal view' },
            { src: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?w=600&h=400&fit=crop', caption: 'Behind angle' },
            { src: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=600&h=400&fit=crop', caption: 'Departure angle' }
        ]
    },

    // Special Shots
    'pov-shot': {
        title: 'POV 샷(POV Shot)',
        koreanTitle: 'POV 샷',
        prompt: 'POV shot, first person view',
        description: '인물의 시점에서 보이는 그대로를 보여주는 샷으로, 1인칭 시점 샷입니다.',
        usage: [
            '관객이 인물의 입장이 되도록 할 때',
            '긴장감과 몰입감을 극대화할 때',
            '인물의 주관적 경험을 공유할 때',
            '공포 영화나 액션 씨퀀에서'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/06cb4cc7-c0af-48de-80d0-1fffa21b9fe0/0_1.png', caption: 'First person view' },
            { src: 'https://cdn.midjourney.com/1e242962-cae4-41f8-b92b-3607635148f2/0_1.png', caption: 'Eyes perspective' },
            { src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop', caption: 'Subjective camera' },
            { src: 'https://images.unsplash.com/photo-1525296141-b09a774890e8?w=600&h=400&fit=crop', caption: 'POV angle' }
        ]
    },

    'over-shoulder': {
        title: '오버더숨더(Over-the-Shoulder)',
        koreanTitle: '오버더숨더',
        prompt: 'over the shoulder shot',
        description: '한 인물의 어깨 너머로 다른 인물이나 대상을 바라보는 샷입니다.',
        usage: [
            '대화 장면의 기본 구도',
            '인물 간의 관계성을 보여줄 때',
            '대화의 방향성을 명확히 할 때',
            '인물의 반응을 포착할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/dcf0a650-031a-4946-94c6-0fde0f74a24a/0_3.png', caption: 'OTS dialogue' },
            { src: 'https://cdn.midjourney.com/df89236a-54ff-44ca-9899-6c3fd31cc954/0_0.png', caption: 'Shoulder frame' },
            { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', caption: 'Conversation angle' },
            { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop', caption: 'OTS perspective' }
        ]
    },

    'two-shot': {
        title: '투/쓰리/그룹(Two/Three/Group)',
        koreanTitle: '투/쓰리/그룹 샷',
        prompt: 'two shot, three shot, group shot',
        description: '2명, 3명 또는 여러 명이 함께 프레임 안에 들어가는 샷입니다.',
        usage: [
            '인물들 간의 관계를 보여줄 때',
            '대화나 상호작용을 표현할 때',
            '집단의 역학을 보여줄 때',
            '공동체 의식을 강조할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/4269eb8b-a48e-4088-98ce-f919f8191e96/0_3.png', caption: 'Two people' },
            { src: 'https://cdn.midjourney.com/4d77bc10-14d2-4539-a028-2e9d721431f7/0_0.png', caption: 'Group dynamics' },
            { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop', caption: 'Team shot' },
            { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', caption: 'Multiple subjects' }
        ]
    },

    'establishing': {
        title: '에스타블리싱(Establishing)',
        koreanTitle: '에스타블리싱',
        prompt: 'establishing shot',
        description: '장소나 환경을 소개하는 넓은 샷으로, 보통 장면의 시작 부분에 사용됩니다.',
        usage: [
            '새로운 장소를 소개할 때',
            '시간이나 계절을 알릴 때',
            '분위기를 설정할 때',
            '세계관을 구축할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop', caption: 'City establishing' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Location setup' },
            { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop', caption: 'Environment shot' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Scene setting' }
        ]
    },

    'master-shot': {
        title: '마스터 샷(Master Shot)',
        koreanTitle: '마스터 샷',
        prompt: 'master shot',
        description: '전체 장면을 처음부터 끝까지 담는 넓은 샷으로, 모든 등장인물과 행동을 포함합니다.',
        usage: [
            '장면의 전체 구조를 보여줄 때',
            '편집의 기준점으로 사용',
            '인물들의 위치 관계를 명확히 할 때',
            '연극적인 연출에서'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/2e366ab0-7897-447a-b2d0-d471fc497fca/0_2.png', caption: 'Full scene view' },
            { src: 'https://cdn.midjourney.com/41f6bc5b-c4cf-47ad-9e90-3a24f6b6025f/0_3.png', caption: 'Wide coverage' },
            { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop', caption: 'Complete action' },
            { src: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=600&h=400&fit=crop', caption: 'Stage view' }
        ]
    },

    'insert-shot': {
        title: '인서트 샷(Insert Shot)',
        koreanTitle: '인서트 샷',
        prompt: 'insert shot, cutaway',
        description: '주 장면에 삽입되는 짧은 샷으로, 디테일이나 중요한 정보를 보여줍니다.',
        usage: [
            '중요한 디테일을 강조할 때',
            '시간 경과를 표현할 때',
            '인물의 감정을 간접적으로 전달할 때',
            '정보나 단서를 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/30d736f5-c5f1-4a8a-afd2-4f35980095e1/0_0.png', caption: 'Detail insert' },
            { src: 'https://cdn.midjourney.com/1c40d32b-f3ce-4b7d-b9e9-d4f8a1867ba1/0_3.png', caption: 'Close detail' },
            { src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=400&fit=crop', caption: 'Information shot' },
            { src: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=400&fit=crop', caption: 'Cutaway detail' }
        ]
    },

    // Composition
    'rule-of-thirds': {
        title: '삼등분 법칙(Rule of Thirds)',
        koreanTitle: '삼등분 법칙',
        prompt: 'rule of thirds composition',
        description: '화면을 가로와 세로로 각각 3등분하여 교차점에 주요 요소를 배치하는 구도입니다.',
        usage: [
            '안정감 있고 균형 잡힌 구도',
            '시선을 자연스럽게 유도할 때',
            '주체와 배경의 균형을 맞출 때',
            '풍경 사진에서 수평선 배치'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/11557617-e77f-406a-9e6c-85df3e6172b7/0_3.png', caption: 'Third lines' },
            { src: 'https://cdn.midjourney.com/fae22985-04ae-42d0-a533-bba482e2e853/0_3.png', caption: 'Intersection points' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Balanced composition' },
            { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', caption: 'Grid placement' }
        ]
    },

    'center-comp': {
        title: '중앙 구도(Center Composition)',
        koreanTitle: '중앙 구도',
        prompt: 'center composition',
        description: '주요 피사체를 화면 중앙에 배치하는 가장 직관적인 구도입니다.',
        usage: [
            '피사체에 집중하게 할 때',
            '대칭적인 구도를 만들 때',
            '강력한 존재감을 주고 싶을 때',
            '인물 초상에 적합'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/707e3cb8-f4e9-4db8-801b-ff27d6149990/0_0.png', caption: 'Central focus' },
            { src: 'https://cdn.midjourney.com/24e95385-d267-4e57-94d1-c0fa4e5fd0c1/0_0.png', caption: 'Middle placement' },
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Centered subject' },
            { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', caption: 'Direct composition' }
        ]
    },

    'symmetrical': {
        title: '대칭 구도(Symmetrical Shot)',
        koreanTitle: '대칭 구도',
        prompt: 'symmetrical composition',
        description: '화면을 좌우 또는 상하로 대칭되게 구성하는 구도입니다.',
        usage: [
            '안정감과 균형감을 강조할 때',
            '공식적이고 엄숙한 분위기',
            '건축물이나 인테리어 촬영',
            '예술적인 효과를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/b9923de1-02c8-4102-90c1-54a671f82c58/0_2.png', caption: 'Perfect symmetry' },
            { src: 'https://cdn.midjourney.com/18ae1a6d-08f8-4f21-bab7-04c75b2e4bcd/0_2.png', caption: 'Mirror composition' },
            { src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop', caption: 'Balanced structure' },
            { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop', caption: 'Symmetric design' }
        ]
    },

    'frame-in-frame': {
        title: '프레임 속 프레임(Frame in Frame)',
        koreanTitle: '프레임 속 프레임',
        prompt: 'frame within a frame',
        description: '화면 안에 다른 프레임 요소를 사용하여 깊이감을 만드는 구도입니다.',
        usage: [
            '깊이감과 차원을 추가할 때',
            '주의를 집중시키고 싶을 때',
            '창문이나 문을 통한 샷',
            '스토리텔링에 효과적'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/fc2d46e4-5147-4b45-94e5-27e22a38de4b/0_1.png', caption: 'Natural frame' },
            { src: 'https://cdn.midjourney.com/8894ecf6-5d3c-4627-9142-9200fdfad06a/0_0.png', caption: 'Doorway frame' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'Window frame' },
            { src: 'https://images.unsplash.com/photo-1445109673451-c511bb51bd17?w=600&h=400&fit=crop', caption: 'Nested frames' }
        ]
    },

    'diagonal': {
        title: '대각선 구도(Diagonal)',
        koreanTitle: '대각선 구도',
        prompt: 'diagonal composition',
        description: '대각선을 활용하여 동적이고 활력 있는 구도를 만드는 기법입니다.',
        usage: [
            '움직임과 에너지를 표현할 때',
            '시선을 유도하고 싶을 때',
            '액션과 속도감을 강조할 때',
            '독특한 구도를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/10f8acdb-55ab-45e4-ac66-79076f2da806/0_0.png', caption: 'Diagonal lines' },
            { src: 'https://cdn.midjourney.com/3a24a4e3-4559-434f-a880-2592c0f84fc8/0_2.png', caption: 'Dynamic angle' },
            { src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop', caption: 'Tilted composition' },
            { src: 'https://images.unsplash.com/photo-1505739998589-00fc191ce01d?w=600&h=400&fit=crop', caption: 'Energy lines' }
        ]
    },

    'layered': {
        title: '레이어드 샷(Layered Shot)',
        koreanTitle: '레이어드 샷',
        prompt: 'layered composition',
        description: '전경, 중경, 후경의 여러 레이어를 활용한 깊이 있는 구도입니다.',
        usage: [
            '깊이감과 차원을 강조할 때',
            '복잡한 스토리텔링',
            '공간의 규모를 표현할 때',
            '풍경 사진에 효과적'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/7c85f633-9ce2-41de-a997-6e1214f5b345/0_2.png', caption: 'Multiple layers' },
            { src: 'https://cdn.midjourney.com/b6ce553f-a266-4f73-bfec-0583345c74f9/0_3.png', caption: 'Depth layers' },
            { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', caption: 'Foreground-background' },
            { src: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=600&h=400&fit=crop', caption: 'Dimensional depth' }
        ]
    },

    'negative-space': {
        title: '네거티브 스페이스(Negative Space)',
        koreanTitle: '네거티브 스페이스',
        prompt: 'negative space composition',
        description: '비어있는 공간을 의도적으로 활용하여 주체를 강조하는 구도입니다.',
        usage: [
            '미니멀한 표현을 원할 때',
            '주체를 돋보이게 할 때',
            '고독함이나 외로움을 표현',
            '예술적 효과를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/001e51a5-1535-45e7-96a9-60e9e7155ad6/0_2.png', caption: 'Empty space' },
            { src: 'https://cdn.midjourney.com/189a0627-065e-4341-b69d-5eb6d2f267e5/0_3.png', caption: 'Minimalist composition' },
            { src: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop', caption: 'Isolation effect' },
            { src: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&h=400&fit=crop', caption: 'White space' }
        ]
    },

    // ============= LIGHTING =============
    // Natural Light
    'golden-hour': {
        title: '골든 아워(Golden Hour)',
        koreanTitle: '골든 아워',
        prompt: 'golden hour lighting',
        description: '해가 뜨고 난 직후, 그리고 해가 지기 직전의 시간대. 빛이 부드럽고 따뜻한 황금빛을 띱니다.',
        usage: [
            '로맨틱한 분위기를 조성할 때',
            '따뜻하고 향수를 자극하는 장면',
            '풍경과 인물 사진',
            '마법 같은 분위기 연출'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/7d1356ab-4c07-4ff1-81d3-041e8362cc73/0_2.png', caption: 'Warm golden light' },
            { src: 'https://cdn.midjourney.com/d10a0b2e-7a41-41d2-a7f7-06971c628062/0_3.png', caption: 'Sunset glow' }
        ]
    },

    'blue-hour': {
        title: '블루 아워(Blue Hour)',
        koreanTitle: '블루 아워',
        prompt: 'blue hour lighting',
        description: '해가 뜨기 직전, 그리고 해가 진 직후의 시간대. 세상이 전체적으로 차분한 푸른빛을 띱니다.',
        usage: [
            '고요하고 차분한 분위기',
            '도시 야경 촬영',
            'SF나 판타지 장면',
            '신비로운 느낌 연출'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&h=400&fit=crop', caption: 'Blue twilight' },
            { src: 'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=600&h=400&fit=crop', caption: 'Urban blue hour' },
            { src: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=600&h=400&fit=crop', caption: 'Mystical atmosphere' },
            { src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=400&fit=crop', caption: 'Evening blues' }
        ]
    },

    'overcast': {
        title: '흐린 날(Overcast)',
        koreanTitle: '오버캐스트',
        prompt: 'overcast lighting',
        description: '구름이 하늘을 덮어 태양광이 확산되어 부드럽고 균일한 빛을 만드는 조명 상태입니다.',
        usage: [
            '부드러운 그림자가 필요할 때',
            '균일한 조명이 필요한 인물 촬영',
            '차분하고 우울한 분위기',
            '피부톤을 자연스럽게 표현'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/bf83ba48-3509-439a-9173-42b2144b6d7d/0_2.png', caption: 'Soft diffused light' },
            { src: 'https://cdn.midjourney.com/d92e6b97-10d7-4677-8f68-7d387bc93a63/0_1.png', caption: 'Even lighting' }
        ]
    },

    'harsh-sunlight': {
        title: '강한 햇빛(Harsh Sunlight)',
        koreanTitle: '강렬한 햇빛',
        prompt: 'harsh sunlight',
        description: '정오의 직사광선처럼 강하고 직접적인 햇빛으로, 선명한 그림자와 높은 대비를 만듭니다.',
        usage: [
            '극적이고 강렬한 효과',
            '그림자 패턴을 활용한 구성',
            '여름의 뜨거운 느낌',
            '고대비 흑백 사진'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=400&fit=crop', caption: 'Strong shadows' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'High contrast' },
            { src: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&h=400&fit=crop', caption: 'Direct sunlight' },
            { src: 'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?w=600&h=400&fit=crop', caption: 'Sharp definition' }
        ]
    },

    // Studio Lighting
    'rembrandt': {
        title: '렘브란트 조명(Rembrandt)',
        koreanTitle: '렘브란트 조명',
        prompt: 'Rembrandt lighting',
        description: '빛을 받는 쪽 반대편 뺨에 코 그림자와 뺨 그림자가 만나 작은 빛의 삼각형을 만드는 조명입니다.',
        usage: [
            '고전적이고 예술적인 초상화',
            '깊이 있는 인물 표현',
            '드라마틱한 분위기',
            '진중한 느낌의 포트레이트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5ced8630-9548-4815-9d04-101416c6091f/0_1.png', caption: 'Classic portrait' },
            { src: 'https://cdn.midjourney.com/e7570d7b-c644-4b22-82c7-a1c5f65a6b78/0_3.png', caption: 'Triangle of light' }
        ]
    },

    'butterfly': {
        title: '버터플라이 조명(Butterfly)',
        koreanTitle: '나비 조명',
        prompt: 'butterfly lighting',
        description: '주 조명을 인물의 정면 위쪽에 배치하여 코 바로 아래에 작은 나비 모양의 그림자를 만드는 조명입니다.',
        usage: [
            '글래머러스한 뷰티 화보',
            '할리우드 스타일 포트레이트',
            '패션 사진',
            '이상적인 아름다움 표현'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/686815c8-2fd7-426b-8cd5-04b08da5f3cb/0_2.png', caption: 'Glamour lighting' },
            { src: 'https://cdn.midjourney.com/686815c8-2fd7-426b-8cd5-04b08da5f3cb/0_1.png', caption: 'Beauty shot' }
        ]
    },

    'split-lighting': {
        title: '스플릿 조명(Split Lighting)',
        koreanTitle: '분할 조명',
        prompt: 'split lighting',
        description: '조명을 인물의 정측면에 배치하여 얼굴을 밝은 부분과 어두운 부분으로 정확히 반으로 나누는 조명입니다.',
        usage: [
            '강렬하고 극적인 효과',
            '필름 누아르 스타일',
            '미스터리한 분위기',
            '내적 갈등의 표현'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/59125b2d-47e7-4c1d-b885-968ad468f946/0_1.png', caption: 'Half-lit face' },
            { src: 'https://cdn.midjourney.com/1b5a31d7-5f49-45f1-9af9-4ec860fea2eb/0_1.png', caption: 'Film noir style' }
        ]
    },

    'rim-lighting': {
        title: '림 조명(Rim Lighting)',
        koreanTitle: '림 라이팅',
        prompt: 'rim lighting',
        description: '피사체의 윤곽선 전체를 따라 빛의 테두리가 생기는 효과를 만드는 조명 기법입니다.',
        usage: [
            '피사체를 배경과 분리',
            '입체감과 깊이감 추가',
            '신비롭고 극적인 느낌',
            '실루엣 강조'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/57943433-2b1e-446c-9882-b3dcd82d96f2/0_1.png', caption: 'Edge lighting' },
            { src: 'https://cdn.midjourney.com/179a1289-1570-423f-a45b-70cb1c15c961/0_3.png', caption: 'Backlit outline' }
        ]
    },

    // Mood Lighting
    'neon-lights': {
        title: '네온 조명(Neon Lights)',
        koreanTitle: '네온 라이트',
        prompt: 'neon lights',
        description: '형광색의 네온사인이나 LED 조명으로 만드는 현대적이고 도시적인 조명 효과입니다.',
        usage: [
            '사이버펑크 분위기',
            '도시의 밤 장면',
            '클럽이나 바 설정',
            '레트로 또는 미래적 느낌'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/4af97fe2-2693-49d4-b3ec-0f7a6fc176c4/0_1.png', caption: 'Cyberpunk neon' },
            { src: 'https://cdn.midjourney.com/4938d176-c472-46fc-97dd-a05c078ec5ee/0_0.png', caption: 'Urban neon' }
        ]
    },

    'candlelight': {
        title: '촛불(Candlelight)',
        koreanTitle: '캔들라이트',
        prompt: 'candlelight',
        description: '촛불의 부드럽고 따뜻한 빛으로 만드는 아늑하고 로맨틱한 조명입니다.',
        usage: [
            '로맨틱한 분위기',
            '역사적 또는 판타지 설정',
            '친밀하고 아늑한 느낌',
            '종교적이거나 의식적인 장면'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/8dabe2d6-6f2b-42bb-b587-4525adc0405e/0_2.png', caption: 'Warm candle glow' },
            { src: 'https://cdn.midjourney.com/a5f77818-07f2-4f0f-b826-3af8625ead47/0_2.png', caption: 'Romantic mood' }
        ]
    },

    'moonlight': {
        title: '달빛(Moonlight)',
        koreanTitle: '문라이트',
        prompt: 'moonlight',
        description: '달빛의 차갑고 은은한 푸른빛으로 만드는 신비로운 야간 조명입니다.',
        usage: [
            '로맨틱하거나 신비로운 야간 장면',
            '판타지나 공포 분위기',
            '고요하고 평화로운 느낌',
            '꿈같은 분위기'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop', caption: 'Blue moonlight' },
            { src: 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=600&h=400&fit=crop', caption: 'Night atmosphere' },
            { src: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=400&fit=crop', caption: 'Mystical moon' },
            { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop', caption: 'Lunar glow' }
        ]
    },

    'firelight': {
        title: '화염 조명(Firelight)',
        koreanTitle: '파이어라이트',
        prompt: 'firelight',
        description: '모닥불이나 벽난로의 따뜻하고 깜빡이는 주황색 빛으로 만드는 조명입니다.',
        usage: [
            '캠프파이어 장면',
            '원시적이거나 역사적 설정',
            '따뜻하고 아늑한 분위기',
            '생존이나 모험 테마'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/a2a6fe7d-0d3c-40eb-bc7d-f3b81810a1b0/0_0.png', caption: 'Campfire glow' },
            { src: 'https://cdn.midjourney.com/111691e6-6254-448c-bc8a-9c12733c0ec6/0_3.png', caption: 'Fire warmth' },
            { src: 'https://images.unsplash.com/photo-1414124488080-0188dcbb8834?w=600&h=400&fit=crop', caption: 'Flickering light' },
            { src: 'https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?w=600&h=400&fit=crop', caption: 'Orange flames' }
        ]
    },

    // ============= STYLES =============
    // Art Styles
    'photorealistic': {
        title: '포토리얼리스틱(Photorealistic)',
        koreanTitle: '사실주의',
        prompt: 'photorealistic',
        description: '실제 사진과 구별하기 어려울 정도로 정확하고 세밀한 표현 스타일입니다.',
        usage: [
            '제품 시각화',
            '건축 렌더링',
            '광고용 이미지',
            '디지털 휴먼'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d2fe4f03-1643-4b45-ad5a-87017e5a19c4/0_0.png', caption: 'Realistic portrait' },
            { src: 'https://cdn.midjourney.com/b39be7d5-1837-4321-ae3a-cf50fb17e6c7/0_0.png', caption: 'Photo-real render' },
            { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', caption: 'Ultra detailed' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Lifelike quality' }
        ]
    },

    'hyperrealistic': {
        title: '하이퍼리얼리스틱(Hyperrealistic)',
        koreanTitle: '극사실주의',
        prompt: 'hyperrealistic',
        description: '현실보다 더 선명하고 과장된 디테일을 보여주는 극도로 정밀한 표현 스타일입니다.',
        usage: [
            '파인 아트',
            '고해상도 인물화',
            '과학적 일러스트레이션',
            '극세밀 묘사'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/052cd281-1382-4bd6-8e79-7e9dd0218282/0_3.png', caption: 'Extreme detail' },
            { src: 'https://cdn.midjourney.com/7281badd-7f38-4704-96d8-d603f747c986/0_1.png', caption: 'Beyond reality' },
            { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop', caption: 'Micro details' },
            { src: 'https://images.unsplash.com/photo-1514846226882-28b324ef7f28?w=600&h=400&fit=crop', caption: 'Ultra precision' }
        ]
    },

    'surrealism': {
        title: '초현실주의(Surrealism)',
        koreanTitle: '초현실주의',
        prompt: 'surrealism',
        description: '현실과 꿈, 의식과 무의식이 혼합된 비논리적이고 환상적인 이미지를 창조하는 스타일입니다.',
        usage: [
            '예술 작품',
            '창의적인 광고',
            '앨범 커버',
            '콘셉추얼 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/3db3c134-87da-4db0-87cf-eafc57fb46bc/0_0.png', caption: 'Dreamlike scene' },
            { src: 'https://cdn.midjourney.com/fa3d4d5d-8a1b-4396-a61e-f9e40417882e/0_1.png', caption: 'Surreal composition' },
            { src: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?w=600&h=400&fit=crop', caption: 'Fantasy elements' },
            { src: 'https://images.unsplash.com/photo-1495195129352-aeb325a55b65?w=600&h=400&fit=crop', caption: 'Impossible reality' }
        ]
    },

    'impressionism': {
        title: '인상주의(Impressionism)',
        koreanTitle: '인상주의',
        prompt: 'impressionism',
        description: '빛과 색채의 순간적인 인상을 포착하여 붓터치가 보이는 회화적 스타일입니다.',
        usage: [
            '풍경화',
            '감성적인 포트레이트',
            '일상 장면',
            '빛의 효과 강조'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/31d32c66-4308-4d03-ba1c-9e5bcfbbdd7a/0_1.png', caption: 'Painterly style' },
            { src: 'https://cdn.midjourney.com/225a11b4-c839-4e69-bfd5-6d3b2943fcce/0_2.png', caption: 'Light effects' },
            { src: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=400&fit=crop', caption: 'Color impressions' },
            { src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop', caption: 'Brushstroke texture' }
        ]
    },

    'minimalism': {
        title: '미니멀리즘(Minimalism)',
        koreanTitle: '미니멀리즘',
        prompt: 'minimalism',
        description: '필수적인 요소만을 사용하여 단순하고 깔끔한 구성을 추구하는 스타일입니다.',
        usage: [
            '현대 건축',
            '브랜드 디자인',
            '추상 예술',
            '제품 디자인'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/19d2d425-aa59-4c35-92af-ff2a278fb95a/0_1.png', caption: 'Simple forms' },
            { src: 'https://cdn.midjourney.com/e63b8047-e15d-4b5a-9613-3e06c73478b0/0_1.png', caption: 'Clean composition' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'Essential elements' },
            { src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop', caption: 'Reduced aesthetic' }
        ]
    },

    // Digital Art
    'digital-painting': {
        title: '디지털 페인팅(Digital Painting)',
        koreanTitle: '디지털 페인팅',
        prompt: 'digital painting',
        description: '디지털 도구를 사용하여 전통적인 회화 기법을 모방하거나 새로운 스타일을 창조하는 아트입니다.',
        usage: [
            '콘셉트 아트',
            '일러스트레이션',
            '게임 아트',
            '팬 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d7cb8ae6-8e12-4fb5-829f-106a8d1a9862/0_2.png', caption: 'Digital artwork' },
            { src: 'https://cdn.midjourney.com/00d6475e-4689-4912-ace1-c32394fe6486/0_3.png', caption: 'Painted digitally' },
            { src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop', caption: 'Digital brushwork' },
            { src: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=600&h=400&fit=crop', caption: 'Digital canvas' }
        ]
    },

    'concept-art': {
        title: '컨셉 아트(Concept Art)',
        koreanTitle: '컨셉 아트',
        prompt: 'concept art',
        description: '영화, 게임, 애니메이션 등의 시각적 개념을 개발하고 전달하는 일러스트레이션입니다.',
        usage: [
            '영화 프리프로덕션',
            '게임 개발',
            '캐릭터 디자인',
            '환경 디자인'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/42848a4c-d7f9-402c-9a02-d69b847deaed/0_0.png', caption: 'Character concept' },
            { src: 'https://cdn.midjourney.com/bf513a5b-1cc5-44b1-b9ea-2f28173320f7/0_3.png', caption: 'Environment art' },
            { src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop', caption: 'Visual development' },
            { src: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&h=400&fit=crop', caption: 'Concept design' }
        ]
    },

    'matte-painting': {
        title: '매트 페인팅(Matte Painting)',
        koreanTitle: '매트 페인팅',
        prompt: 'matte painting',
        description: '영화나 게임의 배경을 위해 제작되는 고도로 사실적인 디지털 또는 전통 페인팅입니다.',
        usage: [
            '영화 배경',
            '판타지 환경',
            'VFX 제작',
            '대규모 풍경'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d40dce8b-9ad9-4b26-a7c1-6e0735d40a6b/0_1.png', caption: 'Epic landscape' },
            { src: 'https://cdn.midjourney.com/78a28f07-f5d9-4611-9406-345930da1465/0_2.png', caption: 'Film background' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Fantasy world' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Set extension' }
        ]
    },

    '3d-render': {
        title: '3D 렌더(3D Render)',
        koreanTitle: '3D 렌더링',
        prompt: '3D render',
        description: '3D 모델링 소프트웨어를 사용하여 생성된 컴퓨터 그래픽 이미지입니다.',
        usage: [
            '제품 시각화',
            '건축 비주얼',
            '캐릭터 모델',
            'VFX와 애니메이션'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/31eeae82-57d2-4e27-84b0-65cd6a0349f4/0_0.png', caption: '3D model' },
            { src: 'https://cdn.midjourney.com/92fb90a9-1eca-434c-8812-e74a4b9f1f18/0_0.png', caption: 'CGI render' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', caption: 'Product viz' },
            { src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop', caption: 'Architectural render' }
        ]
    },

    // Illustration Styles
    'anime-style': {
        title: '애니메 스타일(Anime Style)',
        koreanTitle: '애니메 스타일',
        prompt: 'anime style',
        description: '일본 애니메이션의 특징적인 스타일로, 큰 눈과 과장된 표정이 특징입니다.',
        usage: [
            '캐릭터 일러스트',
            '만화',
            '팬 아트',
            '게임 캐릭터'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop', caption: 'Anime character' },
            { src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop', caption: 'Manga style' },
            { src: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop', caption: 'Japanese animation' },
            { src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop', caption: 'Anime art' }
        ]
    },

    'cartoon-style': {
        title: '카툰 스타일(Cartoon Style)',
        koreanTitle: '카툰 스타일',
        prompt: 'cartoon style',
        description: '단순화되고 과장된 형태로 유머러스하고 친근한 느낌을 주는 스타일입니다.',
        usage: [
            '어린이 콘텐츠',
            '웹툰',
            '마스코트 디자인',
            '애니메이션'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/668a82a1-c1f7-499b-92bd-caacb8f54646/0_2.png', caption: 'Cartoon character' },
            { src: 'https://cdn.midjourney.com/80c4bf03-2ac1-4e59-b3f9-92736e41b81a/0_0.png', caption: 'Simplified style' },
            { src: 'https://images.unsplash.com/photo-1561494653-744c43aed0c1?w=600&h=400&fit=crop', caption: 'Fun illustration' },
            { src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop', caption: 'Toon style' }
        ]
    },

    'comic-book': {
        title: '코믹북 스타일(Comic Book)',
        koreanTitle: '코믹북 스타일',
        prompt: 'comic book style',
        description: '미국 만화책의 특징적인 스타일로, 굵은 선과 망점, 선명한 색상이 특징입니다.',
        usage: [
            '슈퍼히어로 콘텐츠',
            '그래픽 노블',
            '액션 씬',
            '팝 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c09d35ad-6780-4e83-b6a9-9413f5fa1c0f/0_0.png', caption: 'Comic art' },
            { src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=600&h=400&fit=crop', caption: 'Superhero style' },
            { src: 'https://images.unsplash.com/photo-1588862081167-d5b98006637e?w=600&h=400&fit=crop', caption: 'Pop art effect' },
            { src: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop', caption: 'Action comic' }
        ]
    },

    'watercolor': {
        title: '수채화(Watercolor)',
        koreanTitle: '수채화',
        prompt: 'watercolor',
        description: '물감의 번짐과 투명한 레이어가 특징인 부드럽고 유동적인 회화 스타일입니다.',
        usage: [
            '감성적인 일러스트',
            '풍경화',
            '동화책 삽화',
            '패션 일러스트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/8ac3b686-5e51-4350-8feb-54e666f21f52/0_0.png', caption: 'Watercolor style 1' },
            { src: 'https://cdn.midjourney.com/2be6fbcb-4932-4902-9783-e4613b1f65f7/0_2.png', caption: 'Watercolor style 2' }
        ]
    },

    // ============= MEDIUM =============
    // Traditional Media
    'oil-painting': {
        title: '유화(Oil Painting)',
        koreanTitle: '유화',
        prompt: 'oil painting',
        description: '유성 물감을 사용한 전통적인 회화 기법으로, 깊이 있는 색감과 질감이 특징입니다.',
        usage: [
            '클래식 초상화',
            '풍경화',
            '정물화',
            '고전 미술'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/52db56d1-d6ef-432e-8c93-f81e5c5b4d1a/0_1.png', caption: 'Oil painting style 1' },
            { src: 'https://cdn.midjourney.com/95fd8a75-a4ac-4713-a26f-fc8e4f717dea/0_3.png', caption: 'Oil painting style 2' }
        ]
    },

    'acrylic-painting': {
        title: '아크릴화(Acrylic Painting)',
        koreanTitle: '아크릴화',
        prompt: 'acrylic painting',
        description: '빠르게 건조되고 다양한 기법이 가능한 현대적인 회화 매체입니다.',
        usage: [
            '현대 미술',
            '추상화',
            '벽화',
            '일러스트레이션'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/e5791bf6-6494-4166-bb0c-6cc421e05284/0_1.png', caption: 'Acrylic painting style 1' },
            { src: 'https://cdn.midjourney.com/f708965d-5c00-4279-aedd-9df3542195f2/0_0.png', caption: 'Acrylic painting style 2' }
        ]
    },

    'pencil-drawing': {
        title: '연필화(Pencil Drawing)',
        koreanTitle: '연필 드로잉',
        prompt: 'pencil drawing',
        description: '흑연 연필로 그리는 가장 기본적인 드로잉 기법으로, 섬세한 명암 표현이 가능합니다.',
        usage: [
            '스케치',
            '초상화',
            '학술 일러스트',
            '콘셉트 스케치'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/16c9ca32-fe0c-4504-aec8-5fc1340522e8/0_2.png', caption: 'Pencil drawing style 1' },
            { src: 'https://cdn.midjourney.com/16c9ca32-fe0c-4504-aec8-5fc1340522e8/0_1.png', caption: 'Pencil drawing style 2' }
        ]
    },

    'charcoal': {
        title: '목탄화(Charcoal)',
        koreanTitle: '차콜 드로잉',
        prompt: 'charcoal drawing',
        description: '목탄을 사용한 드로잉으로, 깊은 검정색과 부드러운 그라데이션이 특징입니다.',
        usage: [
            '인물 드로잉',
            '표현주의 작품',
            '라이프 드로잉',
            '드라마틱한 명암'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/0ee9ebfd-e0a0-4d23-bd29-7ea16f1d38f7/0_2.png', caption: 'Charcoal portrait' },
            { src: 'https://cdn.midjourney.com/4e3234e1-a0ea-4215-8f01-d23a16ce03bd/0_1.png', caption: 'Expressive marks' }
        ]
    },

    // Photography Media
    'digital-photography': {
        title: '디지털 사진(Digital Photography)',
        koreanTitle: '디지털 포토그래피',
        prompt: 'digital photography',
        description: '디지털 센서를 사용하여 촬영하고 편집하는 현대적인 사진 매체입니다.',
        usage: [
            '상업 사진',
            '포토저널리즘',
            '예술 사진',
            '일상 기록'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c4d88a1c-83cf-4e4f-87e3-6b1ef8d77b6a/0_2.png', caption: 'Digital capture' },
            { src: 'https://cdn.midjourney.com/0ece9d6f-ac8d-4568-a6b0-3020d6ea9da1/0_2.png', caption: 'Modern photography' }
        ]
    },

    'film-photography': {
        title: '필름 사진(Film Photography)',
        koreanTitle: '필름 포토그래피',
        prompt: 'film photography',
        description: '아날로그 필름을 사용한 전통적인 사진 매체로, 특유의 질감과 색감이 특징입니다.',
        usage: [
            '예술 사진',
            '웨딩 포토',
            '빈티지 스타일',
            '다큐멘터리'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d7c40f92-a23e-4027-86f1-c380ab65b6c6/0_2.png', caption: 'Film grain' },
            { src: 'https://cdn.midjourney.com/3e92b39a-bb6c-4cbd-9098-f0d5898cb3bf/0_1.png', caption: 'Analog feel' }
        ]
    },

    'polaroid': {
        title: '폴라로이드(Polaroid)',
        koreanTitle: '폴라로이드',
        prompt: 'polaroid',
        description: '즉석 사진의 대명사로, 특유의 프레임과 색감이 특징적인 사진 매체입니다.',
        usage: [
            '스냅샷',
            '레트로 스타일',
            '이벤트 사진',
            '감성 포토'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/921d12af-5786-4098-88e9-78e94f101587/0_0.png', caption: 'Instant photo' },
            { src: 'https://cdn.midjourney.com/6fc4a8aa-c6f3-436d-973e-5539a27a95af/0_3.png', caption: 'White border' }
        ]
    },

    'long-exposure': {
        title: '장노출(Long Exposure)',
        koreanTitle: '장노출 사진',
        prompt: 'long exposure',
        description: '셔터를 오래 열어 시간의 흐름을 한 장의 이미지에 담는 사진 기법입니다.',
        usage: [
            '빛의 궤적',
            '별 궤적',
            '물의 흐름',
            '도시 야경'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/22bd560a-8fb1-43e8-9eec-641db953e70e/0_3.png', caption: 'Light trails' },
            { src: 'https://cdn.midjourney.com/7a451c1c-45b3-4fd4-a635-c91914774097/0_0.png', caption: 'Star trails' }
        ]
    },

    // Mixed Media
    'collage': {
        title: '콜라주(Collage)',
        koreanTitle: '콜라주',
        prompt: 'collage',
        description: '다양한 재료와 이미지를 조합하여 하나의 작품을 만드는 혼합 매체 기법입니다.',
        usage: [
            '실험적 예술',
            '스크랩북',
            '광고 디자인',
            '콘셉추얼 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c1d12a67-4db2-4a95-a722-82abf22bbb94/0_0.png', caption: 'Mixed elements' },
            { src: 'https://cdn.midjourney.com/5bc4cc7b-b578-4ab8-8b3e-3f333d3d61c8/0_1.png', caption: 'Paper collage' }
        ]
    },

    'digital-collage': {
        title: '디지털 콜라주(Digital Collage)',
        koreanTitle: '디지털 콜라주',
        prompt: 'digital collage',
        description: '디지털 도구를 사용하여 다양한 이미지와 요소를 합성하는 현대적 콜라주 기법입니다.',
        usage: [
            '포스터 디자인',
            '앨범 커버',
            '소셜 미디어 아트',
            '디지털 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/cdc74a9a-0d7d-44d8-87b8-39cec11b2b6b/0_1.png', caption: 'Digital composite' },
            { src: 'https://cdn.midjourney.com/43d9e2e1-84ba-471f-b8cf-0b432459b4fb/0_2.png', caption: 'Photo manipulation' }
        ]
    },

    'mixed-technique': {
        title: '혼합 기법(Mixed Technique)',
        koreanTitle: '믹스드 테크닉',
        prompt: 'mixed media',
        description: '여러 매체와 기법을 자유롭게 조합하여 새로운 표현을 만드는 실험적 접근입니다.',
        usage: [
            '실험적 예술',
            '현대 미술',
            '텍스처 아트',
            '멀티미디어 작품'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/2142e7e4-96e0-4097-9a79-13f3917517ee/0_3.png', caption: 'Combined media' },
            { src: 'https://cdn.midjourney.com/a125b558-1439-4418-af59-bd93ea06554b/0_1.png', caption: 'Experimental art' }
        ]
    },

    // ============= VIDEO CAMERA EFFECTS =============
    // Camera Movement
    'pan': {
        title: '팬(Pan)',
        koreanTitle: '패닝',
        prompt: 'camera pan',
        description: '카메라를 수평으로 회전시켜 좌우로 이동하는 촬영 기법입니다.',
        usage: [
            '넓은 풍경을 보여줄 때',
            '인물의 시선을 따라갈 때',
            '공간의 연결성을 보여줄 때',
            '대화하는 두 인물 사이를 이동'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Horizontal movement' },
            { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop', caption: 'Pan shot' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/4bbde702-836e-4fc5-b8ee-da134738be50/0.mp4', caption: 'Camera pan example 1' },
            { src: 'https://cdn.midjourney.com/video/02398193-3843-4f96-ab81-3cb2cad3ce69/0.mp4', caption: 'Camera pan example 2' }
        ]
    },

    'tilt': {
        title: '틸트(Tilt)',
        koreanTitle: '틸팅',
        prompt: 'camera tilt',
        description: '카메라를 수직으로 회전시켜 위아래로 이동하는 촬영 기법입니다.',
        usage: [
            '높은 건물을 보여줄 때',
            '인물의 전신을 스캔할 때',
            '위압감이나 규모를 강조할 때',
            '시선의 이동을 유도'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop', caption: 'Vertical movement' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Tilt up' },
            { src: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600&h=400&fit=crop', caption: 'Building reveal' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Tilt down' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/8cd7fc99-d201-4091-9768-11b7155615f3/0.mp4', caption: 'Camera tilt example 1' },
            { src: 'https://cdn.midjourney.com/video/c4fb2244-3298-4e02-96b5-b82a895a5897/0.mp4', caption: 'Camera tilt example 2' }
        ]
    },

    'dolly': {
        title: '달리(Dolly)',
        koreanTitle: '달리 샷',
        prompt: 'dolly shot',
        description: '카메라 전체를 앞뒤로 이동시키는 촬영 기법입니다.',
        usage: [
            '피사체에 접근하거나 멀어질 때',
            '감정적 거리감을 조절할 때',
            '긴장감을 고조시킬 때',
            '공간감을 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Forward dolly' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Backward dolly' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Smooth movement' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Track dolly' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/32f518ca-b8d7-43bf-9bad-affa753b4eff/0.mp4', caption: 'Dolly shot example 1' },
            { src: 'https://cdn.midjourney.com/video/42e456a4-d573-4561-a9f5-925999d559ab/0.mp4', caption: 'Dolly shot example 2' }
        ]
    },

    'tracking': {
        title: '트래킹(Tracking)',
        koreanTitle: '트래킹 샷',
        prompt: 'tracking shot',
        description: '움직이는 피사체를 따라가며 촬영하는 기법입니다.',
        usage: [
            '달리는 인물을 따라갈 때',
            '차량 추격 장면',
            '긴 복도를 이동할 때',
            '역동적인 액션 씬'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Following subject' },
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Lateral tracking' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Action follow' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Smooth tracking' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/f32eaa9d-664e-41ad-9efb-b79f42e1b6b4/0.mp4', caption: 'Tracking shot example 1' },
            { src: 'https://cdn.midjourney.com/video/c4546ac9-cad6-481b-988b-5430e101053e/0.mp4', caption: 'Tracking shot example 2' }
        ]
    },

    'crane': {
        title: '크레인(Crane)',
        koreanTitle: '크레인 샷',
        prompt: 'crane shot',
        description: '크레인을 사용하여 카메라를 높이 올리거나 내리는 대규모 움직임입니다.',
        usage: [
            '웅장한 전경을 보여줄 때',
            '전투 씬의 규모를 표현',
            '영화의 오프닝이나 엔딩',
            '극적인 reveal 장면'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Aerial movement' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Epic reveal' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/a31ce983-b68f-4d08-86b4-612adab33ec4/0.mp4', caption: 'Crane shot example 1' },
            { src: 'https://cdn.midjourney.com/video/c99c1d2d-657c-4dde-bd41-52d075b8ed30/0.mp4', caption: 'Crane shot example 2' }
        ]
    },

    'handheld': {
        title: '핸드헬드(Handheld)',
        koreanTitle: '핸드헬드',
        prompt: 'handheld camera',
        description: '카메라를 손으로 들고 촬영하여 자연스러운 흔들림이 있는 기법입니다.',
        usage: [
            '다큐멘터리적 리얼리즘',
            '긴박한 액션 씬',
            '주인공의 시점 표현',
            '불안정한 감정 상태'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop', caption: 'Documentary style' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Natural shake' },
            { src: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&h=400&fit=crop', caption: 'Raw feeling' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Intimate view' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/06c262d7-2224-434d-ae1e-ca0f8c65eba6/0.mp4', caption: 'Handheld camera example 1' },
            { src: 'https://cdn.midjourney.com/video/62dbb6e7-f3f5-4e12-bccf-4f6f93c3c49e/0.mp4', caption: 'Handheld camera example 2' }
        ]
    },

    // Transitions
    'cut': {
        title: '컷(Cut)',
        koreanTitle: '컷',
        prompt: 'hard cut',
        description: '한 장면에서 다른 장면으로 즉시 전환하는 가장 기본적인 편집 기법입니다.',
        usage: [
            '시간과 공간의 즉각적 전환',
            '빠른 리듬감 조성',
            '대화 장면 편집',
            '액션의 연속성'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Instant transition' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Scene change' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Quick cut' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Direct switch' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/83fc363e-51dc-41ff-b026-8c6e7da0275b/0.mp4', caption: 'Hard cut example 1' },
            { src: 'https://cdn.midjourney.com/video/36aa24ba-9579-4b2c-8c46-41d802ad8c56/0.mp4', caption: 'Hard cut example 2' }
        ]
    },

    'fade': {
        title: '페이드(Fade)',
        koreanTitle: '페이드',
        prompt: 'fade in,out',
        description: '화면이 점점 어두워지거나(Fade Out) 밝아지는(Fade In) 전환 효과입니다.',
        usage: [
            '시간의 경과 표현',
            '장면의 시작과 끝',
            '꿈이나 회상 장면',
            '감정적 여운'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1516571748831-5d81767b788d?w=600&h=400&fit=crop', caption: 'Fade to black' },
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Fade in' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Gradual transition' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Soft ending' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/c5b6d43e-513c-47b0-9b6f-695e2a5ebe41/0.mp4', caption: 'Fade in/out example 1' },
            { src: 'https://cdn.midjourney.com/video/b1eeef73-00cd-492c-b6b9-7e5c3a33e400/0.mp4', caption: 'Fade in/out example 2' }
        ]
    },

    'dissolve': {
        title: '디졸브(Dissolve)',
        koreanTitle: '디졸브',
        prompt: 'dissolve transition',
        description: '한 장면이 사라지면서 동시에 다음 장면이 나타나는 부드러운 전환입니다.',
        usage: [
            '시간의 부드러운 경과',
            '장소의 전환',
            '연관성 있는 장면 연결',
            '몽환적 분위기'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Cross dissolve' },
            { src: 'https://images.unsplash.com/photo-1516571748831-5d81767b788d?w=600&h=400&fit=crop', caption: 'Smooth blend' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Overlapping images' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Soft transition' }
        ]
    },

    'wipe': {
        title: '와이프(Wipe)',
        koreanTitle: '와이프',
        prompt: 'wipe transition',
        description: '화면이 특정 방향으로 닦이듯이 다음 장면으로 전환되는 효과입니다.',
        usage: [
            '공간의 이동 표현',
            '코미디적 효과',
            '레트로 스타일',
            'Star Wars 스타일'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Directional wipe' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Screen wipe' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Slide transition' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Creative wipe' }
        ]
    },

    'match-cut': {
        title: '매치 컷(Match Cut)',
        koreanTitle: '매치 컷',
        prompt: 'match cut',
        description: '시각적으로 유사한 요소를 이용해 서로 다른 장면을 연결하는 창의적 편집입니다.',
        usage: [
            '시공간의 도약',
            '주제적 연결',
            '시각적 연속성',
            '은유적 표현'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Visual match' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Shape matching' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Action match' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Creative link' }
        ]
    },

    // Special Effects
    'slow-motion': {
        title: '슬로우 모션(Slow Motion)',
        koreanTitle: '슬로모션',
        prompt: 'slow motion',
        description: '실제보다 느린 속도로 재생하여 동작을 강조하는 효과입니다.',
        usage: [
            '극적인 순간 강조',
            '액션 씬의 디테일',
            '감정적 임팩트',
            '스포츠 하이라이트'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', caption: 'Dramatic effect' },
            { src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&h=400&fit=crop', caption: 'Action detail' },
            { src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&h=400&fit=crop', caption: 'Time stretch' },
            { src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&h=400&fit=crop', caption: 'Epic moment' }
        ]
    },

    'time-lapse': {
        title: '타임랩스(Time-lapse)',
        koreanTitle: '타임랩스',
        prompt: 'time-lapse',
        description: '긴 시간을 짧게 압축하여 빠르게 재생하는 기법입니다.',
        usage: [
            '시간의 흐름 표현',
            '도시의 변화',
            '자연 현상',
            '건설 과정'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=600&h=400&fit=crop', caption: 'Time compression' },
            { src: 'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=600&h=400&fit=crop', caption: 'City timelapse' },
            { src: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=400&fit=crop', caption: 'Cloud movement' },
            { src: 'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?w=600&h=400&fit=crop', caption: 'Star trails' }
        ]
    },

    'freeze-frame': {
        title: '프리즈 프레임(Freeze Frame)',
        koreanTitle: '정지 화면',
        prompt: 'freeze frame',
        description: '움직이는 영상을 특정 순간에 정지시키는 효과입니다.',
        usage: [
            '중요한 순간 강조',
            '내레이션 삽입',
            '극적인 엔딩',
            '캐릭터 소개'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', caption: 'Frozen moment' },
            { src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&h=400&fit=crop', caption: 'Action pause' },
            { src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&h=400&fit=crop', caption: 'Still frame' },
            { src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&h=400&fit=crop', caption: 'Time stop' }
        ]
    },

    'motion-blur': {
        title: '모션 블러(Motion Blur)',
        koreanTitle: '모션 블러',
        prompt: 'motion blur',
        description: '빠른 움직임을 흐릿하게 표현하여 속도감을 나타내는 효과입니다.',
        usage: [
            '속도감 표현',
            '액션의 강조',
            '시간의 흐름',
            '역동적 에너지'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', caption: 'Speed effect' },
            { src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&h=400&fit=crop', caption: 'Movement blur' },
            { src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&h=400&fit=crop', caption: 'Dynamic motion' },
            { src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&h=400&fit=crop', caption: 'Action blur' }
        ]
    },

    // ============= AIFI FRAMEWORK =============
    'instructor-profile': {
        title: '강사 소개',
        koreanTitle: '강사 소개',
        prompt: 'AIFI 프레임워크 창시자',
        instructorInfo: {
            name: '김진욱',
            nickname: '하루오프',
            positions: [
                'AIFI 프레임워크 개발 이사',
                '(주)알앤픽 대표이사',
                '(주)제이콥소프트 전략영업대표'
            ]
        },
        description: 'AIFI 프레임워크의 전체적인 시스템 개발자로서 AIFI님과 함께 영상프레임워크의 새로움 패러다임을 도입하여 체계적인 프롬프트 엔지니어링과 창작 프로세스를 통해 누구나 고품질 콘텐츠를 제작할 수 있도록 하였습니다.',
        usage: [
            'AIFI 프레임워크 개발 및 교육',
            'AI 기반 콘텐츠 제작 솔루션',
            '체계적인 프롬프트 엔지니어링 방법론',
            '창작자를 위한 실무 교육 프로그램'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', caption: '강사 프로필' }
        ]
    },

    'intro-videos': {
        title: '인트로 영상 갤러리',
        koreanTitle: '인트로 영상 갤러리',
        prompt: '영상 소개',
        description: 'AIFI 프레임워크와 관련된 다양한 인트로 영상을 감상하실 수 있습니다. 각 영상을 클릭하면 전체화면으로 재생됩니다.',
        usage: [
            'AIFI JU0님의 영상',
            '기술 데모 영상',
            '튜토리얼 인트로 영상',
            'VEO3로 영상개발'
        ],
        videos: [
            {
                url: 'https://www.dropbox.com/scl/fi/6okpom058uatv5zkb06hb/.mp4?rlkey=zcomcwkp5qjr5d0x6xnytce28&st=klgl7ygv&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
                title: 'AIFI JU0 님의 영상',
                description: '중세시대 혼돈의 시기를 이겨내는 전쟁신 인트로 영상'
            },
            {
                url: 'https://www.dropbox.com/scl/fi/toi1rrhkdviwe55y85ofu/A8EFD160-FA11-4A34-A409-E1792DBCC723_video.MP4?rlkey=agk6cyqkderoh0mvb5k9ha3wa&st=493c855y&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
                title: '나 혼자만 레벨업 3D랜더링',
                description: '최강의 웹툰 "나 혼자만 레벨업"의 3D랜더링한 작품'
            },
            {
                url: 'https://www.dropbox.com/scl/fi/gfvw1jkg84kwoegz4l39w/E27D0315-B046-4036-B1CD-D43829E8BA47_video.MP4?rlkey=mcz0df3ivly21gucv1rfa1192&st=mhh9ow8i&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
                title: '튜토리얼 인트로',
                description: '초보자를 위한 AIFI 프레임워크 튜토리얼 시작 영상입니다.'
            },
            {
                url: 'https://www.dropbox.com/scl/fi/7udhyo2b5v0p4u0uu91lh/_schema_httpjsonschemaorgdraft07-1.mp4?rlkey=lqhpz4al7u9t377kvx78ehn34&st=zizgjtd4&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
                title: '프로젝트 쇼케이스',
                description: 'AIFI 프레임워크를 활용한 다양한 프로젝트 결과물을 소개하는 영상입니다.'
            }
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', caption: '영상 제작 스튜디오' },
            { src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', caption: 'AI 기술 활용' }
        ]
    },

    // ============= AIFI 툴 =============
    'aifi-image-generator': {
        title: '이미지 생성기',
        koreanTitle: 'AI 이미지 생성',
        prompt: 'AI 이미지 생성',
        description: '텍스트 프롬프트를 입력하여 고품질 이미지를 생성할 수 있는 도구입니다. Google Gemini API를 활용하여 전문 사진작가 수준의 이미지를 제작할 수 있습니다.',
        usage: [
            '텍스트 프롬프트로 이미지 생성',
            '창작 아이디어 시각화',
            '콘텐츠 제작용 이미지',
            '프로토타입 디자인'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', caption: 'AI 이미지 생성' },
            { src: 'https://images.unsplash.com/photo-1686191128892-34a1dc6cd904?w=600&h=400&fit=crop', caption: '창작 도구' }
        ]
    },

    'aifi-prompt-extractor': {
        title: '프롬프트 추출기',
        koreanTitle: '이미지 프롬프트 추출',
        prompt: '이미지 분석 및 프롬프트 추출',
        description: '업로드된 이미지를 분석하여 AI 이미지 생성에 사용할 수 있는 구조화된 프롬프트를 자동으로 추출합니다.',
        usage: [
            '이미지 역분석',
            '프롬프트 학습',
            '스타일 분석',
            '재현 가능한 프롬프트 생성'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop', caption: '이미지 분석' },
            { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop', caption: '프롬프트 추출' }
        ]
    },

    'aifi-image-variator': {
        title: '이미지 변형기',
        koreanTitle: '이미지 변형 생성',
        prompt: '이미지 변형 및 편집',
        description: '기존 이미지를 업로드하고 변형 지시사항을 입력하여 새로운 버전의 이미지를 생성할 수 있습니다.',
        usage: [
            '이미지 스타일 변경',
            '창작적 변형',
            '버전 생성',
            '아이디어 발전'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1558346489-ace63f442871?w=600&h=400&fit=crop', caption: '이미지 변형' },
            { src: 'https://images.unsplash.com/photo-1609592043530-1d8c5df5f3f9?w=600&h=400&fit=crop', caption: '창작적 편집' }
        ]
    },

    'aifi-video-prompt': {
        title: '영상 프롬프트 생성기',
        koreanTitle: '영상 프롬프트 생성',
        prompt: 'AI 영상 프롬프트 생성',
        description: '텍스트 아이디어를 입력하면 Veo 3와 같은 텍스트-투-비디오 AI 모델에서 사용할 수 있는 상세한 JSON 프롬프트를 생성합니다.',
        usage: [
            '영상 제작 계획',
            'AI 영상 생성 프롬프트',
            '시나리오 구조화',
            '영상 스타일 정의'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', caption: '영상 제작' },
            { src: 'https://images.unsplash.com/photo-1626544901077-f6dac3ee9aa6?w=600&h=400&fit=crop', caption: 'AI 영상 생성' }
        ]
    }
};