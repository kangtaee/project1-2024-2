// https://github.com/yoyoshingu/project1-2024

GOOGLEAPI_KEY = "AIzaSyBmdox3_8lmP9zGYQkrad3OBKsxKbN31Kg"
CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + GOOGLEAPI_KEY;
function processFile(event){
    content = event.target.result 
    imagestring = content.replace('data:image/jpeg;base64,', '')
    document.getElementById("gimage").src = content
}

function processFile(event) {
    var content = event.target.result;
    imagestring = content.replace('data:image/jpeg;base64,', '');
    document.getElementById("gimage").src = content;
}

function uploadFiles(files) {
    var file = files[0];
    var reader = new FileReader();
    reader.onloadend = processFile;
    reader.readAsDataURL(file);
}

function analyze() {
    var data = {
        requests: [{
            image: {
                content: imagestring
            },
            features: [{
                type: "FACE_DETECTION",
                maxResults: 100
            }]
        }]
    };

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
}

function translateLikelihood(likelihood) {
    switch (likelihood) {
        case 'VERY_LIKELY':
            return '매우 높음';
        case 'LIKELY':
            return '높음';
        case 'POSSIBLE':
            return '가능성 있음';
        case 'UNLIKELY':
            return '낮음';
        case 'VERY_UNLIKELY':
            return '매우 낮음';
        default:
            return '없음';
    }
}