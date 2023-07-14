import { Injectable } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class AppService {
  getHello(): string {
    var data : any = ''
    if (fs.existsSync('/tmp/schema.gql')){
      fs.readFile('/tmp/schema.gql', 'utf8', function(err, ss){
        data =ss
        if(err){
          data = err
        }
      });
    }
      else{ data = 'no exists';
  
}

    return data;
  }
}
