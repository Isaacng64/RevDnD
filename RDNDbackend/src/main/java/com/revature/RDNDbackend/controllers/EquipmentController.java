package com.revature.RDNDbackend.controllers;

import com.revature.RDNDbackend.exceptions.BadRequestException;
import com.revature.RDNDbackend.exceptions.ResourceNotFoundException;
import com.revature.RDNDbackend.models.Equipment;
import com.revature.RDNDbackend.repositories.EquipmentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("rdnd/")
public class EquipmentController {

    private EquipmentRepository equipmentRepository;

    public EquipmentController(EquipmentRepository equipmentRepository) {
        super();
        this.equipmentRepository = equipmentRepository;
    }


    // to create equipment
    // http://localhost:8080/rdnd/equipment/create
    /* Body's JSON
        {
            "equipmentName": "Acid (vial)",
            "equipmentType": "Adventuring Gear",
            "equipmentPrice": 25,
            "hitBonus": 3,
            "damageBonus": 26,
            "equipmentProperties": [
                "Combat",
                "Damage",
                "Utility"
            ],
            "equipmentQuantity": 1
        }
    */
    @PostMapping("equipment/create")
    public ResponseEntity<Equipment> saveEquipment(@RequestBody Equipment equipment) {
        if ((equipment instanceof Equipment) && (equipment != null)) {
            return new ResponseEntity<Equipment>(equipmentRepository.save(equipment), HttpStatus.CREATED);
        } else {
            throw new BadRequestException("Request body does not contain equipment data.");
        }
    }


    // to get all equipment
    // http://localhost:8080/rdnd/equipment/viewall
    @GetMapping("equipment/viewall")
    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }


    // to get equipment by id
    @GetMapping("equipment/{eqId}")
    public Equipment getEquipmentById(@PathVariable("eqId") long eId) {
        Optional<Equipment> equipment = equipmentRepository.findById(eId);

        if (equipment.isPresent()) {
            return equipment.get();
        } else {
            throw new ResourceNotFoundException("Equipment with Id: " + eId + " was not found.");
        }
    }


    // to update equipment
    @PutMapping("equipment/{eqId}")
    public Equipment updateEquipment(@PathVariable("eqId") long eId,
                                     @RequestBody Equipment newerEquipment) {
        // check whether equipment with given id is existing in the database
        Equipment existingEquipment = equipmentRepository.findById(eId).orElseThrow(
                () -> new ResourceNotFoundException("Equipment with Id: " + eId + " was not found."));

        existingEquipment.setEquipmentName(newerEquipment.getEquipmentName());
        existingEquipment.setEquipmentType(newerEquipment.getEquipmentType());
        existingEquipment.setEquipmentType(newerEquipment.getEquipmentType());
        existingEquipment.setEquipmentPrice(newerEquipment.getEquipmentPrice());
        existingEquipment.setHitBonus(newerEquipment.getHitBonus());
        existingEquipment.setDamageBonus(newerEquipment.getDamageBonus());
        existingEquipment.setEquipmentProperties(newerEquipment.getEquipmentProperties());
        existingEquipment.setEquipmentQuantity(newerEquipment.getEquipmentQuantity());

        // save existingEquipment to the database
        equipmentRepository.save(existingEquipment);

        return existingEquipment;
    }


    // to delete equipment
    @DeleteMapping("equipment/{eqId}")
    public boolean deleteEquipment(long eId) {
        try {
            equipmentRepository.deleteById(eId);

            return true;
        } catch (Exception error) {
            throw new BadRequestException("The equipment id: " + eId + "was not found to delete.");
        }
    }
}
