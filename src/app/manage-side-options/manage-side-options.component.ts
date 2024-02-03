import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


export interface IManageMenuOption {
  title: string;
  menuOptions: IMenuOption[];

}

export interface IMenuOption {
  name: string;
  component: string;
  path: string;
}

@Component({
  selector: 'app-manage-side-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-side-options.component.html',
  styleUrl: './manage-side-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageSideOptionsComponent {
  @Input('manageMenuOption') manageMenuOption: IManageMenuOption;
  @Output('loadComponent') loadComponent = new EventEmitter<IMenuOption>();

  currentMenu: string;

  onClickLi(menuOption: IMenuOption) {
    if (this.currentMenu !== menuOption.name) {
      this.loadComponent.emit(menuOption);
      this.currentMenu = menuOption.name;
    }
  }

}
