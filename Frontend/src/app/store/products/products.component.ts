import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-store-products',
  template: ` <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#aabcfe;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#aabcfe;color:#669;background-color:#e8edff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#aabcfe;color:#039;background-color:#b9c9fe;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-mb3i{background-color:#D2E4FC;text-align:right;vertical-align:top}
.tg .tg-lqy6{text-align:right;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
   
  </tr>
  <tr>
    <td class="tg-6k2t">ID</td>
    <td class="tg-6k2t">Name</td>
    <td class="tg-6k2t">Price</td>
    <td class="tg-6k2t">CreatedAt</td>
    <td class="tg-6k2t">UpdatedAt</td>
    <td class="tg-6k2t">Seller Name</td>
    <td class="tg-6k2t">Delete</td>
    <td class="tg-6k2t">Edit</td>
  </tr>
  

<tr *ngFor= "let i of this.data">
<td>{{i.ID}}</td>
<td>{{i.name}}</td>
<td>{{i.price}}</td>
<td>{{i.createdAt}}</td>
<td>{{i.updatedAt}}</td>
<td>{{1}}</td>
<td><Button (click)="deleteProduct(i._id)"> Delete </Button></td>
<td><Button>Edit</Button></td>
</tr>


</table>`
})
export class ProductsComponent implements OnInit {
	data = [];
	constructor (private http:HttpClient, private router: Router){

	}

	ngOnInit(){
	this.http.get('http://localhost:3000/api/product/getProducts').subscribe(res => {this.data = res["data"]; console.log(res)});
	}

	deleteProduct(ident:string)
	{
	var config = {headers:{
	'content-Type' : 'application/json'
	}}
	this.http.delete(environment.apiUrl + 'product/deleteProduct/' + ident, config).subscribe();
	window.location.reload();
	}

	
	 
	}


}









