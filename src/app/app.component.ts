import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IManageMenuOption } from './manage-side-options/manage-side-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('manageSection') manageSection!: TemplateRef<any>;
  @ViewChild('manageGrid') manageGrid!: TemplateRef<any>;
  @ViewChild('manageSideOptionsContainer', { read: ViewContainerRef }) manageSideOptionsContainer!: ViewContainerRef;

  manageMenuOptions: IManageMenuOption;
  componentLoad: any;
  sectionName = "";
  constructor(private cdr: ChangeDetectorRef) {
    this.manageMenuOptions = {
      title: "Actions", menuOptions: [
        { name: "Workbench", component: "ManageSectionsComponent", path: "./manage-sections/manage-sections.component" },
        { name: "Create", component: "Create", path: "./forms-control/forms-control.component" },
        { name: "Export", component: "ManageGridComponent", path: "./manage-grid/manage-grid.component" }]
    }
  }


  async ngAfterViewInit() {
    this.manageSideOptionsContainer.clear();
    const { ManageSideOptionsComponent } = await import('./manage-side-options/manage-side-options.component');
    const manageSideOptionsComponent = this.manageSideOptionsContainer.createComponent(ManageSideOptionsComponent);
    manageSideOptionsComponent.instance.manageMenuOption = this.manageMenuOptions;
    manageSideOptionsComponent.instance.loadComponent.subscribe((data) => {
      this.componentView(data);
    })
  }

  async componentView(componentName: any) {
    this.container.clear();
    switch (componentName.name) {
      case "Workbench":
        const { ManageSectionsComponent } = await import('./manage-sections/manage-sections.component');
        this.componentLoad = ManageSectionsComponent;
        break;
      case "Create":
        const { FormsControlComponent } = await import('./forms-control/forms-control.component');
        this.componentLoad = FormsControlComponent;
        break;
      case "Export":
        const { ManageGridComponent } = await import('./manage-grid/manage-grid.component');
        this.componentLoad = ManageGridComponent;
        break;

      default:
        this.container.clear();
    }

    this.container.createComponent(this.componentLoad);
    this.cdr.detectChanges();

  }
}
