package com.cts.training.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.model.Company;
import com.cts.training.model.StockExchange;
import com.cts.training.repo.StockExchangeRepo;

@CrossOrigin(origins="*")
@RestController
public class StockExchangeServiceController {
	
	@Autowired
	StockExchangeRepo ser;
	
	@RequestMapping(value="/stockexchange", method=RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
	public List<StockExchange> findAll()
	{
		return ser.findAll();
	}
	
	@RequestMapping(value="/stockexchange/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public StockExchange findone(@PathVariable int id)
	{
		Optional<StockExchange> se= ser.findById(id);
		StockExchange stex= se.get();
		return stex;
	}
	
	@RequestMapping(value="/stockexchange", method=RequestMethod.POST)
	public StockExchange save(@RequestBody StockExchange se)
	{
		StockExchange stex1 = ser.save(se);
		return stex1;
	}
	
	@RequestMapping(value="/stockexchange/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable("id") int id)
	{
		ser.deleteById(id);
	}
	@RequestMapping(value="/update-stockexchange", method=RequestMethod.PUT)
	public StockExchange update(@RequestBody StockExchange se)
	{
		StockExchange stex1 = ser.save(se);
		return stex1;
	}
	

	
	

}
