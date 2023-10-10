import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header-candidate',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderCandidateComponent implements OnInit {
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
    if (menu === "logIn") {
      this.routerPath.navigate([`/login-candidate`])
    }
    else if (menu === "basic") {
      //this.routerPath.navigate([`/carreras/${userId}/${token}`])
      this.routerPath.navigate([`/basic-candidate`])
    }
    else if (menu === "academic") {
      this.routerPath.navigate([`/academic-candidate`])  
      //this.routerPath.navigate([`/signup2/${userId}/${token}`])
    }
    /*else if (menu === "notificacion") {
      this.routerPath.navigate([`/notificacion/${userId}/${token}`])
    }
    else if (menu === "recargas") {
      this.routerPath.navigate([`/recargas/${userId}/${token}`])
    }
    else if( menu == "deporte") {
      this.routerPath.navigate([`/deporte/${userId}/${token}`])
    }
    else if (menu === "transacciones") {
      this.routerPath.navigate([`/transacciones/${userId}/${token}`])
    }
    else if (menu === "saldo") {
      this.routerPath.navigate([`/saldo/${userId}/${token}`])
    }
    else if (menu === "retirar") {
      this.routerPath.navigate([`/retiros/${userId}/${token}`])
    }*/
    else {
      //this.routerPath.navigate([`/apuestas/${userId}/${token}`])
      this.routerPath.navigate([`/basic`])
    }

  }
}