import { Component, OnInit } from '@angular/core';
import { Equipment } from '../equipment';
import { EquipmentService } from '../equipment.service';
@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  equipment !: any;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.getEquipment();
  }

  private getEquipment() {
    this.equipmentService.getEquipmentList().subscribe((data: any) => {
      this.equipment = data;
  });
  }

}
