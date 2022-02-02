package com.revature.RDNDbackend.repository;

import com.revature.RDNDbackend.model.Npc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NpcRepository extends JpaRepository<Npc, Long> {
}
