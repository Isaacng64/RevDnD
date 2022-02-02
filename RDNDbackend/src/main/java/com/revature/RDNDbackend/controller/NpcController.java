package com.revature.RDNDbackend.controller;

import com.revature.RDNDbackend.exception.BadRequestException;
import com.revature.RDNDbackend.exception.ResourceNotFoundException;
import com.revature.RDNDbackend.model.Npc;
import com.revature.RDNDbackend.repository.NpcRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/rdnd")
public class NpcController {
    
    @Autowired
    private NpcRepository npcRepository;

    // to get all npcs
    // http://localhost:8080/rdnd/npcs/viewall
    @GetMapping("/npcs")
    public List<Npc> getAllNpc(){
        return npcRepository.findAll();
    }

    // to create an npc
    // http://localhost:8080/rdnd/npcs/create
    /* Body's JSON
        {
            "npcName": "Acid (vial)",
            "npcType": "Adventuring Gear",
            "npcPrice": 25,
            "hitBonus": 3,
            "damageBonus": 26,
            "npcProperties": "Combat, Damage, Utility",
            "npcQuantity": 1
        }
    */
    @PostMapping("/npcs")
    public ResponseEntity<Npc> createNpc(@RequestBody Npc npc) {
        return new ResponseEntity<Npc>(npcRepository.save(npc), HttpStatus.CREATED);
    }

    // to get equipment by id
    // http://localhost:8080/rdnd/npcs/1
    @GetMapping("/npcs/{id}")
    public Npc getNpcById(@PathVariable("id") Long npcId){
        Optional<Npc> npc = npcRepository.findById(npcId);

        if (npc.isPresent()) {
            return npc.get();
        } else {
            throw new ResourceNotFoundException("NPC with Id: " + npcId + " was not found.");
        }
    }

    // to update npc
    // http://localhost:8080/rdnd/npc/1
    @PutMapping("/npcs/{id}")
    public Npc updateNpc(@PathVariable("id") Long npcId,
                                     @RequestBody Npc npcDetails) {
        // check if npc exist in the database
        Npc npc = npcRepository.findById(npcId).orElseThrow(
                () -> new ResourceNotFoundException("Npc with Id: " + npcId + " was not found."));
    
        npc.setNpcName(npcDetails.getNpcName());
        npc.setNpcClass(npcDetails.getNpcClass());
        npc.setNpcSize(npcDetails.getNpcSize());
        npc.setNpcRace(npcDetails.getNpcRace());
        npc.setNpcAlignment(npcDetails.getNpcAlignment());
        npc.setNpcDiscription(npcDetails.getNpcDiscription());
        npc.setNpcSavingThrows(npcDetails.getNpcSavingThrows());
        npc.setNpcSkills(npcDetails.getNpcSkills());
        npc.setNpcSenses(npcDetails.getNpcSenses());
        npc.setNpcLanguages(npcDetails.getNpcLanguages());
        npc.setNpcSpecialTraits(npcDetails.getNpcSpecialTraits());
        npc.setNpcActions(npcDetails.getNpcActions());
        npc.setNpcReactions(npcDetails.getNpcReactions());
        npc.setNpcArmorClass(npcDetails.getNpcArmorClass());
        npc.setNpcHitPoint(npcDetails.getNpcHitPoint());
        npc.setNpcSpeed(npcDetails.getNpcSpeed());
        npc.setNpcStr(npcDetails.getNpcStr());
        npc.setNpcDex(npcDetails.getNpcDex());
        npc.setNpcCon(npcDetails.getNpcCon());
        npc.setNpcInt(npcDetails.getNpcInt());
        npc.setNpcWis(npcDetails.getNpcWis());
        npc.setNpcCon(npcDetails.getNpcWis());

        npcRepository.save(npc);
        return npc;
    }

    // to delete equipment
    // http://localhost:8080/rdnd/npc/1
    @DeleteMapping("/npcs/{id}")
    public boolean deleteNpc(@PathVariable("id") Long npcId) {
        try {
            npcRepository.deleteById(npcId);
            return true;
        } catch (Exception error) {
            throw new BadRequestException("The npc id: " + npcId + "was not found to delete.");
        }
    }
}
