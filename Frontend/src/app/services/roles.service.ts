import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Rol } from 'src/model/rol';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  loadRoles(){
    return this.http.get<Rol[]>(environment.apiURL + '/roles');
  }

  public newRol(rol:Rol){
    console.log(environment.apiURL + '/roles/newRol');
    console.log( JSON.stringify(rol));
    this.http.post(environment.apiURL + '/roles/newRol', JSON.stringify(rol));
    return this.http.post(environment.apiURL + '/roles/newRol', rol);
  }

  public updateRol(rol: Rol){
    console.log(environment.apiURL + '/roles/updateRol');
    console.log( JSON.stringify(rol));
    this.http.put(environment.apiURL + '/roles/updateRol', JSON.stringify(rol));
    return this.http.put(environment.apiURL + '/roles/updateRol', rol);
  }
}
