import { ApplicationConfig } from '@loopback/core';
import { RestApplication, RestServer, RestBindings } from '@loopback/rest';
import { MySequence } from './sequence';

/* tslint:disable:no-unused-variable */
// Binding and Booter imports are required to infer types for BootMixin!
import { BootMixin, Booter, Binding } from '@loopback/boot';

import {
  Class,
  Repository,
  RepositoryMixin,
  juggler,
} from '@loopback/repository';

export class GoldenThreadApiApplication extends BootMixin(
  RepositoryMixin(RestApplication),
) {
  constructor(options?: ApplicationConfig) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    this.setupDatasource();

    //connects to mysql database
    var dataSourceConfig = new juggler.DataSource({
      name: "db",
      connector: "loopback-connector-mysql",
      host: 'localhost',
      port: 3306,
      database: 'goldenthread',
      user: 'root',
      password: 'DTgpxz38'
    });
    this.dataSource(dataSourceConfig);
  }

  setupDatasource() {
    const datasource = this.options && this.options.datasource ?
      this.juggler.DataSource(this.options.datasource) : "db";
    this.dataSource(datasource);
  }

  async start() {
    await super.start();

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Try http://127.0.0.1:${port}/ping`);
  }

}