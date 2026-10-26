import { Mastra } from '@mastra/core/mastra';
import { greeting } from 'src/mastra/repositories/greeting.service';

console.log(greeting);

export const mastra = new Mastra({});
