import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LightswitchComponent } from './lightswitch.componnet';

import { By } from '@angular/platform-browser';

// let fixture: ComponentFixture<LightswitchComponent>;

describe('LightswitchComponent Working fine', () => {

  let component
  let fixture

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightswitchComponent]
    });
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
  });

  it('should create the component==>', () => {
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should have skyblue css class in <h2> element', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.classList.value;
    expect(bgColor).toBe('skyblue');
  });

  it('should click Set button', async(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('.lightSwitch'));
    let p = fixture.debugElement.nativeElement.querySelector('p');
    expect(component.isOn).toBe(false);
    expect(p.textContent).toContain('The light is Off');

    buttonElement.triggerEventHandler('click', null);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.isOn).toBe(true);
      expect(p.textContent).toContain('The light is ONN');

    });
  }));

});