import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Projects } from '../models/projects';
import { inject } from '@loopback/core';

export class ProjectsRepository extends DefaultCrudRepository< 
    Projects,
    typeof Projects.prototype.id
>{
    constructor(
        @inject('datasources.db') protected datasource: juggler.DataSource,
    ) {
        super(Projects, datasource);
    }
}
