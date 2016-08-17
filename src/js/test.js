function test2() {
	alert("這是測試位於js內的函數");
}

function operation() {
	var num1Ele = document.getElementById("num1");
	var num2Ele = document.getElementById("num2");
	var num1Val = num1Ele.value;
	var num2Val = num2Ele.value;
	var resultEle = document.getElementById("result");
	var show = document.getElementById("show");

	show.innerHTML = "operationVal";
	var operationEle = document.getElementById("select");
	var opIndex = operationEle.selectedIndex;
	show.innerHTML = parseInt(opIndex);

	if (isNaN(num1Val))
		resultEle.innerHTML = "<span style='color:red'>第一個空不是數字</span>";
	else if (isNaN(num2Val))
		resultEle.innerHTML = "<span style='color:red'>第2個空不是數字</span>";
	else
		switch (opIndex) {
		case 0:
			resultEle.innerHTML = add(num1Val, num2Val);
			break;
		case 1:
			resultEle.innerHTML = minus(num1Val, num2Val);
			break;
		case 2:
			resultEle.innerHTML = multiply(num1Val, num2Val);
			break;
		case 3:
			resultEle.innerHTML = divide(num1Val, num2Val);
			break;
		default:
			break;
		}
}
function add(num1, num2) {
	return (parseFloat(num1) + parseFloat(num2));
}

function minus(num1, num2) {
	return (parseFloat(num1) - parseFloat(num2));
}
function multiply(num1, num2) {
	return (parseFloat(num1) * parseFloat(num2));
}
function divide(num1, num2) {
	if (parseFloat(num2) == 0.0)
		return "the second number is 0";
	else
        return (parseFloat(num1) / parseFloat(num2));
}

function timer() {
	var now = new Date();
	var timeArea = document.getElementById("time");
	timeArea.innerHTML = ("<H2>今天日期:" + (now.getYear() + 1900) + "年"
			+ (now.getMonth() + 1) + "月" + now.getDate() + "日 \n" + "现在时间:"
			+ now.getHours() + "点" + now.getMinutes() + "分" + now.getSeconds() + "秒</H2>");
}
setInterval("timer()", 2000);

var totalTime = 60;

function countDown() {
	var timeCountEle = document.getElementById("counti");
//	judgePhoneNumber();
	timeCountEle.innerHTML = totalTime + "秒後重新獲取";
	totalTime = totalTime - 1;
	if (totalTime >= 0) {
		timeCountEle.disabled = true;
		setTimeout("countDown()", 125);
	} else {
		timeCountEle.disabled = false;
		totalTime = 60;

	timeCountEle.innerHTML ="點擊獲取驗證碼";
	}
}

function enterToShow(){
var usernameEle=document.getElementById("username");
var pwdEle = document.getElementById("password");


if(event.keyCode == 13)
alert("user name is: "+usernameEle.value+"\n password is: "+pwdEle.value);

}


function showChoiceSelected(){
var hobbyEles = document.getElementsByName("hobby")
for(var i=0;i<hobbyEles.length;i++)
{

hobbyEle = hobbyEles[i];
if(hobbyEle.checked)
alert(hobbyEle.value);
}

}

function showSentence(){
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");

var sp=document.getElementById("inputASentence");
para.appendChild(node);

var bt = document.createElement("button");
//how to set bt?
sp.appendChild(para);
sp.appendChild(bt);
}
