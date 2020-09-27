import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropTestComponent } from './drag-and-drop-test.component';

describe('DragAndDropTestComponent', () => {
  let component: DragAndDropTestComponent;
  let fixture: ComponentFixture<DragAndDropTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
