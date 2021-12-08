import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value == 0){
      return "Not available";
    }
    else if (value > 0){
      return "In stock";
    }
    else{
      return "";
    }
    
  }

}
