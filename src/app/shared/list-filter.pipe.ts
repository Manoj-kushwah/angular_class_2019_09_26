import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: User[], args?: any): any {
    console.log("value: ", value, "args: ", args);
    console.log("value: ", value, "args limit: ", args[1]);
    value = value.filter(value1=> (value1.getFirstName()+" "+value1.getLastName()).match(new RegExp(args[0], "i")));
    if(args[1]){
      let limited = [];
      for(let i = 0; i<args[1]; i++) {
        if(value[i]){
          limited.push(value[i]);
        }
      }
      value = limited;
    }
    console.log("fainal: ", value);
    return value;
  }

}
