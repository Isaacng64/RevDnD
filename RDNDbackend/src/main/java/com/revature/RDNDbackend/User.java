package com.revature.RDNDbackend;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Setter;
import lombok.Data;

@Data
@Setter
@Entity
@Table(name = "tbl_user")
@Component
public class User {
	@Id 
	private int id;
	private String username;
	private String password;
	private String email;
	private String phone;
	
}
