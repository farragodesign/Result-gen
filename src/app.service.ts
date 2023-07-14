import { Injectable } from '@nestjs/common';
const fs = require('fs');

@Injectable()
export class AppService {
  getHello(): string {
    var data : any = ''
    if (fs.existsSync('/tmp/schema.gql')){data = 'The path exists.'}else{ data = 'no exists';
}
    return data;
  }
}
