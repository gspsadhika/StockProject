package com.cts.training.stockexchangeservice;

import java.util.List;


public interface StockExchangeService {
	public StockExchange addStockExchange(StockExchange stockexchange);
	public StockExchange updateStockExchange(StockExchange stockexchange);
	public void deleteStockExchange(int id);
	public StockExchange getStockExchangeById(int id);
	public List<StockExchange> getAllStockExchanges();
}
