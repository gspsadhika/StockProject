package com.cts.training.initialpublicofferingservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IPOServiceImpl implements IPOService {
	@Autowired
	IPORepo ipoRepo;
	

	@Override
	public IPO addIpo(IPO ipo) {
		ipoRepo.save(ipo);
		return ipo;
	}


	@Override
	public IPO updateIpo(IPO ipo) {
		ipoRepo.save(ipo);
		return ipo;
	}
	
	@Override
	public void deleteIpo(int id) {
		ipoRepo.deleteById(id);
	}
		
	@Override
	public IPO getIpoById(int id) {
		Optional<IPO> ipos = ipoRepo.findById(id);
		IPO ipo = new IPO();
		BeanUtils.copyProperties(ipos.orElse(new IPO()), ipo);
		return ipo;
	}


	@Override
	public List<IPO> getAllIpos() {

		List<IPO> entities = ipoRepo.findAll();
		List<IPO> ipos = new ArrayList<IPO>();
		for(IPO entity: entities) {
			IPO ipo = new IPO();
			BeanUtils.copyProperties(entity, ipo);
			ipos.add(ipo);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+ipos);
		return ipos;
	
	}


}



