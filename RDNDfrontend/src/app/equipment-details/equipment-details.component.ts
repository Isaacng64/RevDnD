import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from '../equipment';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {

  id!: number;
  equipment: Equipment = new Equipment();

  constructor(
    private route: ActivatedRoute,
    private equipmentService: EquipmentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.equipment = new Equipment();

    this.equipmentService.getEquipmentById(this.id).subscribe(data => {
      this.equipment = data;
    });
  }

}
