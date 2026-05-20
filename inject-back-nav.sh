#!/bin/bash
# 批量注入返回导航栏到游戏页面

BACK_NAV='\n<!-- GameHub Return Nav -->\n<div class="gh-back-nav" style="position:fixed;top:0;left:0;right:0;z-index:99999;background:rgba(10,10,10,0.95);backdrop-filter:blur(10px);border-bottom:1px solid #2a2a2a;padding:10px 20px;display:flex;align-items:center;gap:10px;font-family:sans-serif;">\n  <a href="../../index.html" style="color:#00f0ff;text-decoration:none;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px;padding:6px 16px;border:1px solid rgba(0,240,255,0.3);border-radius:20px;transition:all 0.3s;">← 返回 GameHub</a>\n  <span style="margin-left:auto;color:#777;font-size:13px;">GameHub 免费小游戏</span>\n</div>\n<div style="height:48px;"></div>\n<!-- End GameHub Return Nav -->\n'

echo "=== 注入返回导航栏 ==="

inject_html() {
  local file="$1"
  local depth="$2"
  if [ ! -f "$file" ]; then return; fi
  
  # 检查是否已注入
  if grep -q "GameHub Return Nav" "$file"; then
    echo "  跳过 (已注入): $file"
    return
  fi
  
  # 修正返回链接路径
  local link="../../index.html"
  if [ "$depth" == "3" ]; then link="../../../index.html"; fi
  if [ "$depth" == "4" ]; then link="../../../../index.html"; fi
  
  # 构造导航栏HTML（单行，不含换行）
  local nav="<div class='gh-back-nav' style='position:fixed;top:0;left:0;right:0;z-index:99999;background:rgba(10,10,10,0.95);backdrop-filter:blur(10px);border-bottom:1px solid #2a2a2a;padding:10px 20px;display:flex;align-items:center;gap:10px;font-family:sans-serif;box-sizing:border-box;'><a href='$link' style='color:#00f0ff;text-decoration:none;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px;padding:6px 16px;border:1px solid rgba(0,240,255,0.3);border-radius:20px;transition:all 0.3s;'>← 返回 GameHub</a><span style='margin-left:auto;color:#777;font-size:13px;'>GameHub 免费小游戏</span></div><div style='height:48px;'></div>"
  
  # 注入到 <body> 标签之后
  if grep -q '<body>' "$file"; then
    sed -i '' "s|<body>|<body>$nav|" "$file"
    echo "  注入成功: $file (深度 $depth)"
  elif grep -q '<body ' "$file"; then
    sed -i '' "s|<body |<body $nav|" "$file"
    echo "  注入成功: $file (深度 $depth)"
  else
    echo "  警告: $file 找不到 <body> 标签"
  fi
}

cd "$(dirname "$0")"

# 深度2: games/xxx/index.html
inject_html "games/2048/index.html" 2
inject_html "games/HexGL/index.html" 2
inject_html "games/clumsy-bird/index.html" 2
inject_html "games/blockrain/index.html" 2
inject_html "games/space-shooter/index.html" 2
inject_html "games/asteroids/index.html" 2
inject_html "games/alien-invasion/index.html" 2
inject_html "games/survivor/index.html" 2
inject_html "games/onslaught-arena/index.html" 2
inject_html "games/onslaught-arena/htdocs/index.html" 2
inject_html "games/jolly-jumper/index.html" 2
inject_html "games/astray/index.html" 2
inject_html "games/tower-defense/index.html" 2
inject_html "games/last-colony/index.html" 2
inject_html "games/sudoku-js/sudoku.html" 2

# 深度3: games/xxx/xxx/index.html
inject_html "games/c4/browser/index.html" 3
inject_html "games/pop-pop-win/web/index.html" 3

echo "=== 注入完成 ==="
