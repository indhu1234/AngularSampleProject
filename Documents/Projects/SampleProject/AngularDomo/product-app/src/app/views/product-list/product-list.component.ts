import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';




declare var alasql: any;
declare var domo: any;

interface appData {
  product_id:number
  product:string;
  units_available:number;
  unit_cost:number;
  total_cost:number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  public prodList: any = [];
 public toApp = [];
  list: appData[]=[];
  columns = ['product_id' , 'product' ,  'units_available' , 'unit_cost', 'total_cost' ];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
     this.getList();
  
  }

  getList() {
    domo.get('/data/v1/ecommerce?fields=product_id,product,units_available,unit_cost')
      .then(data => {
       // this.prodList = data;
       this.prodList = data;
       this.list=data;
        console.log("Datas to interface :: ",this.list);
        console.log('Testing');
        //this.createDataset(data);  
      });
    //  this.create(this.prodList);    
  }

   
    sendData()
    {

      ///domo/datastores/v1/collections/campaigns/documents/query?groupby=content.campaignName,
      //  content.month
      // &count=documentCount
       // &avg=content.clicks avgClicks, content.impressions avgImps 
       // &sum=content.clicks sumClicks, content.impressions sumImps
      // &max=content.clicks maxClicks, content.impressions maxImps  
        //&orderby=sumClicks descending';
        let i;
        for(i=0;i<this.prodList.length;i++)
        {
           this.prodList[i].total_cost=this.prodList[i].units_available * this.prodList[i].unit_cost;
        }
        console.log("Product List :: ", this.prodList); 
        this._apiService.addToCollection('productListApp',this.prodList);
        // domo.post('/domo/datastores/v1/collections/productListApp/documents/', {content:this.prodList})
        //  .then( data=> console.log(data));




    //this.createDataset(this.prodList);
    //   this.toApp=alasql("SELECT product_id, product, units_available, unit_cost, (units_available * unit_cost) FROM ? ", [this.prodList]);
    //   console.log("datas to app :: ", this.toApp);
    //   domo.post('/domo/datastores/v1/collections/', this.toApp)
    // .then(data => console.log("Datas : ",data));
    // this._apiService.exportCollection();

      //this.DataToApp(this.toApp);
    }
    // DataToApp(params)
    // {
    //   // this._apiService.addToCollection('Productapp',params);
    //   this._apiService.queryCollection('Productapp',this.toApp);
    //     // .subscribe(data => {
        //  this.gd=data });

           // console.log("Subscription :: ",this.gd);
          //console.log("Successfully Datas stored in DomoApp")
      
    //}

    // create(param: appData){
    //   console.log("param :: ",param);
    //   return(this.apiService.addToCollection("productListApp",param))
      
    //   // this._http.post(this._endPoint, param)
    //   // .map(res => <IEmployee> res);
    // }



    //  createDataset(prodList)
    //  {
    //   // let query='';
    //   let params={
        
    //     product_id: prodList['product_id'],
    //     product: prodList['product'],
    //     units_available: prodList['units_available'],
    //     unit_cost: prodList['unit_cost'],
    //     total_cost: (prodList['units_available'] * prodList['unit_cost'])
    //   }
    //   this.data.push(query("SELECT product_id,product,units_available,unit_cost, (units_available * unit_cost) as total_cost from ecommerce",[this.prodList]));
    //   this.apiService.addToCollection('productListApp',this.data).subscribe( data=> {
    //     console.log(data);
    //   })
      //   console.log("prod List : ",prodList);
      //    console.log("params :: ",params);
      //   console.log("Total Cost :: ",prodList['total_cost'],"Unit Cost :: ",prodList['unit_cost']);
      //  this.apiService.queryCollection('productListApp',query);
      
      //  this.apiService.addToCollection('productListApp',this.prodList);
       //this.apiService.exportCollection();
       
      //  domo.post('/sql/v1/productListApp', query, {ContentType : "text/plain" })
      //   .then(data => {
      //     this.list=data;
      //     console.log("Datas in AppDB :: ",this.list )}
      //   )
        //  this.apiService.addToCollection("productListApp",query).subscribe(data => {
        //    console.log(data)
        //  })
    
  }
 
      





  

