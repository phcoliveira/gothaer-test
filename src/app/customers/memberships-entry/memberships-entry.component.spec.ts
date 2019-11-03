import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsEntryComponent } from './memberships-entry.component';

describe('MembershipsEntryComponent', () => {
  let component: MembershipsEntryComponent;
  let fixture: ComponentFixture<MembershipsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
