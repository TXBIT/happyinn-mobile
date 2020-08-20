import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges, OnDestroy {

  @Input() location: string;

  @Input() locationSubject: Subject<any>;

  isPositionError = false;

  lat: number;
  lng: number;

  constructor(
    private mapService: MapService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  // when component is created
  ngOnInit() {
    if (this.locationSubject) {
      this.locationSubject.subscribe((location: string) => {
        this.getLocation(location);
      });
    }
  }

  ngOnChanges() {
  }

  // when component is destroy
  ngOnDestroy() {
    if (this.locationSubject) {
      this.locationSubject.unsubscribe();
    }
  }

  // get rental location
  getLocation(location: string) {
    this.mapService.getGeolocationService(location).subscribe(
      (data) => {
        this.lat = data.lat;
        this.lng = data.lng;
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        this.isPositionError = true;
        this.changeDetectorRef.detectChanges();
      }
    );
  }

  // map ready handler
  mapReadyHandler() {
    this.getLocation(this.location);
  }
}
