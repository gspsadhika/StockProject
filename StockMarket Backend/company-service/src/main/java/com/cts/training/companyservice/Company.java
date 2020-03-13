package com.cts.training.companyservice;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


@Entity
@Component
@Table(name="company")
public class Company {
	
	@GeneratedValue
	@Id
	int id;
	private String companyname;
	private String companyCode;
	private String ceo;
	private String bod;
	private String choosesector;	
	private int turnover;
	
	
	public Company(int id, String companyname, String companyCode,String ceo, String bod, int turnover, String choosesector) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.companyCode = companyCode;
		this.ceo = ceo;
		this.bod = bod;
		this.turnover = turnover;
		this.choosesector=choosesector;
	}
	public Company() {
			}
	
	
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBod() {
		return bod;
	}
	public void setBod(String bod) {
		this.bod = bod;
	}
	public int getTurnover() {
		return turnover;
	}
	public void setTurnover(int turnover) {
		this.turnover = turnover;
	}
	public String getChoosesector() {
		return choosesector;
	}
	public void setChoosesector(String choosesector) {
		this.choosesector = choosesector;
	}
	@Override
	public String toString() {
		return "Company [id=" + id + ", companyname=" + companyname + ", companyCode=" + companyCode + ", ceo=" + ceo + ", bod=" + bod
				+ ", choosesector=" + choosesector + ", turnover=" + turnover + "]";
	}
	
	
	
	

}
