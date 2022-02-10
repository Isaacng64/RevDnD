package com.revature.RDNDbackend.repository;

import com.revature.RDNDbackend.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipmentRepository extends JpaRepository<Equipment, Long>, EquipmentCustomRepository {
}
