import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  num:any
  userList: any[]=[]
  name:string=''
  email:string=''
  mobile:any
  age:any
  address:string=''
  gender:string=''
  image:any
 
  constructor(private activateRoute: ActivatedRoute,private api: ApiService) { }

  ngOnInit(): void {

     this.api.getUsers().subscribe((data: any) => {
      this.userList=data.users
       console.log(this.userList);
       this.num=Math.floor((Math.random()*29)+1)

       this.name=this.userList[this.num].firstName
       this.email=this.userList[this.num].email
       this.mobile=this.userList[this.num].phone
       this.gender=this.userList[this.num].gender
       this.age=this.userList[this.num].age
       this.address=this.userList[this.num].address.address
       this.image=this.userList[this.num].image
    
     })

  }

  reload(){window.location.reload()}

}
