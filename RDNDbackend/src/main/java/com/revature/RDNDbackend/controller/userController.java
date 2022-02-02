package com.revature.RDNDbackend.controller;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration; 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Component;
import java.util.List;

import com.revature.RDNDbackend.User;
import com.revature.RDNDbackend.model.Characters;
import com.revature.RDNDbackend.repository.CharacterRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
@Component
public class userController {
	
	
	
private final CharacterRepository repository;

	  userController(CharacterRepository repository) {
	    this.repository = repository;
	 }


	@GetMapping("/register")
	 public void register(@RequestParam("username") String username, @RequestParam("password") String password, 
			 @RequestParam("email") String email, @RequestParam("phone") String phone)
	 {
		
		 SessionFactory sf= new Configuration().configure().buildSessionFactory();
		 Session session = sf.openSession();
		 session.beginTransaction();
		 User u = new User();
		 
		 u.setUsername(username);
		 u.setPassword(password);
		 u.setEmail(email);
		 u.setPhone(phone);
		
		 session.save(u);
		 session.getTransaction().commit();
		
		System.out.println("Client connected!");
		System.out.println(u);
	 }
	
	
	
	

	@RequestMapping("/welcome")
	public String hello() {
		
		return "Welcome go SpringBoot Web Services!!!";
	}
	
	
	 @GetMapping("/characters")
	public List<Characters> getCharacters(){
		
		return repository.findAll();
	}
	 
	 
	 @PostMapping("/character")
	 public Characters addCharacter(Characters character) {
		 
		 return repository.save(character);
	 }
	 
	 
	 
	 
	

}
