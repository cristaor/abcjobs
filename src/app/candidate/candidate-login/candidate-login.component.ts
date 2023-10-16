import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {
         constructor(  private routerPath: Router, private router: Router
  ) { }
  
  ngOnInit() {
  }
  onLogInUsuario(username: string, password: string) {
        console.log(username, password)
        this.router.navigate([`/basic-candidate`])
  }
  goTo(menu: string) {
    //const userId = parseInt(this.router.snapshot.params.userId)
    //const token = this.router.snapshot.params.userToken
    if (menu === "newCandidate") {
      this.routerPath.navigate([`/basic-candidate`])
    }
  }
}
