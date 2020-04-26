import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from'@angular/fire/database';
import { environment } from '../environments/environment';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'all-student', component: ListStudentsComponent },
  { path: 'add-student', component: AddStudentComponent }
  
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot() ,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
