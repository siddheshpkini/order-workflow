import { Job } from "./job.model";
export class JobStatus{
  nextID: string[] = [];
  
  constructor(public status: string, public nextStatus: string, public jobs: Job[]){
    this.nextID.push(nextStatus);
  }
  
}  