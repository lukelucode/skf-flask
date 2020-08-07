import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChecklistService } from '../../../core/services/checklists.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit
{

  // bread crumb items
  breadCrumbItems: Array<{}>;
  public queryString;
  public checklistData: any;

  constructor(
    private modalService: NgbModal,
    private _checklistCategoryService: ChecklistService
  ) { }

  ngOnInit()
  {
    this.breadCrumbItems = [{ label: 'Checklists' }, { label: 'View', active: true }];
    this._fetchData();
  }

  /**
   * Checklist data fetches
   */
  private _fetchData()
  {
    this._checklistCategoryService
      .getChecklistsCollection(Number(localStorage.getItem('categorySelector')))
      .subscribe(checklist => this.checklistData = checklist);
  }

}