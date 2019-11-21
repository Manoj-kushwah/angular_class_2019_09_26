import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userListFilter'
})
export class UserListFilterPipe implements PipeTransform {

  transform(value: {firstName: string, lastName: string, email: string}[], args?: any): any {
    console.log(value, args);
    value = value.filter((element, number, list)=>{
      console.log('match: ', Boolean(String().concat(element.firstName, element.lastName, element.email).match(args)));
      if ((String().concat(element.firstName, element.lastName, element.email).match(args))) {
        return true;
      }
      return false;
    });
    return value;
  }

}
