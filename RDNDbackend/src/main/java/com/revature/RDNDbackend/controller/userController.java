package com.revature.RDNDbackend.controller;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.RDNDbackend.User;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class userController {

	@GetMapping("/register")
	 public void register(@RequestParam("username") String username, @RequestParam("password") String password, 
			 @RequestParam("email") String email, @RequestParam("phone") String phone)
	 {
		System.out.println("Client connected!");
		
		 SessionFactory sf= new Configuration().configure().buildSessionFactory();
		Session session = sf.openSession();
		 session.beginTransaction();
		 User u = new User();
		 
		 u.setUsername(username);
		 u.setPassword(password);
		 u.setEmail(email);
		 u.setPhone(phone);
		 System.out.println(u);
		 session.save(u);
		 session.getTransaction().commit();
		 session.close();
		
	 }
	
	@PostMapping("/userupdate")
	public void update(@RequestBody User user)
	{
		System.out.println("Client connected!");
		SessionFactory sf= new Configuration().configure().buildSessionFactory();
		Session session = sf.openSession();
		 session.beginTransaction();
		 session.update(user);
		 System.out.println(user);
		 session.getTransaction().commit();
		 session.close();
		 
	}
}
