import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: User[], args?: any): any {
    console.log("value: ", value, "args: ", args);
    value = value.filter(value=> (value.getLastName().localeCompare(args)!=-1));
    console.log("fainal: ", value);
    return value;
  }

}
