package com.cts.training.companyservice;


import java.util.List;


public interface CompanyService {
	public Company addCompany(Company company);
	public Company updateCompany(Company company);
	public void deleteCompany(int id);
	public Company getCompanyById(int id);
	public List<Company> getAllCompanies();
		 
}
