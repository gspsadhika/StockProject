package com.cts.training.companyservice;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@FeignClient("netflix-zuul-api-gateway-server")
//@FeignClient("initial-public-offering-service")
//@FeignClient(name="", url="http://localhost:8001")

public interface IPOServiceProxy {
	@RequestMapping(value="/initial-public-offering-service/ipo", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<IPO> findAll();

}
