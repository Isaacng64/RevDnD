package com.revature.RDNDbackend;



import javax.persistence.Id;
import lombok.Setter;
import lombok.Data;
//import lombok.*;

@Data
@Setter
public class User {
	@Id 
	private int id;
	private String username;
	private String password;
	private String email;
	private String phone;
	
}
