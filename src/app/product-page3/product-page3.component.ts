import { Component } from '@angular/core';
import { products3 } from 'C:/Users/User/OneDrive/Рабочий стол/web/Lab4/Kaspi/src/app/products3';


@Component({
  selector: 'app-product-page3',
  templateUrl: './product-page3.component.html',
  styleUrls: ['./product-page3.component.css']
})
export class ProductPage3Component {
  products=[...products3]

  public share(link:string){
    window.location.href = link;
  }
  likeButtonClick(index:number) {
    this.products[index].numberOfLikes++;
  }
  deleteButton(index:number){
    this.products.splice(index,1)
  }
}
