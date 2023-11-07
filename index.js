alert("Bienvenidos a mi web")

var mapa = L.map("Contenedor", {
  center: [3.4182, -76.5274],
  zoom:15,
  minizoom:5,
  maxzoom:10
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
 








var puntosinteresenGeoJSON =  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -74.10837358866269,
            4.668222367979553
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -74.12371865061344,
            4.61182290494385
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -74.0738471992731,
            4.5955713786634504
          ],
          "type": "Point"
        }
      }
    ]
  }

var lineasdeinteresgeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -74.10837358866269,
            4.668222367979553
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -74.12371865061344,
            4.61182290494385
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -74.0738471992731,
            4.5955713786634504
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              -74.00098927912828,
              4.691838729367078
            ],
            [
              -74.06707511212032,
              4.659293218796847
            ],
            [
              -74.08417968065955,
              4.715084594365578
            ],
            [
              -74.0134289653385,
              4.735230381629904
            ],
            [
              -73.99554691641124,
              4.691838729367078
            ],
            [
              -74.0087640830095,
              4.66471757547464
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  }  


L.geoJSON(puntosinteresenGeoJSON, {}).addTo(mapa)

L.geoJSON(lineasdeinteresgeoJSON, {  
    style: {
        color: "red"
     }
    }).addTo(mapa)

