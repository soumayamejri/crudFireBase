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

  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  save() {
    if (!this.student.id) {
      this.studentService.AddStudent({ ...this.student }).then((res) => {
        this.formAdd.reset(this.student.firstName);
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
