import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pwd',
  templateUrl: './new-pwd.component.html',
  styleUrls: ['./new-pwd.component.css']
})
export class NewPwdComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  msgConfirmacao(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 4000, 
      horizontalPosition: "right", 
      verticalPosition: "top"
    })
    this.router.navigate(['login'])
  }

}
