import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from'../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public student = new Student();
  formAdd: NgForm;
  id:string;

  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.activatedRoute.queryParams.subscribe(params => {
   // this.student.id = params['id'];

   this.id=params['id'];

    });
    if (this.id) {
    //this.getStudent(this.student.id);
    this.getStudent(this.id);
  }
  }

  save() {
    if (!this.id) {
      this.studentService.AddStudent({ ...this.student }).then((res) => {
       // this.formAdd.resetForm();
      })
    } else {
      this.studentService.updateStudent(this.student);
    }
  }

getStudent(id) {
  this.studentService.getStudent(id).subscribe(res => {
  this.student = res.data() as Student;
  this.student.id = res.id;
  });
  }
  


}
