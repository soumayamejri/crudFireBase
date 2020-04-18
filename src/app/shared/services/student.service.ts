import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }
  
  AddStudent(student: Student) {
    return this.firestore.collection('id').add(student);
  }

  getStudentsList() {
    return this.firestore.collection('id').snapshotChanges();
  }

  deleteStudent(studentId: string){
    this.firestore.doc('id/' + studentId).delete();
  }

  getStudent(id: string) {
    return this.firestore.doc('id/' + id).get();
  }

  updateStudent(student: Student) {
    return this.firestore.doc('id/' + student.id).update(student);
  }

}
