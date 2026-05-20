#!/bin/bash
cd /Users/xuguopeng/Documents/徐徐如声/徐徐如声/产品库/小游戏网站/gamesite/games

echo "=== 开始批量下载开源游戏 ==="

# 已下载的游戏
echo "1. 2048 - 已存在"
echo "2. Clumsy Bird - 已存在"
echo "3. HexGL - 已存在"
echo "4. Blockrain - 已存在"

# 下载剩余游戏
echo "5. 下载 Space Shooter..."
git clone https://github.com/patrikpentikainen/space-shooter.git space-shooter 2>/dev/null || echo "space-shooter 已存在或失败"

echo "6. 下载 c4 (Connect Four)..."
git clone https://github.com/kenrick95/c4.git c4 2>/dev/null || echo "c4 已存在或失败"

echo "7. 下载 Asteroids..."
git clone https://github.com/dmcinnes/HTML5-Asteroids.git asteroids 2>/dev/null || echo "asteroids 已存在或失败"

echo "8. 下载 Alien Invasion..."
git clone https://github.com/cykod/AlienInvasion.git alien-invasion 2>/dev/null || echo "alien-invasion 已存在或失败"

echo "9. 下载 Onslaught Arena..."
git clone https://github.com/lostdecade/onslaught_arena.git onslaught-arena 2>/dev/null || echo "onslaught-arena 已存在或失败"

echo "10. 下载 Survivor..."
git clone https://github.com/scottschiller/SURVIVOR.git survivor 2>/dev/null || echo "survivor 已存在或失败"

echo "11. 下载 Jolly Jumper..."
git clone https://github.com/shohan4556/jolly-jumper.git jolly-jumper 2>/dev/null || echo "jolly-jumper 已存在或失败"

echo "12. 下载 Astray..."
git clone https://github.com/wwwtyro/Astray.git astray 2>/dev/null || echo "astray 已存在或失败"

echo "13. 下载 Pop Pop Win..."
git clone https://github.com/dart-lang/pop-pop-win.git pop-pop-win 2>/dev/null || echo "pop-pop-win 已存在或失败"

echo "14. 下载 Sudoku JS..."
git clone https://github.com/baruchel/sudoku-js.git sudoku-js 2>/dev/null || echo "sudoku-js 已存在或失败"

echo "15. 下载 Tower Defense..."
git clone https://github.com/Casmo/tower-defense.git tower-defense 2>/dev/null || echo "tower-defense 已存在或失败"

echo "16. 下载 Last Colony..."
git clone https://github.com/adityaravishankar/last-colony.git last-colony 2>/dev/null || echo "last-colony 已存在或失败"

echo "=== 下载完成 ==="
ls -la
