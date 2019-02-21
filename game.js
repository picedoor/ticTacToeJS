var isStarted = false;
var now = 1;
var board = new Array(9);
for(var i = 0; i < 9; i++) board[i] = 0;
//1 : 빨간색 2 : 파란색

function game_start() {
	//alert("게임이 시작되었습니다!");
	isStarted = true;
	setTurn(now = 1);
	for(var i = 0; i < 9; i++) {
		setOwner(i, 0);
		board[i] = 0;
	}
}

function check_finish() {
	var won = 0;
	for(var i = 0; i < 9; i += 3) {
		if((board[i] == board[ i + 1])&&(board[ i + 1] == board[i + 2 ])&&board[ i + 1] != 0) won = board[i];
	}
	for(var i = 0; i < 3; i ++) {
		if((board[i] == board[ i + 3])&&(board[ i + 3] == board[i + 6])&&board[ i + 3] != 0) won = board[i];
	}
	if(((board[0] == board[4])&&(board[4] == board[8])&&board[4] != 0)||((board[2] == board[4])&&(board[4] == board[6])&&board[4] != 0)) won = board[4];
	if(won != 0) {
		alert(won + "님이 이겼읍니다 *^^*\n확인을 누르면 처음부터 다시 시작합니다.");
		isStarted = false;
		game_start();
	}
	var j = 0;
	for(var i = 0; i < 9; i++) {
		if(board[i] != 0) j++;
		else break;
	}
	if(j == 9) {
		alert("무승부입니다*^^*\n확인을 누르면 다시 시작합니다.");
		game_start();
	}
}

function game_onclick(n) {
	if (board[n] == 0) {
		if(isStarted) { 
			board[n] = now;
			setOwner(n, now);
			now++;
			if(now == 3) now = 1;
			//alert("버튼 " + n + "이 눌렸습니다!");
			check_finish();
			setTurn(now);
		}
		else alert("끝났다 요녀석아!");
	}
	else alert("이미 뭔가가 있는 타일!");
}
