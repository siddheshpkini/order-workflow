import { JobStatus } from "./jobStatus.model";

export class Dashboard{
  constructor (public name: string, public jobStatuses: JobStatus[]){}
}