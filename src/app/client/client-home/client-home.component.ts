import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent  implements OnInit {
  //userId: number;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
  ){}

    ngOnInit(): void {
    //this.userId=parseInt(this.router.snapshot.params.userId)
  }
    
}
