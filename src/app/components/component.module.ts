import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { AddHomeComponent } from './add-home/add-home.component';
import {MatMenuModule} from '@angular/material/menu'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    AddHomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    AddHomeComponent,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule
  ],
})
export class ComponentModule { }
