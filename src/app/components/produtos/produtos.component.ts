import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];

  constructor(
    public produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  public findAll() {
    this.produtoService.findAll()
    .subscribe(response => {
      this.produtos = response;
    },
  errors => {});
  }

}
