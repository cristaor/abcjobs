import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //userId: number;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    //this.userId=parseInt(this.router.snapshot.params.userId)
  }
  goTo(menu: string) {
    //const userId = parseInt(this.router.snapshot.params.userId)
    //const token = this.router.snapshot.params.userToken
    if (menu === "login-candidate") {
      this.routerPath.navigate([`/login-candidate`])
    }
    else if (menu === "login-client") {
      //this.routerPath.navigate([`/carreras/${userId}/${token}`])
      this.routerPath.navigate([`/login-client`])
    }
    else if (menu === "login-recruiter") {
      this.routerPath.navigate([`/login-recruiter`])  
      //this.routerPath.navigate([`/signup2/${userId}/${token}`])
    }
    else {
      //this.routerPath.navigate([`/apuestas/${userId}/${token}`])
      this.routerPath.navigate([`/`])
    }

  }
}
