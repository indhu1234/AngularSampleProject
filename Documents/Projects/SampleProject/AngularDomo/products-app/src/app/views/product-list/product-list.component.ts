import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

declare var domo: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
  prodList: any = [];
  list:any=[];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    domo.get('/data/v1/ecommerce?fields=product_id,product,units_available,unit_cost')
      .then(data => {
        // this.prodList = data;
        this.prodList = data;
         console.log('Testing');
        //this.createDataset(data);  
      });
    //  this.create(this.prodList);    
  }

  sendData() {
    let i: number;
    for (i = 0; i < this.prodList.length; i++) {
      this.prodList[i].total_cost = this.prodList[i].units_available * this.prodList[i].unit_cost;
    
    console.log("Product List :: ", this.prodList);
     this._apiService.addToCollection('productslist', this.prodList[i]).subscribe(
       list=>console.log("subsciption",list)
     )
     }
    //  console.log("APP :: ",this._apiService.getAllfromCollection('productslist'));
    //  domo.post(`/domo/datastores/v1/collections/productslist/documents/`, {content:this.prodList})
    //    .then( data=> {
    //      this.list=data 
    //      console.log("Datas in AppDB :: ",this.list)});

  }

}
