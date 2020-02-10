/**
 * This file demonstrates how to create a custom component in Angular Material
 */
import { Component } from '@angular/core';
import { Components, MaterialPanelComponent } from 'angular-material-formio';
import PanelComponent from 'formiojs/components/panel/Panel.js';

class CustomPanelComponent extends PanelComponent {
  // Custom logic goes here.
}
@Component({
  template: '<strong>BugiWugi</strong>'
})
export class CustomMaterialHeaderComponent extends MaterialPanelComponent {
  // Custom Material logic goes here.
}
(CustomPanelComponent as any).MaterialComponent = CustomMaterialHeaderComponent;
Components.addComponent('custom-panel', CustomPanelComponent);
