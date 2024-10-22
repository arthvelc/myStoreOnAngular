import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string; // Cambié 'name' a 'title' para coincidir con los datos recibidos
    price: number;
    description: string;
    category: Category; // Cambié 'category' a 'category' para coincidir con los datos recibidos
    images: string[]; // Cambié 'imageUrl' a 'images' para recibir un array de URLs de imágenes
  }