import { FlexibleConnectedPositionStrategyOrigin } from '@angular/cdk/overlay';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string = '';
  public password : string = '';
  public showPassword: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  readonly APIurl="http://localhost:45428/api/";
  ngOnInit(): void {
  }
  
  loginclick()
  {
    debugger;
    /// get la server cu param user si pass
    let params= new HttpParams();
    params.set('username', this.username);
    params.set('password', this.password);
    this.http.get<any>('http://localhost:45428/api/users/GetUser?username='+ this.username + '&password=' + this.password).subscribe(data =>
    {
      debugger;
        console.log(data)
        if(data === true)
        {
          localStorage.setItem("CurrentUser", this.username);
          localStorage.setItem(this.username, data);
        }
       
    });
     
   if(this.username==''&& this.password=='')
   {
alert("Introduceti username si parola");
   }
   else 
   {
    this.router.navigate(['/dashboard']);
   }

  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.router.navigate(['/dashboard']);
  }
  logout() {
   
    this.router.navigate(['/login']);
  }
}
