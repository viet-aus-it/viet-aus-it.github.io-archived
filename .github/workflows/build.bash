# !/bin/bash

git fetch origin ${DEPLOY_BRANCH}
git checkout ${DEPLOY_BRANCH}

find . -maxdepth 1 ! -name 'public' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv public/* .
rm -Rf public/

REMOTE_REPO="https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git add -fA
git commit --allow-empty -m "Updates"
git push ${REMOTE_REPO} master

echo "Successfully built and deployed."
