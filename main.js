
/* ---------- initializing all variables ---------- */ {
// ������� �����
var map = L.map('map', {closePopupOnClick: false}).
  setView([48.7819, 44.7777], 14);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var loc1;//1 �����
var loc2;//2 �����
var popup = L.popup();//������ � ����������� � �����������
var pos1;//���������� 1
var pos2;//���������� 2



/* ---------- ------------ --- --------- ---------- */ }


/* ---------- event handlers ---------- */ {
// on map click
function onClick(e) 
{
  // getting coordinates of click
  lat = e.latlng.lat;
  lng = e.latlng.lng;
}
  
  // �� ����� �������� ������� ���������� ������
		map.on('click', function(e) 
		{
        onMapClick(e);
		});
	
		// ������� ���������� ������
function onMapClick(e) 
{
    if (loc1 == null) 
	{
        loc1 = new L.marker(e.latlng, {draggable: 'true',title: 'home'});
		//---- ---- ������� 1 ������ ---- ----
        loc1.on('dragstart', function(event) { /*���������� ������ ������ ������� ��� loc.on*/ });
		popup.setLatLng(e.latlng) // "�������������" ���������� 1 �������
		pos1=e.latlng.toString();
		loc1.bindPopup("Starting point:" + pos1);
        map.addLayer(loc1);
		document.getElementById('input_pos1').value = pos1.toString();
		//---- ---- �������� 1 ������ ---- ----
		loc1.on('dragend', function(event) 
			{
				var loc1 = event.target;  
				pos1 = loc1.getLatLng();  // ������ �������� ���������� �� �����
				loc1.bindPopup("Starting point:" + pos1);
				document.getElementById('input_pos1').value = pos1.toString();
			});
	}
	else if (loc2 == null) 
	{
        loc2 = new L.marker(e.latlng, {draggable: 'true',title: 'job'});
		//---- ---- ---------------- ---- ---- 
        loc2.on('dragstart', function(event) { /*?*/ });
		popup.setLatLng(e.latlng) // "�������������" ���������� 2 �������
		pos2=e.latlng.toString();
		loc2.bindPopup("Ending point:" + pos2);
        map.addLayer(loc2);
		//---- ---- ---------------- ---- ---- 
		document.getElementById('input_pos2').value = pos2.toString();
		loc2.on('dragend', function(event) 
			{
				var loc2 = event.target;  
				pos2 = loc2.getLatLng();  // ������ �������� ���������� �� �����
				loc2.bindPopup("Ending point:" + pos2);
				document.getElementById('input_pos2').value = pos2.toString();
			});
    }
}

//�������� �� ������� ����� �� �����
	 function test() 
	 {
		if (loc2==undefined) 
		{
			alert("�� �� ������� ����� ����������� �/��� ����� ����������\n������ �������� �� ����� ��� ����\n����������, ��� �����!")
		}
		else 
			alert("\n����� �����������:" + pos1 +"\n����� ����������:" + pos2 + "\n���� ������ ������� ���������.\n\n������� �� ��� ������������ ��������.")
	 }

	
//�������� �������� � ����� �� ������ "��������" (�� ��������� ��������� ������� �� ����� �����, ����� �� ��������)
		function del_data()
	{
		map.removeLayer(loc1);
		map.removeLayer(loc2);
	}
	
	
	
	
	
	
	
	
  }
  