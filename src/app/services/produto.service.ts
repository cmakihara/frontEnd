import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from './../models/produto.model';

@Injectable()
export class ProdutoService {
private produtoURL = 'api/produtos';

  constructor(
    public http: HttpClient
  ) {}

  public findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtoURL);
  }

}
