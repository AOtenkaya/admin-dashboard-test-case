# eva

### GH Page Demo
https://aotenkaya.github.io/eva

## Requests and changes I made

1. First thing i tried to solve was version problems. I had node/npm version problems, vue cli version problems and also on empty template firebase version had problems. I solved them and spent some time on them. Actually normally i would directly ask versions to prevent time waste but i thought that it might be part of the exam and didn't ask :)
2. After i solve the version problems, i started on logging and user data settings. I connected it to your api. and setted incoming user data.
3. There is a point on tokens. You said you wanted to write token to localStorage and access it via vuex but i'm not sure if i'm wrong or not but as far as i can understand token needs to be holded on local storage because state always recreated on refresh etc so we need to access it via local storage. Functions for that already existed i made some variable structure changes. For fully functional working for it i should've use a token interceptor with IIFE for setting axios's interceptor for request headers but for this project something that detailed is not what you looking for and i thought putting it inside on only 2 request i didn't use it via interceptor i made it directly in requests.
4. We have highcharts implemented on our current project as we use vue 2.5.17. It was almost same as your project's vue version so i implemented the package i already know for that version range.
5. I created a new page for my works and made it's v-router settings.
6. After that i started implementing highcharts. I'm working on a project already highcharts implemented. Nevertheless didn't have and tasks on highchart and i didn't know any details on higcharts. So i made my researches via official documentation and coding sites. Actually i thought it would be better and more detailed but i couldn't find what i imagined for official highchart documents. To be honest yes there are almost code samples and options for all situations but unfortunately there aren't enough info for little touch variables. For that i really adore Vue, Vuetify and AgGrid documentations. They almost give detail about every single attributes. But i made my way through it :)
7. I made arrangements for requests to send your api. Btw i really admired your api doc too. We dont have any api documentation on my current company and i really loved to have and using one. I only used some minor free api docs before but for a large scale company this kind of doc i really enjoyed using it. Also i'm happy that you conduced me to swagger api for documentation which i didn't heard or used before. 
8. After i managed request successfully i started to giving data to charts and tried to make them as much as similar to your videos at least in term of functionality because i can honestly say i didnt work on css side very much for chart styles on this test project, only worked on general terms and looking. I love working pixel perfect but for a test project like this which it's my first online project base interview i thought that wasn't the very thing for this project so i didn't spend my focus and time on making the page exactly look same on the video.
9. I made charts work as requested. But didnt finish it fully detailed on monday. I was only able to finish last fixes on Tuesday morning and finished my changes.
10. I made build and deployment settings and published my project on github pages. Putted it's details and this explanation part and actually create an md for now.

## P.S:
Before i finish my readme i want to thank you for this project it was really an enjoyable project for me. I also really liked the template you chose. I liked it too even it was a bit hard for me to use it's own classes and premade components :)
I deployed my project on github pages but on routing i thing there is a bug on page refreshing. When we refresh on some detail page it gives routing error which i'm no sure about it but it looks about server configuration because it didnt exist on localhost tests. But as a frontend developer our every task works just fine on our localhost am i right? :D
One last thing is i think tokens we get from your api has an expiry date so sometimes i get problem on already cached token so i logout and login to fixed that. But just like i didnt implement token interceptor i didnt made settings to check that token expirecy and relogin request since i thought project's main focus was not that.

Lastly I didnt know how should code homeworks's structure need to be so i didn't merge the pull request for you to be able to see my changes directly via pull request changes. My real changes exist on develop-test-case-for-eva branch. And third branch i made for github pages.

Thank you for your time on reading this and looking my code.

Best regards, Ahmet.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

