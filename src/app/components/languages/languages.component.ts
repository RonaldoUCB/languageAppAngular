import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/Language';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[] = [];
  addLanguageData = {name: '',last_update:''};
  editLanguageData: Language;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(
      res => this.languages = res._embedded.languages,
      err => {console.log(err); alert("Some Error Occured");}
    );
  }

  addLanguage(){
    console.log(this.addLanguageData);
    this.languageService.addLanguage(this.addLanguageData).subscribe(
      res => { console.log(res); this.ngOnInit(); this.addLanguageData = {name: '',last_update:''}; },
      err => {console.log(err); alert("Some Error Occured");}
    );
  }

  editLanguage(){
    console.log(this.editLanguageData);
    this.languageService.editLanguage(this.editLanguageData).subscribe(
      res => { console.log(res); this.ngOnInit() },
      err => {console.log(err); alert("Some Error Occured");}
    );
  }

  deleteLanguage(url){
    this.languageService.deleteLanguage(url).subscribe(
      res => { console.log(res); this.ngOnInit() },
      err => {console.log(err); alert("Some Error Occured");}
    );
  }

}
