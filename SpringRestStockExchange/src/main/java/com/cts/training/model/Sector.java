package com.cts.training.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name= "Sector") 
@Component
public class Sector {
	@Id
	@GeneratedValue
    private int id;	
	private String companyname;
	
	@Override
	public String toString() {
		return "Sector [id=" + id + ", companyname=" + companyname + "]";
	}
	public Sector() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Sector(int id, String companyname) {
		super();
		this.id = id;
		this.companyname = companyname;
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
	

}
