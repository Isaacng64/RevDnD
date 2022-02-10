package com.revature.RDNDbackend.repository;



import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.RDNDbackend.model.Characters;


public interface CharacterRepository extends CrudRepository<Characters, Long> {

  //List<Characters> findByCharacterName(String name);

  Characters findById(long id);
  

  Characters save(Characters character);
  
  List<Characters> findAll();


}