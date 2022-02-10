package com.revature.RDNDbackend.models;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "equipment")
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long equipmentId;

    @Column(name = "equipment_name")
    private String equipmentName;

    @Column(name = "equipment_type")
    private String equipmentType;

    @Column(name = "equipment_price")
    private Integer equipmentPrice;

    @Column(name = "hit_bonus")
    private Integer hitBonus;

    @Column(name = "damage_bonus")
    private Integer damageBonus;

    @Column(name = "equipment_properties")
    private String[] equipmentProperties;

    @Column(name = "equipment_quantity")
    private Integer equipmentQuantity;

    public Equipment() {
        super();
    }

    public Equipment(String equipmentName, String equipmentType, Integer equipmentPrice, Integer hitBonus,
                     Integer damageBonus, String[] equipmentProperties, Integer equipmentQuantity) {
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.equipmentPrice = equipmentPrice;
        this.hitBonus = hitBonus;
        this.damageBonus = damageBonus;
        this.equipmentProperties = equipmentProperties;
        this.equipmentQuantity = equipmentQuantity;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public String getEquipmentType() {
        return equipmentType;
    }

    public void setEquipmentType(String equipmentType) {
        this.equipmentType = equipmentType;
    }

    public Integer getEquipmentPrice() {
        return equipmentPrice;
    }

    public void setEquipmentPrice(Integer equipmentPrice) {
        this.equipmentPrice = equipmentPrice;
    }

    public Integer getHitBonus() {
        return hitBonus;
    }

    public void setHitBonus(Integer hitBonus) {
        this.hitBonus = hitBonus;
    }

    public Integer getDamageBonus() {
        return damageBonus;
    }

    public void setDamageBonus(Integer damageBonus) {
        this.damageBonus = damageBonus;
    }

    public String[] getEquipmentProperties() {
        return equipmentProperties;
    }

    public void setEquipmentProperties(String[] equipmentProperties) {
        this.equipmentProperties = equipmentProperties;
    }

    public Integer getEquipmentQuantity() {
        return equipmentQuantity;
    }

    public void setEquipmentQuantity(Integer equipmentQuantity) {
        this.equipmentQuantity = equipmentQuantity;
    }

    @Override
    public String toString() {
        return "Equipment{" +
                "equipmentId=" + equipmentId +
                ", equipmentName='" + equipmentName + '\'' +
                ", equipmentType='" + equipmentType + '\'' +
                ", equipmentPrice=" + equipmentPrice +
                ", hitBonus=" + hitBonus +
                ", damageBonus=" + damageBonus +
                ", equipmentProperties=" + Arrays.toString(equipmentProperties) +
                ", equipmentQuantity=" + equipmentQuantity +
                '}';
    }
}
