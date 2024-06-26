import { isPlatformBrowser } from '@angular/common';
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  template: ` <div> {{ time }}</div> `,
  styles: ``,
  // changeDetection: ChangeDetectionStrategy.OnPush // d|-_-|b
})
export class ClockComponent {
  time = ''; //new Date().toLocaleTimeString();

  constructor(
    private app: ApplicationRef,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private pid: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.pid))
      this.zone.runOutsideAngular(() => {
        setInterval(() => {
          this.time = new Date().toLocaleTimeString();
          this.cdr.detectChanges();
        }, 1000);
      });
  }
}
