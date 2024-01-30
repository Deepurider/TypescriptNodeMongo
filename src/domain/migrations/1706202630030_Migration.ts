import { Db } from "mongodb";
import { MigrationInterface } from "mongo-migrate-ts";

export class Migration1706202630030 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const User = db.collection("users");
  }

  public async down(db: Db): Promise<any> {}
}
