import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {
  slides = [
    {
      title: "Compra Fácilmente",
      description: "Con nuestra aplicación, comprar boletos para tus eventos favoritos es rápido, seguro y sencillo.",
      image: "../../assets/images/2.webp",
      help_text: "Descarga nuestra app y comienza a disfrutar de la mejor experiencia de compra de boletos.",
      class: ""
    },
    {
      title: "Boletos Personalizados",
      description: "Recibe boletos personalizados y exclusivos para eventos seleccionados basados en tus preferencias y gustos.",
      image: "../../assets/images/3.webp",
      help_text: "Regístrate ahora para recibir ofertas exclusivas y boletos personalizados directamente en tu dispositivo.",
      class: "slide-3"
    },
    {
      title: "No te Pierdas Nada",
      description: "Obtén notificaciones instantáneas sobre nuevos eventos, promociones especiales y actualizaciones importantes.",
      image: "../../assets/images/4.webp",
      help_text: "Descarga nuestra app y mantente al tanto de todo lo que sucede en el mundo del entretenimiento.",
    },
    {
      title: "Descubre Eventos Exclusivos",
      description: "Explora una amplia variedad de eventos y espectáculos disponibles solo para ti.",
      image: "../../assets/images/1.webp",
      help_text: "Encuentra más información sobre nuestros eventos y boletos logueando en el siguiente botón.",
      class: "slide-1 red-title"
    },
  ];

  constructor() { }

  ionViewDidEnter() {
    console.log("Ya entre y vi la intro");
    // Vamos a guardar en el storage que ya vio la intro
  }

}
