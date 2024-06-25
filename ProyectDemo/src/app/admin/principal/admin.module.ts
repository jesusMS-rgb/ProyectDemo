import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [MainPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        NgbModule,
        SharedModule
    ]
})
export class AdminModule { }
