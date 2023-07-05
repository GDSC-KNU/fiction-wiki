#!/usr/bin/env bash
set -eo pipefail

if [[ -z "$1" || -z "$2" ]]; then
  echo "use $0 https://github.com/KirschX/fdbsVer1.0.git https://github.com/GDSC-KNU/fiction-wiki.git"
  exit 2
fi

SOURCE_FOLDER=$1
TARGET_FOLDER=$2

echo "[GITEXPORTER]"
cat > ${SOURCE_FOLDER}.config.json <<EOF
{
  "forceReCreateRepo": false,
  "followByNumberOfCommits": true,
  "syncAllFilesOnLastFollowCommit": true,
  "logFilePath": "${SOURCE_FOLDER}.log.json",
  "targetRepoPath": "${TARGET_FOLDER}",
  "sourceRepoPath": "${SOURCE_FOLDER}",
  "allowedPaths": [
    "*"
  ],
  "ignoredPaths": [
    "secret/*"
  ]
}
EOF

npx gitexporter ${SOURCE_FOLDER}.config.json

echo "[TARGET/SETUP]"
cd ${TARGET_FOLDER}
git branch -D master || echo "no branch master"
git checkout -B master $(git rev-parse HEAD)
echo "[TARGET/PUSH]"
git push origin master
cd -
echo "[END]"