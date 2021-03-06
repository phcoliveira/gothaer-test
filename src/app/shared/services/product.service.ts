import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  get productsCol(): AngularFirestoreCollection<object> {
    return this.firestore.collection<object>('products')
  }

  get products$(): Observable<Product[]> {
    return this.productsCol.valueChanges().pipe(
      map((data) => data.map((obj) => new Product(obj)))
    )
  }

  getProductDoc(id: string): AngularFirestoreDocument<object> {
    return this.firestore.doc<object>(`products/${id}`)
  }

  getProduct(id: string): Observable<Product> {
    return this.getProductDoc(id)
      .valueChanges()
      .pipe(
        map((obj) => new Product(obj))
      )
  }
}
