import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../shared/student';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = '';

  constructor(private http: HttpClient) { }

  
}
