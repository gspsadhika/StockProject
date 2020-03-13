package com.cts.training.companyservice;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class CompanyRestControllerTest {
	@Autowired
	private MockMvc mockmvc;
	@MockBean
	CompanyService companyService;
	
	@Test
	public void findall() throws Exception {
		Company company= new Company(1,"Cognizant", "Brian", "Brian", "", 85289, "IT");
		List<Company> companylist= new ArrayList<Company>();
		companylist.add(company);
		Mockito.when(companyService.getAllCompanies()).thenReturn(companylist);
		RequestBuilder request=MockMvcRequestBuilders
				.get("/company")
				.accept(MediaType.APPLICATION_JSON);
		MvcResult result= mockmvc.perform(request)
				.andReturn();
		String expected= "{\"id\":1, \"companyname\":\"Cognizant\",\"ceo\":\"Brian\",\"bod\":\"Brian\", \"turnover\":\"85289\", \"choosesector\":IT}";
		assertTrue(result.getResponse().getContentAsString().contains(expected));
		}

}

	