package com.revature.RDNDbackend.services;

import com.revature.RDNDbackend.models.Equipment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EquipmentService {

    Equipment insertEquipment(Equipment equipment);

    List<Equipment> listAllEquipment();

    Equipment listEquipmentByEquipmentId(long eId);

    Equipment modifyEquipment(Equipment equipment, long eId);

    boolean removeEquipment(long eId);

}
