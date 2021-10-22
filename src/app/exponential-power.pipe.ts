import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPower'
})
export class ExponentialPowerPipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }

}
