//span 태그
const weather = document.querySelector(".js-weather");

//스토리지에 넣을 이름
const COORDS = "coords";
//API key
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function getWeather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
			).then(function(response){
				return response.json();
			}).then(function(json){
				const temperature = json.main.temp;
				const place = json.name;
				weather.innerText = `현재 온도 : ${temperature} / 지역 : ${place}`;
			});
}




//coords라는 key에 value 값 넣기
function saveCoords(coordsObj){ 
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


//위치 확인 수락 시
function handleGeoSuccess(position){
	const latitude = position.coords.latitude; //위도
	const longitude = position.coords.longitude; //경도
	const coordsObj = { //객체 하나에 담기
			latitude : latitude,
			longitude : longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}


//위치확인 거절 시
function handleGeoError(){
	console.log("Can't access geo location")
}


//위치확인허용 질문
function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


//스토리지에 위치정보있는지 확인
function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	}
	else{
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
}


//시작
function init(){
	loadCoords();
}

init();