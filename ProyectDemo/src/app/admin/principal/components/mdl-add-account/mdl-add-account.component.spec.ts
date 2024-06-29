import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlAddAccountComponent } from './mdl-add-account.component';

describe('MdlAddAccountComponent', () => {
  let component: MdlAddAccountComponent;
  let fixture: ComponentFixture<MdlAddAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdlAddAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdlAddAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
