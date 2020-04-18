import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from'@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ListStudentsComponent } from './list-students/list-students.component';


const routes: Routes = [
  { path: 'all-student', component: ListStudentsComponent },
  { path: 'add-student', component: AddStudentComponent }
  
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent,
 
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
