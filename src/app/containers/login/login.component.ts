import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {

  }

  ngOnInit() {
    this.afAuth.idToken.subscribe(console.log)
  }

  loginEmailAndPassword(){
    console.log(this.email)
    console.log(this.password)
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(()=>{
      // alert('Login feito com sucesso')
      this.router.navigate(['/admin'])
    })
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  
}
