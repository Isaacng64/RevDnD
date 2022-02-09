package com.revature.RDNDbackend.controller.test;


import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.revature.RDNDbackend.controller.AuthController;
import com.revature.RDNDbackend.model.User;
import com.revature.RDNDbackend.payload.request.LoginRequest;
import com.revature.RDNDbackend.payload.request.SignupRequest;
import com.revature.RDNDbackend.payload.response.JwtResponse;
import com.revature.RDNDbackend.repository.RoleRepository;
import com.revature.RDNDbackend.repository.UserRepository;
import com.revature.RDNDbackend.security.jwt.JwtUtils;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@DataJpaTest
public class AuthControllerTest {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private EquipmentRepository equipmentRepository;
    
	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder = new BCryptPasswordEncoder();

	@Autowired
	JwtUtils jwtUtils;
	
	@BeforeAll
	public  void setup() 
	{
		
		List<User> uList = new ArrayList<User>();
		uList.add(new User("Test1","test1@mail.com" ,encoder.encode("Password1") ));
		uList.add(new User("Test2","test2@mail.com" ,encoder.encode("Password2") ));
		uList.add(new User("Test3","test3@mail.com" ,encoder.encode("Password3") ));
		System.out.println(uList);
		for(User i: uList)
		{
			userRepository.save(i);
		}
	}
	
	@Test
	public  void loginTest() {
		/*
		SessionFactory sf= new Configuration().configure().buildSessionFactory();
		Session session = sf.openSession();
		 session.beginTransaction();
		 */
		AuthController ac = new AuthController();
		LoginRequest l = new LoginRequest();
		l.setUsername("Test1");
		l.setPassword(encoder.encode("Password1"));
		ResponseEntity<?> re = ac.authenticateUser(l);
		JwtResponse j = (JwtResponse) re.getBody();
		System.out.println(re.getBody());
		Assert.assertEquals("test1@mail.com", j.getEmail());
		
		
	}
	

	@Test
	public  void updateTest()
	{
		SessionFactory sf= new Configuration().configure().buildSessionFactory();
		Session session = sf.openSession();
		 session.beginTransaction();
		AuthController ac = new AuthController();
		User u = new User("NewTest1", "newtest1@mail.com", "NewPass1");
		ac.update(u);
		Criteria cr = session.createCriteria(User.class);
		cr.add(Restrictions.eq("username","NewTest1"));
		List<User> results = cr.list();
		Assert.assertEquals(1, results.size());
		
	}
	@Test
	public  void RegisterTest()
	{
		AuthController ac = new AuthController();
		SignupRequest l = new SignupRequest();
		l.setUsername("Test4");
		l.setPassword("Password4");
		l.setEmail("test4@mail.com");
		ResponseEntity<?> re = ac.registerUser(l);
		
		System.out.println(re.getBody());
		Assert.assertEquals("User registered successfully!", re.getBody());
	}
}
