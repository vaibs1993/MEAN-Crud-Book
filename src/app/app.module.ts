import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService } from './book.service';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormGroup, FormControl, FormsModule} from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot([{ path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path: 'book-details/:id', component: BookDetailComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'book-edit/:id', component: BookEditComponent }
])
],
  providers: [
  BookService,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
