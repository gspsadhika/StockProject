package com.cts.training.initialpublicofferingservice;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name="ipo")
public class IPO implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@GeneratedValue
	@Id
	int id;
	private String companyname;
	private String stockexchange;
	private int price;
	private int totalnoofshares;
	private LocalDateTime opendatetime;
	private String remarks;
	
	

	public IPO() {
	}


	@Override
	public String toString() {
		return "IPO [id=" + id + ", companyname=" + companyname + ", stockexchange=" + stockexchange + ", price="
				+ price + ", totalnoofshares=" + totalnoofshares + ", opendatetime=" + opendatetime + ", remarks="
				+ remarks + "]";
	}


	public LocalDateTime getOpendatetime() {
		return opendatetime;
	}


	public void setOpendatetime(LocalDateTime opendatetime) {
		this.opendatetime = opendatetime;
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


	public String getStockexchange() {
		return stockexchange;
	}


	public void setStockexchange(String stockexchange) {
		this.stockexchange = stockexchange;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public int getTotalnoofshares() {
		return totalnoofshares;
	}


	public void setTotalnoofshares(int totalnoofshares) {
		this.totalnoofshares = totalnoofshares;
	}


	public String getRemarks() {
		return remarks;
	}


	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}


	public IPO(int id, String companyname, String stockexchange, int price, int totalnoofshares,
			LocalDateTime opendatetime, String remarks) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.stockexchange = stockexchange;
		this.price = price;
		this.totalnoofshares = totalnoofshares;
		this.opendatetime = opendatetime;
		this.remarks = remarks;
	}


	
	
}

