import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
    @Injectable({
        providedIn: 'root'
    })
export class CommonService {
    baseUrl = 'http://localhost:3001/api/v1/common';
    constructor(private http: HttpClient) { }
  
    fetchStates(){
    return this.http.get(`${this.baseUrl}/fetch-states`)
    }
}