package com.cts.training.userservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;

@Entity
@Table(name= "register_table") 
@Component
public class Register implements Serializable{

	private static final long serialVersionUID = -8087800141201379851L;
	@Id
	@GeneratedValue
	private int id;	
	private String username;
	private String email;
	private String password;
	private String confirmPassword;
	private long mobile;
	private String userType="ROLE_USER";
	
	private boolean active= false;
	
	@Override
	public String toString() {
		return "Register [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + ", confirmPassword="
				+ confirmPassword + ", mobile=" + mobile + "]";
	}



	public Register(int id, String username, String email, String password, String confirmPassword, long mobile,
			String userType, boolean active) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.mobile = mobile;
		this.userType = userType;
		this.active = active;
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
	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	public Register() {
		
	}
}
	