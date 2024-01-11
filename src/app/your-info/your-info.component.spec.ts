import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourInfoComponent } from './your-info.component';

describe('YourInfoComponent', () => {
  let component: YourInfoComponent;
  let fixture: ComponentFixture<YourInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourInfoComponent]
    });
    fixture = TestBed.createComponent(YourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
