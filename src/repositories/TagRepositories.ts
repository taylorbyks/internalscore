import { EntityRepository, Repository } from 'typeorm'
import { Tag } from '../entities'

@EntityRepository(Tag)
export class TagsRepositories extends Repository<Tag> {}
