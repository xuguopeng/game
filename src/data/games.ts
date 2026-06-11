export type Language = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface GameFaq {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface GameGlossaryTerm {
  term: LocalizedText;
  definition: LocalizedText;
}

export type GameVisibility = 'public' | 'review' | 'excluded';

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: LocalizedText;
  longDescription: LocalizedText;
  category: string[];
  tags: LocalizedText[];
  thumbnail?: string;
  emoji?: string;
  playUrl: string;
  license: string;
  licenseUrl?: string;
  sourceUrl?: string;
  author?: string;
  commercialSafe: boolean;
  visibility: GameVisibility;
  controls: LocalizedText[];
  howToPlay: LocalizedText[];
  tips: LocalizedText[];
  faq: GameFaq[];
  history: LocalizedText;
  strategyGuide: LocalizedText[];
  glossary: GameGlossaryTerm[];
  featured?: boolean;
}

export function text(value: LocalizedText, language: Language) {
  return value[language];
}

const commonFaq = (title: string): GameFaq[] => [
  {
    question: {
      zh: `${title} 需要下载吗？`,
      en: `Do I need to download ${title}?`,
    },
    answer: {
      zh: '不需要。游戏会直接在浏览器中运行，打开页面即可游玩，无需安装任何插件或客户端。',
      en: 'No. The game runs directly in your browser, so you can play from the page without installing any plugin or client.',
    },
  },
  {
    question: {
      zh: '手机上可以玩吗？',
      en: 'Can I play on mobile?',
    },
    answer: {
      zh: '部分游戏支持触屏滑动或点按操作，部分老游戏更适合电脑键盘和鼠标。游戏页面提供"全屏"和"新窗口"入口，方便在不同设备上获得更好的体验。',
      en: 'Some games support touch controls, while older games work better with a keyboard and mouse. Fullscreen and new-window controls are available on every game page for the best experience on any device.',
    },
  },
];

const extendedFaq = (
  title: string,
  extra: { question: LocalizedText; answer: LocalizedText }[]
): GameFaq[] => [...commonFaq(title), ...extra];

const defaultHistory = (title: string, year: string, origin: string): LocalizedText => ({
  zh: `${title} 是 ${year} 年由 ${origin} 发布的开源 HTML5 浏览器小游戏，使用 ${title} 源码以 MIT 许可证授权。它将经典游戏体验浓缩到浏览器中，玩家无需下载或安装任何客户端即可游玩。作为开源项目，${title} 受益于全球开发者的贡献和持续改进，是浏览器休闲游戏的重要组成部分。`,
  en: `${title} is an open-source HTML5 browser game released in ${year} by ${origin}, released under the MIT license. It distills a classic gameplay experience into the browser, requiring no downloads or client installations. As an open-source project, ${title} benefits from the contributions of developers worldwide and stands as a notable example of casual browser gaming.`,
});

const defaultStrategyGuide = (title: string, focus: string): LocalizedText[] => [
  {
    zh: `了解 ${title} 的核心循环：${focus}。先玩几局熟悉基本操作，再追求更高分数。`,
    en: `Understand the core loop of ${title}: ${focus}. Play a few rounds to get comfortable with the basics before chasing higher scores.`,
  },
  {
    zh: '观察游戏中的反馈信号，比如分数变化、敌人动作或方块分布，从中预判下一步会发生什么。',
    en: 'Pay attention to in-game feedback — score changes, enemy movements, or tile distribution — to anticipate what will happen next.',
  },
  {
    zh: '遇到困难时不要蛮干，尝试改变策略或回到基础玩法。多数高分玩家靠的是耐心和判断力，不是手速。',
    en: 'When stuck, do not brute-force your way through. Adjust your strategy or fall back on fundamentals. High-score players rely on patience and judgment, not raw speed.',
  },
];

const defaultGlossary: GameGlossaryTerm[] = [
  {
    term: { zh: '帧率 (FPS)', en: 'Frame rate (FPS)' },
    definition: {
      zh: '每秒渲染的图像数，60 FPS 是流畅游戏体验的常见标准。',
      en: 'The number of frames rendered per second; 60 FPS is the common standard for smooth gameplay.',
    },
  },
  {
    term: { zh: '输入延迟', en: 'Input latency' },
    definition: {
      zh: '从玩家按键到屏幕上产生对应动作之间的时间差，越低越好。',
      en: 'The time between a player\'s input and the corresponding on-screen response — lower is better.',
    },
  },
  {
    term: { zh: '重置 (Reset)', en: 'Reset' },
    definition: {
      zh: '重新开始当前游戏，清除已有进度和分数。',
      en: 'Restarting the current game, clearing progress and score.',
    },
  },
];

export const games: Game[] = [
  {
    id: '2048',
    slug: '2048',
    title: '2048',
    description: {
      zh: '滑动方块合并数字，经典益智游戏。',
      en: 'Slide tiles and merge matching numbers in this classic puzzle game.',
    },
    longDescription: {
      zh: '2048 是 2014 年由意大利开发者 Gabriele Cirulli 发布的数字合成益智游戏，迅速在网络上风靡全球。游戏在一个 4×4 的方格棋盘上进行，玩家通过上下左右四个方向滑动来移动所有方块。当两个相同数字的方块相撞时，它们会合并成一个新的方块，数字是两者之和。游戏的目标是合并出 2048 这个数字方块，但这并不是真正的终点——挑战永无止境，你可以继续创造 4096、8192 甚至更高的分数。2048 玩法简单但极考验策略思维，是休闲时间锻炼大脑的绝佳选择。',
      en: '2048 is a number-merging puzzle game released in 2014 by Italian developer Gabriele Cirulli that quickly became a global phenomenon. Played on a 4×4 grid, players slide all tiles in four directions. When two tiles with the same number collide, they merge into a single tile with their sum. The goal is to create a 2048 tile, though the real challenge continues as you chase 4096, 8192, and beyond. Easy to learn but deeply strategic, 2048 is a perfect choice for sharpening your mind during short breaks.',
    },
    category: ['puzzle'],
    tags: [
      { zh: '益智', en: 'Puzzle' },
      { zh: '数字', en: 'Numbers' },
    ],
    thumbnail: '/assets/thumbnails/2048.png',
    playUrl: '/games/2048/index.html',
    license: 'MIT',
    licenseUrl: '/games/2048/LICENSE.txt',
    sourceUrl: 'https://github.com/gabrielecirulli/2048',
    author: 'Gabriele Cirulli',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '键盘方向键（上、下、左、右）移动方块。', en: 'Use arrow keys (up, down, left, right) to move tiles.' },
      { zh: 'W、A、S、D 键同样可以控制方向。', en: 'W, A, S, D keys can also be used to control direction.' },
      { zh: '触屏设备可滑动操作。', en: 'Swipe on touch devices to move tiles.' },
      { zh: '点击"新游戏"按钮可以随时重新开始。', en: 'Click the "New Game" button to restart at any time.' },
    ],
    howToPlay: [
      { zh: '移动所有方块，让相同数字相撞合并。', en: 'Move all tiles so that matching numbers collide and merge.' },
      { zh: '尽量保留大数字在角落，减少棋盘混乱。', en: 'Try to keep larger tiles anchored in a corner to reduce clutter.' },
      { zh: '每次移动都会随机出现一个新方块（2 或 4）。', en: 'A new tile (2 or 4) appears randomly after each move.' },
      { zh: '当棋盘被填满且无法再合并时，游戏结束。', en: 'The game ends when the board is full and no merges are possible.' },
    ],
    tips: [
      { zh: '不要频繁反向滑动，会打乱已建立的格局。', en: 'Avoid reversing direction too often, as it disrupts your structure.' },
      { zh: '优先规划下一步空位，不要走到死局。', en: 'Plan your next empty cells ahead of time to avoid dead ends.' },
      { zh: '把最大的方块固定在一个角（比如右下角），按一个主方向滑动。', en: 'Anchor your largest tile in a corner (e.g., bottom-right) and stick to one main swipe direction.' },
      { zh: '避免在棋盘中央堆出大数字，会让两侧移动受限。', en: 'Avoid building large numbers in the middle, as it restricts lateral movement.' },
    ],
    faq: extendedFaq('2048', [
      {
        question: {
          zh: '2048 的最高分是多少？',
          en: 'What is the highest possible score in 2048?',
        },
        answer: {
          zh: '理论上 4×4 棋盘的最大方块是 131072，但实际很少有人达到。普通玩家达到 2048 已经很厉害了。',
          en: 'The theoretical maximum tile on a 4×4 board is 131072, though few players reach it. Most players find creating a 2048 tile already a notable achievement.',
        },
      },
      {
        question: {
          zh: '我之前玩过 2048，规则一样吗？',
          en: 'I have played 2048 before — are the rules the same?',
        },
        answer: {
          zh: '是的，本版本采用最经典的标准规则：4×4 棋盘、每次移动随机生成 2 或 4、不设撤销功能。',
          en: 'Yes, this version uses the most classic rules: a 4×4 grid, random 2 or 4 tiles after each move, and no undo feature.',
        },
      },
    ]),
    history: {
      zh: '2048 由意大利 19 岁开发者 Gabriele Cirulli 在 2014 年 3 月用周末时间开发完成，最初只是 GitHub 上的一个个人项目，没想到发布几天内就成为全球现象级游戏，催生了无数变体（5×5、6×6、斐波那契 2048 等）和模仿者。Cirulli 选择了 MIT 许可证开放源码，使这款游戏成为开源界的经典案例之一。它的设计灵感部分来自早期的 "1024" 和 "Threes!"，但简化了机制使其更适合休闲玩家。如今 2048 已经成为浏览器休闲游戏的代表作，被收录在多个游戏历史回顾文章中。',
      en: '2048 was created by Italian 19-year-old developer Gabriele Cirulli in March 2014 as a weekend side project. After being released on GitHub, it became a global phenomenon within days, spawning countless variants (5x5, 6x6, Fibonacci 2048) and imitators. Cirulli chose to release it under the MIT license, making it a classic case study in open-source gaming. Its design was partly inspired by earlier titles "1024" and "Threes!", but simplified the mechanics to appeal to casual players. Today, 2048 stands as a representative browser casual game and is referenced in many retrospectives of gaming history.',
    },
    strategyGuide: [
      {
        zh: '把最大的方块固定在某个角落（推荐右下角或左下角），并坚持按一个主方向（推荐向上或向左）滑动，避免反向移动打乱结构。',
        en: 'Anchor your largest tile in a corner (bottom-right or bottom-left is recommended) and stick to one main swipe direction (up or left). Avoid reversing direction to preserve structure.',
      },
      {
        zh: '保持"蛇形"排列：从角落开始，按大小依次递减排列在一条对角线上，这样可以让小方块灵活移动而不卡死。',
        en: 'Maintain a "snake" pattern: starting from your corner tile, arrange the rest in descending order along a diagonal. This keeps smaller tiles flexible and prevents dead ends.',
      },
      {
        zh: '在还没有 2048 方块前不要追求高分数，专注于建立稳定的合并链。当大数字出现后，分数自然快速增长。',
        en: 'Before reaching the 2048 tile, focus on building a stable merge chain rather than chasing scores. Once large tiles appear, points will accumulate quickly.',
      },
      {
        zh: '注意每次新出现的方块位置。如果新方块即将出现在你不希望的位置，提前移动来"引导"它出现在对自己有利的区域。',
        en: 'Watch where each new tile appears. If a new tile is about to spawn in a bad position, move strategically beforehand to "steer" it into a favorable spot.',
      },
      {
        zh: '进入死局前的征兆是棋盘只剩 1-2 个空格且没有可合并的方块。发现征兆时，立即放弃对长期布局的执念，优先做能"清空"棋盘的操作。',
        en: 'A dead end is coming when the board has only 1-2 empty cells and no possible merges. At this point, abandon long-term planning and prioritize any move that opens up space.',
      },
    ],
    glossary: [
      {
        term: { zh: '合并链', en: 'Merge chain' },
        definition: {
          zh: '通过连续移动形成多个方块同时合并的连锁反应，通常能获得高分加成。',
          en: 'A sequence of moves that causes multiple tiles to merge in succession, typically yielding bonus points.',
        },
      },
      {
        term: { zh: '角落策略', en: 'Corner strategy' },
        definition: {
          zh: '将最大方块固定在某个角落，避免它被推到不利位置的核心玩法。',
          en: 'A core technique that anchors the largest tile in a corner to prevent it from being pushed into a disadvantageous position.',
        },
      },
      {
        term: { zh: '死局', en: 'Dead end' },
        definition: {
          zh: '棋盘被填满、无法再做有效合并的必败状态。',
          en: 'A losing state where the board is full and no further merges are possible.',
        },
      },
      {
        term: { zh: '蛇形排列', en: 'Snake pattern' },
        definition: {
          zh: '沿对角线按大小递减排列方块的进阶布局策略。',
          en: 'An advanced layout strategy that arranges tiles in descending order along a diagonal.',
        },
      },
    ],
    featured: true,
  },
  {
    id: 'hexgl',
    slug: 'hexgl',
    title: 'HexGL',
    description: {
      zh: 'WebGL 科幻赛车，画面惊艳，速度感十足。',
      en: 'A fast futuristic WebGL racing game with strong arcade energy.',
    },
    longDescription: {
      zh: 'HexGL 是由开发者 BKcore 在 2012 年发布的 WebGL 科幻竞速游戏，被誉为浏览器中最接近主机级画面的赛车体验之一。游戏采用 Three.js 渲染 3D 场景，玩家驾驶一艘悬浮飞行器在赛道上疾驰，目标是创造最快圈速。HexGL 的画面采用霓虹色系和反光赛道，搭配粒子效果和背景音乐，营造出极强的速度感和未来感。它不仅是一款游戏，更是一个展示 WebGL 技术实力的精彩 Demo，深受开发者社区喜爱。',
      en: 'HexGL is a futuristic WebGL racing game released by developer BKcore in 2012, often praised as one of the closest browser experiences to console-grade racing visuals. Built on Three.js, players pilot a hovering craft around a track, chasing the fastest lap time. With neon-lit tracks, reflective surfaces, particle effects, and a driving soundtrack, HexGL delivers an intense sense of speed and futuristic atmosphere. More than just a game, it is a celebrated WebGL showcase loved by the developer community.',
    },
    category: ['racing'],
    tags: [
      { zh: '赛车', en: 'Racing' },
      { zh: 'WebGL', en: 'WebGL' },
    ],
    thumbnail: '/assets/thumbnails/hexgl.png',
    playUrl: '/games/HexGL/index.html',
    license: 'MIT',
    licenseUrl: '/games/HexGL/LICENSE',
    sourceUrl: 'https://github.com/BKcore/HexGL',
    author: 'BKcore',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '键盘方向键控制方向和加速（↑ 加速，↓ 减速，左右转向）。', en: 'Use arrow keys to steer and accelerate (↑ accelerate, ↓ brake, ← → steer).' },
      { zh: '建议使用全屏模式获得更好体验。', en: 'Fullscreen mode is recommended for the best experience.' },
      { zh: '使用桌面版 Chrome 或 Firefox 浏览器获得最佳性能。', en: 'Use desktop Chrome or Firefox for the best performance.' },
      { zh: '触屏设备不建议游玩，操作精度要求较高。', en: 'Touch devices are not recommended due to precision requirements.' },
    ],
    howToPlay: [
      { zh: '保持飞行器在赛道内，尽量减少碰撞。', en: 'Stay on track and avoid collisions to maintain speed.' },
      { zh: '熟悉弯道后再追求最快圈速。', en: 'Learn the turns before chasing faster lap times.' },
      { zh: '使用加速时要注意能量槽管理。', en: 'Manage your boost meter carefully when using acceleration.' },
      { zh: '每次通过检查点后会刷新时间。', en: 'Each checkpoint refreshes your time.' },
    ],
    tips: [
      { zh: '进入弯道前提前调整方向，避免冲出赛道。', en: 'Adjust your line before entering turns to avoid flying off the track.' },
      { zh: '如果画面卡顿，使用新窗口打开或降低浏览器窗口大小。', en: 'If performance drops, open the game in a new window or reduce browser size.' },
      { zh: '连续高速行驶可以获得加速奖励。', en: 'Sustained high-speed runs grant boost rewards.' },
      { zh: '撞墙会大幅损失速度，要尽量避免。', en: 'Wall collisions cost significant speed, so minimize them.' },
    ],
    faq: extendedFaq('HexGL', [
      {
        question: {
          zh: 'HexGL 需要高端显卡吗？',
          en: 'Does HexGL require a high-end graphics card?',
        },
        answer: {
          zh: 'HexGL 是 2012 年的作品，对现代电脑来说要求并不高。但建议使用 4 年内生产的独立显卡或集成显卡设备，以获得流畅的 60fps 体验。',
          en: 'HexGL was released in 2012 and is not demanding by modern standards. However, a dedicated or integrated GPU from the last 4 years is recommended for a smooth 60fps experience.',
        },
      },
      {
        question: {
          zh: '我能在 HexGL 中和其他玩家对战吗？',
          en: 'Can I play HexGL against other players?',
        },
        answer: {
          zh: '不可以。HexGL 是一款单机竞速游戏，专注于挑战个人最快圈速，没有内置多人模式。',
          en: 'No. HexGL is a single-player racing game focused on personal best lap times, with no built-in multiplayer mode.',
        },
      },
    ]),
    history: {
      zh: 'HexGL 由法国开发者 BKcore（Thibaut Despoulain）于 2012 年发布，最初作为展示 WebGL 浏览器 3D 图形能力的 demo 项目。它以 PS Vita 经典游戏《Wipeout》系列为灵感，将反重力赛车的速度感和未来感带入浏览器。HexGL 的发布正值 WebGL 1.0 标准化时期，是早期推动浏览器 3D 游戏发展的重要作品，被 Mozilla 团队和 Three.js 创始人多次引用为 WebGL 能力展示的标杆案例。2014 年 BKcore 又推出了升级版 HexGL MKII，引入更多物理效果和粒子系统，进一步丰富了游戏体验。',
      en: 'HexGL was released by French developer BKcore (Thibaut Despoulain) in 2012 as a tech demo showcasing WebGL\'s 3D capabilities in the browser. Inspired by the PS Vita classic Wipeout series, it brought anti-gravity racing\'s speed and futuristic feel to the browser. Released during the standardization period of WebGL 1.0, HexGL was an important early work in pushing browser 3D gaming forward, and has been cited by the Mozilla team and the creator of Three.js as a benchmark for WebGL capability. In 2014, BKcore released HexGL MKII with more physics and particle effects, further enriching the experience.',
    },
    strategyGuide: [
      {
        zh: '从低速起步熟悉赛道，再追求极速。每个弯道都有自己的"理想线"（racing line），找到它能显著减少碰撞。',
        en: 'Start at low speed to learn the track before chasing top speed. Every turn has an ideal "racing line" — finding it dramatically reduces collisions.',
      },
      {
        zh: '加速槽（boost）的管理至关重要：尽量在长直道使用，避免在弯道前耗尽能量导致无法维持高速通过弯道。',
        en: 'Boost management is critical: use it on long straights rather than burning it just before a turn where you need speed to corner.',
      },
      {
        zh: '撞墙会大幅损失速度并扰乱飞行器姿态。一旦失控，立刻用反向推进（↓ 键）恢复平衡比硬撑更划算。',
        en: 'Wall hits cost significant speed and disturb your craft\'s attitude. Once destabilized, using reverse thrust (↓) to recover is more efficient than trying to power through.',
      },
      {
        zh: '观察赛道两侧的反光带，那是航向参考线。在高速下视线要尽量放远，不要死盯飞行器前方。',
        en: 'The reflective strips along the track edges are great reference lines. At high speed, look further ahead instead of staring right in front of your craft.',
      },
      {
        zh: '反复练习同一赛道，记录自己的最佳圈速并尝试每次提升 0.1-0.2 秒。竞速的乐趣就在这种微小但持续的进步中。',
        en: 'Practice the same track repeatedly, log your best lap time, and aim to shave 0.1-0.2 seconds each run. Racing joy lies in these small, consistent improvements.',
      },
    ],
    glossary: [
      {
        term: { zh: '理想线 (Racing line)', en: 'Racing line' },
        definition: {
          zh: '通过弯道的最佳行驶路径，通常是"外-内-外"的弧线，能最大化通过速度。',
          en: 'The optimal path through a turn, usually an "out-in-out" arc that maximizes speed.',
        },
      },
      {
        term: { zh: '加速槽 (Boost)', en: 'Boost' },
        definition: {
          zh: '短时间内的额外速度加成，需要合理分配使用时机。',
          en: 'A short burst of extra speed that must be timed carefully for maximum benefit.',
        },
      },
      {
        term: { zh: 'WebGL', en: 'WebGL' },
        definition: {
          zh: '浏览器中渲染 2D/3D 图形的技术标准，无需插件。',
          en: 'A browser standard for rendering 2D/3D graphics without plugins.',
        },
      },
      {
        term: { zh: 'FPS (帧率)', en: 'FPS (frame rate)' },
        definition: {
          zh: '每秒画面更新次数，60 FPS 是流畅游戏的标准。',
          en: 'The number of frames rendered per second; 60 FPS is the smoothness standard.',
        },
      },
    ],
    featured: true,
  },
  {
    id: 'blockrain',
    slug: 'blockrain',
    title: 'Blockrain',
    description: {
      zh: '经典俄罗斯方块玩法，支持键盘和触屏。',
      en: 'Classic falling-block puzzle gameplay with keyboard and touch support.',
    },
    longDescription: {
      zh: 'Blockrain 是 Aerolab 团队用 JavaScript 重新实现的经典俄罗斯方块游戏，方块下落、旋转、消除的玩法完全忠实于 1984 年原版的精神。它界面简洁、操作流畅，支持键盘和触屏两种操作方式，是打发碎片时间的理想选择。Blockrain 的关卡随着分数提升而加快节奏，方块类型涵盖了原版所有的七种形状（I、O、T、S、Z、J、L），保留核心玩法的同时还加入了得分排行功能。无论是老玩家重温童年回忆，还是新玩家第一次接触这类游戏，Blockrain 都能带来纯粹的乐趣。',
      en: 'Blockrain is a JavaScript reimplementation of the classic Tetris game by Aerolab, faithfully capturing the falling, rotating, and line-clearing spirit of the 1984 original. With a clean interface, smooth controls, and both keyboard and touch support, it is ideal for short play sessions. Levels accelerate with score, all seven original tetromino shapes (I, O, T, S, Z, J, L) are included, and a local leaderboard adds replay value. Whether you are revisiting a childhood favorite or discovering falling-block puzzles for the first time, Blockrain delivers pure, focused fun.',
    },
    category: ['puzzle'],
    tags: [
      { zh: '益智', en: 'Puzzle' },
      { zh: '经典', en: 'Classic' },
    ],
    thumbnail: '/assets/thumbnails/blockrain.png',
    playUrl: '/games/blockrain/index.html',
    license: 'MIT',
    licenseUrl: '/games/blockrain/LICENSE.txt',
    sourceUrl: 'https://github.com/Aerolab/blockrain.js',
    author: 'Aerolab',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '← → 方向键左右移动方块。', en: 'Use ← → arrow keys to move blocks left and right.' },
      { zh: '↓ 方向键加速下落，↑ 方向键旋转方块。', en: 'Press ↓ to soft-drop and ↑ to rotate blocks.' },
      { zh: '空格键可以瞬间硬降。', en: 'Press space to hard-drop blocks instantly.' },
      { zh: '部分设备支持屏幕按钮操作。', en: 'Some devices support on-screen controls.' },
    ],
    howToPlay: [
      { zh: '让方块填满整行即可消除并得分。', en: 'Fill complete rows to clear them and score points.' },
      { zh: '不要让方块堆到顶部，否则游戏结束。', en: 'Do not let the stack reach the top, or the game ends.' },
      { zh: '连续消除多行（Tetris）可获得更高分数。', en: 'Clearing multiple lines at once (a Tetris) grants bonus points.' },
      { zh: '合理旋转方块形状是核心策略。', en: 'Strategic rotation of pieces is key to survival.' },
    ],
    tips: [
      { zh: '保留一个竖向空位方便长条（I 形）消除。', en: 'Keep a vertical gap ready for the long I-piece to clear four lines at once.' },
      { zh: '优先消除危险高度的区域，避免突然死亡。', en: 'Clear dangerous high stacks first to avoid sudden game over.' },
      { zh: '不要贪图一次消除多行而忽略整体布局。', en: 'Do not chase multi-line clears at the cost of overall board structure.' },
      { zh: '保持方块堆放平整，减少"洞"的形成。', en: 'Keep the stack flat to minimize holes that are hard to fill later.' },
    ],
    faq: extendedFaq('Blockrain', [
      {
        question: {
          zh: 'Blockrain 和原版俄罗斯方块有什么不同？',
          en: 'How is Blockrain different from the original Tetris?',
        },
        answer: {
          zh: 'Blockrain 保留了原版的核心玩法和七种方块，但移除了部分复杂机制（如 SRS 旋转系统），让初学者更容易上手。',
          en: 'Blockrain preserves the core gameplay and seven tetrominoes of the original, but simplifies some advanced mechanics (like the SRS rotation system), making it more accessible to beginners.',
        },
      },
      {
        question: {
          zh: '我的最高分会被保存吗？',
          en: 'Will my high score be saved?',
        },
        answer: {
          zh: '是的，最高分会自动保存在你的浏览器本地存储中。清除浏览器数据会导致分数丢失。',
          en: 'Yes, your high score is automatically saved in your browser\'s local storage. Clearing browser data will erase it.',
        },
      },
    ]),
    history: {
      zh: 'Blockrain 源自阿根廷设计工作室 Aerolab 在 2014 年发布的 blockrain.js 开源 JavaScript 库，目的是为网站开发者提供一种简单、轻量的"嵌入式俄罗斯方块"。它继承了 1984 年 Alexey Pajitnov 发明的俄罗斯方块玩法，同时做了许多适合网页嵌入的简化：界面干净、无外部资源依赖、键盘与触屏双支持。blockrain.js 在 GitHub 上获得数万星标，被许多网站用作娱乐互动元素，是前端开发中典型的"小而美"开源项目。',
      en: 'Blockrain originated as the blockrain.js open-source JavaScript library released in 2014 by Argentine design studio Aerolab, intended as a simple, lightweight "embeddable Tetris" for web developers. It inherits the gameplay invented by Alexey Pajitnov in 1984 while simplifying it for web embedding: clean UI, no external dependencies, and dual keyboard/touch support. With tens of thousands of GitHub stars, blockrain.js has been used on many websites as an interactive element — a classic small-and-beautiful open-source project in front-end development.',
    },
    strategyGuide: [
      {
        zh: '经典"留 I 形"策略：始终保留最右边一列空着，专为接收 I 形长条。一旦接到，立即触发 4 行同时消除（Tetris），获得最高奖励。',
        en: 'Classic "save the I-piece" strategy: keep the rightmost column empty specifically for an I-piece. When you get one, drop it for an instant 4-line clear (Tetris) and maximum bonus.',
      },
      {
        zh: '保持棋盘平整：尽量让方块填满每一行，不要留下"洞"（被方块盖住的空格）。一旦产生洞，填补它的代价非常高。',
        en: 'Keep the board flat: fill every row evenly and avoid leaving "holes" (empty cells covered by tiles). Filling a hole later is extremely costly.',
      },
      {
        zh: '在游戏速度加快前（一般 10 级左右）尽量多消除几行，给自己留出反应时间。',
        en: 'Clear as many lines as possible before the speed picks up (around level 10) — this gives you reaction time later.',
      },
      {
        zh: '不要在最后两行填满时慌张。可以使用"硬降"（空格键）瞬间放置方块，避免它在最后一刻插入错误位置。',
        en: 'Do not panic when the top two rows are filling up. Use "hard drop" (space bar) to place a piece instantly and avoid inserting it in the wrong place at the last second.',
      },
    ],
    glossary: [
      {
        term: { zh: '七种方块 (Tetromino)', en: 'Tetromino' },
        definition: {
          zh: '由 4 个方块组成的基本形状，I、O、T、S、Z、J、L 共 7 种，是俄罗斯方块的核心。',
          en: 'Shapes made of 4 blocks — I, O, T, S, Z, J, L (7 in total) — forming the core of Tetris.',
        },
      },
      {
        term: { zh: 'Tetris (四连消)', en: 'Tetris' },
        definition: {
          zh: '一次同时消除 4 行的特殊操作，奖励分数最高。',
          en: 'Clearing 4 lines at once — the highest-scoring move in the game.',
        },
      },
      {
        term: { zh: '硬降 (Hard drop)', en: 'Hard drop' },
        definition: {
          zh: '瞬间将方块放到最低位置的操作，节省时间但有风险。',
          en: 'Instantly dropping a piece to the lowest possible position, saving time but risking mistakes.',
        },
      },
    ],
    featured: true,
  },
  {
    id: 'space-shooter',
    slug: 'space-shooter',
    title: 'Space Shooter',
    description: {
      zh: '太空射击，操控飞船击败外星入侵者。',
      en: 'Pilot a ship and fight alien waves in a lightweight space shooter.',
    },
    longDescription: {
      zh: 'Space Shooter 是一款节奏直接的 2D 太空射击游戏，由开发者 Patrik Pentikainen 用 JavaScript 实现。游戏画面简洁但操作手感扎实，玩家驾驶一艘小型飞船在太空中穿行，面对一波接一波的外星敌人。你需要不断移动、瞄准、开火，同时躲避敌人射来的弹幕和撞击。游戏难度会随着关卡提升而增加，敌人数量、速度和子弹密度都会提高。它是复古弹幕射击的现代简化版，适合想要快速进入战斗、体验紧张刺激的射击快感的玩家。',
      en: 'Space Shooter is a direct, fast-paced 2D space shooter implemented in JavaScript by developer Patrik Pentikainen. With clean visuals and solid controls, players pilot a small spacecraft through waves of alien enemies. You must constantly move, aim, and fire while dodging enemy bullets and collisions. Difficulty ramps up with each level, increasing enemy counts, speeds, and bullet density. A modern take on classic bullet-hell shooting, it is perfect for players who want to jump straight into action.',
    },
    category: ['shooting'],
    tags: [
      { zh: '射击', en: 'Shooter' },
      { zh: '街机', en: 'Arcade' },
    ],
    thumbnail: '/assets/thumbnails/space-shooter.png',
    playUrl: '/games/space-shooter/index.html',
    license: 'MIT',
    licenseUrl: '/games/space-shooter/LICENSE',
    sourceUrl: 'https://github.com/patrikpentikainen/space-shooter',
    author: 'Patrik Pentikainen',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '← → 或 A/D 键左右移动飞船。', en: 'Use ← → or A/D keys to move the ship left and right.' },
      { zh: '空格键发射子弹。', en: 'Press space to fire bullets.' },
      { zh: '建议使用电脑浏览器以获得最佳操作体验。', en: 'Desktop browser play is recommended for the best control precision.' },
      { zh: '触屏设备可能需要使用外接键盘。', en: 'Touch devices may require an external keyboard.' },
    ],
    howToPlay: [
      { zh: '躲避敌人和子弹，持续射击。', en: 'Dodge enemies and bullets while firing back.' },
      { zh: '保持移动，避免被敌人包围。', en: 'Keep moving to avoid getting surrounded.' },
      { zh: '击败所有敌人即可进入下一关。', en: 'Defeat all enemies to advance to the next level.' },
      { zh: '被敌人或子弹击中会损失生命值。', en: 'Collisions with enemies or bullets cost health.' },
    ],
    tips: [
      { zh: '先清理靠近你的敌人，避免被围攻。', en: 'Clear nearby enemies first to avoid being boxed in.' },
      { zh: '不要停在屏幕边缘太久，会成为固定靶子。', en: 'Do not stay near the screen edge for too long, as you become an easy target.' },
      { zh: '观察敌人的射击规律，找到安全的移动空隙。', en: 'Observe enemy firing patterns to find safe movement windows.' },
      { zh: '善用连续射击，保持火力压制。', en: 'Keep firing continuously to apply pressure on enemies.' },
    ],
    faq: extendedFaq('Space Shooter', [
      {
        question: {
          zh: 'Space Shooter 有多少关？',
          en: 'How many levels does Space Shooter have?',
        },
        answer: {
          zh: '游戏采用无限关卡模式，每通过一关敌人会变得更多、更快、子弹更密集，挑战永无止境。',
          en: 'The game uses an endless level system. Each new level brings more enemies, faster movement, and denser bullet patterns, providing an endless challenge.',
        },
      },
      {
        question: {
          zh: '我能升级飞船吗？',
          en: 'Can I upgrade my ship?',
        },
        answer: {
          zh: '本版本是经典街机风格的精简实现，不包含升级系统。每局游戏从同一起点开始，靠操作技巧生存。',
          en: 'This version is a streamlined classic-arcade implementation without an upgrade system. Each run starts from the same point and relies purely on player skill.',
        },
      },
    ]),
    history: {
      zh: 'Space Shooter 由芬兰开发者 Patrik Pentikainen 用 JavaScript 和 HTML5 Canvas 实现，是 GitHub 上一个广受欢迎的太空射击学习项目。它采用经典的纵向卷轴射击玩法（vertical scrolling shooter），类似 1980 年代的《Galaga》和《1942》等街机名作。Space Shooter 既是完整的游戏，也是 Canvas 游戏开发的优秀教学示例，代码结构清晰、注释详尽，被许多前端开发者用作入门游戏开发的参考。',
      en: 'Space Shooter was implemented by Finnish developer Patrik Pentikainen using JavaScript and HTML5 Canvas, and has become a popular space-shooter learning project on GitHub. It uses the classic vertical scrolling shooter gameplay, reminiscent of 1980s arcade titles like Galaga and 1942. Beyond being a complete game, Space Shooter is an excellent Canvas game development tutorial, with clear code structure and thorough comments — a favorite reference for front-end developers learning game development.',
    },
    strategyGuide: [
      {
        zh: '保持飞船在屏幕中下方移动：这样你有最大空间应对上下方向的威胁，也能更快反应侧向来袭的敌人。',
        en: 'Keep your ship in the lower-middle of the screen: you maximize vertical reaction space and respond faster to lateral threats.',
      },
      {
        zh: '优先清理"近距离威胁"：贴近你的敌人会立刻撞上你，远处敌人子弹还在飞行中。先保命再追分。',
        en: 'Prioritize close-range threats: enemies that are about to collide must be eliminated first, while distant enemies\' bullets are still in flight. Survive first, score second.',
      },
      {
        zh: '射击时尽量不断按空格键：很多弹幕射击游戏中连续射击能压制敌人形成"火力网"，减少你被击中的概率。',
        en: 'Keep firing continuously: in many bullet-hell games, a steady stream of fire creates a "firewall" that suppresses enemy spawning and reduces your chance of being hit.',
      },
      {
        zh: '在子弹密集时寻找"安全岛"——屏幕上子弹稀疏的小区域，停留几帧再移动。盲目奔跑反而更危险。',
        en: 'Find "safe islands" during dense bullet patterns — small areas of the screen with sparse bullets. Linger there for a few frames before moving. Blindly running around is often more dangerous.',
      },
    ],
    glossary: [
      {
        term: { zh: '弹幕射击 (Bullet Hell)', en: 'Bullet hell' },
        definition: {
          zh: '屏幕上充满大量敌方子弹、需要精细躲避的游戏类型，源自日本弹幕射击文化。',
          en: 'A genre where the screen fills with dense enemy bullets requiring precise dodging, originating from Japanese shoot \'em up culture.',
        },
      },
      {
        term: { zh: '纵向卷轴', en: 'Vertical scrolling' },
        definition: {
          zh: '画面在垂直方向滚动的游戏视角，玩家飞船通常在屏幕底部。',
          en: 'A game view where the screen scrolls vertically, with the player\'s ship typically at the bottom.',
        },
      },
      {
        term: { zh: '火力网', en: 'Firewall' },
        definition: {
          zh: '通过持续射击在自己前方形成的密集子弹区，可以阻挡部分敌方子弹。',
          en: 'A dense field of your own bullets in front of your ship that can block incoming enemy fire.',
        },
      },
    ],
    featured: true,
  },
  {
    id: 'asteroids',
    slug: 'asteroids',
    title: 'Asteroids',
    description: {
      zh: '操控飞船穿越小行星带，射击陨石。',
      en: 'Fly through an asteroid field and blast rocks before they hit you.',
    },
    longDescription: {
      zh: 'Asteroids 是对 1979 年 Atari 经典街机游戏 Asteroids 的 HTML5 重制版，由开发者 Doug McInnes 实现。游戏保留了原版的核心物理特性：飞船移动有惯性，可以向任何方向推进；射击会将大陨石击碎成两个更小的陨石；屏幕边界可以回绕。玩家要在不断增多的陨石碎片中生存，争取更高的分数。游戏的复古矢量图形风格和紧张的操控感是它的两大特色，是街机黄金时代最经典的代表作之一。即使你从未玩过原版，Asteroids 也能让你立刻体验到这种古老玩法的魅力。',
      en: 'Asteroids is an HTML5 remake of the 1979 Atari arcade classic, implemented by developer Doug McInnes. It preserves the original\'s signature physics: the ship moves with momentum in any direction, shooting large asteroids splits them into two smaller ones, and the screen edges wrap around. Players survive increasingly dense asteroid fields while chasing high scores. With its retro vector graphics and tense controls, Asteroids remains one of the most iconic games of the golden arcade era. Even if you have never played the original, you can immediately feel the timeless appeal.',
    },
    category: ['shooting'],
    tags: [
      { zh: '射击', en: 'Shooter' },
      { zh: '复古', en: 'Retro' },
    ],
    thumbnail: '/assets/thumbnails/asteroids.png',
    playUrl: '/games/asteroids/index.html',
    license: 'MIT',
    licenseUrl: '/games/asteroids/LICENSE',
    sourceUrl: 'https://github.com/dmcinnes/HTML5-Asteroids',
    author: 'Doug McInnes',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '← → 方向键旋转飞船。', en: 'Use ← → keys to rotate the ship.' },
      { zh: '↑ 方向键推进，↓ 反向推进。', en: 'Use ↑ to thrust forward and ↓ to thrust backward.' },
      { zh: '空格键发射子弹。', en: 'Press space to fire bullets.' },
      { zh: '飞船移动有惯性，操控需要一定技巧。', en: 'The ship moves with momentum, so control requires practice.' },
    ],
    howToPlay: [
      { zh: '击碎小行星并避开碎片。', en: 'Break asteroids and avoid debris.' },
      { zh: '控制速度比一直加速更重要。', en: 'Controlling speed matters more than constant thrust.' },
      { zh: '大陨石击碎后会变成两个中等陨石，再变成两个小陨石。', en: 'Large asteroids split into two medium ones, which then split into two small ones.' },
      { zh: '被陨石碰撞会损失一艘飞船（你有 3 艘备用）。', en: 'Collisions cost a life (you start with 3 extra ships).' },
    ],
    tips: [
      { zh: '先保持安全距离再开火，避免被碎片包围。', en: 'Create distance before firing to avoid being surrounded by debris.' },
      { zh: '注意屏幕边缘的回绕，敌人可以从另一侧出现。', en: 'Watch for wraparound at screen edges — enemies can reappear from the other side.' },
      { zh: '用反向推进（↓ 键）可以快速减速。', en: 'Use reverse thrust (↓) to slow down quickly.' },
      { zh: '瞄准陨石的中心或靠近飞行方向的位置射击更有效。', en: 'Aim at the center or near your ship\'s flight path for efficient shots.' },
    ],
    faq: extendedFaq('Asteroids', [
      {
        question: {
          zh: 'Asteroids 的高分秘诀是什么？',
          en: 'What is the secret to a high score in Asteroids?',
        },
        answer: {
          zh: '高分的关键是精准的射击角度和耐心。不要急于击碎所有陨石，先确保自己有足够的移动空间，再选择高价值目标。',
          en: 'High scores come from precise aiming and patience. Do not rush to clear every asteroid; first ensure you have enough maneuvering room, then prioritize valuable targets.',
        },
      },
      {
        question: {
          zh: '这个版本和原版街机 Asteroids 一样吗？',
          en: 'Is this version the same as the original arcade Asteroids?',
        },
        answer: {
          zh: '玩法完全相同，保留了原版的所有经典机制：惯性移动、矢量图形、屏幕回绕、陨石分裂。',
          en: 'The gameplay is identical, preserving all classic mechanics: momentum-based movement, vector graphics, screen wraparound, and asteroid splitting.',
        },
      },
    ]),
    history: {
      zh: 'Asteroids 是 1979 年由 Atari 公司发布的传奇街机游戏，由 Ed Logg 设计，使用矢量图形显示技术。它是街机黄金时代最畅销的游戏之一，1981 年的街机版《Asteroids Deluxe》是其续作。Asteroids 启发了无数后续的太空射击游戏，本 HTML5 版本由 Doug McInnes 实现，忠实还原了原版的物理特性和游戏体验。游戏中飞船的惯性移动、屏幕回绕、陨石分裂等设计成为游戏史上的经典要素。',
      en: 'Asteroids is a legendary arcade game released by Atari in 1979, designed by Ed Logg and rendered using vector graphics. It was one of the best-selling games of the golden arcade era, and its 1981 follow-up Asteroids Deluxe extended the formula. Asteroids inspired countless later space shooters, and this HTML5 version by Doug McInnes faithfully recreates the original\'s physics and feel. Features like momentum-based movement, screen wraparound, and asteroid splitting have become timeless classics in game design.',
    },
    strategyGuide: [
      {
        zh: '掌握"惯性物理学"：不持续按推进键飞船会保持当前速度。要减速就用反向推进（↓ 键），这是 Asteroids 区别于其他射击游戏的核心。',
        en: 'Master "inertia physics": your ship keeps moving even without thrust. Use reverse thrust (↓) to slow down — this inertia is what sets Asteroids apart from other shooters.',
      },
      {
        zh: '瞄准时考虑"相对速度"：陨石也在移动，你的子弹也有惯性。预测目标几秒后的位置比直接瞄准当前位置更有效。',
        en: 'Account for relative velocity: asteroids are moving, and so are your bullets. Predicting where a target will be in a few seconds is more effective than aiming at its current position.',
      },
      {
        zh: '利用屏幕回绕"穿越"地图：飞船从屏幕上方飞出会从下方出现。危险时穿越到对角线是经典的逃生技巧。',
        en: 'Use wraparound to "teleport" across the map: flying off the top makes you appear at the bottom. In danger, crossing to the diagonal is a classic escape.',
      },
      {
        zh: '大陨石比小陨石分值低，但击碎大陨石会生成两个小陨石，等于一次获得 2x 收益。从高分角度优先击碎大陨石更划算。',
        en: 'Large asteroids score less per shot, but destroying them spawns two small ones — effectively a 2x score multiplier. For high scores, prioritize large asteroids.',
      },
    ],
    glossary: [
      {
        term: { zh: '矢量图形', en: 'Vector graphics' },
        definition: {
          zh: '用线条和曲线绘制图形的显示技术，1970-80 年代街机常用，能产生锐利清晰的画面。',
          en: 'A display technology using lines and curves to draw graphics, popular in 1970s-80s arcades for sharp, crisp visuals.',
        },
      },
      {
        term: { zh: '屏幕回绕', en: 'Screen wraparound' },
        definition: {
          zh: '飞船或物体飞出屏幕一边会从对侧出现，是 Asteroids 的标志特性。',
          en: 'When your ship or an object flies off one edge, it reappears on the opposite side — an Asteroids signature.',
        },
      },
      {
        term: { zh: '惯性移动', en: 'Momentum' },
        definition: {
          zh: '飞船保持当前速度的趋势，没有摩擦力使其停下，需要反向推进才能减速。',
          en: 'The ship\'s tendency to maintain its current velocity — there is no friction, so reverse thrust is required to slow down.',
        },
      },
    ],
  },
  {
    id: 'alien-invasion',
    slug: 'alien-invasion',
    title: 'Alien Invasion',
    description: {
      zh: '复古像素风太空入侵者，保卫基地。',
      en: 'A retro pixel-style alien defense shooter.',
    },
    longDescription: {
      zh: 'Alien Invasion 是对 1978 年 Taito 经典街机游戏《太空侵略者》(Space Invaders) 的致敬之作，由 Cykod 团队用 JavaScript 实现。游戏采用复古像素美术风格，玩家操控一艘地面炮台，左右移动并向上射击，阻止一波波外星飞船抵达地面。敌人会整齐排列成多行多列，一边左右移动一边向你逼近，节奏感极强。随着击落敌人数量增加，整体速度会逐渐加快，带来越来越紧张刺激的体验。Alien Invasion 是街机射击游戏的鼻祖类型，简单却让人欲罢不能。',
      en: 'Alien Invasion is a tribute to the 1978 Taito arcade classic Space Invaders, implemented in JavaScript by Cykod. With retro pixel-art visuals, players control a ground turret, moving left and right while firing upward to stop waves of alien ships from reaching the ground. Enemies march in neat rows and columns, swaying side to side as they close in. As you destroy aliens, the pace accelerates, ramping up the tension. As the original template for arcade shooters, Alien Invasion is simple yet endlessly addictive.',
    },
    category: ['shooting'],
    tags: [
      { zh: '射击', en: 'Shooter' },
      { zh: '像素', en: 'Pixel' },
    ],
    thumbnail: '/assets/thumbnails/alien-invasion.png',
    playUrl: '/games/alien-invasion/index.html',
    license: 'MIT / GPL dual license',
    sourceUrl: 'https://github.com/cykod/AlienInvasion',
    author: 'Cykod',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '← → 方向键左右移动炮台。', en: 'Use ← → keys to move the turret left and right.' },
      { zh: '空格键发射子弹，一次只能发射一颗。', en: 'Press space to fire — only one bullet can be on screen at a time.' },
      { zh: '更适合桌面端游玩。', en: 'Desktop play is recommended.' },
      { zh: '游戏结束后按 R 键可以重新开始。', en: 'Press R after game over to restart.' },
    ],
    howToPlay: [
      { zh: '阻止敌人到达屏幕底部。', en: 'Stop enemies from reaching the bottom of the screen.' },
      { zh: '优先打掉靠近底部的敌人。', en: 'Prioritize enemies near the bottom.' },
      { zh: '外星人被击落越多，整体移动速度越快。', en: 'The more aliens you destroy, the faster the remaining ones move.' },
      { zh: '每隔一段时间会出现神秘的奖励飞艇。', en: 'A mysterious bonus flying saucer appears periodically.' },
    ],
    tips: [
      { zh: '保持射击节奏，不要空等。', en: 'Keep a steady firing rhythm — do not hold back.' },
      { zh: '提前移动到敌人路径上，占据有利位置。', en: 'Move ahead of enemy paths to occupy the best firing position.' },
      { zh: '注意飞艇出现的位置，击落它能获得大量分数。', en: 'Watch for the bonus saucer — shooting it grants a big score boost.' },
      { zh: '不要让所有敌人都挤在一边，要保持屏幕中央的火力覆盖。', en: 'Do not let all enemies cluster on one side; maintain fire coverage across the screen.' },
    ],
    faq: extendedFaq('Alien Invasion', [
      {
        question: {
          zh: '这个游戏和原版 Space Invaders 有什么不同？',
          en: 'How is this different from the original Space Invaders?',
        },
        answer: {
          zh: '游戏玩法完全忠实于原版街机体验，保留了像素美术风格和多行敌人编队。',
          en: 'The gameplay stays faithful to the original arcade experience, keeping the pixel art style and multi-row enemy formations.',
        },
      },
      {
        question: {
          zh: 'Alien Invasion 有多关吗？',
          en: 'Does Alien Invasion have multiple levels?',
        },
        answer: {
          zh: '游戏采用经典街机的循环关卡模式。击落所有敌人后会进入下一关，敌人速度会更快。',
          en: 'The game uses the classic arcade loop. After clearing all enemies, a new wave begins at a faster pace.',
        },
      },
    ]),
    history: {
      zh: 'Space Invaders（太空侵略者）由日本 Taito 公司于 1978 年发布，是街机游戏历史上最具影响力的作品之一，常常被认为是"射击游戏"这一类型的开山鼻祖。它的设计师 Tomohiro Nishikado 在设计时还创造性地加入了"敌人越少、移动越快"的动态难度机制。本 Alien Invasion 版本由 Cykod 团队使用现代 JavaScript 重新实现，采用 MIT/GPL 双许可证授权，保留了原版的所有核心机制。Space Invaders 影响了从 Galaga 到魂斗罗等几乎所有后续射击游戏。',
      en: 'Space Invaders, released by Taito in 1978, is one of the most influential games in arcade history and is widely regarded as the founding title of the "shooting game" genre. Designer Tomohiro Nishikado cleverly introduced a dynamic difficulty mechanism where enemies move faster as more are destroyed. This Alien Invasion version, implemented by the Cykod team in modern JavaScript and released under a dual MIT/GPL license, preserves all of the original\'s core mechanics. Space Invaders has influenced nearly every subsequent shooter, from Galaga to Contra.',
    },
    strategyGuide: [
      {
        zh: '"庇护所"战术：保留最两侧的障碍物作为天然屏障，躲在屏障后面射击可以有效减少被子弹命中的概率。',
        en: '"Bunker" tactic: keep the leftmost and rightmost shields intact as natural cover, hiding behind them to dramatically reduce hit probability.',
      },
      {
        zh: '从外向内清理：先打掉左右两侧的列，让中央的敌人受到你的火力更集中。当中央敌人开始左右摇摆时是最好打的时机。',
        en: 'Clear from the outside in: take out the side columns first so the central enemies face concentrated fire. They become easier to hit when they swing together.',
      },
      {
        zh: '注意神秘飞艇：它出现时位于屏幕上方穿越，分值 50-300 不等（取决于你射击时的难度）。提前移动到它可能经过的路径上。',
        en: 'Watch for the mystery saucer: it crosses the top of the screen and is worth 50-300 points depending on the wave. Pre-position yourself under its likely path.',
      },
      {
        zh: '节奏比反应更重要：保持稳定的射击节奏，让屏幕上的子弹"恒定"存在，形成持续压制。',
        en: 'Rhythm matters more than reflexes: maintain a steady fire cadence so your bullet is always on screen, creating constant pressure.',
      },
    ],
    glossary: [
      {
        term: { zh: '街机黄金时代', en: 'Golden age of arcade' },
        definition: {
          zh: '1978-1984 年间街机游戏蓬勃发展的时期，诞生了《太空侵略者》《吃豆人》《大金刚》等经典作品。',
          en: 'The 1978-1984 era when arcades flourished, producing classics like Space Invaders, Pac-Man, and Donkey Kong.',
        },
      },
      {
        term: { zh: '动态难度', en: 'Dynamic difficulty' },
        definition: {
          zh: '游戏根据玩家表现自动调整难度。Space Invaders 是最早使用此机制的代表作：敌人越少移动越快。',
          en: 'A system where the game adjusts difficulty based on player performance. Space Invaders pioneered this: fewer enemies = faster movement.',
        },
      },
      {
        term: { zh: '射击游戏 (Shoot \'em up)', en: 'Shoot \'em up' },
        definition: {
          zh: '以射击敌人为主核心玩法的游戏类型，Space Invaders 是其鼻祖。',
          en: 'A genre centered on shooting enemies, with Space Invaders as its founding title.',
        },
      },
    ],
  },
  {
    id: 'c4',
    slug: 'connect-four',
    title: 'Connect Four',
    description: {
      zh: '四子连珠棋，人机对弈或双人对战。',
      en: 'Classic Connect Four strategy for solo or two-player matches.',
    },
    longDescription: {
      zh: 'Connect Four（也称为四子连珠）是一款经典的双人策略棋盘游戏，由 Howard Wexler 和 Ned Strongin 在 1974 年发明。本 HTML5 版本由开发者 Kenrick 实现，支持人机对弈和本地双人对战两种模式。游戏棋盘是 7 列 6 行的网格，玩家轮流将自己的棋子从顶部丢入所选列中，棋子会落到该列最底部或已有的棋子之上。第一个在水平、垂直或对角线方向连成四枚同色棋子的玩家获胜。规则简单但策略深奥，是考验预判和空间思维的绝佳游戏。',
      en: 'Connect Four is a classic two-player strategy board game invented by Howard Wexler and Ned Strongin in 1974. This HTML5 version, implemented by developer Kenrick, supports both human-vs-AI and local two-player modes. The board is a 7-column by 6-row grid; players take turns dropping their colored discs from the top into a chosen column, where the disc falls to the lowest available spot. The first player to align four of their discs horizontally, vertically, or diagonally wins. Simple rules, but deep strategy — a perfect test of foresight and spatial reasoning.',
    },
    category: ['board'],
    tags: [
      { zh: '棋类', en: 'Board' },
      { zh: '双人', en: 'Two-player' },
    ],
    thumbnail: '/assets/thumbnails/c4.png',
    playUrl: '/games/c4/browser/index.html',
    license: 'MIT',
    licenseUrl: '/games/c4/LICENSE',
    sourceUrl: 'https://github.com/kenrick95/c4',
    author: 'Kenrick',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '点击列顶部区域或列内空格放入棋子。', en: 'Click the top of a column or any empty cell to drop a piece.' },
      { zh: '支持人机或本地双人玩法。', en: 'Supports solo (vs AI) and local two-player play.' },
      { zh: '鼠标悬停时会高亮显示将要落子的位置。', en: 'Hovering with the mouse highlights the column where the piece will land.' },
      { zh: '游戏结束后会显示重置按钮。', en: 'A reset button appears after the game ends.' },
    ],
    howToPlay: [
      { zh: '横向、纵向或斜向先连成四枚即可获胜。', en: 'Connect four horizontally, vertically, or diagonally to win.' },
      { zh: '同时防守对手的三连威胁。', en: 'Block the opponent when they threaten three in a row.' },
      { zh: '关注棋盘中央，因为那里有更多潜在连线。', en: 'Focus on the center columns — they offer the most line possibilities.' },
      { zh: '不要让对手同时有两个获胜机会（双重威胁）。', en: 'Never let your opponent have two winning moves at once (a double threat).' },
    ],
    tips: [
      { zh: '中间列通常更有价值，能通向更多方向。', en: 'Center columns are usually more valuable because they connect to more lines.' },
      { zh: '制造双重威胁可以逼迫对手失误。', en: 'Create double threats to force your opponent into a losing position.' },
      { zh: '不要只盯自己的连子，要同时考虑对手可能的连子。', en: 'Watch both your own lines and your opponent\'s potential lines.' },
      { zh: '当你无法直接获胜时，先建立"双重威胁"是最强的策略。', en: 'When you cannot win immediately, setting up a double threat is your strongest move.' },
    ],
    faq: extendedFaq('Connect Four', [
      {
        question: {
          zh: 'Connect Four 是先手必胜吗？',
          en: 'Is Connect Four a first-player win?',
        },
        answer: {
          zh: '理论上，先手玩家在完美对弈下确实有必胜策略。但 AI 版本通常不会完美下棋，所以普通玩家仍能享受到势均力敌的乐趣。',
          en: 'In theory, the first player has a forced win with perfect play. However, AI versions usually do not play perfectly, so casual matches remain enjoyable and competitive.',
        },
      },
      {
        question: {
          zh: '我能和朋友在线对战吗？',
          en: 'Can I play online with a friend?',
        },
        answer: {
          zh: '本版本支持本地双人对战（共用一台设备），以及人机对战。如需在线对战，请关注我们后续的更新。',
          en: 'This version supports local two-player (sharing one device) and AI matches. Online multiplayer is not currently available.',
        },
      },
    ]),
    history: {
      zh: 'Connect Four（四子连珠）由美国游戏设计师 Howard Wexler 和 Ned Strongin 于 1974 年发明，最初名为 "The Captain\'s Mistress"。1977 年 Milton Bradley 公司将其作为 Connect Four 商业化，迅速成为全球最畅销的棋盘游戏之一，销量超过数百万套。它在博弈论中也具有重要意义：1988 年数学家 Victor Allis 和 James D. Allen 分别独立用计算机证明了"先手玩家在完美对弈下必胜"。这一发现让 Connect Four 成为 AI 博弈算法的经典教学案例。',
      en: 'Connect Four was invented in 1974 by American game designers Howard Wexler and Ned Strongin, originally called "The Captain\'s Mistress." In 1977, Milton Bradley commercialized it as Connect Four, and it quickly became one of the best-selling board games worldwide, with millions of copies sold. The game also holds significance in game theory: in 1988, mathematicians Victor Allis and James D. Allen independently used computers to prove that the first player has a forced win with perfect play, making Connect Four a classic teaching example for game-tree search algorithms.',
    },
    strategyGuide: [
      {
        zh: '控制中央列（3-4 列）：中央列能同时向四个方向延伸（左右、上下、两条对角线），是建立连接的关键。',
        en: 'Control the center columns (3 and 4): they extend in four directions (left, right, up, down, and two diagonals) and are key to forming connections.',
      },
      {
        zh: '警惕"双重威胁"：在对方有两个方向都可以四连的位置下子，会让对手无法同时封堵。在自己回合制造双重威胁是制胜法宝。',
        en: 'Beware of "double threats": play in a position that creates two possible 4-in-a-rows. Your opponent cannot block both at once — this is the key to winning.',
      },
      {
        zh: '"7 通杀"策略：先手从中间列开始，AI 已经证明先手玩家可以在 41 步内必胜，前提是每一步都封堵了所有对手的双重威胁。',
        en: '"7-move kill" strategy: starting in the middle, the first player has been proven to force a win within 41 moves, provided every opponent double-threat is blocked.',
      },
      {
        zh: '防守优先于进攻：永远先看对手上一步走在哪里，对手的"3 连"必须立刻封堵，否则你可能在对手下一步就输。',
        en: 'Defense before offense: always check your opponent\'s last move first. Their "3-in-a-row" must be blocked immediately, or you could lose on the next turn.',
      },
      {
        zh: '把"7"放在底部思考：Connect Four 是基于重力的游戏，落子会落到该列最底部。规划时永远从最底部的可用位置开始思考。',
        en: 'Think "7 at the bottom": Connect Four is gravity-based; pieces fall to the lowest available spot. Always think from the bottom up when planning.',
      },
    ],
    glossary: [
      {
        term: { zh: '双重威胁', en: 'Double threat' },
        definition: {
          zh: '同时存在两个可获胜路径的局面，对手无法在一回合内同时封堵。',
          en: 'A position with two simultaneous winning lines, which the opponent cannot block in a single move.',
        },
      },
      {
        term: { zh: '博弈论', en: 'Game theory' },
        definition: {
          zh: '研究策略性决策的数学分支，Connect Four 是其经典应用案例。',
          en: 'A branch of mathematics studying strategic decision-making; Connect Four is a classic application.',
        },
      },
      {
        term: { zh: '必胜策略', en: 'Forced win' },
        definition: {
          zh: '在完美对弈下无论对手如何应对都能获胜的策略。',
          en: 'A strategy that wins against any opponent response, assuming perfect play.',
        },
      },
    ],
  },
  {
    id: 'sudoku',
    slug: 'sudoku',
    title: 'Sudoku',
    description: {
      zh: '经典数独，锻炼逻辑思维。',
      en: 'Classic Sudoku puzzles for logic practice.',
    },
    longDescription: {
      zh: '数独（Sudoku）是一种源自瑞士、在日本发扬光大的逻辑推理游戏，已经成为全球最受欢迎的纸笔游戏之一。本 HTML5 版本由 Sudoku JS 社区实现，玩家面对一个 9×9 的网格，需要在空格中填入 1 到 9 的数字，使得每行、每列、每个 3×3 宫内的数字都不重复。游戏开始时会预填一些数字作为提示，难度等级由预填数字的多少决定。数独不需要任何数学计算能力，纯粹考验逻辑推理和模式识别能力，是锻炼大脑、保持思维活跃的优秀方式。',
      en: 'Sudoku is a logic-based number-placement puzzle that originated in Switzerland and was popularized in Japan, becoming one of the world\'s most beloved pen-and-paper games. This HTML5 version, built by the Sudoku JS community, presents players with a 9×9 grid where you fill in digits 1-9 so that each row, column, and 3×3 box contains every digit exactly once. The game starts with some pre-filled numbers as clues, with difficulty determined by how few clues are given. Sudoku requires no math — only pure logical reasoning and pattern recognition, making it an excellent way to keep your mind sharp.',
    },
    category: ['puzzle'],
    tags: [
      { zh: '益智', en: 'Puzzle' },
      { zh: '逻辑', en: 'Logic' },
    ],
    thumbnail: '/assets/thumbnails/sudoku-js.png',
    playUrl: '/games/sudoku-js/sudoku.html',
    license: 'MIT',
    licenseUrl: '/games/sudoku-js/LICENSE',
    sourceUrl: 'https://github.com/baruchel/sudoku-js',
    author: 'Sudoku JS contributors',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '点击格子并输入数字（1-9）。', en: 'Click a cell and enter a number (1-9).' },
      { zh: '数字键直接输入，方向键移动光标。', en: 'Use number keys to input, arrow keys to move the cursor.' },
      { zh: '适合鼠标和触屏设备。', en: 'Works with mouse and touch devices.' },
      { zh: '可以随时清除错误数字重新填写。', en: 'You can clear and re-enter digits at any time.' },
    ],
    howToPlay: [
      { zh: '每行、每列、每个 3x3 宫内数字不能重复。', en: 'Each row, column, and 3x3 box must avoid duplicate digits.' },
      { zh: '从确定性最高的空格开始。', en: 'Start with cells that have the fewest possibilities.' },
      { zh: '使用排除法逐步缩小每个空格的可能性。', en: 'Use elimination to narrow down possibilities for each cell.' },
      { zh: '当所有空格填满且符合规则时游戏获胜。', en: 'You win when all cells are filled and all rules are satisfied.' },
    ],
    tips: [
      { zh: '先找只剩一个候选数字的格子（"唯一数"）。', en: 'Look for cells with only one possible digit (a "naked single").' },
      { zh: '不要靠猜，优先用排除法。', en: 'Use elimination before guessing — guessing often leads to contradictions.' },
      { zh: '注意每行、每列、每宫已出现的数字，避免重复。', en: 'Track the digits already used in each row, column, and box to avoid duplicates.' },
      { zh: '如果卡住，可以暂时跳过，先填其他更确定的格子。', en: 'If stuck, skip ahead and fill more obvious cells — they often reveal new patterns.' },
    ],
    faq: extendedFaq('Sudoku', [
      {
        question: {
          zh: '数独有哪些难度等级？',
          en: 'What difficulty levels are available?',
        },
        answer: {
          zh: '本版本提供多个难度等级，从入门（提示多）到专家（提示少）。数字越少，难度越大。',
          en: 'This version offers multiple difficulty levels, from beginner (more clues) to expert (fewer clues). Fewer clues mean higher difficulty.',
        },
      },
      {
        question: {
          zh: '数独有什么解题技巧？',
          en: 'What solving techniques should I learn?',
        },
        answer: {
          zh: '基础技巧包括"唯一数法"和"宫排除法"。中级技巧包括"行/列排除法"和"区块排除法"。高级技巧如"数对法"和"链式删除法"需要更多练习。',
          en: 'Beginner techniques include "naked single" and "box elimination." Intermediate techniques include "hidden single" and "locked candidates." Advanced techniques like "naked pairs" and "X-Wing" require more practice.',
        },
      },
    ]),
    history: {
      zh: '数独（Sudoku）的现代形式由日本游戏公司 Nikoli 在 1984 年正式命名，名字意为"数字必须唯一"。但它的前身"拉丁方块"（Latin Square）可以追溯到 18 世纪的瑞士数学家欧拉。1986 年起数独开始在日本流行，1997 年新西兰人 Wayne Gould 编写出自动生成数独谜题的计算机程序，并通过《泰晤士报》推广到英国和全球。如今数独已成为全球最受欢迎的纸笔游戏之一，被世界数独锦标赛列为正式比赛项目。',
      en: 'The modern form of Sudoku was officially named in 1984 by the Japanese game company Nikoli, with the name meaning "the digits must be single." Its predecessor, the Latin Square, dates back to 18th-century Swiss mathematician Leonhard Euler. Sudoku became popular in Japan from 1986 onward, and in 1997, New Zealander Wayne Gould wrote a computer program that auto-generates Sudoku puzzles and introduced them globally via The Times newspaper. Today, Sudoku is one of the world\'s most popular pen-and-paper games and an official event at the World Sudoku Championship.',
    },
    strategyGuide: [
      {
        zh: '第一步永远使用"扫描法"：逐行、逐列、逐宫扫描已经出现的数字，标出"候选数"。',
        en: 'Always start with the "scanning" technique: scan each row, column, and box for placed digits, marking candidate numbers.',
      },
      {
        zh: '"唯一余数法"：当某格的候选数只剩下 1 个时（无论它在哪一行/列/宫中），这个数字就是答案。',
        en: '"Last remaining number" technique: when a cell has only one candidate number (in any of its row, column, or box), that digit is the answer.',
      },
      {
        zh: '"隐性唯一"技巧：某数字在某行/列/宫的所有格子中只有 1 个可能位置时（即便候选数很多），可以确定该位置。',
        en: '"Hidden single" technique: when a digit has only one possible position in a row, column, or box (even if that cell has many other candidates), that position is determined.',
      },
      {
        zh: '避免猜测：高级数独题目不依赖猜测，每一步都有逻辑依据。如果需要猜测才能继续，说明技巧还不够熟练，先练习简单题目。',
        en: 'Avoid guessing: advanced Sudoku puzzles do not require guessing; every step has a logical basis. If you need to guess, your techniques need more practice on easier puzzles first.',
      },
    ],
    glossary: [
      {
        term: { zh: '拉丁方块 (Latin Square)', en: 'Latin Square' },
        definition: {
          zh: '数独的数学原型，由欧拉提出，n×n 方阵中每行每列都是 n 个不同元素的排列。',
          en: 'The mathematical ancestor of Sudoku, proposed by Euler: an n×n grid where each row and column is a permutation of n distinct elements.',
        },
      },
      {
        term: { zh: '候选数', en: 'Candidate' },
        definition: {
          zh: '在某个空格中可能填入的数字，根据已确定的数字排除得到。',
          en: 'A digit that could possibly fill an empty cell, after eliminating already-placed digits.',
        },
      },
      {
        term: { zh: '3×3 宫 (Box)', en: 'Box' },
        definition: {
          zh: '数独中 9 个 3×3 小方格之一，每个 3×3 宫内的数字也不能重复。',
          en: 'One of the nine 3×3 subgrids in Sudoku, which also must contain each digit exactly once.',
        },
      },
    ],
  },
  {
    id: 'tower-defense',
    slug: 'tower-defense',
    title: 'Tower Defense',
    description: {
      zh: '经典塔防策略，建造防御塔抵御敌人。',
      en: 'Build towers and stop enemy waves in a classic strategy game.',
    },
    longDescription: {
      zh: 'Tower Defense 是一种广受欢迎的策略游戏类型，玩家需要在地图的关键位置建造防御塔，阻止一波波敌人沿着固定路径到达终点。本 HTML5 版本由开发者 Casmo 实现，继承了塔防游戏的核心玩法：合理选择塔的种类、合理分配有限的资源、在路径的关键位置构筑防线。敌人通常种类多样，有不同的速度、血量和特殊能力，玩家需要灵活应对。本游戏是网页塔防的入门级作品，规则清晰、画面简洁，是体验塔防策略乐趣的好选择。',
      en: 'Tower Defense is one of the most popular strategy game genres, where players build defensive towers at key map positions to stop waves of enemies following a fixed path to the end. This HTML5 version, implemented by developer Casmo, captures the core tower defense experience: choosing the right tower types, managing limited resources, and fortifying critical path points. Enemies vary in speed, health, and abilities, requiring flexible tactics. With clear rules and clean visuals, this game is an accessible entry point into the tower defense genre.',
    },
    category: ['strategy'],
    tags: [
      { zh: '策略', en: 'Strategy' },
      { zh: '塔防', en: 'Tower Defense' },
    ],
    thumbnail: '/assets/thumbnails/tower-defense.png',
    playUrl: '/games/tower-defense/index.html',
    license: 'MIT',
    licenseUrl: '/games/tower-defense/LICENSE',
    sourceUrl: 'https://github.com/Casmo/tower-defense',
    author: 'Casmo',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '鼠标点击地图选择建造位置。', en: 'Click on the map to select a building location.' },
      { zh: '选择塔类型，点击确认建造。', en: 'Choose a tower type and click to confirm the build.' },
      { zh: '建议桌面端游玩，触屏体验稍差。', en: 'Desktop play is recommended; touch support is limited.' },
      { zh: '可以在已有塔的位置升级防御能力。', en: 'Existing towers can be upgraded to stronger versions.' },
    ],
    howToPlay: [
      { zh: '在路径附近建塔，阻止敌人通过。', en: 'Build towers near paths to stop enemies.' },
      { zh: '根据敌人强度升级或调整防线。', en: 'Upgrade or adjust defenses as waves get stronger.' },
      { zh: '合理分配资源，前期不要投入太多。', en: 'Manage resources carefully — do not over-commit early.' },
      { zh: '失败条件是敌人到达终点达到一定次数。', en: 'You lose if too many enemies reach the endpoint.' },
    ],
    tips: [
      { zh: '优先利用转弯和路径密集区域，敌人会停留更久。', en: 'Use corners and dense path areas first, as enemies linger there longer.' },
      { zh: '不要把资源分散得太早，专注建好关键位置。', en: 'Avoid spreading resources too thin early — focus on key choke points.' },
      { zh: '混合不同类型的塔，覆盖不同的敌人弱点。', en: 'Mix tower types to cover different enemy weaknesses.' },
      { zh: '在长直线路段建慢速塔，转弯处建高伤害塔。', en: 'Place slowing towers on long straightaways and damage towers at bends.' },
    ],
    faq: extendedFaq('Tower Defense', [
      {
        question: {
          zh: 'Tower Defense 是单人游戏吗？',
          en: 'Is Tower Defense a single-player game?',
        },
        answer: {
          zh: '是的，本版本是单人策略游戏，专注于挑战各种敌人波次。多人合作或对战版本不在本版范围内。',
          en: 'Yes, this version is a single-player strategy game focused on surviving enemy waves. Multiplayer co-op or versus modes are not included.',
        },
      },
      {
        question: {
          zh: '塔的类型可以解锁吗？',
          en: 'Can I unlock new tower types?',
        },
        answer: {
          zh: '本版本提供固定几种塔类型，每种都有独特的能力。你可以通过金币购买和升级已有的塔，而不是解锁新种类。',
          en: 'This version offers a fixed set of tower types, each with unique abilities. You upgrade existing towers with gold rather than unlocking new types.',
        },
      },
    ]),
    history: {
      zh: '塔防（Tower Defense）作为一种游戏类型，可以追溯到 1990 年代的早期电脑游戏，如《Rampart》和《Starcraft》中的"塔防地图"。它作为独立游戏类型的爆发是在 2007-2010 年间，《Desktop Tower Defense》和《Plants vs. Zombies》等作品把塔防推向了大众市场。如今塔防已是仅次于射击和益智的第三大流行游戏类型。本 HTML5 版本由 Casmo 实现，是经典的入门级网页塔防游戏，规则清晰、节奏适中，适合休闲和策略玩家。',
      en: 'Tower Defense as a game genre can be traced back to early 1990s computer games like Rampart and tower defense maps in StarCraft. It exploded as a standalone genre between 2007-2010 with titles like Desktop Tower Defense and Plants vs. Zombies bringing TD to the mainstream. Today, TD is the third most popular game genre after shooters and puzzles. This HTML5 version, implemented by Casmo, is a classic entry-level web TD game with clear rules and a balanced pace, suitable for both casual and strategy players.',
    },
    strategyGuide: [
      {
        zh: '利用"路径长度"决定塔位：敌人走过的路径越长，受到的伤害就越多。把塔建在敌人路径最长的拐弯处最划算。',
        en: 'Use "path length" to choose tower positions: the longer enemies walk, the more damage they take. Place towers at the bend with the longest path.',
      },
      {
        zh: '"基础塔 + 升级"vs"多类型塔"：先全部用基础塔（便宜）覆盖关键点，再决定哪些塔值得升级（高伤害 vs 减速 vs 溅射），比一开始就建多种塔更经济。',
        en: '"Basic tower + upgrade" vs "many tower types": start with basic (cheap) towers covering key points, then decide which ones are worth upgrading (high damage vs slow vs splash) — far more economical than building varied towers from the start.',
      },
      {
        zh: '预留应急资金：每一关结束时保留 20-30% 的金币作为应急储备，应对"出乎意料的 Boss 关"或被迫重建的情况。',
        en: 'Reserve emergency funds: keep 20-30% of your gold at the end of each wave as a reserve for surprise boss waves or forced rebuilds.',
      },
      {
        zh: '组合塔协同：减速塔 + 高伤害塔是经典组合。先用减速塔让敌人移动变慢，再让高伤害塔持续输出，可显著降低通过率。',
        en: 'Synergize tower combos: slowing + high-damage is a classic combo. Slow first, then sustained damage, dramatically reduces leak rate.',
      },
    ],
    glossary: [
      {
        term: { zh: '波次 (Wave)', en: 'Wave' },
        definition: {
          zh: '游戏中敌人进攻的一轮，通常一波比一波更强。',
          en: 'A round of enemy attacks, with each wave typically stronger than the last.',
        },
      },
      {
        term: { zh: '通过率 (Leak rate)', en: 'Leak rate' },
        definition: {
          zh: '敌人成功到达终点的比率，是衡量塔防布局好坏的关键指标。',
          en: 'The rate at which enemies successfully reach the endpoint — a key metric for evaluating a TD layout.',
        },
      },
      {
        term: { zh: '溅射伤害 (Splash damage)', en: 'Splash damage' },
        definition: {
          zh: '对一片区域造成伤害的攻击方式，对成群敌人非常有效。',
          en: 'Damage that hits an area, very effective against grouped enemies.',
        },
      },
    ],
  },
  {
    id: 'pop-pop-win',
    slug: 'pop-pop-win',
    title: 'Pop Pop Win',
    description: {
      zh: '扫雷解谜，翻开方块找出隐藏地雷。',
      en: 'A Minesweeper-style logic puzzle about uncovering safe tiles.',
    },
    longDescription: {
      zh: 'Pop Pop Win 是 Google Dart 团队推出的扫雷风格逻辑解谜游戏，使用 Dart 语言开发并发布在 GitHub 上。游戏规则借鉴了经典的扫雷：玩家面对一个充满隐藏地雷的方格网格，需要通过逻辑推理找出安全方块。点击方块后，如果是地雷则游戏失败；如果是安全的，方块会显示一个数字，表示其周围 8 个方块中藏有多少颗地雷。玩家利用这些数字信息，逐步推理出整个棋盘的地雷分布。Pop Pop Win 适合喜欢逻辑推理和短局挑战的玩家，是扫雷爱好者的优秀替代选择。',
      en: 'Pop Pop Win is a Minesweeper-style logic puzzle game built by the Google Dart team and released on GitHub. Inspired by the classic Minesweeper, players face a grid of hidden mines and use logic to find safe tiles. Clicking a tile reveals either a mine (instant loss) or a number indicating how many mines touch that tile\'s 8 neighbors. Using these numerical clues, players gradually deduce the location of every mine. Pop Pop Win is perfect for players who enjoy logic puzzles and short, focused challenge rounds — an excellent modern alternative to Minesweeper.',
    },
    category: ['puzzle'],
    tags: [
      { zh: '益智', en: 'Puzzle' },
      { zh: '解谜', en: 'Logic' },
    ],
    emoji: '💣',
    playUrl: '/games/pop-pop-win/web/index.html',
    license: 'BSD-3-Clause',
    licenseUrl: '/games/pop-pop-win/LICENSE',
    sourceUrl: 'https://github.com/dart-lang/pop-pop-win',
    author: 'Dart project authors',
    commercialSafe: true,
    visibility: 'public',
    controls: [
      { zh: '鼠标左键点击翻开方块。', en: 'Left-click to reveal a tile.' },
      { zh: '鼠标右键可以标记疑似地雷的位置。', en: 'Right-click to flag a suspected mine location.' },
      { zh: '触屏设备支持单击翻开和长按标记。', en: 'Touch devices support single-tap reveal and long-press flag.' },
      { zh: '根据数字判断周围地雷位置。', en: 'Use numbers to infer nearby mines.' },
    ],
    howToPlay: [
      { zh: '避开隐藏地雷，翻开安全区域。', en: 'Avoid hidden mines and reveal safe areas.' },
      { zh: '数字表示周围相邻地雷数量。', en: 'Numbers show how many mines touch that tile.' },
      { zh: '找出所有安全方块即获胜。', en: 'You win by revealing all safe tiles.' },
      { zh: '翻开地雷会立即结束游戏。', en: 'Revealing a mine ends the game instantly.' },
    ],
    tips: [
      { zh: '从边角和数字组合开始推理。', en: 'Reason from corners and number patterns first.' },
      { zh: '不要在信息不足时随意点击。', en: 'Avoid random clicks when you still have clues to follow.' },
      { zh: '同时使用数字和地雷标记，逐步缩小范围。', en: 'Combine numerical clues and mine flags to narrow down possibilities.' },
      { zh: '熟悉常见的地雷模式（如 1-1、1-2-1 组合）会大幅提高速度。', en: 'Learning common mine patterns (like 1-1, 1-2-1) significantly speeds up solving.' },
    ],
    faq: extendedFaq('Pop Pop Win', [
      {
        question: {
          zh: 'Pop Pop Win 和经典扫雷一样吗？',
          en: 'Is Pop Pop Win the same as classic Minesweeper?',
        },
        answer: {
          zh: '核心玩法完全相同，都是通过数字推理找出安全方块。Pop Pop Win 使用 Dart 语言开发，是现代浏览器中的扫雷优秀实现。',
          en: 'The core gameplay is identical — use numerical clues to find safe tiles. Pop Pop Win is a modern Minesweeper implementation built with Dart for the browser.',
        },
      },
      {
        question: {
          zh: '我能在 Pop Pop Win 中标记地雷吗？',
          en: 'Can I flag mines in Pop Pop Win?',
        },
        answer: {
          zh: '可以。鼠标右键（或触屏长按）可以在方块上添加地雷标记，帮助你记录推理结果。',
          en: 'Yes. Right-click (or long-press on touch) adds a flag to a tile, helping you track your deductions.',
        },
      },
    ]),
    history: {
      zh: '经典扫雷（Minesweeper）由微软公司在 1990 年随 Windows 3.1 发布后迅速成为全球电脑用户的共同记忆。在此之前类似的逻辑解谜游戏可追溯到 1970-80 年代的多个独立项目。Pop Pop Win 是 Google Dart 团队在 2010 年代推出的扫雷风格实现，使用 Dart 语言开发并以 BSD-3-Clause 许可证开源。它既是扫雷爱好者的现代浏览器替代品，也是 Dart 在 Web 端实践的优秀示例。',
      en: 'The classic Minesweeper was released by Microsoft in 1990 with Windows 3.1 and quickly became a shared memory for computer users worldwide. Earlier logic-puzzle predecessors date back to several independent projects in the 1970s-80s. Pop Pop Win is a Minesweeper-style implementation released by the Google Dart team in the 2010s, built with Dart and released under the BSD-3-Clause license. It is both a modern browser alternative for Minesweeper fans and an excellent example of Dart in web development.',
    },
    strategyGuide: [
      {
        zh: '识别"1-1"经典模式：当两个相邻的"1"紧贴排列时，它们接触的角落格子一定有地雷。',
        en: 'Recognize the classic "1-1" pattern: when two adjacent 1s sit next to each other, the corner cell they touch must contain a mine.',
      },
      {
        zh: '"1-2-1"组合揭示中心地雷：水平排列的"1-2-1"意味着 2 下方至少有一个地雷。',
        en: 'The "1-2-1" combo reveals center mines: a horizontal "1-2-1" sequence means there is at least one mine directly below the 2.',
      },
      {
        zh: '"大开口"安全提示：当一个数字周围的格子被揭开时，如果数字等于已翻开邻格数量，那个数字本身可能已经"无威胁"，可以放心点开剩余邻格。',
        en: '"Open area" safety tip: when a number\'s surrounding cells are revealed, if the number equals the count of already-revealed neighbors, the number itself is "satisfied" and its remaining neighbors are safe to click.',
      },
      {
        zh: '永远从边角开始：边角格子只有 3 个邻居，确定性比中心格子（8 个邻居）更高，是开局推理的最佳起点。',
        en: 'Always start from corners: corner cells have only 3 neighbors, making them more deterministic than center cells (8 neighbors) — the best starting point for deductions.',
      },
    ],
    glossary: [
      {
        term: { zh: '"1-1" 模式', en: '"1-1" pattern' },
        definition: {
          zh: '扫雷中最经典的推理模式：相邻的两个 1 必有角落地雷。',
          en: 'The most classic Minesweeper deduction pattern: two adjacent 1s guarantee a mine in their shared corner.',
        },
      },
      {
        term: { zh: '边角概率', en: 'Corner probability' },
        definition: {
          zh: '边角格子只有 3 个邻居，推理效率比中心高 60% 以上。',
          en: 'Corner cells have only 3 neighbors, making deductions over 60% more efficient than center cells.',
        },
      },
      {
        term: { zh: '标记 (Flag)', en: 'Flag' },
        definition: {
          zh: '玩家在疑似地雷的格子上做的标记，用于辅助推理和避免误点。',
          en: 'A player-placed marker on suspected mines, used to support deduction and prevent misclicks.',
        },
      },
    ],
  },
  {
    id: 'clumsy-bird',
    slug: 'clumsy-bird',
    title: 'Clumsy Bird',
    description: { zh: 'GPL 游戏，首版暂不展示。', en: 'GPL game, hidden from the first public launch.' },
    longDescription: { zh: '暂不展示。', en: 'Hidden for now.' },
    category: ['action'],
    tags: [{ zh: '待审核', en: 'Review' }],
    thumbnail: '/assets/thumbnails/clumsy-bird.png',
    playUrl: '/games/clumsy-bird/index.html',
    license: 'GPL-3.0',
    licenseUrl: '/games/clumsy-bird/LICENSE.md',
    commercialSafe: false,
    visibility: 'excluded',
    controls: [],
    howToPlay: [],
    tips: [],
    faq: [],
    history: { zh: '暂不展示。', en: 'Hidden for now.' },
    strategyGuide: [],
    glossary: [],
  },
  {
    id: 'survivor',
    slug: 'survivor',
    title: 'Survivor',
    description: { zh: '非商业许可证，首版暂不展示。', en: 'Non-commercial license, hidden from public launch.' },
    longDescription: { zh: '暂不展示。', en: 'Hidden for now.' },
    category: ['shooting'],
    tags: [{ zh: '排除', en: 'Excluded' }],
    thumbnail: '/assets/thumbnails/survivor.png',
    playUrl: '/games/survivor/index.html',
    license: 'CC BY-NC 3.0',
    licenseUrl: '/games/survivor/license.txt',
    commercialSafe: false,
    visibility: 'excluded',
    controls: [],
    howToPlay: [],
    tips: [],
    faq: [],
    history: { zh: '暂不展示。', en: 'Hidden for now.' },
    strategyGuide: [],
    glossary: [],
  },
  {
    id: 'jolly-jumper',
    slug: 'jolly-jumper',
    title: 'Jolly Jumper',
    description: { zh: '保留版权，首版暂不展示。', en: 'All rights reserved, hidden from public launch.' },
    longDescription: { zh: '暂不展示。', en: 'Hidden for now.' },
    category: ['action'],
    tags: [{ zh: '排除', en: 'Excluded' }],
    thumbnail: '/assets/thumbnails/jolly-jumper.png',
    playUrl: '/games/jolly-jumper/index.html',
    license: 'All rights reserved',
    commercialSafe: false,
    visibility: 'excluded',
    controls: [],
    howToPlay: [],
    tips: [],
    faq: [],
    history: { zh: '暂不展示。', en: 'Hidden for now.' },
    strategyGuide: [],
    glossary: [],
  },
  {
    id: 'onslaught-arena',
    slug: 'onslaught-arena',
    title: 'Onslaught! Arena',
    description: { zh: 'GPL 与素材限制，首版暂不展示。', en: 'GPL and asset restrictions, hidden from public launch.' },
    longDescription: { zh: '暂不展示。', en: 'Hidden for now.' },
    category: ['shooting'],
    tags: [{ zh: '待审核', en: 'Review' }],
    thumbnail: '/assets/thumbnails/space-shooter.png',
    playUrl: '/games/onslaught-arena/index.html',
    license: 'GPL',
    commercialSafe: false,
    visibility: 'excluded',
    controls: [],
    howToPlay: [],
    tips: [],
    faq: [],
    history: { zh: '暂不展示。', en: 'Hidden for now.' },
    strategyGuide: [],
    glossary: [],
  },
  {
    id: 'astray',
    slug: 'astray',
    title: 'Astray',
    description: { zh: '授权待确认，首版暂不展示。', en: 'License needs review, hidden from public launch.' },
    longDescription: { zh: '暂不展示。', en: 'Hidden for now.' },
    category: ['puzzle'],
    tags: [{ zh: '待审核', en: 'Review' }],
    thumbnail: '/assets/thumbnails/astray.png',
    playUrl: '/games/astray/index.html',
    license: 'Review required',
    licenseUrl: '/games/astray/License.md',
    commercialSafe: false,
    visibility: 'review',
    controls: [],
    howToPlay: [],
    tips: [],
    faq: [],
    history: { zh: '暂不展示。', en: 'Hidden for now.' },
    strategyGuide: [],
    glossary: [],
  },
  {
    id: 'last-colony',
    slug: 'last-colony',
    title: 'Last Colony',
    description: { zh: '授权待确认，首版暂不展示。', en: 'License needs review, hidden from public launch.' },
    longDescription: { zh: '暂不展示。', en: 'Hidden for now.' },
    category: ['strategy'],
    tags: [{ zh: '待审核', en: 'Review' }],
    thumbnail: '/assets/thumbnails/last-colony.png',
    playUrl: '/games/last-colony/index.html',
    license: 'Review required',
    commercialSafe: false,
    visibility: 'review',
    controls: [],
    howToPlay: [],
    tips: [],
    faq: [],
    history: { zh: '暂不展示。', en: 'Hidden for now.' },
    strategyGuide: [],
    glossary: [],
  },
];

export const categories = [
  { key: 'all', label: { zh: '全部', en: 'All' } },
  { key: 'puzzle', label: { zh: '益智', en: 'Puzzle' } },
  { key: 'shooting', label: { zh: '射击', en: 'Shooter' } },
  { key: 'racing', label: { zh: '赛车', en: 'Racing' } },
  { key: 'strategy', label: { zh: '策略', en: 'Strategy' } },
  { key: 'board', label: { zh: '棋类', en: 'Board' } },
];

export const publicGames = games.filter(
  (game) => game.commercialSafe && game.visibility === 'public',
);

export function getGameBySlug(slug: string) {
  return publicGames.find((game) => game.slug === slug);
}

export function getRelatedGames(game: Game, limit = 4) {
  const related = publicGames.filter(
    (candidate) =>
      candidate.slug !== game.slug &&
      candidate.category.some((category) => game.category.includes(category)),
  );

  const fallback = publicGames.filter(
    (candidate) =>
      candidate.slug !== game.slug &&
      !related.some((relatedGame) => relatedGame.slug === candidate.slug),
  );

  return [...related, ...fallback].slice(0, limit);
}
