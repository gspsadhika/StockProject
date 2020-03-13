package com.cts.training.initialpublicofferingservice;

import java.util.List;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="*")
@RestController
public class IPOServiceController {
	@Autowired
	IPORepo ipoRepo;
	
	@Autowired
   IPOService ipoService;
	
	@GetMapping(value="/ipo",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllIpos()
	{
		List<IPO> list= ipoService.getAllIpos();
		if(list.size()>0)
		{
			return new ResponseEntity<List<IPO>>(list, HttpStatus.OK);
		} else {
		return new ResponseEntity<String>("No Ipo", HttpStatus.OK);		
	}
	}
		
	@PostMapping(value="/ipo")
	public ResponseEntity<?>addIpo(@RequestBody IPO ipo)	
	{
		IPO ip = ipoService.addIpo(ipo);
		return new ResponseEntity<IPO>(ip, HttpStatus.OK);
	}
	
	@DeleteMapping(value="/ipo/{id}")
	public ResponseEntity<?> deleteIpo(@PathVariable("id") int id)
	{
		ipoService.deleteIpo(id);
		return new ResponseEntity<IPO>(HttpStatus.OK);
	}
	
	@PutMapping(value="/update-ipo")
	public ResponseEntity<?> updateIpo(@RequestBody IPO ipo)
	{
		IPO ip= ipoService.updateIpo(ipo);
		return new ResponseEntity<IPO>(ip, HttpStatus.OK);
	}
	
	@GetMapping(value="ipo/{id}", produces="application/json")
	public ResponseEntity<?> getIpoById(@PathVariable("id") int id)
		{
			try
			{
				IPO ipo = ipoService.getIpoById(id);
				return new ResponseEntity<IPO>(ipo, HttpStatus.OK);
			}
			catch(NoSuchElementException e)
			{
				return new ResponseEntity<String>("No such IPO is found", HttpStatus.NOT_FOUND);
				
			}
		}
	


}
