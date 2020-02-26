package com.cts.training.model;

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
	
	private String choosestock;
	private String brief;
	private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getChoosestock() {
		return choosestock;
	}
	public void setChoosestock(String choosestock) {
		this.choosestock = choosestock;
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
		return "StockExchange [id=" + id + ", choosestock=" + choosestock + ", brief=" + brief + ", address=" + address
				+ "]";
	}
	public StockExchange(int id, String choosestock, String brief, String address) {
		super();
		this.id = id;
		this.choosestock = choosestock;
		this.brief = brief;
		this.address = address;
	}
	public StockExchange()
	{
	}
	

}
