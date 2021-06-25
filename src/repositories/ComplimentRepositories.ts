import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../entities'

@EntityRepository(Compliment)
export class ComplimentsRepositories extends Repository<Compliment> {}
