alert("Bienvenidos a mi web")

var mapa = L.map("Contenedor", {
  center: [3.4182, -76.5274],
  zoom:15
})


var mapabase = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?",
{attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa)

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'})

var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
  })

  L.control.locate({setView:"true",flyto:'false',drawCircle:'false',showCompass:'true',drawMarker:'false',keepCurrentZoomLevel:'true',locateOptions: {
    enableHighAccuracy: true}}).addTo(mapa);

new L.Control.GeoSearch({provider: new L.GeoSearch.Provider.Esri()}).addTo(mapa);	


var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data &copy; OpenStreetMap contributors';

var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 8, attribution: osmAttrib });
var miniMap2 = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(mapa);

new L.control.scale(mapa).addTo(mapa)

//Lista de capas
var capas = L.control.layers({mapabase}).addTo(mapa)
capas.addOverlay(osmHOT, "Nuevo mapa")
capas.addOverlay(openTopoMap, "Mapa topográfico")


L.easyButton('<img src="iconos/heatmap.png"  align="absmiddle" height="16px" >', function() 
		{	
		
		var heat = L.heatLayer([[arbolesgeoJSON]],{radius: 50}).addTo(map);	

		
	  	}).addTo(map);