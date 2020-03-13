package com.cts.training.companyservice;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

class CompanyControllerIntegrationTesting {

	@LocalServerPort
	private int port;
	HttpHeaders headers = new HttpHeaders();
	TestRestTemplate restTemplate = new TestRestTemplate();
	@Test
	void testit1() throws Exception {
		String url = "http://localhost:"+port+"/company/1";
		System.out.println("port :: " +url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<String>(null, headers);
	    ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
	    String expected = "{\"id\":1,\"companyname\":\"Pantaloons\"}";
	    System.out.println("Test1 :: Response body::" +response.getBody());
	    assertTrue(response.getBody().contains(expected));

}
	}
