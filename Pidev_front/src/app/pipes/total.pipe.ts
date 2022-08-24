import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    return value && value.length>0?value.reduce((a,b)=>a+(b.prix * b.quantity),0):0;
  }

}
