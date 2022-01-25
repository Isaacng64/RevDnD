package com.revature.RDNDbackend;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Setter;
import lombok.Data;
//import lombok.*;

@Data
@Setter
@Entity
@Table(name = "tbl_user")
public class User {
	@Id 
	private int id;
	private String username;
	private String password;
	private String email;
	private String phone;
	
}
