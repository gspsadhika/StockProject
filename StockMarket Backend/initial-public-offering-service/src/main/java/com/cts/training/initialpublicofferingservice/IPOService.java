package com.cts.training.initialpublicofferingservice;

import java.util.List;

public interface IPOService {
	
	public IPO addIpo(IPO ipo);
	public IPO updateIpo(IPO ipo);
	public void deleteIpo(int id);
	public IPO getIpoById(int id);
	public List<IPO> getAllIpos();
		 

}
