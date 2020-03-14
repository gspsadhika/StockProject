package com.cts.training.stockexchangeservice;


import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
@Entity
@Component
@Table(name="stockexchange")

public class StockExchange implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	
	private String brief;
	private String choosestock;
	public String getChoosestock() {
		return choosestock;
	}
	public void setChoosestock(String choosestock) {
		this.choosestock = choosestock;
	}
	private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", brief=" + brief + ", choosestock=" + choosestock + ", address=" + address
				+ "]";
	}
	public StockExchange(int id,  String brief, String choosestock, String address) {
		super();
		this.id = id;
		this.brief = brief;
		this.choosestock=choosestock;
		this.address = address;
	}
	public StockExchange()
	{
	}
	

}
