### husky 로 git hook 사용
npm i husky -D //허스키 설치 <br>
npx husky install // 프로젝트에 허스키 설치<br>
npx husky add .husky/pre-commit "npx lint-staged" // pre-commit 시 npx lint-staged 라는 명령어 실행 (lint-staged 는 package.json 에 작성)<br>
npm i lint-staged -D // lint-staged 설치<br>