import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer ="http://190.131.209.106";
  constructor() { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    );
  }

  getLocalEvents(){
    return dataEvents;
  }

  // Obtener todas las categorías
  getCategories() {
    return fetch(`${this.urlServer}/categories`).then(
      response => response.json()
    );
  }

  // Obtener una categoría específica por su ID
  getCategory(id: string) {
    return fetch(`${this.urlServer}/categories/${id}`).then(
      response => response.json()
    );
}
  
}