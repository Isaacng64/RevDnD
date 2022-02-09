import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from '../equipment';
import { EquipmentService } from '../equipment.service';
@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  equipment: any;

  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEquipment();
  }

  private getEquipment() {
    this.equipmentService.getEquipmentList().subscribe((data: any) => {
      this.equipment = data;
    });
  }

  updateEquipment(id: number) {
    this.router.navigate(['update-equipment', id]);
  }

  deleteEquipment(id: number) {
    this.equipmentService.deleteEquipment(id).subscribe(data => {
      console.log(data);
      this.getEquipment();
    });
  }

  viewEquipmentDetails(id: number){
    this.router.navigate(['equipment-details', id]);
  }

}
