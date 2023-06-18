# FlaskVuePrj
Flask with Vuejs Test Project 2023.05 
최초 구성은 아래 링크의 내용 참고함.  
# 이 내용은 git switch main으로 이동하여 작성 후 Commit 함.
https://wiki.terzeron.com/ko/Programming/Python/Flask%EC%99%80_Vue%EB%A1%9C_%EC%9B%B9%EC%84%9C%EB%B9%84%EC%8A%A4_%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0


mkdir backend  
cd backend  
pip install Flask  

curl localhost:5000   

frontend (Vue앱)  
# OS에 vue cli를 전역 설치  
sudo npm install -g @vue/cli  
sudo npm install -g @vue/cli-init  
npm install -g serve  

# frontend 디렉토리 생성  
vue create frontend   
cd frontend   
npm install  ## 새로운 프로젝트를 생성한다.   
# Vue 앱에 따라 필요한 의존성 설치  
npm install --save axios   
npm install --save bootstrap  
npm install --save bootstrap-vue  
npm install --save @babel/eslint-parser   
npm run serve (dev는 추가 구성 필요)   
npm run build (dist경로에 배포판을 만든다.)  

# 실제 서비스 배포를 위한 설정 분리 작업  
backend의 URL prefix가 별도로 지정되는 경우에는 BASE_URL 항목을 반드시 설정해야 한다.  
BASE_URL을 기본값으로 설정해 두고 사용하는 전략  
config 디렉토리의 파일에서 설정할 수 있는 항목으로 HOST와 PORT 가 있지만,
이것은 frontend 서버를 별도로 띄울 경우에만 필요하고 backend에 정적 자산으로 서비스를 위임할 떄는 사용되지 않음  
config/prod.env.js  
module.exports = {  
	NODE_ENV: '"production"',  
	BASE_URL: '"/baseurlname/"'  
}

## Branch를 생성하고 해당 branch에서 수정  
git branch [branchName]  
git switch [branchName]  
