package com.cts.training.stockexchangeservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StockExchangeServiceImpl implements StockExchangeService{
	@Autowired
	StockExchangeRepo stockexchangeRepo;
	

	@Override
	public StockExchange addStockExchange(StockExchange stockexchange) {
		stockexchangeRepo.save(stockexchange);
		return stockexchange;
	}


	@Override
	public StockExchange updateStockExchange(StockExchange stockexchange) {
		stockexchangeRepo.save(stockexchange);
		return stockexchange;
	}


	@Override
	public StockExchange getStockExchangeById(int id) {
		Optional<StockExchange> stockexchanges= stockexchangeRepo.findById(id);
		StockExchange stockexchange = new StockExchange();
		BeanUtils.copyProperties(stockexchanges.orElse(new StockExchange()), stockexchange);
		return stockexchange;
	}


	@Override
	public List<StockExchange> getAllStockExchanges() {
			List<StockExchange> entities = stockexchangeRepo.findAll();
			List<StockExchange> stockexchanges = new ArrayList<StockExchange>();
			for(StockExchange entity: entities) {
				StockExchange stockexchange = new StockExchange();
				BeanUtils.copyProperties(entity, stockexchange);
				stockexchanges.add(stockexchange);
			}
			System.out.println("Entity: "+entities);
			System.out.println("DTO: "+stockexchanges);
			return stockexchanges;
		}


	@Override
	public void deleteStockExchange(int id) {
		stockexchangeRepo.deleteById(id);
		
	}
	

}
