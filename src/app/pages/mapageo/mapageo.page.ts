import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var mapboxgl: any;

@Component({
  selector: 'app-mapageo',
  templateUrl: './mapageo.page.html',
  styleUrls: ['./mapageo.page.scss'],
})
export class MapageoPage implements OnInit, AfterViewInit {
  lat: number;
  lng: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);
    console.log(this.lat, this.lng);
  }

  ngAfterViewInit() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZnJhbjEwY2hhIiwiYSI6ImNrYW5kMGRsNjFvcmcyeW1xNTFxN2xhNGwifQ.J3w25mFiAnBJZTyZj0ye5w';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 16.8,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true,
    });

    map.on('load', () => {
      map.resize();

      // marker
      new mapboxgl.Marker().setLngLat([ this.lng, this.lat]).addTo(map);
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      let labelLayerId;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height'],
            ],
            'fill-extrusion-opacity': 0.6,
          },
        },
        labelLayerId
      );
   });
  }
}
