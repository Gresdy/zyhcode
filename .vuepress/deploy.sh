#!/bin/bash

# GitHub Pages 部署脚本
# 需要先在 GitHub 仓库设置中启用 GitHub Pages，Source 选择 gh-pages 分支

set -e

# 构建
npm run build

# 推送dist文件夹到gh-pages分支
# 注意：把你的 GitHub 用户名和仓库名填到下面
GIT_USER="你的GitHub用户名"
GIT_REPO="你的仓库名"
GIT_BRANCH="gh-pages"

# 删除旧的 dist 目录中的 .git（如果有）
rm -rf dist/.git

# 克隆 gh-pages 分支到临时目录
git clone --branch $GIT_BRANCH git@github.com:$GIT_USER/$GIT_REPO.git temp-gh-pages 2>/dev/null || {
  # 如果分支不存在，创建一个新的空仓库
  mkdir temp-gh-pages
  cd temp-gh-pages
  git init
  git checkout -b $GIT_BRANCH
  cd ..
}

# 复制构建产物到临时目录
cp -rf dist/* temp-gh-pages/

# 推送
cd temp-gh-pages
git add .
git commit -m "Deploy to GitHub Pages: $(date)"
git push -u origin $GIT_BRANCH --force

# 清理
cd ..
rm -rf temp-gh-pages

echo "部署完成！"
