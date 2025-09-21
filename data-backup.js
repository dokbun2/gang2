// Camera Guide Data
const cameraData = {
    // Shot Size
    'extreme-closeup': {
        title: '익스트림 클로즈업 Extreme Close-up',
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
            { src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=400&fit=crop', caption: 'Eye extreme close-up' },
            { src: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?w=600&h=400&fit=crop', caption: 'Detail shot' },
            { src: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=400&fit=crop', caption: 'Texture emphasis' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Emotion focus' }
        ]
    },

    'closeup': {
        title: '클로즈업 Close-up',
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
            { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', caption: 'Portrait close-up' },
            { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', caption: 'Emotional expression' },
            { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop', caption: 'Character detail' },
            { src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=400&fit=crop', caption: 'Face focus' }
        ]
    },

    'medium-shot': {
        title: '미디엄 샷 Medium Shot',
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
            { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop', caption: 'Standard medium shot' },
            { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop', caption: 'Conversation shot' },
            { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop', caption: 'Waist-up framing' },
            { src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&h=400&fit=crop', caption: 'Natural perspective' }
        ]
    },

    'cowboy-shot': {
        title: '카우보이 샷 Cowboy Shot',
        koreanTitle: '카우보이 샷',
        prompt: 'cowboy shot',
        description: '인물의 허벅지나 무릎 위까지를 담는 샷으로, 미디엄 샷과 풀 샷의 중간 단계입니다. 서부 영화에서 권총을 함께 보여주기 위해 유래되었습니다.',
        usage: [
            '인물의 행동과 자신감을 강조할 때',
            '표정을 놓치지 않으면서도 동작을 보여줄 때',
            '위풍당당한 느낌을 줄 때',
            '액션 장면의 준비 상태를 보여줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Classic cowboy shot' },
            { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=400&fit=crop', caption: 'Action ready stance' },
            { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop', caption: 'Mid-thigh framing' },
            { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop', caption: 'Power pose' }
        ]
    },

    'full-shot': {
        title: '풀 샷 Full Shot',
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
            { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=400&fit=crop', caption: 'Full body shot' },
            { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop', caption: 'Complete figure' },
            { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop', caption: 'Head to toe view' },
            { src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop', caption: 'Character reveal' }
        ]
    },

    'wide-shot': {
        title: '와이드 샷 Wide Shot',
        koreanTitle: '와이드 샷',
        prompt: 'wide shot',
        description: '인물과 함께 주변 배경을 넓게 보여주는 샷입니다. 롱 샷(Long Shot)이라고도 합니다.',
        usage: [
            '인물이 어떤 환경에 처해 있는지 공간적인 정보를 제공할 때',
            '장면의 전체적인 분위기를 설정할 때',
            '인물의 고립감이나 왜소함을 표현할 때',
            '환경과 인물의 관계를 보여줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop', caption: 'Environmental context' },
            { src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=600&h=400&fit=crop', caption: 'Spatial relationship' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Landscape with figure' },
            { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop', caption: 'Wide perspective' }
        ]
    },

    'extreme-wide': {
        title: '익스트림 와이드 샷 Extreme Wide Shot',
        koreanTitle: '익스트림 와이드 샷',
        prompt: 'extreme wide shot',
        description: '아주 광활한 풍경 속에 인물이 아주 작게 보이거나 거의 보이지 않는 샷입니다.',
        usage: [
            '영화의 시작 부분에서 시대적, 공간적 배경을 설명하는 설정샷(Establishing Shot)으로 사용',
            '자연의 웅장함을 표현할 때',
            '도시의 거대함을 표현할 때',
            '압도적인 느낌을 줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Epic landscape' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Establishing shot' },
            { src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop', caption: 'Vast environment' },
            { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', caption: 'Grand scale' }
        ]
    },

    // Camera Angle
    'eye-level': {
        title: '아이 레벨 Eye Level',
        koreanTitle: '아이 레벨',
        prompt: 'eye level',
        description: '카메라를 피사체의 눈높이에 맞춰 수평으로 촬영하는 가장 기본적인 앵글입니다.',
        usage: [
            '관객이 피사체와 동등한 입장에서 소통하는 느낌을 줄 때',
            '가장 객관적이고 안정적인 시선을 제공할 때',
            '편안함을 느끼게 할 때',
            '일상적이고 자연스러운 시점을 보여줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=400&fit=crop', caption: 'Natural perspective' },
            { src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=400&fit=crop', caption: 'Equal viewpoint' },
            { src: 'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=600&h=400&fit=crop', caption: 'Standard angle' },
            { src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=400&fit=crop', caption: 'Neutral view' }
        ]
    },

    'low-angle': {
        title: '로우 앵글 Low Angle',
        koreanTitle: '로우 앵글',
        prompt: 'low angle',
        description: '피사체보다 낮은 위치에서 위를 올려다보며 촬영하는 앵글입니다.',
        usage: [
            '피사체를 더 크고, 강력하며, 권위적으로 보이게 할 때',
            '영웅의 위대함을 표현할 때',
            '악당의 위압감을 강조할 때',
            '관객에게 열등감이나 경외심을 느끼게 할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&h=400&fit=crop', caption: 'Power perspective' },
            { src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop', caption: 'Heroic angle' },
            { src: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=600&h=400&fit=crop', caption: 'Dominant view' },
            { src: 'https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=600&h=400&fit=crop', caption: 'Upward shot' }
        ]
    },

    'high-angle': {
        title: '하이 앵글 High Angle',
        koreanTitle: '하이 앵글',
        prompt: 'high angle',
        description: '피사체보다 높은 위치에서 아래를 내려다보며 촬영하는 앵글입니다.',
        usage: [
            '피사체를 작고, 무력하며, 연약하게 보이게 할 때',
            '관객이 인물의 상황을 관찰하는 느낌을 줄 때',
            '인물의 패배감이나 곤경을 표현할 때',
            '우월한 시점에서 장면을 보여줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1506818144585-74b29c980d4b?w=600&h=400&fit=crop', caption: 'Looking down view' },
            { src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=400&fit=crop', caption: 'Vulnerable perspective' },
            { src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=400&fit=crop', caption: 'Overview angle' },
            { src: 'https://images.unsplash.com/photo-1493243350443-9e3048ce7288?w=600&h=400&fit=crop', caption: 'Superior viewpoint' }
        ]
    },

    'birds-eye': {
        title: '버즈 아이 뷰 Bird\'s Eye View',
        koreanTitle: '버즈 아이 뷰',
        prompt: 'birds eye view',
        description: '새가 하늘에서 내려다보는 것처럼, 피사체의 정수리 위에서 수직으로 촬영하는 극단적인 하이 앵글입니다.',
        usage: [
            '신과 같은 전지적 시점을 표현할 때',
            '인물들의 위치나 동선을 한눈에 보여줄 때',
            '운명적인 느낌을 줄 때',
            '디자인적 패턴을 강조할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop', caption: 'Aerial view' },
            { src: 'https://images.unsplash.com/photo-1473615695634-d284ec918736?w=600&h=400&fit=crop', caption: 'Top-down perspective' },
            { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop', caption: 'Pattern emphasis' },
            { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', caption: 'God\'s eye view' }
        ]
    },

    'overhead': {
        title: '오버헤드 샷 Overhead Shot',
        koreanTitle: '오버헤드 샷',
        prompt: 'overhead shot',
        description: '버즈 아이 뷰와 유사하게 높은 곳에서 내려다보는 샷을 통칭합니다.',
        usage: [
            '특정 행동(요리, 수술, 책상 위 작업 등)을 명확하게 보여줄 때',
            '감시당하는 듯한 긴장감을 조성할 때',
            '작업 과정을 보여줄 때',
            '공간의 배치를 설명할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop', caption: 'Workspace view' },
            { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop', caption: 'Table top shot' },
            { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop', caption: 'Layout perspective' },
            { src: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&h=400&fit=crop', caption: 'Process documentation' }
        ]
    },

    'dutch-angle': {
        title: '더치 앵글 Dutch Angle',
        koreanTitle: '더치 앵글',
        prompt: 'dutch angle',
        description: '카메라를 의도적으로 기울여 수평과 수직이 맞지 않게 촬영하는 앵글입니다.',
        usage: [
            '인물의 불안정한 심리 상태(불안, 혼란, 광기)를 표현할 때',
            '긴박한 상황을 시각적으로 표현할 때',
            '화면에 역동성을 더할 때',
            '불편한 느낌을 의도적으로 줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?w=600&h=400&fit=crop', caption: 'Tilted perspective' },
            { src: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=600&h=400&fit=crop', caption: 'Disorienting angle' },
            { src: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=600&h=400&fit=crop', caption: 'Unstable view' },
            { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop', caption: 'Dynamic tilt' }
        ]
    },

    'worms-eye': {
        title: '웜즈 아이 뷰 Worm\'s Eye View',
        koreanTitle: '웜즈 아이 뷰',
        prompt: 'worms eye view',
        description: '벌레의 시선처럼, 거의 땅바닥에 붙어서 하늘을 향해 극단적으로 올려다보며 촬영하는 앵글입니다.',
        usage: [
            '로우 앵글보다 훨씬 극적인 효과를 낼 때',
            '피사체를 거대하고 위협적으로 보이게 할 때',
            '하늘이나 높은 건물의 웅장함을 극대화할 때',
            '극도의 열등감이나 압도감을 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Ground level up' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Extreme low angle' },
            { src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop', caption: 'Monumental view' },
            { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop', caption: 'Towering perspective' }
        ]
    },

    'ground-level': {
        title: '그라운드 레벨 Ground Level',
        koreanTitle: '그라운드 레벨',
        prompt: 'ground level',
        description: '카메라를 땅바닥 높이에 두고 수평으로 촬영하는 앵글입니다.',
        usage: [
            '인물의 발이나 바닥에 있는 중요한 물체에 시선을 집중시킬 때',
            '걷거나 달리는 장면에 속도감을 더할 때',
            '현장감을 더할 때',
            '독특한 시점을 제공할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop', caption: 'Floor level view' },
            { src: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=600&h=400&fit=crop', caption: 'Surface perspective' },
            { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', caption: 'Low horizontal' },
            { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=400&fit=crop', caption: 'Ground angle' }
        ]
    },

    // Camera Viewpoint
    'side-view': {
        title: '사이드/프로필 뷰 Side/Profile View',
        koreanTitle: '측면 뷰',
        prompt: 'side view',
        description: '피사체의 정면이 아닌 옆모습을 촬영합니다.',
        usage: [
            '객관적이고 관찰자적인 시점을 제공할 때',
            '두 인물이 마주 보고 대화할 때 그들의 관계와 거리를 보여줄 때',
            '프로필의 특징을 강조할 때',
            '행동의 방향성을 보여줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=600&h=400&fit=crop', caption: 'Profile shot' },
            { src: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&h=400&fit=crop', caption: 'Lateral view' },
            { src: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&h=400&fit=crop', caption: 'Side perspective' },
            { src: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&h=400&fit=crop', caption: '90 degree angle' }
        ]
    },

    'back-view': {
        title: '백 뷰 Back View',
        koreanTitle: '후면 뷰',
        prompt: 'back view',
        description: '피사체의 뒷모습을 촬영합니다.',
        usage: [
            '인물의 정체나 표정을 숨겨 궁금증과 신비감을 유발할 때',
            '인물의 고독하고 쓸쓸한 감정을 표현할 때',
            '관객이 인물과 함께 앞을 바라보는 느낌을 줄 때',
            '미스터리한 분위기를 조성할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=600&h=400&fit=crop', caption: 'Rear view' },
            { src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=400&fit=crop', caption: 'Behind shot' },
            { src: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=600&h=400&fit=crop', caption: 'Back perspective' },
            { src: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=600&h=400&fit=crop', caption: 'Following view' }
        ]
    },

    'three-quarter': {
        title: '3/4 뷰 3/4 View',
        koreanTitle: '3/4 뷰',
        prompt: '3/4 view',
        description: '피사체의 정면과 측면 사이, 약 45도 각도에서 촬영합니다.',
        usage: [
            '얼굴과 몸을 가장 입체적이고 자연스럽게 보이게 할 때',
            '인물 촬영에서 가장 보편적으로 사용',
            '캐릭터의 특징을 균형있게 보여줄 때',
            '자연스러운 대화 장면을 연출할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1489980478712-2ab535aa775f?w=600&h=400&fit=crop', caption: '45 degree angle' },
            { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop', caption: 'Three quarter view' },
            { src: 'https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?w=600&h=400&fit=crop', caption: 'Natural angle' },
            { src: 'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?w=600&h=400&fit=crop', caption: 'Portrait angle' }
        ]
    },

    'rear-three-quarter': {
        title: '리어 3/4 뷰 Rear 3/4 View',
        koreanTitle: '후면 3/4 뷰',
        prompt: 'rear 3/4 view',
        description: '피사체의 등과 어깨너머로 얼굴 일부가 보이도록 뒤쪽 45도에서 촬영합니다.',
        usage: [
            '인물의 시선을 따라가면서도 그의 반응을 살짝 엿볼 수 있게 할 때',
            '인물의 생각이나 고립감을 엿보는 듯한 느낌을 줄 때',
            '관찰자적 시점을 유지하면서도 감정을 전달할 때',
            '신비로운 분위기를 연출할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop', caption: 'Back 45 degree' },
            { src: 'https://images.unsplash.com/photo-1521117660421-ce701ed42966?w=600&h=400&fit=crop', caption: 'Rear angle view' },
            { src: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?w=600&h=400&fit=crop', caption: 'Behind quarter' },
            { src: 'https://images.unsplash.com/photo-1473177027534-53d906e9abcf?w=600&h=400&fit=crop', caption: 'Partial back view' }
        ]
    },

    // Special Shots
    'pov-shot': {
        title: 'POV 샷 POV Shot',
        koreanTitle: '1인칭 시점 샷',
        prompt: 'POV shot',
        description: '특정 인물의 눈으로 보는 세상을 그대로 보여주는 샷입니다.',
        usage: [
            '관객이 인물에게 완전히 몰입하고 동일시되는 경험을 제공할 때',
            '공포 영화나 액션 장면에서 현장감을 극대화할 때',
            '주관적인 시점을 강조할 때',
            '인물의 감정이나 상태를 직접 체험하게 할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&h=400&fit=crop', caption: 'First person view' },
            { src: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=600&h=400&fit=crop', caption: 'Subjective camera' },
            { src: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&h=400&fit=crop', caption: 'Character perspective' },
            { src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&h=400&fit=crop', caption: 'Immersive view' }
        ]
    },

    'over-shoulder': {
        title: '오버더숄더 Over-the-Shoulder',
        koreanTitle: '어깨너머 샷',
        prompt: 'over-the-shoulder shot',
        description: '한 인물의 어깨너머로 상대방 인물을 촬영합니다.',
        usage: [
            '두 인물 간의 대화 장면에 가장 많이 사용',
            '관객이 대화에 참여하는 듯한 느낌을 줄 때',
            '두 인물의 관계를 시각적으로 보여줄 때',
            '대화의 방향성과 연결성을 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', caption: 'OTS dialogue' },
            { src: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=600&h=400&fit=crop', caption: 'Conversation shot' },
            { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop', caption: 'Interactive view' },
            { src: 'https://images.unsplash.com/photo-1543096222-72de739f7917?w=600&h=400&fit=crop', caption: 'Relationship shot' }
        ]
    },

    'two-shot': {
        title: '투/쓰리/그룹 샷 Two/Three/Group Shot',
        koreanTitle: '투샷/쓰리샷/그룹샷',
        prompt: 'two shot',
        description: '화면에 등장하는 인물의 수(2명/3명/그 이상)에 따라 부르는 샷입니다.',
        usage: [
            '인물들 간의 관계를 보여줄 때',
            '역학 관계를 시각적으로 표현할 때',
            '상호작용을 보여줄 때',
            '그룹의 다이나믹을 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop', caption: 'Two person frame' },
            { src: 'https://images.unsplash.com/photo-1522444024501-b17a6c78d8a1?w=600&h=400&fit=crop', caption: 'Three shot' },
            { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop', caption: 'Group composition' },
            { src: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=600&h=400&fit=crop', caption: 'Multiple subjects' }
        ]
    },

    'establishing': {
        title: '에스타블리싱 샷 Establishing Shot',
        koreanTitle: '설정 샷',
        prompt: 'establishing shot',
        description: '새로운 장면이 시작될 때, 그곳이 어디인지 시간적/공간적 배경을 알려주는 샷입니다.',
        usage: [
            '관객에게 앞으로 펼쳐질 이야기의 무대를 소개할 때',
            '전체적인 분위기를 설정할 때',
            '시간과 장소의 변화를 알릴 때',
            '스케일과 컨텍스트를 제공할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop', caption: 'Location reveal' },
            { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop', caption: 'Scene setter' },
            { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop', caption: 'Context shot' },
            { src: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=600&h=400&fit=crop', caption: 'Opening view' }
        ]
    },

    'master-shot': {
        title: '마스터 샷 Master Shot',
        koreanTitle: '마스터 샷',
        prompt: 'master shot',
        description: '한 장면 전체를 끊지 않고 처음부터 끝까지 하나의 롱테이크로 촬영한 샷입니다.',
        usage: [
            '편집의 기준점이 될 때',
            '전체 액션을 하나로 담을 때',
            '연속성을 유지할 때',
            '클로즈업이나 다른 샷들과 교차 편집할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=600&h=400&fit=crop', caption: 'Complete scene' },
            { src: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=600&h=400&fit=crop', caption: 'Continuous take' },
            { src: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop', caption: 'Full action' },
            { src: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&h=400&fit=crop', caption: 'Reference shot' }
        ]
    },

    'insert-shot': {
        title: '인서트 샷 Insert Shot',
        koreanTitle: '인서트 샷',
        prompt: 'insert shot',
        description: '이야기 흐름과 관련된 사물이나 신체 일부를 클로즈업해서 보여주는 샷입니다.',
        usage: [
            '관객이 놓치지 말아야 할 중요한 정보를 강조할 때',
            '편지 내용, 시계 시간 등 디테일을 보여줄 때',
            '장면의 리듬을 조절할 때',
            '중요한 오브젝트를 강조할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop', caption: 'Detail insert' },
            { src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=600&h=400&fit=crop', caption: 'Object focus' },
            { src: 'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?w=600&h=400&fit=crop', caption: 'Information shot' },
            { src: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=600&h=400&fit=crop', caption: 'Cutaway detail' }
        ]
    },

    // Composition
    'rule-of-thirds': {
        title: '삼등분의 법칙 Rule of Thirds',
        koreanTitle: '3분할법',
        prompt: 'rule of thirds',
        description: '화면을 가로, 세로로 3등분하여 생기는 4개의 교차점에 주요 피사체를 배치하는 구도입니다.',
        usage: [
            '시각적으로 가장 안정적이고 균형 잡힌 느낌을 줄 때',
            '사진과 영상에서 가장 널리 사용',
            '자연스러운 시선의 흐름을 유도할 때',
            '화면에 긴장감과 균형을 동시에 줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop', caption: 'Grid composition' },
            { src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&h=400&fit=crop', caption: 'Intersection points' },
            { src: 'https://images.unsplash.com/photo-1495195129352-aeb325a55b65?w=600&h=400&fit=crop', caption: 'Balanced frame' },
            { src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop', caption: 'Visual harmony' }
        ]
    },

    'center-comp': {
        title: '중앙 구도 Center Composition',
        koreanTitle: '중앙 구도',
        prompt: 'center composition',
        description: '피사체를 화면 정중앙에 배치하는 구도입니다.',
        usage: [
            '피사체에 시선을 강력하게 집중시킬 때',
            '중요성과 상징성을 부각할 때',
            '정적이고 강렬한 느낌을 줄 때',
            '대칭적인 아름다움을 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=600&h=400&fit=crop', caption: 'Central focus' },
            { src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop', caption: 'Dead center' },
            { src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=400&fit=crop', caption: 'Centered subject' },
            { src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=400&fit=crop', caption: 'Middle placement' }
        ]
    },

    'symmetrical': {
        title: '대칭 구도 Symmetrical Shot',
        koreanTitle: '대칭 구도',
        prompt: 'symmetrical shot',
        description: '화면의 중심을 기준으로 좌우 또는 상하가 거울처럼 대칭을 이루는 구도입니다.',
        usage: [
            '시각적인 안정감, 질서, 완벽함을 느끼게 할 때',
            '인공적이거나 비현실적인 분위기를 연출할 때',
            '균형과 조화를 강조할 때',
            '형식미를 부각할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1480497490787-505ec076689f?w=600&h=400&fit=crop', caption: 'Perfect symmetry' },
            { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop', caption: 'Mirror balance' },
            { src: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&h=400&fit=crop', caption: 'Bilateral composition' },
            { src: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf?w=600&h=400&fit=crop', caption: 'Reflected layout' }
        ]
    },

    'frame-in-frame': {
        title: '프레임 속 프레임 Frame within Frame',
        koreanTitle: '프레임 속 프레임',
        prompt: 'frame within frame',
        description: '창문, 문틀, 거울 등 화면 속의 다른 요소를 또 하나의 프레임으로 활용하여 피사체를 담는 기법입니다.',
        usage: [
            '장면에 깊이감과 입체감을 더할 때',
            '관객의 시선을 자연스럽게 피사체로 유도할 때',
            '액자 효과로 주목도를 높일 때',
            '공간의 층위를 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?w=600&h=400&fit=crop', caption: 'Natural framing' },
            { src: 'https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?w=600&h=400&fit=crop', caption: 'Window frame' },
            { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&h=400&fit=crop', caption: 'Architectural frame' },
            { src: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=600&h=400&fit=crop', caption: 'Layered framing' }
        ]
    },

    'diagonal': {
        title: '대각선 구도 Diagonal Composition',
        koreanTitle: '대각선 구도',
        prompt: 'diagonal composition',
        description: '화면에 대각선 형태의 선이나 흐름을 만들어 배치하는 구도입니다.',
        usage: [
            '화면에 역동성을 불어넣을 때',
            '긴장감을 조성할 때',
            '속도감을 표현할 때',
            '시선의 움직임을 유도할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', caption: 'Dynamic lines' },
            { src: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=600&h=400&fit=crop', caption: 'Angular composition' },
            { src: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=600&h=400&fit=crop', caption: 'Diagonal flow' },
            { src: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&h=400&fit=crop', caption: 'Tilted elements' }
        ]
    },

    'layered': {
        title: '레이어드 샷 Layered Shot',
        koreanTitle: '레이어 샷',
        prompt: 'layered shot',
        description: '전경(가까운 것), 중경(중간), 배경(먼 것)에 각각 다른 요소들을 배치하여 화면에 깊이감을 주는 기법입니다.',
        usage: [
            '2D 화면을 3D 공간처럼 느끼게 할 때',
            '현실감과 몰입감을 높일 때',
            '공간의 깊이를 표현할 때',
            '복잡한 환경을 효과적으로 보여줄 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop', caption: 'Depth layers' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'Foreground/background' },
            { src: 'https://images.unsplash.com/photo-1502318217862-aa4e294ba657?w=600&h=400&fit=crop', caption: 'Multi-plane' },
            { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop', caption: 'Dimensional depth' }
        ]
    },

    'negative-space': {
        title: '네거티브 스페이스 Negative Space',
        koreanTitle: '여백',
        prompt: 'negative space',
        description: '피사체를 제외한 화면의 텅 빈 공간을 의도적으로 활용하는 기법입니다.',
        usage: [
            '피사체를 강조하고 시선을 집중시킬 때',
            '여백의 크기에 따라 고독, 평화, 광활함 등을 전달할 때',
            '미니멀한 구성을 원할 때',
            '시각적 휴식을 제공할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1493313350450-5f5067744fc9?w=600&h=400&fit=crop', caption: 'Empty space' },
            { src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=400&fit=crop', caption: 'Minimal composition' },
            { src: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=600&h=400&fit=crop', caption: 'Isolation effect' },
            { src: 'https://images.unsplash.com/photo-1506808940212-e37fa45c5ba8?w=600&h=400&fit=crop', caption: 'Breathing room' }
        ]
    }
};