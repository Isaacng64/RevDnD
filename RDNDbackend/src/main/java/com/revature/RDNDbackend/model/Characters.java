package com.revature.RDNDbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Setter;

@Data
@Setter
@Entity
@Table(name = "tbl_character")
@Component
public class Characters {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id; 
  private String name;
  private String race;
  private String gender;
  private String classs;
  private int level;
  private int strength;
  private String dexterity;
  private String constitution;
  private int curr_hp;
  private int max_hp;
  private int intelligence;
  private int wisdom;
  private int charisma;
  private int temp_hp;
  private Long equipment_id;
  private Long uid;
  private String[] skills;
  private int size;
  private int ac;
  private int speed;
  private int money;
  private int proficency;
  private Long treasure_id;
  
  
  
  
  
  
 
  
 
}