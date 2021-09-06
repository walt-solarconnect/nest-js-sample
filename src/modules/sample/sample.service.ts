import { Injectable } from '@nestjs/common';
import { Logger } from '@src/logger/logger.service';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class SampleService {
  private readonly logger: Logger = new Logger(this.constructor.name);

  /**
   * TODO master/slave 구조일 때 아래의 경우 master 를 사용합니다. master / slave 를 선택적으로 사용하려면 queryRunner 를 활용해야합니다.
   * this.connection.createQueryRunner('slave');
   * @param connection
   */
  constructor(@InjectConnection() private readonly connection: Connection) {}

  hello() {
    this.logger.debug(`sample service works`);
    return 'world';
  }
}
