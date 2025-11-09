mapboxgl.accessToken = 'pk.eyJ1IjoiZWxsZWFub3JxdWlzdCIsImEiOiJjbWg5Y2E5OHowb3N3Mm1vb3lmempjZTcwIn0.MwBSyLdfa9fpSkUUKeBTuA';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/elleanorquist/cmh9cftwv00pv01sr91551eic',
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
});

map.on('load', function () {
  map.addSource('points-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/elleanorquist-prog/Berkeleylandmarks/refs/heads/main/data/183data.geojson'
  });

  map.addLayer({
    id: 'points-layer',
    type: 'circle',
    source: 'points-data',
    paint: {
      'circle-color': '#DF9E4E',
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });
 map.on('mouseover', 'points-layer', (e) => {
const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;
   
   const popupContent = `
            <div>
                <h3>${properties.original_Landmark}</h3>
                <p><strong>Address:</strong> ${properties.original_Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.original_ArchitectandDate}</p>
                <p><strong>Designated:</strong> ${properties.original_Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;
   new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });
});
 document.addEventListener('mousemove', function(e) {
        const customCursor = document.getElementById('customCursor');
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
