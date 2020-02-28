package com.cts.training.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.dto.RegisterDTO;
import com.cts.training.model.Register;
import com.cts.training.repo.RegisterRepo;
import com.cts.training.service.RegisterService;

@CrossOrigin(origins="*")
@RestController
public class RegisterServiceController {
	
	@Autowired
	RegisterRepo rr;
	
	@Autowired
	JavaMailSender jms;
	
	@Autowired
	RegisterService rs;
	
	@RequestMapping(value="/register", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Register> findAll(){
		return rr.findAll();
	}
	@RequestMapping(value="/register/{id}", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public Register findone(@PathVariable int id){
		Optional<Register> reg = rr.findById(id);
		Register r = reg.get();
		return r;
	}

	/*
	 * @RequestMapping(value="/register", method= RequestMethod.POST) public
	 * Register save(@RequestBody Register reg){ Register register = rr.save(reg);
	 * try { SimpleMailMessage sm= new SimpleMailMessage();
	 * sm.setFrom("northremembers98@gmail.com");
	 * sm.setTo("northremembers98@gmail.com"); sm.setSubject("Testing mail"); sm.
	 * setText("Account created click on <a href='http://localhost:4200/activate?"
	 * +register.getEmail()+"'>Click</a>"); jms.send(sm);
	 * System.out.println("Sending mail...."); } catch(Exception ex) {
	 * ex.printStackTrace(); } return register; }
	 */
	@RequestMapping(value="/register/{id}", method= RequestMethod.DELETE)
	public void delete(@PathVariable int id){
		rr.deleteById(id);
	}
	@RequestMapping(value = "/register", method = RequestMethod.PUT)
	public Register update(@RequestBody Register reg) {
		Register register = rr.save(reg);
		return register;
	}
	
	@RequestMapping(value="/reg", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public String reg()
	{
		
		return "{\"reg\":\"ok\"}";
	}
	
	@PutMapping(value="/register/activate")
	public String updateEmail(@RequestBody String e)
	{
		String temp = e.split(":")[1];
		String email=temp.split("\"")[1];
		
		Register user = rr.findByEmail(email);
		if(user.getActive().equals("no")) {
			user.setActive("yes");
			rr.save(user);
			return "{\"result\":\"1\"}";
		}
		else
		return "{\"result\":\"0\"}";
		
	}
/*	
	@RequestMapping(value="/register", method=RequestMethod.POST)
	public ResponseEntity<RegisterDTO> save(@RequestBody RegisterDTO re)
	{
		rs.insert(re);
		return new ResponseEntity<RegisterDTO>(re, HttpStatus.CREATED);
		}
	*/
	
	@RequestMapping(value="/register", method=RequestMethod.POST)	
	public String save(@RequestBody RegisterDTO reg) {
		RegisterDTO user;
		String usermail;
		try {
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("northremembers98@gmail.com");
			sm.setTo(reg.getEmail());
			usermail=reg.getEmail();
			if(rr.findByEmail(usermail)!= null) {
				return "{\"res\":\"0\"}";
			}
			else {
				user=rs.insert(reg);
			sm.setSubject("testing mail...");
			sm.setText("Account created click on 'http://localhost:4200/activate?" + user.getEmail()
					+ "'");
			jms.send(sm);
//			sm.setText("Account created click on <a href='http://localhost:1111/registerUser/activate?'>Click</a>");
//			jms.send(sm);			
			System.out.println("sending mail...");
			return "{\"res\":\"1\"}";
		}
		}catch (Exception e) {
			e.printStackTrace();
			return "{\"res\":\"2\"}";
		}
	}
	
}
