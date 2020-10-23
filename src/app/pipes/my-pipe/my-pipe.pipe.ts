import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string): unknown {
    console.log(value);
    return value.toUpperCase();
  }

}
