package com.cts.training.stockexchangeservice;

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
public class StockExchangeServiceController {
	
	@Autowired
	StockExchangeRepo stockexchangeRepo;
	
	@Autowired
	StockExchangeService stockexchangeService;
	
	@GetMapping(value="/stockexchange",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllStockExchanges(){
	  List<StockExchange> list = stockexchangeService.getAllStockExchanges();
	  if(list.size()>0) {
		  return  new ResponseEntity<List<StockExchange>>(list, HttpStatus.OK);
	  }
	  else {
		  return  new ResponseEntity<String>("No Stock Exchanges", HttpStatus.OK);
	  }
	}
			
	@PostMapping("/stockexchange")
	public ResponseEntity<?> addStockExchange(@RequestBody StockExchange stockexchange)	
	{
		StockExchange stockex = stockexchangeService.addStockExchange(stockexchange);
		return new ResponseEntity<StockExchange>(stockex, HttpStatus.OK);
	}
	
	@DeleteMapping("/stockexchange/{id}")
	public ResponseEntity<?> deleteStockExchange(@PathVariable("id") int id)
	{
		stockexchangeService.deleteStockExchange(id);
		return new ResponseEntity<StockExchange>(HttpStatus.OK);
	}
	
	@PutMapping("/update-stockexchange")
	public ResponseEntity<?> updateStockExchange(@RequestBody StockExchange stockexchange)
	{
		StockExchange stockex= stockexchangeService.updateStockExchange(stockexchange);
		return new ResponseEntity<StockExchange>(stockex, HttpStatus.OK);
	}
	
	
	@GetMapping(value="stockexchange/{id}", produces="application/json")
	public ResponseEntity<?> getStockExchangeById(@PathVariable("id") int id)
		{
			try
			{
				StockExchange stockexchange = stockexchangeService.getStockExchangeById(id);
				return new ResponseEntity<StockExchange>(stockexchange, HttpStatus.OK);
			}
			catch(NoSuchElementException e)
			{
				return new ResponseEntity<String>("No such stockexchange is found", HttpStatus.NOT_FOUND);
				
			}
		}

}
