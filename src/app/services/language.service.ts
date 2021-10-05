import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languagesUrl = 'http://localhost:8080/languages/';

  constructor(private http: HttpClient) { }

  getLanguages(){
    return this.http.get<any>(this.languagesUrl);
  }

  addLanguage(addLanguageData){
    return this.http.post<any>(this.languagesUrl,addLanguageData);
  }

  editLanguage(editLanguageData){
    return this.http.put<any>(editLanguageData._links.self.href,editLanguageData);
  }

  deleteLanguage(url){
    return this.http.delete<any>(url);
  }
}
