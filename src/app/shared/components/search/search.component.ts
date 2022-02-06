import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Input() placeholder = '';
    @Output() onSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(value: string){
    this.onSearch.emit(value);
    console.log("search:" + value)
  }

}
