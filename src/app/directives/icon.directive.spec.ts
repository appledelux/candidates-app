import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconDirective } from './icon.directive';

@Component({
  template: "<mat-icon [appIconDirective]='checked'>",
})
class TestIconChecked {
  checked = 'check';
}

@Component({
  template: "<mat-icon [appIconDirective]='checked'>",
})
class TestIconNoChecked {
  checked = 'close';
}

describe('IconDirective', () => {
  let fixtureTestCheckedCmp: ComponentFixture<TestIconChecked>;
  let fixtureTestNoCheckedCmp: ComponentFixture<TestIconNoChecked>;
  let renderer2: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    const renderer2Mock = jasmine.createSpyObj('renderer2Mock', [
      'addClass',
      'setProperty',
    ]);
    TestBed.configureTestingModule({
      declarations: [TestIconChecked, TestIconNoChecked],
      imports: [IconDirective],
      providers: [
        {
          provide: Renderer2,
          useValue: renderer2Mock,
        },
      ],
    });

    fixtureTestCheckedCmp = TestBed.createComponent(TestIconChecked);
    fixtureTestNoCheckedCmp = TestBed.createComponent(TestIconNoChecked);
    renderer2 = TestBed.inject(Renderer2) as jasmine.SpyObj<Renderer2>;
  });

  it('should create', () => {
    let element: ElementRef = fixtureTestCheckedCmp.debugElement.nativeElement;
    const directive = new IconDirective(element, renderer2);
    expect(directive).toBeTruthy();
  });

  it('should return the check icon', () => {
    const element: ElementRef =
      fixtureTestCheckedCmp.debugElement.nativeElement;
    const directive = new IconDirective(element, renderer2);

    fixtureTestCheckedCmp.detectChanges();

    const debugElement = fixtureTestCheckedCmp.debugElement.nativeElement;

    const matIconChecked = debugElement.querySelector('mat-icon');
    expect(matIconChecked.textContent).toEqual('check');
    debugElement.remove();
  });

  it('should return the check icon', () => {
    let element: ElementRef =
      fixtureTestNoCheckedCmp.debugElement.nativeElement;
    const directive = new IconDirective(element, renderer2);
    fixtureTestNoCheckedCmp.detectChanges();

    const debugElement = fixtureTestNoCheckedCmp.debugElement.nativeElement;

    const matIconNoChecked = debugElement.querySelector('mat-icon');
    expect(matIconNoChecked.textContent).toEqual('close');
    debugElement.remove();
  });
});
