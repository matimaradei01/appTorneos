import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RankinGanadoresPage } from './rankin-ganadores.page';

describe('RankinGanadoresPage', () => {
  let component: RankinGanadoresPage;
  let fixture: ComponentFixture<RankinGanadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankinGanadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RankinGanadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
