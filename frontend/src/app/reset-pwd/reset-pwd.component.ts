import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  msgConfirmacao(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000, 
      horizontalPosition: "right", 
      verticalPosition: "top"
    })
  }

}
