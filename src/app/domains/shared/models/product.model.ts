export interface Product {
    id: number;
    title: string; // Cambié 'name' a 'title' para coincidir con los datos recibidos
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
      image: string;
    };
    images: string[]; // Cambié 'imageUrl' a 'images' para recibir un array de URLs de imágenes
  }