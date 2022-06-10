import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public firstName : string = '';
  public lastName : string = '';
  public username : string = '';
  public password : string = '';

  public message : string = '';


  constructor(private http: HttpClient,private router: Router) { }
  readonly APIurl="http://localhost:45428/api/";

  ngOnInit(): void {
  }
  registerclick()
  {
    debugger;
    /// get la server cu param user si pass
    let params= new HttpParams();
    params.set('First Name', this.lastName);
    params.set('Last Name', this.firstName);
    params.set('username', this.username);
    params.set('password', this.password);
   // return this.http.get<any>(this.APIurl+'/users/RegisterUser',{params:params}).subscribe(data =>
    this.http.get<any>('http://localhost:45428/api/users/RegisterUser?lastName='+ this.lastName + '&firstName=' + this.firstName+ '&username=' + this.username+ '&password=' + this.password).subscribe(data =>
    {
      debugger;
      this.message = data;
        console.log(data)
       
        // this.router.navigate(['']);
    });

  }

}
