//DataBase용 함수

var IdData;
var cityStruct = new Array();
var stateStruct = new Array();

function _cityData(_owner, _name, _grade, _incsta, _position) {
   var owner = _owner;
   var name=_name;
   var grade=_grade;
   var incSta=_incsta;
   var position =_position;
   var cityData = [owner, name, grade, incsta, position];
   cityStruct.push(cityData);
};

function _stateData(_name, _grade, _incCity, _position) {
   var name = _name;
   var grade = _grade;
   var incCity = _incCity;
   var position = _position;
   var stateData = [name, grade, incCity, position];
   stateStruct.push(stateData);
};

//city DataBase

_cityData('sc', 'a', 7, 'Texas', [-1, -2]);
_cityData('sh', 'b', 5, 'Texas', [-1,2]);
_cityData('sc', 'c', 0, 'Newyork', [1,2]);
_cityData('sh', 'd', 9, 'Newyork', [2,2]);
_cityData('sc', 'e', 1, 'Texas', [-2,1]);
_cityData('sh', 'f', 1, 'Texas', [-1,1]);
_cityData('hb', 'g', 5, 'Newyork', [1,1]);
_cityData('sh', 'h', 10, 'Newyork', [2,1]);
_cityData('sc', 'i', 3, 'Osaka', [-2,-1]);
_cityData('sc', 'j', 0, 'Osaka', [-1,-1]);
_cityData('sh', 'k', 5, 'Seoul', [1,-1]);
_cityData('hb', 'l', 3, 'Seoul', [2,-1]);
_cityData('hb', 'm', 7, 'Osaka', [-2,-2]);
_cityData('sc', 'n', 4, 'Osaka', [-1,-2]);
_cityData('hb', 'o', 8, 'Seoul', [1,-2]);
_cityData('hb', 'p', 6, 'Seoul', [2,-2]);

//State DataBase

_stateData('Texas', 3, [a, b, e, f], [-1, 1]);
_stateData('Newyork', 4, [c, d, g, h], [1, 1]);
_stateData('Osaka', 7, [i, j, m, n], [-1, -1]);
_stateData('Seoul', 9, [k, l, o, p], [1, -1]);


//땅을 클릭할 때 state 정보 반환.
$('.city').click(function() {
   var click_state = $(this).attr('class');
});

//땅을 클릭할 때 city 정보 반환.
$(".city").click(function() {
    var click_id = $(this).attr('id');
    alert(click_id, "를 결제하시겠습니까?");
});