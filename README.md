### husky 로 git hook 사용
npm i husky -D // 허스키 설치
npx husky install // 프로젝트에 허스키 설치
npx husky add .husky/pre-commit "lint-staged" // pre-commit 시 훅
npm i lint-staged -D // lint-staged 설치