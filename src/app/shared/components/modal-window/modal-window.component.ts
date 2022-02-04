import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input() title = '';
  @Input() cancelButtonText = '';
  @Input() okButtonText = '';
  @Input() message = '';
  @Output() onResult = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  answerModal(result: boolean){
    this.onResult.emit(result);
  }

}
