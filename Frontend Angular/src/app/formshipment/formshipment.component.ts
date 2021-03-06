import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../services/form.service';
import { Shipment } from '../model/shipment.model';


@Component({
  selector: 'app-formshipment',
  templateUrl: './formshipment.component.html',
  styleUrls: ['./formshipment.component.css']
})
export class FormshipmentComponent implements OnInit {
  public formShipment : Shipment;
  @Input() formShipmentTitle: string;
  constructor(
    private form: FormService
  ) { }

  ngOnInit() {
    this.form.formShipmentOB.subscribe(
      resFromShipment => this.formShipment = resFromShipment
    )
  }

}
