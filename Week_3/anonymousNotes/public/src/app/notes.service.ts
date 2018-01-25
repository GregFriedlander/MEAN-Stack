import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class NotesService {

  notesSubject: BehaviorSubject<object[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }
  addNote(note){
    this._http.post('/notes', note).subscribe((response:any)=>{
      console.log('got a response from server: ', response);
      this.getNotes();
    })
  }
  getNotes(){
    this._http.get('/notes').subscribe((response:any)=>{
      console.log('response from server: ', response);
      this.notesSubject.next(response);
    })
  }

}
