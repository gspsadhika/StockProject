package com.cts.training.companyservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	CompanyRepo companyRepo;
	

	@Override
	public Company addCompany(Company company) {
		companyRepo.save(company);
		return company;
	}


	@Override
	public Company updateCompany(Company company) {
		companyRepo.save(company);
		return company;		
	}


	@Override
	public void deleteCompany(int id) {
	companyRepo.deleteById(id);
	}


	@Override
	public Company getCompanyById(int id) {
		Optional<Company> companies = companyRepo.findById(id);
		Company company = new Company();
		BeanUtils.copyProperties(companies.orElse(new Company()), company);
		return company;
	}


	@Override
	public List<Company> getAllCompanies() {
			List<Company> entities = companyRepo.findAll();
			List<Company> companies = new ArrayList<Company>();
			for(Company entity: entities) {
				Company company = new Company();
				BeanUtils.copyProperties(entity, company);
				companies.add(company);
			}
			System.out.println("Entity: "+entities);
			System.out.println("DTO: "+companies);
			return companies;
		}
	}

		