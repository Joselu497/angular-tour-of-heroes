import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHeroComponent } from './info-hero.component';

describe('InfoHeroComponent', () => {
  let component: InfoHeroComponent;
  let fixture: ComponentFixture<InfoHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoHeroComponent]
    });
    fixture = TestBed.createComponent(InfoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
