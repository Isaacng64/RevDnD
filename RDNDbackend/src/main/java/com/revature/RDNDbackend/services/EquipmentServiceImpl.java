package com.revature.RDNDbackend.services;

import com.revature.RDNDbackend.exceptions.ResourceNotFoundException;
import com.revature.RDNDbackend.models.Equipment;
import com.revature.RDNDbackend.repositories.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    @Autowired
    EquipmentRepository equipmentRepository;

    public EquipmentServiceImpl(EquipmentRepository equipmentRepository) {
        super();
        this.equipmentRepository = equipmentRepository;
    }


    @Override
    public Equipment insertEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }


    @Override
    public List<Equipment> listAllEquipment() {
        return equipmentRepository.findAll();
    }


    @Override
    public Equipment listEquipmentByEquipmentId(long eId) {
        Optional<Equipment> equipment = equipmentRepository.findById(eId);

        if (equipment.isPresent()) {
            return equipment.get();
        } else {
            throw new ResourceNotFoundException("Customer with Id: " + eId + " was not found.");
        }
    }


    @Override
    public Equipment modifyEquipment(Equipment equipment, long eId) {
        return null;
    }


    @Override
    public boolean removeEquipment(long eId) {
        try {
            equipmentRepository.deleteById(eId);

            return true;
        } catch (Exception error) {
            System.out.println(error.getMessage());

            return false;
        }
    }
}
