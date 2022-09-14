import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any): string {

    if(value !== null && value !== undefined){
      //desgranar el objeto para sacar el nombre de la moneda y del simbolo, y devolverlo en formato string
      const moneda: any = Object.values(value);
      let result = "";
      moneda.forEach((value:any) => result += value.name + ' - ' + value.symbol + " ");
      return result;
    }
    return "No hay datos de moneda";
  }

}
