import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student = new Student();
  submitted = false;
  id: string;

  constructor(private studentService: StudentService,
    private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // this.student.id = params['id'];
      this.id = params['id'];
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
        this.toastr.success('', 'étudiant ajouté avec succés');
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
