import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PapierService {

  constructor( private httpClient: HttpClient ) { }

  addPapier( papier ) {
    return this.httpClient.post<any>(`${baseUrl}/api/papiers/add_papier`, papier).pipe(tap(res => {
        console.log("papier ajouté avec succès", res);
    }))
  }
}
