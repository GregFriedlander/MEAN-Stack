import { Component, OnInit } from '@angular/core';
import { NotesService } from './../notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  newNote: any = {content: ""};
  constructor(private _notesService: NotesService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('hit submit, new note:', this.newNote);
    this._notesService.addNote(this.newNote);
    this.newNote = {content: ""};
  }

}
