import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class createOrphanages1603149389652 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'about',
            type: 'text'
          },
          {
            name: 'instructions',
            type: 'text'
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false
          }
        ]
      }),
      true
    )
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages')
  }
}
