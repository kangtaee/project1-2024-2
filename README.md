# project1-2024
2024-2학기 캡스톤프로젝트 수업
OpenAPI를 사용한 이공지능 시스템 실습


## 💻 My Stack
<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
 <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> 
<img src="https://camo.githubusercontent.com/79294344b1426e5ae031d11f7a684afe94fb2a9e35c88ab50706c067893756af/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697375616c25323053747564696f253230436f64652d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465">
<img src="https://camo.githubusercontent.com/f661807b4046d822de960b43ec69a1dcf63c918c18676797c8bcac8abe87ae0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a51756572792d3037363941443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465">

# openweathermap

♦️ 입력된 장소의 현재 날씨를 Openweathe API를 사용해 출력 OpenWeatherMap실습해보기



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


# OPEN AI

OpenAI에서 제공하는 텍스트 및 이미지 생성 실습 텍스트생성
[👉 실습해보기](https://platform.openai.com/docs/overview)

♦️사용자의 입력부분을 OpenAi API를 사용해 텍스트 형태의 출력값을 가져옴
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
♦️ 사용자의 입력부분을 OpenAi API를 사용해 생성된 이미지를 2장 출력함
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

♦️ google cloud vision 에서 제공하는 FaceDetection 실습


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
4. 커밋애 푸쉬
5. 커밋메시지


git설정
git config --global user.name "Kang"
git config --global user.email"gang0730@shingu.ac.kr"


두번째 수정


2024-9-19 깃허브연동실습
로컬에서 편집함
-------------------------
### googleVisionAPI 내용 설명

1. AJAX 요청 설정
$.ajax를 통해 Google Vision API의 얼굴 분석(faceAnnotations) 기능을 호출합니다.
요청 방식은 POST이며, 요청 URL은 Google API 키(GOOGLEAPI_KEY)를 포함합니다.
요청 헤더는 JSON 형식으로 설정되어 있습니다.

2. Google Vision API가 이미지 분석 결과를 반환하면, 반환된 데이터에는 이미지 속 사람들의 얼굴 정보와 감정 상태(웃는 표정, 우는 표정, 흐릿한 얼굴 등)가 포함됩니다. 감지된 얼굴이 여러 명일 경우, 각각의 얼굴에 대해 "무표정", "웃는 표정", "우는 표정", "얼굴이 흐릿함" 등의 감정 상태가 표시됩니다.

3.응답 처리
.done(function(response)) 메서드로 응답을 받아 처리합니다.
응답에서 response.responses.faceAnnotations 값을 추출하여 얼굴 감정 정보를 얻습니다.

4. 데이터 전송
data 변수에 JSON 형태로 이미지 데이터가 담겨 있으며, 이를 JSON.stringify(data)로 문자열화하여 API에 전달합니다.

5. 감정 정보 처리
얼굴이 감지되었을 경우(annotations가 존재할 때), 각 얼굴마다 다음과 같은 감정 가능성(likelihood)을 확인합니다.

- 기쁨 (joyLikelihood)

- 슬픔 (sorrowLikelihood)

- 화남 (angerLikelihood)

- 놀람 (surpriseLikelihood)

- 각 감정의 가능성을 translateLikelihood()라는 별도 함수로 한글로 변환하여 문자열에 추가합니다.

- 여러 얼굴이 있을 경우, 각 얼굴별로 번호를 붙여 구분하여 표시합니다.
