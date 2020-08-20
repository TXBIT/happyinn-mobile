import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private geocoder: any;
  private locationCache: any = {};

  constructor(
    private camelizePipe: CamelizePipe
  ) {}

  // camelize a string
  private camelize(value: string): string {
    return this.camelizePipe.transform(value);
  }

  // cache location for reuse
  private cacheLocation(location: string, coordinates: any) {
    this.locationCache[this.camelize(location)] = coordinates;
  }

  // check if location is in cache
  private isLocationCached(location: string): boolean {
    return this.locationCache[this.camelize(location)];
  }

  // get geocode location handler
  private geocodeLocation(location: string): Observable<any> {
    if (!this.geocoder) {
      this.geocoder = new (window as any).google.maps.Geocoder();
    }

    return new Observable((observer) => {
      this.geocoder.geocode({address: location}, (result: any, status: any) => {
        if (status === 'OK') {
          const geometry = result[0].geometry.location;
          const coordinates = {
            lat: geometry.lat(),
            lng: geometry.lng()
          };
          this.cacheLocation(location, coordinates);
          observer.next(coordinates);
        } else {
          observer.error('Could not get geolocation');
        }
      });
    });
  }

  // get geolocation
  getGeolocationService(location: string): Observable<any> {
    if (this.isLocationCached(location)) {
      return of(this.locationCache[this.camelize(location)]);
    } else {
      return this.geocodeLocation(location);
    }
  }
}
