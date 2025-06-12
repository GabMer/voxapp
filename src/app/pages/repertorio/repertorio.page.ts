import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-repertorio',
    templateUrl: './repertorio.page.html',
    styleUrls: ['./repertorio.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, RouterModule]
})
export class RepertorioPage {

    canciones: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any[]>('assets/temas.json').subscribe((data) => {
            this.canciones = data;
        });
    }
}