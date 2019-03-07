import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { foodConfig } from '../../config';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_URL = foodConfig.apiUrl;
  public API_URL2 = foodConfig.apiUrl2;

  constructor(private http: HttpClient) { }

  getFoodApi(reg){

    //https://api.edamam.com/search?q=
    //beef
    //&app_id=0dfec5a1&app_key=491d341de837916dfdaabfdbdefe4621&from=0&to=3&calories=591-722&health=alcohol-free

    return new Promise(resolve =>{
      const url = this.API_URL+reg+this.API_URL2;

      this.http.get(url)
      .subscribe(data =>{
        resolve(data);
      },err =>{
        console.log(err);
      });
    });
  }
}
