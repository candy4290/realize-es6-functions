#!/bin/bash
set -e

export current_path=$(pwd)
echo "[INFO] 当前 Jenkins 工作目录: $current_path"

# ========== 回滚逻辑 ==========
if [[ "${rollback,,}" == "true" ]]; then
  echo "[INFO] 回滚触发：准备恢复上次构建版本..."
  if [ "$environment" = "test" ]; then
    export front_home="/home/kaizhidev/cxx/nginx-1.16.1/html/jiadingqinwu"
    cd $front_home || exit 1
    if [ -d build.bk ]; then
      rm -rf build
      mv build.bk build
      echo "[INFO] 回滚成功 ✅"
    else
      echo "[ERROR] 未找到备份版本，回滚失败 ❌"
      exit 1
    fi
  fi
  exit 0
fi

# ========== 依赖安装 ==========
if [[ "${option,,}" == "true" ]]; then
  echo "[INFO] 执行 npm install..."
  npm ci || npm install
fi

# ========== 构建流程 ==========
if [ "$environment" = "test" ]; then
  echo "[INFO] 构建测试环境包..."
  npm run build
fi

if [ "$environment" = "prod" ]; then
  echo "[INFO] 构建生产环境包..."
  npm run build:prod
fi

# ========== 部署 ==========
export front_home="/home/kaizhidev/cxx/nginx-1.16.1/html/jiadingqinwu"
export front_home_prod="/home/kaizhidev/production_deploy_packages/frontend/jiadingqinwu"

if [ "$environment" = "test" ]; then
  echo "[INFO] 部署测试包到 nginx 目录..."
  cd $front_home || exit 1
  rm -rf build.bk
  if [ -d build ]; then
    mv build build.bk
  fi
  cp -r "$current_path/build" ./
fi

if [ "$environment" = "prod" ]; then
  echo "[INFO] 打包生产构建结果..."
  cd $front_home_prod || exit 1
  rm -rf build.tar.gz
  cp -r "$current_path/build" ./
  tar -zcvf build.tar.gz build
  rm -rf build
fi

echo "[INFO] 构建部署流程完成 ✅"
