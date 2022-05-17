import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public students: {name: string, balance: number}[] = []
  public newStudents: {name: string, balance: number}[] = this.students
  public error: string = ''
  public msg: string = ''
  @ViewChild('studentName') studentName!:ElementRef
  @ViewChild('balance') balance!: ElementRef

  constructor() { }

  addStudent(name: string, balance: number){
    if(name === ''){
        this.error = 'Please fill in student name'
      setTimeout(() => {
        this.error = ''
      }, 5000)
    } else {
      this.students.push({name, balance})
      this.msg = 'Added successfully'

      setTimeout(() => {
        this.msg = ''
      this.studentName.nativeElement.value = ''
      this.balance.nativeElement.value = ''
      }, 2000)
    }
  }

  showAllStudents(){
    this.newStudents = this.students
    return this.newStudents
  }

  studentsWithBalance(){
    let filteredData = []
    for (let student of this.students) {
      if (student.balance > 0) {
        filteredData.push(student)
      }
    }

    this.newStudents = filteredData
    console.log(filteredData)
  }

  studentsWithoutBalance(){
    console.log('clicked')
    let filteredData = []
    for (let student of this.students) {
      if (student.balance <= 0) {
        filteredData.push(student)
      }
    }

    this.newStudents = filteredData
    console.log(filteredData)
  }
}
