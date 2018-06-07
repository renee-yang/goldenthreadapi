import { repository } from '@loopback/repository';
import { ProjectsRepository } from '../repositories/projects.repository';
import { Projects } from '../models/projects';
import { HttpErrors, get, post, requestBody, param } from '@loopback/rest';

export class ProjectsController {
    constructor(
        @repository(ProjectsRepository) private projectsRepo: ProjectsRepository,
    ) {}

    //add a project 
    @post('/projects')
    async addProject(@requestBody() project: Projects) {
        return this.projectsRepo.create(project);
    }

    //find all projects
    @get('/projects')
    async findProjects(): Promise<Projects[]> {
        return await this.projectsRepo.find();
    }

    //find a project by id
    @get('/projects{id}')
    async findProjectByProjectId(@param.path.number('id') id: number): Promise<Projects> {

        let projectExists: boolean = !!(await this.projectsRepo.count( { id }));

        if (!projectExists) {
            throw new HttpErrors.BadRequest(`Project ID ${id} does not exist.`);
        }

        return await this.projectsRepo.findById(id);
    }

    // //find projects by charityid
    // @get('/projects/{charityid}')
    // async findProjectByCharityId(@param.path.number('charityid') charityid: number): Promise<Projects> {
        
    //     return await this.projectsRepo.
    // }
}