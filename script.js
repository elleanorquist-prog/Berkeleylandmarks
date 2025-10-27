mapboxgl.accessToken = 'pk.eyJ1IjoiZWxsZWFub3JxdWlzdCIsImEiOiJjbWg5Y2E5OHowb3N3Mm1vb3lmempjZTcwIn0.MwBSyLdfa9fpSkUUKeBTuA';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/elleanorquist/cmh9cftwv00pv01sr91551eic',
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });