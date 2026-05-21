export type Language = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface GameFaq {
  question: LocalizedText;
  answer: LocalizedText;
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
      zh: '不需要。游戏会直接在浏览器中运行，打开页面即可游玩。',
      en: 'No. The game runs directly in your browser, so you can play from the page.',
    },
  },
  {
    question: {
      zh: '手机上可以玩吗？',
      en: 'Can I play on mobile?',
    },
    answer: {
      zh: '部分游戏支持触屏，部分老游戏更适合电脑键盘。页面会保留新窗口和全屏入口。',
      en: 'Some games support touch controls, while older games work better with a keyboard. Fullscreen and new-window controls are available.',
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
      zh: '2048 是最适合碎片时间的数字合成游戏。你需要通过上下左右滑动，让相同数字的方块合并，尽量创造更高分数。',
      en: '2048 is a compact number-merging puzzle built for quick sessions. Move tiles in four directions, combine matching numbers, and push for a higher score.',
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
      { zh: '键盘方向键移动方块。', en: 'Use arrow keys to move tiles.' },
      { zh: '触屏设备可滑动操作。', en: 'Swipe on touch devices.' },
    ],
    howToPlay: [
      { zh: '移动所有方块，让相同数字相撞合并。', en: 'Move all tiles and merge matching numbers.' },
      { zh: '尽量保留大数字在角落，减少棋盘混乱。', en: 'Try to keep larger tiles near a corner.' },
    ],
    tips: [
      { zh: '不要频繁反向滑动。', en: 'Avoid reversing direction too often.' },
      { zh: '优先规划下一步空位。', en: 'Plan around the next empty cells.' },
    ],
    faq: commonFaq('2048'),
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
      zh: 'HexGL 是一款浏览器里的 3D 科幻竞速游戏，适合作为网站的视觉招牌。它更适合桌面设备和性能较好的浏览器。',
      en: 'HexGL is a 3D futuristic racing game for the browser and a strong visual showcase for the arcade. It works best on desktop devices and modern browsers.',
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
      { zh: '键盘方向键控制方向和加速。', en: 'Use arrow keys to steer and accelerate.' },
      { zh: '建议使用全屏模式获得更好体验。', en: 'Fullscreen mode is recommended.' },
    ],
    howToPlay: [
      { zh: '保持飞行器在赛道内，尽量减少碰撞。', en: 'Stay on track and avoid collisions.' },
      { zh: '熟悉弯道后再追求最快圈速。', en: 'Learn the turns before chasing faster lap times.' },
    ],
    tips: [
      { zh: '进入弯道前提前调整方向。', en: 'Prepare your line before entering turns.' },
      { zh: '如果画面卡顿，使用新窗口打开。', en: 'If performance drops, open the game in a new window.' },
    ],
    faq: commonFaq('HexGL'),
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
      zh: 'Blockrain 是一个怀旧感很强的俄罗斯方块类游戏，节奏清晰，适合益智和街机分类。',
      en: 'Blockrain is a nostalgic falling-block puzzle with clean pacing, ideal for puzzle and arcade categories.',
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
      { zh: '方向键移动和旋转方块。', en: 'Use arrow keys to move and rotate blocks.' },
      { zh: '部分设备支持屏幕按钮。', en: 'Some devices support on-screen controls.' },
    ],
    howToPlay: [
      { zh: '让方块填满整行即可消除。', en: 'Fill complete rows to clear them.' },
      { zh: '不要让方块堆到顶部。', en: 'Do not let the stack reach the top.' },
    ],
    tips: [
      { zh: '保留一个竖向空位方便长条消除。', en: 'Keep a vertical gap ready for long pieces.' },
      { zh: '优先消除危险高度的区域。', en: 'Clear dangerous high stacks first.' },
    ],
    faq: commonFaq('Blockrain'),
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
      zh: 'Space Shooter 是节奏直接的 2D 太空射击游戏，适合想快速进入战斗的玩家。',
      en: 'Space Shooter is a direct 2D arcade shooter for players who want to jump into action quickly.',
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
      { zh: '键盘控制移动和射击。', en: 'Use the keyboard to move and shoot.' },
      { zh: '建议使用电脑浏览器。', en: 'Desktop browser play is recommended.' },
    ],
    howToPlay: [
      { zh: '躲避敌人和子弹，持续射击。', en: 'Dodge enemies and bullets while firing back.' },
      { zh: '保持移动，避免被包围。', en: 'Keep moving to avoid getting surrounded.' },
    ],
    tips: [
      { zh: '先清理靠近你的敌人。', en: 'Clear nearby enemies first.' },
      { zh: '不要停在屏幕边缘太久。', en: 'Do not stay near the screen edge for too long.' },
    ],
    faq: commonFaq('Space Shooter'),
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
      zh: 'Asteroids 是经典街机太空射击玩法，移动有惯性，射击和躲避同样重要。',
      en: 'Asteroids is a classic arcade space shooter where momentum matters as much as shooting.',
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
      { zh: '键盘控制旋转、推进和射击。', en: 'Use the keyboard to rotate, thrust, and shoot.' },
      { zh: '飞船移动有惯性。', en: 'The ship moves with momentum.' },
    ],
    howToPlay: [
      { zh: '击碎小行星并避开碎片。', en: 'Break asteroids and avoid debris.' },
      { zh: '控制速度比一直加速更重要。', en: 'Controlling speed matters more than constant thrust.' },
    ],
    tips: [
      { zh: '先保持安全距离再开火。', en: 'Create distance before firing.' },
      { zh: '注意屏幕边缘的回绕。', en: 'Watch for wraparound at screen edges.' },
    ],
    faq: commonFaq('Asteroids'),
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
      zh: 'Alien Invasion 是经典防守射击玩法，玩家需要阻止外星人推进到底部。',
      en: 'Alien Invasion is a classic defensive shooter where you stop aliens from reaching the bottom.',
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
      { zh: '键盘控制左右移动和射击。', en: 'Use the keyboard to move left/right and shoot.' },
      { zh: '更适合桌面端游玩。', en: 'Desktop play is recommended.' },
    ],
    howToPlay: [
      { zh: '阻止敌人到达屏幕底部。', en: 'Stop enemies from reaching the bottom.' },
      { zh: '优先打掉靠近底部的敌人。', en: 'Prioritize enemies near the bottom.' },
    ],
    tips: [
      { zh: '保持射击节奏，不要空等。', en: 'Keep a steady firing rhythm.' },
      { zh: '提前移动到敌人路径上。', en: 'Move ahead of enemy paths.' },
    ],
    faq: commonFaq('Alien Invasion'),
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
      zh: 'Connect Four 是上手简单但很考验预判的棋类游戏，目标是在棋盘上连成四枚棋子。',
      en: 'Connect Four is a simple but strategic board game where the goal is to connect four pieces in a row.',
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
      { zh: '点击列放入棋子。', en: 'Click a column to drop a piece.' },
      { zh: '支持人机或本地双人玩法。', en: 'Supports solo and local two-player play.' },
    ],
    howToPlay: [
      { zh: '横向、纵向或斜向先连成四枚即可获胜。', en: 'Connect four horizontally, vertically, or diagonally to win.' },
      { zh: '同时防守对手的三连威胁。', en: 'Block the opponent when they threaten three in a row.' },
    ],
    tips: [
      { zh: '中间列通常更有价值。', en: 'Center columns are usually more valuable.' },
      { zh: '制造双重威胁可以逼迫对手失误。', en: 'Create double threats to pressure your opponent.' },
    ],
    faq: commonFaq('Connect Four'),
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
      zh: 'Sudoku 是经典逻辑推理游戏，需要在 9x9 棋盘中填入数字，让每行、每列、每宫都不重复。',
      en: 'Sudoku is a classic logic puzzle where each row, column, and 3x3 box must contain unique digits.',
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
      { zh: '点击格子并输入数字。', en: 'Click a cell and enter a number.' },
      { zh: '适合鼠标和触屏设备。', en: 'Works with mouse and touch devices.' },
    ],
    howToPlay: [
      { zh: '每行、每列、每个 3x3 宫内数字不能重复。', en: 'Each row, column, and 3x3 box must avoid duplicates.' },
      { zh: '从确定性最高的空格开始。', en: 'Start with cells that have the fewest possibilities.' },
    ],
    tips: [
      { zh: '先找只剩一个候选数字的格子。', en: 'Look for cells with only one possible digit.' },
      { zh: '不要靠猜，优先用排除法。', en: 'Use elimination before guessing.' },
    ],
    faq: commonFaq('Sudoku'),
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
      zh: 'Tower Defense 补足了网站的策略类内容，玩家需要规划防御塔位置，用有限资源挡住敌人进攻。',
      en: 'Tower Defense adds strategy depth to the arcade, asking players to place towers carefully and stop incoming waves.',
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
      { zh: '鼠标选择和建造防御塔。', en: 'Use the mouse to select and build towers.' },
      { zh: '建议桌面端游玩。', en: 'Desktop play is recommended.' },
    ],
    howToPlay: [
      { zh: '在路径附近建塔，阻止敌人通过。', en: 'Build towers near paths to stop enemies.' },
      { zh: '根据敌人强度升级或调整防线。', en: 'Upgrade or adjust defenses as waves get stronger.' },
    ],
    tips: [
      { zh: '优先利用转弯和路径密集区域。', en: 'Use corners and dense path areas first.' },
      { zh: '不要把资源分散得太早。', en: 'Avoid spreading resources too thin early.' },
    ],
    faq: commonFaq('Tower Defense'),
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
      zh: 'Pop Pop Win 是 Dart 项目的扫雷实现，适合喜欢逻辑推理和短局挑战的玩家。',
      en: 'Pop Pop Win is a Minesweeper-style Dart game for players who enjoy logic and short puzzle rounds.',
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
      { zh: '点击翻开方块。', en: 'Click to reveal tiles.' },
      { zh: '根据数字判断周围地雷位置。', en: 'Use numbers to infer nearby mines.' },
    ],
    howToPlay: [
      { zh: '避开隐藏地雷，翻开安全区域。', en: 'Avoid hidden mines and reveal safe areas.' },
      { zh: '数字表示周围相邻地雷数量。', en: 'Numbers show how many mines touch that tile.' },
    ],
    tips: [
      { zh: '从边角和数字组合开始推理。', en: 'Reason from corners and number patterns.' },
      { zh: '不要在信息不足时随意点击。', en: 'Avoid random clicks when you still have clues.' },
    ],
    faq: commonFaq('Pop Pop Win'),
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
