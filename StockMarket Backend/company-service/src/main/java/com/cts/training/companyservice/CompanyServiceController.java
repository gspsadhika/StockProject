package com.cts.training.companyservice;

import java.util.List;
import java.util.NoSuchElementException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="*")
@RestController

public class CompanyServiceController  {
	
Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	CompanyRepo companyRepo;
	
	@Autowired
	CompanyService companyService;
	
	@Autowired
	IPOServiceProxy proxy;
	
	@GetMapping(value="/company",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllCompanies(){
	  List<Company> list = companyService.getAllCompanies();
	  if(list.size()>0) {
		  return  new ResponseEntity<List<Company>>(list, HttpStatus.OK);
	  }
	  else {
		  return  new ResponseEntity<String>("No Companies", HttpStatus.OK);
	  }
	}
		
	
	@PostMapping(value="/company")
	public ResponseEntity<?> addCompany(@RequestBody Company company){
		Company comp = companyService.addCompany(company);
		return new ResponseEntity<Company>(comp, HttpStatus.OK);
	}
	
	@DeleteMapping(value="/company/{id}")
	
	public ResponseEntity<?> deleteCompany(@PathVariable int id){
		companyService.deleteCompany(id);
		return new ResponseEntity<Company>(HttpStatus.OK);
	}
	
	@PutMapping(value="/update-company")
	public ResponseEntity<?> updateCompany(@RequestBody Company company) {
			Company comp = companyService.updateCompany(company);
			return new ResponseEntity<Company>(comp, HttpStatus.OK);
		}
	
	
	@GetMapping(value="company/{id}", produces="application/json")
	public ResponseEntity<?> getCompanyById(@PathVariable("id") int id)
		{
			try
			{
				Company company = companyService.getCompanyById(id);
				return new ResponseEntity<Company>(company, HttpStatus.OK);
			}
			catch(NoSuchElementException e)
			{
				return new ResponseEntity<String>("No such company is found", HttpStatus.NOT_FOUND);
				
			}
		}
	@GetMapping(value="ipos-by-company", produces="application/json")
	public List<IPO> getAllIpos()
	{   
		logger.info("Get all ipos...");
		List<IPO> ipo = proxy.findAll();
		logger.info("Information --> {}", ipo );
		return ipo;
	}
	
	

}
