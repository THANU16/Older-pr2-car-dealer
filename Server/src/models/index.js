// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Leads, Profile } = initSchema(schema);

export {
  Leads,
  Profile
};