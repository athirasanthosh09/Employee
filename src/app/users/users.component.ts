import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  
      name:any
      password:any

      constructor( private http: HttpClient, private route:Router) { }

      ngOnInit(): void {
        
    
      }
    
      submit(name:any , pswd:any)
       {

        name= name.value
        pswd=pswd.value
        console.log(name , pswd);
        


       
         if(name=="athira" && pswd=="athira123"){
          this.route.navigateByUrl('userhome')
         }
         else{
          alert('invalid')
         }
    
      }
       
}
  
    
  

