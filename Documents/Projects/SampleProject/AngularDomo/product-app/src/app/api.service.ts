import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  public get datasets()
  {
    return {
      get promotion() {
        return 'b104b662-a0e5-4cf5-967a-14a6fe0cea45'
      }
    }
  }
  public get setClientSecret(){
    return new HttpHeaders({
      Authorization: 'Basic MmVmNDRkNGQtODhiYy00NWRjLWEwZjAtOThkNmYwZDI3OTA0OmQ5MDI4OTRjNWIxMmYzZDNiMjAzZGMzYzRmNGQyNDk4NDM4MzU4NGM3NTYxNTlmYTQzNjUyNDA3MWIyODM3YWE='
    });
  }

  public generateToken()
  {
    return this._http.get('https://api.domo.com/oauth/token?grant_type=client_credentials&scope=audit%20data%20dashboard%20user',
    {
      headers: this.setClientSecret
    })
  }

  public getAllfromCollection(name)
  {
    return this._http.get(`/domo/datastores/v1/collections/${name}/documents/`);
  
  }
  public queryDataset(name, query){
    return this._http.get(`/data/v1/${name}?${query}`);
  }

  public pageApi(id, token) {
    return this._http.get(`https://api.domo.com/v1/pages/${id}`, {
      headers: new HttpHeaders({
        Authorization: `bearer ${token['access_token']}`
      })
    })
  }
  public addToCollection(name, params) {
    return this._http.post('/domo/datastores/v1/collections/${name}/documents/', { content: params })
    
  }

  public deleteCollectionDoc(name, id) {
    return this._http.delete(`/domo/datastores/v1/collections/${name}/documents/${id}`);
  }

  public deleteCollection(name) {
    return this._http.delete(`/domo/datastores/v1/collections/${name}`);
  }

  exportCollection() {
    return this._http.post('/domo/datastores/v1/export', {});
  }

  public insertIntoDataset(id, data, token) {
    return this._http.put(`https://api.domo.com/v1/datasets/${id}/data`, data, {
      headers: new HttpHeaders({
        Authorization: `bearer ${token['access_token']}`,
        'Content-Type': 'text/csv'
      })
    })
  }
  public queryCollection(name, query) {
    return this._http.post(`/domo/datastores/v1/collections/${name}/documents/query?${query}`, {});
  }

  public getUserDetails(id, token) {
    return this._http.get(`https://api.domo.com/v1/peoples/${id}`, {
      headers: new HttpHeaders({
        Authorization: `bearer ${token['access_token']}`
      })
    })
  }
}
