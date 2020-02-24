package com.cts.training.model;

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
	private String ceo;
	private String bod;
	private int turnover;
	
	
	public Company(int id, String companyname, String ceo, String bod, int turnover) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.ceo = ceo;
		this.bod = bod;
		this.turnover = turnover;
	}
	public Company() {
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
	@Override
	public String toString() {
		return "Company [id=" + id + ", companyname=" + companyname + ", ceo=" + ceo + ", bod=" + bod + ", turnover="
				+ turnover + "]";
	}
	
	

}
