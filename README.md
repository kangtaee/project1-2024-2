# project1-2024
2024-2학기 캡스톤프로젝트 수업
OpenAPI를 사용한 이공지능 시스템 실습


## 💻 My Stack
<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
 <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="Python" src ="https://img.shields.io/badge/Python-3776AB.svg?&style=for-the-badge&logo=Python&logoColor=white"/> 
<img src="https://camo.githubusercontent.com/79294344b1426e5ae031d11f7a684afe94fb2a9e35c88ab50706c067893756af/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465">
<img src="https://camo.githubusercontent.com/f661807b4046d822de960b43ec69a1dcf63c918c18676797c8bcac8abe87ae0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a51756572792d3037363941443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465">

## 💻 ...
<a href = "https://github.com/Hun-Se"><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>
</a> <a href = "https://for-it-study.tistory.com/"> <img alt="Tistory" src ="https://img.shields.io/badge/Tistory-white.svg?&style=for-the-badge"/></a>
</a> <a href = "hun-se.slack.com"> <img alt="Slack" src ="https://img.shields.io/badge/Slack-4A154B.svg?&style=for-the-badge&logo=Slack&logoColor=white"/></a>

# openweathermap

지정된 장소의 현재 날씨를 표시
https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35
- [실습해보기](https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35)


```javascript
$.ajax({
			type: "GET",
			url: 'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35',
		}).done(function(response) {

            console.log(response)
            
		}).fail(function(error) {
			alert("!/js/user.js에서 에러발생: " + error.statusText);
		});



```


# openAI

OpenAI에서 제공하는 텍스트새엇ㅇ 및 이미지 생성 실습 텍스트생성


https://api.openai.com/v1/chat/completions
- [실습해보기](https://api.openai.com/v1/chat/completions)

```javascript
 $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/chat/completions",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        //alert(response.choices[0].message.content)
        txtOut.value = response.choices[0].message.content
    }).fail(function(error){
        console.log(error)
        errormsg = error.status + " : " + error.responseJSON.error.code + " - " + error.responseJSON.error.message
        txtOut.value = (errormsg)
    }

    )
```
- 이미지 생성
```javascript
    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        //alert(response.choices[0].message.content)
       gimage.src = response.data[0].url
       gimage2.src = response.data[1].url
    }).fail(function(error){
        console.log(error)
        errormsg = error.status + " : " + error.responseJSON.error.code + " - " + error.responseJSON.error.message
        txtOut.value = (errormsg)
    })

```

# gogle cloud vision

google cloud vision 으로 얼굴감지 하기
https://vision.googleapis.com/v1/images:annotate?key=
- [실습해보기](https://vision.googleapis.com/v1/images:annotate?key=)

```
$.ajax({
        type: "POST",
        url: 'https://vision.googleapis.com/v1/images:annotate?key=' + GOOGLEAPI_KEY,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        console.log(response);
        var annotations = response.responses[0].faceAnnotations;
        var emotions = '';

        if (annotations) {
            annotations.forEach(function(annotation, index) {
                emotions += `얼굴 ${index + 1}:\n`;
                emotions += `기쁨: ${translateLikelihood(annotation.joyLikelihood)}\n`;
                emotions += `슬픔: ${translateLikelihood(annotation.sorrowLikelihood)}\n`;
                emotions += `화남: ${translateLikelihood(annotation.angerLikelihood)}\n`;
                emotions += `놀람: ${translateLikelihood(annotation.surpriseLikelihood)}\n\n`;
            });
        } else {
            emotions = "얼굴이 감지되지 않았습니다.";
        }

        document.getElementById("faceAnnotations").value = emotions;
    }).fail(function (error) {
        console.log(error);
        document.getElementById("faceAnnotations").value = "오류: " + JSON.stringify(error, null, 2);
    });

```
- 실행결과

<img src="face0.png"  width="400">


개발순서
1. 소스수정
2. 소스 저장
3. 스테이지
4. 커밋앤 푸쉬
5. 커밋메시지


git설정
git config --global user.name "Kang"
git config --global user.email"gang0730@shingu.ac.kr"


두번째 수정


2024-9-19 깃허브연동실습
로컬에서 편집함
