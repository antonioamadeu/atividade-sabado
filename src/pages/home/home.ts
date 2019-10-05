import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
//
  }
  contatos = [
    {
    nome: 'Dona Florinda',
    telefone:'12345678',
    email: 'd.florinda@gmail.com'
    
    },
    {
    nome: 'Madruga',
    telefone: '11958013358',
    email: 'madruguinha@gmail.com'
    },
    {
    nome: 'Kiko',
    telefone: '1112521984',
    email: 'kiko@gmail.com'
    }
    ]
    onItemClick (contato){
      console.log("item-click", contato)
      }
      
}
