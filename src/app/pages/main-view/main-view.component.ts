import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { JobStatus } from 'src/app/models/jobStatus.model';
import { Dashboard } from 'src/app/models/dashboard.model';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  dashboard: Dashboard = new Dashboard('Test Board', [
    new JobStatus('open', 'WIP', [
      new Job(871, '', '', 'Auris TR345', 'Ahmed', 299),
      new Job(870, 'WASHING', 'RASHID', 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', 124.49)
    ]),

    new JobStatus('WIP', 'ready', [
      new Job(868, '', '', 'Auris TR345', 'Ahmed', 299)
    ]),

    new JobStatus('ready', 'payment Due', [
      new Job(867, 'WASHING', 'RASHID', 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', 124.49),
      new Job(866, '', '', 'Auris TR345', 'Ahmed', 299)
    ]),

    new JobStatus('payment Due', 'payment Due', [
      new Job(865, '', '', 'Auris TR345', 'Ahmed', 299),
      new Job(864, '', '', 'Auris TR345', 'Ahmed', 299)
    ])    

  ])

  ngOnInit(): void {
  }

/*   openJob= [
    '123',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  wipJob = [
    'Gets up',
    'Brushf teeth',
    'Take a dshower',
    'Check e-mail',
    'Walk dog'
  ];

  readyJob = [
    'Get uasp',
    'Bruasdfsh teeth',
    'Take a fgshower',
    'Checsdfk e-mail',
    'Walk sdfgdog'
  ];

  paymentDueJob = [
    'Getasd up',
    'Brushasd teeth',
    'Take adfgf shower',
    'Checkghfh e-mail',
    'Walk asdfghdog'
  ];
 */
  drop(event: CdkDragDrop<Job[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("same:" + event.item.data);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log("other:" + event.item.data);
    }
  }

}
