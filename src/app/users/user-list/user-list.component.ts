import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { YService } from 'src/app/y.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  details: any = []

  updated:any

  constructor(private Route: Router, private http: HttpClient, private service: YService) { }

  ngOnInit(): void {

    this.view()

  }

  addusers(){
    this.Route.navigateByUrl('userdetails/:id')
  }

  add() {
    this.Route.navigateByUrl('userdetails/:id')
  }


  view() {
    this.service.getUsers().subscribe(res => {
      this.details = res
    })
  }


  deleteit(id:any) {
    this.service.deleteUser(id).subscribe(res => {
      alert('deleted')
      this.ngOnInit()
    })
  }

  edit(){
    
  }


}


