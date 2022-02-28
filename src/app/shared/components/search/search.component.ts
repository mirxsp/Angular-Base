import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
    @Input() placeholder = '';
    @Output() onSearch = new EventEmitter<string>();
    searchValue = '';
    constructor() {}

    ngOnInit(): void {}

    search() {
        this.onSearch.emit(this.searchValue);
        console.log('search:' + this.searchValue);
    }
}
