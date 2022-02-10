package com.revature.RDNDbackend.repository;

import com.revature.RDNDbackend.model.Equipment;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

public class EquipmentCustomRepositoryImpl implements EquipmentCustomRepository {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Equipment> findEquipmentByName(String name) {

        String sql = "SELECT e from Equipment e WHERE e.equipmentName=:name";
        final TypedQuery<Equipment> query = entityManager.createQuery(sql, Equipment.class);
        query.setParameter("name", name);

        return query.getResultList();
    }
}