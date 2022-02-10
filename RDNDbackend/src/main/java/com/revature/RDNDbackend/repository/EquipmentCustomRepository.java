package com.revature.RDNDbackend.repository;

import com.revature.RDNDbackend.model.Equipment;

import java.util.List;

public interface EquipmentCustomRepository {

    List<Equipment> findEquipmentByName(String name);

}
