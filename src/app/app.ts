import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


export interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'SUR DIGITAL BOLIVIA ';
  encargado: string = 'Erwin vismar amador corimayo';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = false;
  categorias: string[] = ['Celulares', 'Accesorios', 'Laptops', 'Tablets'];

  producto: Producto = {
    nombre: 'iPhone 15 Pro',
    precio: 6800,
    disponible: false
  };
}
