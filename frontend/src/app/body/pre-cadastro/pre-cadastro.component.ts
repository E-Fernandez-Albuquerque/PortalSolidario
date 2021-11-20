import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.css']
})
export class preCadastroComponente implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  msgConfirmacao(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 4000, 
      horizontalPosition: "right", 
      verticalPosition: "top"
    })
    this.router.navigate([''])
  }
  
}
