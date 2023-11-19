import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  // injecting our API client into constructor argument
  constructor(private _httpClient:HttpClient) { }

  //creating our methods
  getAllMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match/`)
  }

  getLiveMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match/live`)
  }

  getPointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table`)
  }
}
