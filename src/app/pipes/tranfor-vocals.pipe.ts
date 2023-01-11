import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranforVocals'
})
export class TranforVocalsPipe implements PipeTransform {

  transform(value:string): string {
    return value
    .split('a').join('0')
    .split('e').join('1')
    .split('i').join('2')
    .split('o').join('3')
    .split('u').join('4')
  }

}
