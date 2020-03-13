package com.cts.training.sectorservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
@Entity
@Component
@Table(name="sectortable")
public class Sector {
	
	@GeneratedValue
	@Id
	private int id;
	private String brief;
	private String sectorname;
	
	public Sector(int id, String brief, String sectorname) {
		super();
		this.id = id;
		this.brief = brief;
		this.sectorname = sectorname;
	}
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
	public String getSectorname() {
		return sectorname;
	}
	public void setSectorname(String sectorname) {
		this.sectorname = sectorname;
	}
public Sector()
{
}
}
