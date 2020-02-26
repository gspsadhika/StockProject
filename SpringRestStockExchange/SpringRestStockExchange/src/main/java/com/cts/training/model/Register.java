package com.cts.training.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;

@Entity
@Table(name= "Register") 
@Component
public class Register implements Serializable{

	private static final long serialVersionUID = -8087800141201379851L;
	@Id
	@GeneratedValue
	private int id;

	private String email;
	private String password;
	private String confirmPassword;
	private long mobile;
	
	@Transient
	private String regStatus;
	private String active="no";
	
	
	public String getRegStatus() {
		return regStatus;
	}

	public void setRegStatus(String regStatus) {
		this.regStatus = regStatus;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Register [id=" + id + ", email=" + email + ", password=" + password + ", confirmPassword="
				+ confirmPassword + ", mobile=" + mobile + "]";
	}

	public Register(int id, String email, String password, String confirmPassword, long mobile) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.mobile = mobile;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public Register() {
		
	}
}
	