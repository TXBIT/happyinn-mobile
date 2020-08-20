import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(
    private http: HttpClient
  ) {}

  // upload image
  uploadImageService(image: File): Observable<string | any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${environment.API_URL}/api/v1/image-upload`, formData).pipe(
      map((json: any) => json.imageUrl)
    );
  }

}
