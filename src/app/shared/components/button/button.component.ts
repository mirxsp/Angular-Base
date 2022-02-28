import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
      'class': 'active'
  }
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() iconName!: IconName;

  constructor() { }

  ngOnInit(): void {
  }

}
