import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css']
})
export class CandidateHomeComponent implements OnInit {
  //userId: number;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
  ){}
 
 ngOnInit(): void {
    //this.userId=parseInt(this.router.snapshot.params.userId)
  }
  
}