package com.revature.RDNDbackend.repositories;

import com.revature.RDNDbackend.models.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
}
