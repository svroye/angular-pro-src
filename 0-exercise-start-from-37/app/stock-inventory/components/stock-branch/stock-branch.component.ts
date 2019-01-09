import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input 
          type="text" 
          placeholder="Branch ID"
          formControlName="branch">
          <div class="error" *ngIf="required('branch')">
            Branch ID is required
          </div>
          <div class="error" *ngIf="invalid">
            Invalid branch code
          </div>
        <input 
          type="text" 
          placeholder="Manager Code"
          formControlName="code">
          <div class="error" *ngIf="required('code')">
            Manager ID is required 
          </div>
      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;

  get invalid(){
    return this.parent.get('store.branch').hasError('invalidBranch') && this.parent.get('store.branch').dirty
      && !this.required('branch');
  }

  required(field: string) {
    return this.parent.get(`store.${field}`).hasError('required') && this.parent.get(`store.${field}`).touched
  }
}