import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http=inject(HttpClient);
  categoriesUrl = 'https://api.escuelajs.co/api/v1/categories';

  constructor() { }

  getAllCategories(){
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
