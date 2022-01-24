package com.revature.RDNDbackend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.hibernate.*;
import org.hibernate.cfg.*;
import org.springframework.web.bind.annotation.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class userController {

	@GetMapping("/register")
	 public void register(@RequestParam("id") int id, @RequestParam("username") String username, 
			 @RequestParam("password") String password, @RequestParam("email") String email, @RequestParam("phone") String phone)
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
	 }
}
