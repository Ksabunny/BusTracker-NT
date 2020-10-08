import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit{
  map;
  @ViewChild('mapElement', {static: true}) mapElement;
  directionForm: FormGroup;

  constructor() {
    
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -12.3834, lng: 130.8456},
          zoom: 12
        });

        var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
          info: {
            icon: 'https://www.shareicon.net/data/128x128/2016/07/16/796958_interface_512x512.png'
          }
        };
        
        var features = [
          {
            position: new google.maps.LatLng(-12.3733, 130.8817),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-12.4634, 130.8456),
            type: 'info'
          }]

          // Create markers.
      for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: this.map
      });
     };
  }
}