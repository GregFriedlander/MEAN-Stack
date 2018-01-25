import { Component, OnInit } from '@angular/core';
import { NotesService } from './../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: any[] = [];

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this._notesService.notesSubject.subscribe((notesData)=>{
      this.notes = notesData;
    })
    this._notesService.getNotes();
  }

}
