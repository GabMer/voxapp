import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class TabsPage implements OnInit {
  constructor(private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }
  //para prueba
  createRepertory() {
    this.navCtrl.navigateForward('/tabs/repertorio');
  }
}
