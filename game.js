var isStarted = false;
var now = 1;
var board = new Array(9);
for(var i = 0; i < 9; i++) board[i] = 0;
//1 : 빨간색 2 : 파란색

function game_start() {
	alert("게임이 시작되었습니다!");
	isStarted = true;
	now = 1;
}

function check_fnish() {
	var won = 0;
	for(var i = 0; i < 9; i += 3) {
		If(board[i] == board[ i + 1] == board[i + 2 ] != 0) won = board[i];
	}
	if((board[0] == board[4] == board[8] != 0)||(board[2] == board[4] == board[6] != 0)) won = board[4];
	if(won != 0) alert(won + "님이 이겼읍니다 *^^*");
}

function game_onclick(n) {
	if (board[n] == 0) { 
		board[n] = now;
		setOwner(n, now);
		n++;
		if(n>2) n = 1;
		alert("버튼 " + n + "이 눌렸습니다!");
		check_finish();
	}
	else alert("이미 뭔가가 있는 타일!");
}
