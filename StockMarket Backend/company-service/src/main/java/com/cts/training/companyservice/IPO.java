package com.cts.training.companyservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


public class IPO implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	int id;
	private String companyname;
	private String stockexchange;
	private int price;
	private int totalnoofshares;
	private String remarks;
	
	@Override
	public String toString() {
		return "IPO [id=" + id + ", companyname=" + companyname + ", stockexchange=" + stockexchange + ", price="
				+ price + ", totalnoofshares=" + totalnoofshares + ", remarks=" + remarks + "]";
	}


	public IPO(int id, String companyname, String stockexchange, int price, int totalnoofshares, String remarks) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.stockexchange = stockexchange;
		this.price = price;
		this.totalnoofshares = totalnoofshares;
		this.remarks = remarks;
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


	public IPO()
	{
	}
	
}

