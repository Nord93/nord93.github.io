
/* ---------- initializing all variables ---------- */ {
// создаем карту
var map = L.map('map', {closePopupOnClick: false}).
  setView([48.7819, 44.7777], 14);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var loc1;//1 балон
var loc2;//2 балон
var popup = L.popup();//Окошко с инфомарцией о координатах
var pos1;//Координата 1
var pos2;//Координата 2



/* ---------- ------------ --- --------- ---------- */ }


/* ---------- event handlers ---------- */ {
// on map click
function onClick(e) 
{
  // getting coordinates of click
  lat = e.latlng.lat;
  lng = e.latlng.lng;
}
  
  // По клику вызываем функцию добавления балона
		map.on('click', function(e) 
		{
        onMapClick(e);
		});
	
		// Функция добавления балона
function onMapClick(e) 
{
    if (loc1 == null) 
	{
        loc1 = new L.marker(e.latlng, {draggable: 'true',title: 'home'});
		//---- ---- Подняли 1 маркер ---- ----
        loc1.on('dragstart', function(event) { /*Посмотреть почему пустая функция для loc.on*/ });
		popup.setLatLng(e.latlng) // "Устанавливаем" координаты 1 маркера
		pos1=e.latlng.toString();
		loc1.bindPopup("Starting point:" + pos1);
        map.addLayer(loc1);
		document.getElementById('input_pos1').value = pos1.toString();
		//---- ---- Опустили 1 маркер ---- ----
		loc1.on('dragend', function(event) 
			{
				var loc1 = event.target;  
				pos1 = loc1.getLatLng();  // меняем значение координаты на новое
				loc1.bindPopup("Starting point:" + pos1);
				document.getElementById('input_pos1').value = pos1.toString();
			});
	}
	else if (loc2 == null) 
	{
        loc2 = new L.marker(e.latlng, {draggable: 'true',title: 'job'});
		//---- ---- ---------------- ---- ---- 
        loc2.on('dragstart', function(event) { /*?*/ });
		popup.setLatLng(e.latlng) // "Устанавливаем" координаты 2 маркера
		pos2=e.latlng.toString();
		loc2.bindPopup("Ending point:" + pos2);
        map.addLayer(loc2);
		//---- ---- ---------------- ---- ---- 
		document.getElementById('input_pos2').value = pos2.toString();
		loc2.on('dragend', function(event) 
			{
				var loc2 = event.target;  
				pos2 = loc2.getLatLng();  // меняем значение координаты на новое
				loc2.bindPopup("Ending point:" + pos2);
				document.getElementById('input_pos2').value = pos2.toString();
			});
    }
}

//Проверка на наличии точек на карте
	 function test() 
	 {
		if (loc2==undefined) 
		{
			alert("Вы не указали пункт отправления и/или пункт назначения\nПросто щёлкните по карте два раза\nПопробуйте, это легко!")
		}
		else 
			alert("\nПункт отправления:" + pos1 +"\nПункт назначения:" + pos2 + "\nВаши данные успешно сохранены.\n\nНажмите ОК для перезагрузки страницы.")
	 }

	
//Удаление маркеров с карты по кнопке "Сбросить" (не позволяет поставить маркеры на карту снова, после их удаления)
		function del_data()
	{
		map.removeLayer(loc1);
		map.removeLayer(loc2);
	}
	
	
	
	
	
	
	
	
  }
  