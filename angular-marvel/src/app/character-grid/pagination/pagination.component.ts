import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationData } from 'src/app/model/pagination.dto';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  paginationData : PaginationData;

  @Output()
  refreshPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendIndex(index) {
    this.refreshPage.emit(index);
  }
}
