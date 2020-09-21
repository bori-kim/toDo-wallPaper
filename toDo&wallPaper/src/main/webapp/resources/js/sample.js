/* 페이지 로딩 후 실행 */
$(document).ready(function(){
	
	//클릭 이벤트
	//$(document).on('click', '선택자', function() {

	//});
	
	
	
});

/* 함수선언 영역*/
(function($){
	//aaa라는 함수선언
	//aaa = function(){
	
	//};
	
	
})(jQuery);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
	title.classList.toggle(CLICKED_CLASS);
}

function init(){
	title.addEventListener("click", handleClick);
}

init();

