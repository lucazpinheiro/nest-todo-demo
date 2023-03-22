import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { msg: 'Up and running' };
  }
}
