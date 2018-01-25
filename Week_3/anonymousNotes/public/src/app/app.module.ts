import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { NotesService } from './notes.service';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { SortgridPipe } from './sortgrid.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NoteListComponent,
    SortgridPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
