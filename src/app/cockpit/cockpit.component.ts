import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output is how you make your properties into events that get broadcasted to other
  // components. btw <> indicate a generic type. These get emitted below
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  // @ViewChild allows us to look into the template - takes a local ref from the template. 
  // ElementRef is an ng type. @viewChild allows us to get the element before the function
  // is called, as is the case below with nameInput
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // Here's where serverCreated gets emitted
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // Below are basically two ways to do the same thing
      // nativeElement is a property of ElementRef, does just what the name implies...
      // gets the native element (in this case, an input) of s..ContentInput
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
