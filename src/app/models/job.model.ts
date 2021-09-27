export class Job{
  constructor(
    public jobID: number,
    public jobTask: string,
    public jobTaskIncharge: string,
    public carModel: string,
    public jobIncharge: string,
    public amountDue: number){}
}