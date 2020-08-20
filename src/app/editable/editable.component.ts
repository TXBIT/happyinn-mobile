import { OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

export class EditableComponent implements OnInit, OnChanges {

  @Input() entity: any;

  @Input() set field(entityField: string) {
    this.entityField = entityField;
    this.setOriginalValue();
  }

  @Input() className: string;

  @Input() style: any;

  @Output() entityUpdated = new EventEmitter();

  isActiveInput = false;

  public entityField: string;

  public originalEntityValue: any;

  constructor() { }

  ngOnInit() {
  }

  // when component is changed
  ngOnChanges() {
    this.setOriginalValue();
    this.isActiveInput = false;
  }

  // emit update entity
  updateEntity() {
    const entityValue = this.entity[this.entityField];

    if (entityValue !== this.originalEntityValue) {
      this.entityUpdated.emit({
        [this.entityField]: this.entity[this.entityField]
      });
      this.setOriginalValue();
    }
    this.isActiveInput = false;
  }

  // cancel update
  cancelUpdate() {
    this.isActiveInput = false;
    this.entity[this.entityField] = this.originalEntityValue;
  }

  // save original value before update
  setOriginalValue() {
    this.originalEntityValue = this.entity[this.entityField];
  }

}
