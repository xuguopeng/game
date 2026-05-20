#!/bin/bash
# 批量注入统计追踪代码到所有页面

TRACKER='<script defer src="https://visit.xuguopeng.com/tracker.min.js" data-website-id="gamehub"></script>'

echo "=== 注入统计追踪代码 ==="

inject() {
  local file="$1"
  if [ ! -f "$file" ]; then
    echo "  跳过 (不存在): $file"
    return
  fi
  
  if grep -q "visit.xuguopeng.com" "$file"; then
    echo "  跳过 (已注入): $file"
    return
  fi
  
  # 在 </body> 前注入
  if grep -q '</body>' "$file"; then
    sed -i '' "s|</body>|$TRACKER\n</body>|" "$file"
    echo "  注入成功: $file"
  else
    echo "  警告: $file 无 </body> 标签"
  fi
}

cd "$(dirname "$0")"

inject "index.html"
inject "games/2048/index.html"
inject "games/HexGL/index.html"
inject "games/clumsy-bird/index.html"
inject "games/blockrain/index.html"
inject "games/space-shooter/index.html"
inject "games/asteroids/index.html"
inject "games/alien-invasion/index.html"
inject "games/survivor/index.html"
inject "games/onslaught-arena/index.html"
inject "games/onslaught-arena/htdocs/index.html"
inject "games/jolly-jumper/index.html"
inject "games/astray/index.html"
inject "games/tower-defense/index.html"
inject "games/last-colony/index.html"
inject "games/sudoku-js/sudoku.html"
inject "games/c4/browser/index.html"
inject "games/pop-pop-win/web/index.html"

echo "=== 注入完成 ==="
