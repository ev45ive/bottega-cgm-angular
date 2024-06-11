import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponentModule } from './music.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MusicComponentModule,
    MusicRoutingModule,
    SharedModule,
  ],
})
export class MusicModule {}
