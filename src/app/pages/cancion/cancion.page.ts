import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Tema {
    nombre: string;
    subtitulo: string;
    acordes: string;
    ruta: string;
    folder: string;
    imagenes: string[];
}

@Component({
    selector: 'app-cancion',
    standalone: true,
    imports: [IonicModule, CommonModule, RouterModule],
    templateUrl: './cancion.page.html',
    styleUrls: ['./cancion.page.scss'],
})
export class CancionPage implements OnInit {
    carpeta = '';
    temaActual: Tema | null = null;
    anterior: string | null = null;
    siguiente: string | null = null;
    temas: Tema[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.carpeta = params.get('id') || '';
            this.cargarTemas();
        });
    }

    cargarTemas() {
        this.http.get<Tema[]>('assets/temas.json').subscribe(data => {
            this.temas = data;
            const index = this.temas.findIndex(t => t.folder === this.carpeta);

            if (index !== -1) {
                this.temaActual = this.temas[index];
                this.anterior = index > 0 ? this.temas[index - 1].folder : null;
                this.siguiente = index < this.temas.length - 1 ? this.temas[index + 1].folder : null;
            } else {
                this.router.navigate(['/repertorio']);
            }
        });
    }

    goBack() {
        this.router.navigate(['/repertorio']);
    }

    navegarA(folder: string) {
        this.router.navigate(['/tema', folder]).then(() => {
            this.carpeta = folder;
            this.cargarTemas();
        });
    }

    getNombreTema(folder: string): string {
        const tema = this.temas.find(t => t.folder === folder);
        return tema ? tema.nombre : '';
    }

    onImageError(event: Event) {
        const element = event.target as HTMLImageElement;
        element.style.display = 'none';
        console.error(`Error cargando imagen: ${element.src}`);
    }
}