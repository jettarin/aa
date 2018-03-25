import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts = [
    {name : "Traning",phone:"081-4545540"},
    {name : "Support",phone:"081-4545541"},
    {name : "Customer Service",phone:"081-4545542"}
  ]
  constructor(public navCtrl: NavController) {

  }

  showDetail(contact){
    //alert(contact.name)
    this.navCtrl.push("DetailPage",contact)
  }


}
