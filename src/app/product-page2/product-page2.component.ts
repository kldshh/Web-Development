
import { Component, Input } from '@angular/core';
import { products2 } from 'C:/Users/User/OneDrive/Рабочий стол/web/Lab4/Kaspi/src/app/products2';


@Component({
  selector: 'app-product-page2',
  templateUrl: './product-page2.component.html',
  styleUrls: ['./product-page2.component.css']
})
export class ProductPage2Component {
  products=[...products2]
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
