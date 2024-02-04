import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {
  categories: any;
  searchTerm: string = '';

  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
  ) {}

  ionViewDidEnter() {
    this.getCategories();
  }

  getCategories() {
    this.events.getCategories().then(
      res => {
        this.categories = res;
        console.log("Categorias desde el servidor", this.categories);
      }
    );
  }

  getCategory(id: string) {
    this.events.getCategory(id).then(
      res => {
        this.categories = [res];
        console.log("Categoria filtrada", this.categories);
      }
    );
  }

  // Resto del código...
}
