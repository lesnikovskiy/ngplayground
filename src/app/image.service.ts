import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    constructor(private http: HttpClient) { }

    uploadImage(image: File): Observable<any> {
        const formData = new FormData();
        formData.append('image', image);

        return this.http.post<any>('http://localhost:3000/api/upload', formData);
    }
}
